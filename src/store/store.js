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
            y2018: {},
            y2017: {},
            y2016: {},
            y2015: {},
            y2014: {},
            y2013: {}
        },
        selectedAll: false,
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

        }
    }



});