import Vue from 'vue';
import Vuex from 'vuex';
import app from './app/app'
import detail from './app/detail'
import createlogger from 'vuex/dist/logger'
import getimage from './app/getimage'
import locations from './app/locations'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        app,
        detail,
        getimage,
        locations
    },
    plugins: [createlogger()]
})