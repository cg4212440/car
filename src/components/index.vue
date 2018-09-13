<template>
  <div class="home_wrap" >
    
    <div class="cont" >
       <ul class="list" v-for="(item,index) in brand" :key="index">
          <p :id="index">{{index}}</p>
          <li v-for="(v,inde) in item" :key="inde" @click="getMakeList(v.MasterID)">
               <img v-lazy="v.CoverPhoto">
               <span>{{v.Name}}</span>
          </li>
       </ul>
        <div class="ops"  @touchstart="touchstart"
                          @touchmove="touchMove"
                          @touchend="touchend" >
              <span class="sh" v-for="(item,index) in letters" :key="index" :class="index==ins?'active':''"> {{item}}</span>
              <p class='text' v-show="flag"  >
                  {{this.text}}
              </p>
        </div>
      </div >
     <Cartype></Cartype>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Cartype from "../comm/cartype";
export default {
  data() {
    return {
      text: "",
      flag: false,
      ins: 0,
      flag2: false
    };
  },
  components: {
    Cartype
  },
  computed: {
    ...mapState({
      letters: state => state.app.letters,
      brand: state => state.app.brand,
      isShow: state => state.app.isShow
    })
  },
  methods: {
    ...mapActions({
      updata: "app/updata",
      getMakeList: "app/getMakeList"
    }),

    touchstart(e) {
      this.flag = !this.flag;
    },
    touchMove(e) {
      // 获取手指的位置
      let pageY = e.touches[0].pageY;
      let text = document.querySelector(".text");
      // 计算当前在拿一个字母
      let index = Math.floor((pageY - this.marginTop) / this.height);
      this.ins = index;
      //获取 定位Tops 的高度
      let tops = `${index * this.height}`;
      if (tops < 0) {
        tops = 0;
      } else if (tops > this.height * this.letters.length - this.height) {
        tops = this.height * this.letters.length - this.height;
      }

      //给定位Top  赋值
      text.style = "top:" + tops + "px";

      // 字母边界处理
      if (index < 0) {
        index = 0;
      } else if (index > this.letters.length - 1) {
        index = this.letters.length - 1;
      }
      // 查询id为当前字母的元素
      let ele = document.getElementById(this.letters[index]);
      this.text = ele.innerHTML;

      let top = ele.offsetTop;

      // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
      document.querySelector(".cont").scrollTop = top;
    },
    touchend() {
      this.flag = !this.flag;
    }
  },
  mounted() {
    this.updata();
    
  },
  updated() {
    // 获取每个字母的高度
    this.height = 0.4 * window.innerWidth / 750 * 100;
    // 获取字母列表距离顶部的高度
    this.marginTop =
      (window.innerHeight - this.letters.length * this.height) / 2;
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.cont {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
.home_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
ul {
  p {
    font-size: 0.28rem;
    line-height: 0.4rem;
    background: #f4f4f4;
    padding-left: 0.3rem;
    color: #aaa;
  }
  li {
    margin: 0 0.3rem;
    height: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }
  img {
    height: 0.8rem;
  }
  span {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }
}
.ops {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0.3rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.24rem;
  span {
    height: 0.4rem;
    font-weight: 600;
  }
}

.text {
  width: 0.6rem;
  height: 0.6rem;
  background: skyblue;
  position: fixed;
  top: 50%;
  left: -150%;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 50%;
  color: #fff;
  transform: translate(-50%, 0);
}
.active {
  color: skyblue;
}
</style>
