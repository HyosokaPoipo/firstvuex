import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id:1, name: 'Poipo', registered: false},
            {id:2, name: 'Itachi', registered: false},
            {id:3, name: 'Hisoka', registered: false},
            {id:4, name: 'Nagato', registered: false},
            {id:5, name: 'Killua', registered: false},
            {id:6, name: 'Pitou', registered: false},
            {id:7, name: 'TutupBotol', registered: false}
        ]
    }
});