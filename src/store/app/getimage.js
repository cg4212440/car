import { getImgList } from '../../api/api'
import { Indicator } from 'mint-ui';
let state={
    imgList:{},
    setimg:[]
};
let mutations={
    getImgList(state,payload){
        
        state.imgList = payload
       
    },
    setImg(state,payload){
        let arr=[];
        let obj={};
        let reg = /(\{)([\d])(\})/g;
        payload.forEach(item=>{
            item.List.forEach(item=>{
                item.Url = item.Url.replace(reg, (a, b, c) => {
                    return item.LowSize
                   
                 })
                
            })
           
        })
        state.setimg = payload;
        
    }
};
let actions={
    //获取img数据
    getImgList({commit},payload){
        Indicator.open('加载中...');
        getImgList(payload).then(res=>{
            Indicator.close();
            commit('getImgList',res.data)
            commit('setImg', res.data)
        })
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}