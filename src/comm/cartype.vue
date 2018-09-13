<template>
    <div :class="isShow?'car-type active':'car-type' "
                          @touchstart ="touchstart"
                          @touchmove ="touchmove"
                          @touchend ="touchend"
                          ref='cartype'>
       <ul v-for="(item,ind) in MakeList" :key="ind">  
          <p class="title">{{item.GroupName}}</p>
          <li v-for="(v,index) in item.GroupList" :key="index" @click="detail(v.SerialID)">
           
            <img v-lazy="v.Picture" alt="">
            <div class="_car">
              <p>{{v.AliasName}}</p>
              <span>{{v.DealerPrice}}</span>
            </div>
          </li>
       </ul>
   </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      MakeList: state => state.app.MakeList,
      isShow: state => state.app.isShow
    })
  },
  
  methods: {
    touchstart(e) {
      this.offsetX = 0;
      this.touch = e.touches[0].pageX;
    },
    touchmove(e) {
      this.offsetX = e.touches[0].pageX - this.touch;
      if (this.offsetX > 0) {
        this.$refs.cartype.style = `transform:translate3d(${this.offsetX }px,0,0)`;
      }
    },
    touchend(e) {
       this.$refs.cartype.style = ``;
      if (this.offsetX > 200) {
        this.$store.commit('app/changes')
      }else{
        this.$refs.cartype.style = `transform:translate3d(0%,0,0)`
      }
    },
    detail(id){
      
      this.$router.push({path:'/detail',query:{id:id}});
      this.$store.dispatch('detail/getDetail',id)
    }
  },
  mounted() {
  
  }
};
</script>

<style lang="scss" scoped>
.car-type {
  width: 75%;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 100;
  height: 100%;
  box-shadow: 0 0 0.5rem #eee;
  overflow-y: scroll;
  transform: translate3d(100%, 0, 0);
  transition: all 0.5s linear;
}
.car-type li {
  height: 1.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.title {
  margin-left: 1px;
  font-size: 0.28rem;
  line-height: 0.48rem;
  background: #f2f2f2;
  padding-left: 0.3rem;
  color: #717171;
}
.car-type li img {
  margin: 0 0.1rem 0 0.2rem;
  width: 1.8rem;
  height: 1.2rem;
}
._car {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 0.34rem;
    color: #5f687a;
  }
  span {
    margin-top: 0.1rem;
    font-size: 0.28rem;
    color: red;
  }
}
.car-type.active {
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s linear;
}
</style>
