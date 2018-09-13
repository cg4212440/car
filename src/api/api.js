const sendRequest = (url, method = 'GET', res = {}) => {
    if (/\?/.test(url)) {
        url += '&_=' + (+new Date());
    } else {
        url += '?_=' + (+new Date());
    }
    let params = { method }
    if (method == 'POST') {
        params.body = JSON.stringify(res)
    }
    return fetch(url, params).then(res => res.json())
}
const host = /localhost:8080/ig.test(window.location.host) ? 'https://baojia.chelun.com' :
    'https://baojia.chelun.com';
export let getBrandList = () => {
    return sendRequest(`${host}/v2-car-getMasterBrandList.html?_1535698551812`)
}
export let getMakeList = (id) => {
    return sendRequest(`${host}/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}
//获取详情页面数据
export let getDetail = (id) => {
    return sendRequest(`${host}/v2-car-getInfoAndListById.html?SerialID=${id}`)
}
//获取img图片

export let getImgList = (id, colorId, carId) => {
   
    let search = `SerialID=${id}`;
    if (colorId) {
        search += `&ColorID=${colorId}`;
    }
    if (carId) {
        search += `&CarID=${carId}`;
    }
    return sendRequest(`${host}/v2-car-getImageList.html?${search}`)
   
}
/**
 * 获取车系具体类型图片列表
 * @param id   车系id
 * @param imgId 图片类型id
 * @param colorId   颜色id(可选)
 * @param carId     车型id(可选)
 * @param page  当前页码
 * @param pageSize 每页列表数量
 * @return promise 返回一个promise
 */
export let getImgDetailList = (id, imgId, colorId, carId, page = 1, pageSize = 30) => {
    let search = `SerialID=${id}&ImageID=${imgId}&Page=${page}&PageSize=${pageSize}`;
    if (colorId) {
        search += `&ColorID=${colorId}`;
    }
    if (carId) {
        search += `&CarID=${carId}`;
    }
    return sendRequest(`${host}/v2-car-getCategoryImageList.html?${search}`)
}

/**
 * 获取车系颜色分类
 * @param id   车系id
 * @return promise 返回一个promise
 */
export let getColorList = (id) => {
    return sendRequest(`${host}/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}

/**
 * 获取城市列表(如果传省份id返回城市列表，如果不传返回省份列表)
 * @param provinceId   省份id
 * @return promise 返回一个promise
 */
export let getCityList = (provinceId) => {
    let search = ``;
    if (provinceId) {
        search += `provinceid=${provinceId}`;
    }
    return sendRequest(`${host}/v1-city-alllist.html?${search}`)
}

/**
 * 获取经销商列表
 * @param carId     车型id
 * @param cityId    城市id
 * @return promise 返回一个promise
 */
export let getDealerList = (carId, cityId) => {
    return sendRequest(`${host}/v2-dealer-alllist.html?carId=${carId}&cityId=201`)
}

/**
 * 询问报价
 * @param carId         车型id
 * @param mobile        用户手机号
 * @param dealerIds     经销商id列表
 * @param location      用户所在城市
 * @param carname       选择车型的名字
 * @param locationid    用户所在城市id
 * @param name          用户的姓名
 * @param openUDID      设备号
 * @param flag          默认值1
 * @param orderTypeId   默认值1
 * @param channelId     默认值0
 * @return promise      返回一个pomise
 */
export let submit = (info) => {
    let search = ``;
    for (let item in info) {
        search += `&${item}=${info[item]}`;
    }
    search[0] = '?'
    return sendRequest(`${host}/h2-submit-lowprice.html${search}`);
}
