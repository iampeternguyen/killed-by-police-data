import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        kbpData: {
            y2018: [],
            y2017: [],
            y2016: [],
            y2015: [],
            y2014: [],
            y2013: []
        },
        rawData: [],
        selectedYear: "",
        year: 2018,
        dataKey: "y2018",
        loaded: false,
        stats: {
            y2018: [],
            y2017: [],
            y2016: [],
            y2015: [],
            y2014: [],
            y2013: []
        },
        selectedAll: false
    },
    getters: {

    },
    mutations: {
        setSelection(state, y) {


            if (y == "") {
                y = 2018;
            } else {
                var year = /\d{4}/gi.exec(y);
                y = year[0];
            }

            state.selectedYear = y;
            state.year = y;
            state.dataKey = "y" + y;

        },



        getRawData(state, y) {
            y ? state.selectedYear = y : state.selectedYear = "";



            //state.kbpData = [];
            var xhttp = new XMLHttpRequest();

            let year = () => {
                if (state.selectedYear == "") {
                    return 2018;
                } else {
                    year = /\d{4}/gi.exec(state.selectedYear);
                    return year[0];
                }
            }

            state.year = year();

            state.cData = state.kbpData[
                "y" + state.year
            ]
            if (state.kbpData["y" + state.year].length != 0) {
                console.log("Already retrieved data")
            } else {
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        // create array of rows
                        const regex = /\<tr\>/gi;
                        let rawData = this.responseText.split(regex);

                        // create array of columns
                        let data = [];
                        const td = /\<td\>/gi;
                        rawData.forEach(element => {
                            let array = element.split(td);
                            // save data that has the proper number of columns
                            if (array.length === 8) {
                                data.push(array);
                            }
                        });

                        // remove non-data headers
                        data.splice(0, 2);
                        console.log(data);
                        organizeData(data);
                    }
                };

                // CORS get data workaround
                let link = "https://cors-anywhere.herokuapp.com/http://www.killedbypolice.net/" +
                state.selectedYear;
                xhttp.open("GET", link, true);
                xhttp.send();
            }


            // organize data function
            function organizeData(data) {
                data.forEach(e => {
                    let size = checkSize(e);
                    if (size > 1) {
                        let x = separateData(e, size);
                        for (let m = 0; m < size; m++) {
                            let temp = [];
                            for (let j = 0; j <= 7; j++) {
                                temp.push(x[j][m]);
                            }
                            state.kbpData["y" + state.year].push(saveData(temp));
                        }
                    } else {
                        state.kbpData["y" + state.year].push(saveData(e));
                    }
                });

                function checkSize(e) {
                    // check to see if there is more than one person in row
                    let size = /<br>/gi.exec(e[1]);
                    if (size) {
                        return size.length + 1;
                    } else {
                        return 1;
                    }
                }
                function saveData(e) {
                    // get date information
                    let regex = /(?:<center>)*(?:\(.*\))*\s*([A-Z].*)/g;
                    let match = regex.exec(e[1]);
                    let date = match[1];

                    // organize state
                    let state = e[2];

                    // organize race and gender
                    let gender;
                    let race;

                    // check to see if cell has both race/gender info
                    match = e[3].split("/");
                    if (match.length === 2) {
                        gender = match[0];
                        race = match[1];
                    } else if (match.length === 1) {
                        match = match[0].replace(/\s*/g, "");
                        if (!match == "") {
                            gender = match;
                        }
                    }

                    // parse name age cell some cells also has photo link
                    let name;
                    let age;
                    let photo;
                    match = e[4].split(/[,\">]/g);
                    if (match.length === 2) {
                        name = match[0];
                        age = match[1].replace(/\s*/g, "");
                    } else if (match.length > 2) {
                        name = match[3];
                        photo = match[1];
                        if (match[4]) {
                            age = match[4].replace(/\s*/g, "");
                        }
                    } else {
                        regex = /(^[A-Z].*)/g;
                        match = regex.exec(match[0]);
                        if (match) {
                            name = match[0];
                        }
                    }

                    // clean up age
                    age = /\d*/.exec(age);
                    age = age[0];

                    // organize kill by data
                    let killedBy = [];

                    match = e[5].split(/[<>]/);

                    // some people killed by more than one reason
                    for (let i = 2; i <= match.length; i++) {
                        if (i % 2 == 0) {
                            killedBy.push(match[i]);
                        }
                    }

                    // get kbpLink
                    match = e[6].split('"'); ///<a.*? href=\"(.*?)\".*?<\/a>/g test this later
                    let kbpLink = match[1];

                    // get news link
                    match = e[7].split('"');
                    let newsLink = match[1];

                    // save data
                    return {
                        date,
                        state,
                        gender,
                        race,
                        name,
                        age,
                        photo,
                        killedBy,
                        kbpLink,
                        newsLink
                    };
                }

                function separateData(e, size) {
                    let temp;
                    for (let i = 0; i <= 7; i++) {
                        temp = e[i];

                        // some columns didn't duplicate data for each person in row
                        // this part duplicates that data

                        if (i == 0 || i == 2 || i == 5 || i == 6 || i == 7) {
                            e[i] = [];
                            for (let j = 0; j < size; j++) {
                                // data was not uniform, some cells have duplicate data others don't
                                // this part checks if there is duplicate information where none is expected and separates it
                                if (temp.search(/<br>/gi)) {
                                    temp = temp.split(/<br>/gi);
                                    temp = temp[0];
                                }
                                // rebuild the array with duplicate data
                                e[i].push(temp);
                            }
                        } else {
                            // separates the data that should have different information
                            e[i] = temp.split(/<br>/gi);
                        }
                    }

                    // rebuild an array for each person that was in one row
                    return e;
                }
            }
        }
    }
});