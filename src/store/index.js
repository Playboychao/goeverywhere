import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'秦皇岛'
    },
    actions:{
        changeCity(ctx,city){
            console.log(123)
            ctx.commit('changeCity',city)
        }
    },
    mutations:{
        changeCity(state,city){
            state.city = city
        }
    }
})