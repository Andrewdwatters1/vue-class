import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loggedIn: false,
        list: [
            {
                id: 1,
                item: 'Get groceries'
            }
        ]
    },
    mutations: {
        login: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
        },
        addToList: function(state, inputVal) {
            let id; 
            state.list.length ? id = state.list[state.list.length - 1].id + 1 : id = 1;
            let newItem = {id, item: inputVal}
            state.list.push(newItem)
            inputVal = '';
        },
        removeItem: function(state, id) {
            let newList = state.list.filter(item => item.id !== id)
            state.list = newList;
        }
    }
})

export default store; 