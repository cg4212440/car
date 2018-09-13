import { getBrandList, getMakeList, getDetail } from '../../api/api'
import { Indicator } from 'mint-ui';
let state = {
    letters: [],
    brand: {},
    MakeList: [],
    brandId: '',
    isShow:false,
   
};
let mutations = {
    updata(state, payload) {
        payload.forEach(item => {
            let spell = item.Spelling[0];
            if (state.letters.indexOf(spell) != -1) {
                state.brand[spell].push(item)
            } else {
                state.letters.push(spell)
                state.brand[spell] = [item]
            }
        })
    },
    //获取侧边列表数据
    getMakeList(state, payload) {
        state.MakeList = payload.res;
        state.brandId = payload.id;
        state.isShow =true
    },
    //隐藏列表
    changes(state){
        state.isShow = false
    },
    //显示列表
    showMakelist(){
        state.isShow = true
    },
   
};
let actions = {
    
    updata({ commit }) {
        Indicator.open('加载中...');
        getBrandList().then(res => {
            Indicator.close();
            commit('updata', res.data)
        })  
    },
    //请求右侧列表数据
    getMakeList({ commit, state }, payload) {
        if (payload != state.brandId) {
            getMakeList(payload).then(res => {
                commit('getMakeList', {
                    res: res.data,
                    id: payload
                })
            })
        } else if (!state.isShow){
            commit('showMakelist')
        }
    },
  
}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}