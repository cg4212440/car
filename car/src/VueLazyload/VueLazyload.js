import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

//图片懒加载
export default Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './static/logo.png',
    loading: './static/loding.gif',
    attempt: 1,
    throttleWait:300,
})