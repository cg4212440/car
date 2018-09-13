import { getDetail } from '../../api/api'
import { Indicator } from 'mint-ui';
let state={
    info: {},
    currentYear: '全部', // 当前选中的年份
    car_ids:''
  
};
 let getters={
     years(state) {
         if (!state.info.list) {
             return [];
         }
         let arr = state.info.list.map(item => {
             return item.market_attribute.year;
         })
         let set = new Set(arr);
         return ['全部', ...set];
     },
    
    list(state) {
        if (!state.info.list) {
            return []
        }
       state.info.list.map(item=>{
           return state.car_ids = item.car_id
            
        })
       
        // state.info.list.forEach(item=>{
        //     state.car_ids = item.car_id
        // })
        // console.log(state.car_ids)
        //
        if (!state.info.list) {
            return [];
        }
        // 把排量和吸气类型相同的数据做个合并
        function merge(arr) {
            let types = [];
            let obj = {};
           // console.log('arr..', arr);
            arr.forEach(item => {
                let type = item.exhaust_str + '/' + item.max_power_str + ' ' + item.inhale_type;
              
                if (types.indexOf(type) == -1) {
                    types.push(type);
                   // console.log('types',types)
                    obj[type] = [item];
                } else {
                    obj[type].push(item);
                }
            })
            //console.log(obj)
            return obj;
            
        }
      
        if (state.currentYear == '全部') {
            return merge(state.info.list)
        } else {
            return merge(state.info.list.filter(item => {
              //  console.log('item', item)
                return item.market_attribute.year == state.currentYear;
            }))
        }
      
    },
    
};
let mutations={
    // 改变年份
    changeYear(state, payload) {
        state.currentYear = payload;
    },
    getDetail(state, payload) {
        //车型排序\
       
        payload.list.sort((a,b)=>{
            if (b.market_attribute.year != a.market_attribute.year){
                return b.market_attribute.year - a.market_attribute.year
            }else {
                // 按照排量排序 升序
                if (b.exhaust_str > a.exhaust_str){
                    return -1
                } else if (b.exhaust_str < a.exhaust_str){
                    return 1
                }else{
                    // 按照功率排序 升序
                    if (b.max_power_str > a.max_power_str){
                        return -1
                    } else if (b.max_power_str < a.max_power_str){
                        return 1
                    } else {
                        // 按照指导价格排序 升序
                        if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min) {
                            return -1;
                        } else {
                            return 1
                        }
                    }
                }
            }
        })
    //    console.log(payload);
        state.info = payload;
        
    }
};
let actions={
    getDetail({ commit, state }, payload) {
        Indicator.open('加载中...');
        getDetail(payload).then(res => { 
            Indicator.close();
           // Indicator.close(); 
            commit('getDetail', res.data)
            
        })

    }
};

export default{
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}