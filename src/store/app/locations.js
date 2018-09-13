let state={
    arr:[],
    isShow:false,
    arrs:[],
    title:"北京"
}

let mutations={
    getCity(state,payload){
        state.arr=payload;
    },
    getCitys(state,payload){
        state.arrs=payload;
        console.log(state.arrs)
    },
    changeShow(state,payload){
        state.isShow=!state.isShow;
        if(payload){
            state.title=payload;
        }
    }
}

let actions={
    getCity({commit}){
        fetch("https://baojia.chelun.com/v1-city-alllist.html?_1536652078710")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            commit("getCity",data.data)
        })
    },
    getCitys({commit},payload){
        fetch("https://baojia.chelun.com/v1-city-alllist.html?provinceid="+payload+"_1536652078710")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            commit("getCitys",data.data)
        })
    }
}

let getters={

}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}