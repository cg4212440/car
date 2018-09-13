<template>
   <div class="q">
       <header>
           <p>可向多个商家咨询最低价，商家及时回复</p>
            <img src="img/icon-help.png">
       </header> <!----> 
       <div class="content">
           <div data-hover="hover" class="q-info flex-row">
               <img src="http://img2.bitautoimg.com/autoalbum/files/20180802/883/0255378836_3.jpg"> 
               <div class="flex-column flex-centerX">
                   <p>奥迪A4L</p>
                   <p>2018款 30周年版 30 TFSI 进取版</p>
              </div>
          </div> 
          <div class="self-info">
              <p class="tip">个人信息</p> 
              <ul>
                  <li>
                      <span>姓名</span> 
                      <input type="text" placeholder="输入你的真实中文姓名" maxlength="4">
                 </li> 
                 <li>
                     <span>手机</span> 
                     <input type="tel" placeholder="输入你的真实手机号码" maxlength="11">
                </li> 
                <li @click="changeShow">
                    <span>城市</span> 
                    <span>{{title}}</span></li>
             </ul> 
             <div class="quotation">
                 <button data-hover="hover">询最低价</button>
            </div>
        </div> 
        <div class="dealer-info">
            <p class="tip">选择报价经销商</p>
             <ul>
                 <li data-hover="hover" data-id="100051064" class="active">
                     <p>
                         <span>北京安洋伟业</span> 
                         <span>23.42万</span>
                    </p>
                     <p>
                         <span>北京市大兴区黄村镇狼垡芦花路临52号</span>
                          <span>售本市</span>
                    </p>
                 </li>
             </ul>
        </div>
    </div>
    <Locations></Locations>
   </div>
</template>

<script>
import Locations from '../comm/locations.vue'
import {mapState} from 'vuex';
export default {
    computed: {
      ...mapState({
          title:state=>state.locations.title
      })  
    },
    components: {
        Locations
    },
    methods: {
        changeShow(){
            this.$store.commit('locations/changeShow')
        }
    }
}
</script>

<style lang="scss" scoped>
#app>div {
    width: 100%;
} 
.q{
    height: 100%;
    height: 100%;
   overflow: hidden;
}  
.q header {
    height: .6rem;
    line-height: .6rem;
    width: 100%;
    background: #79cd92;
    text-align: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    p {
    color: #fff;
    font-size: .3rem;
    display: inline-block;
}
img {
    width: .3rem;
    margin-left: .1rem;
    vertical-align: -9%;
}
}
.q .content {
    -webkit-box-flex: 1;
    flex: 1;
    width: 100%;
    height: 100%;
    margin-top: 0.4rem;
    background: #f4f4f4;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .q-info {
    background: #fff;
    padding: .32rem .18rem .24rem;
    position: relative;
    height: 2rem;
    box-sizing: border-box;
    display: flex;
    -webkit-box-direction: normal;
}
}
.q .q-info:before {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: .26rem;
    top: .9rem;
}
.q-info img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
}
.q-info div {
    margin-left: .2rem;
    width: 4.3rem;
}
.flex-centerX {
    -webkit-box-pack: center;
    justify-content: center;
}
.q-info div p:first-child {
    font-size: .36rem;
    line-height: 1;
}
.q-info div p:nth-child(2) {
    margin-top: .26rem;
    font-size: .32rem;
    line-height: 1.2;
    color: #333;
}
.q .content .tip {
    height: .5rem;
    line-height: .5rem;
    padding: 0 .2rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
}
.q .self-info ul {
    background: #fff;
    padding: 0 .2rem;
    li {
    font-size: .32rem;
    height: .88rem;
    line-height: .88rem;
    /* border-bottom: 1px solid #eee; */
    box-sizing: border-box;
    color: #000;
}
}
.q .self-info ul li input {
    font-size: .32rem;
    padding-right: .2rem;
    width: 88%;
    text-align: right;
    box-sizing: border-box;
    color: #555;
    outline: none;
    -webkit-appearance: none;
    border: none;
}
.q .self-info ul li span:nth-child(2) {
    display: inline-block;
    width: 88%;
    color: #555;
    text-align: right;
    box-sizing: border-box;
}
.q .self-info ul li span:nth-child(2):after {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 1px solid silver;
    border-right: 1px solid silver;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.q .self-info>div {
    background: #fff;
    text-align: center;
    padding-top: .3rem;
    padding-bottom: .28rem;
}
.quotation button {
    font-size: .32rem;
    color: #fff;
    width: 80%;
    background: #3aacff;
    height: .7rem;
    border-radius: .1rem;
   border:0;
}
.tip {
    padding: 0 .2rem;
    height: .6rem;
    line-height: .6rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
}
.q .dealer-info li {
    position: relative;
    padding: .26rem 0 .26rem .54rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.65rem;
}
.q .dealer-info li.active:before {
    background: #3aacff;
    border: none;
}
.q .dealer-info li:before {
    content: "";
    display: inline-block;
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    border: 2px solid #ccc;
    box-sizing: border-box;
    position: absolute;
    left: .05rem;
    top: 50%;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
}
.q .dealer-info li p:first-child {
    font-size: .3rem;
}
.q .dealer-info li p:first-child {
    font-size: .3rem;
}
.q .dealer-info li p:first-child span:last-child {
    font-size: .24rem;
    float: right;
    color: red;
}
.q .dealer-info li p:nth-child(2) {
    margin-top: .1rem;
    font-size: .24rem;
    color: #a2a2a2;
}
.q .dealer-info li p:nth-child(2) span:first-child {
    display: inline-block;
    max-width: 4.6rem;
    font-size: .24rem;
    color: #a2a2a2;
}
.q .dealer-info li p:nth-child(2) span:nth-child(2) {
    float: right;
    font-size: .24rem;
    color: #a2a2a2;
}
.q .dealer-info li.active:after {
    content: "";
    display: inline-block;
    padding-top: .17rem;
    padding-right: .1rem;
    border: 2px solid #fff;
    -webkit-transform: rotate(40deg) translate3d(0,-50%,0);
    transform: rotate(40deg) translate3d(0,-50%,0);
    position: absolute;
    left: .07rem;
    border-left: none;
    border-top: none;
    top: 47%;
}
.q .dealer-info ul {
    background: #fff;
    padding: 0 .18rem;
}
</style>

