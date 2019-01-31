import Vue from 'vue'
import Vuex from 'vuex'
import axios from  'axios'
import Router from 'vue-router';

 Vue.use(Vuex)
 Vue.use(axios)

  Vue.use(Router)
export default new Vuex.Store({
    state:{
    characters=[],
    character='',
    
    },
    mutations: {
    setCharacters(state, characters)
    {
        state.characters=characters
    },
    setSelectedCharactre(state,character){
        state.character=character
    }
    },
    actions:{
        getCharactresList({ commit }){
            axios.get('http https://swapi.co/api/people').then((response)=>{
            commit('setCharacters',repsonse.data)
            })
        },

    }
})