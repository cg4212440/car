<template>
    <div :class="isShow?'locations actives':'locations'">
        <div class="locations-one">
            <div class="city-one">
                <p>自动定位</p>
                <p @click="goBack">北京</p>
            </div>
            <div class="city-two">
                <p>省市</p>
                <ul @click="getId">
                    <li v-for="(item,ind) in arr" :data-id="item.CityID" :key="ind">{{item.CityName}}</li>
                </ul>
            </div>
        </div>
        <div :class="flag?'locations-two rights':'locations-two'" @click="cityId">
            <div :class="flag?'getCitys ls':'ls'">
                <li v-for="(item,ind) in arrs" :key="ind" :data-id="item.CityID">{{item.CityName}}</li>
            </div>
        </div>
       
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "locations",
  data() {
    return {
      flag: false
    };
  },
  props: ["ids"],
  computed: {
    ...mapState({
      arr: state => state.locations.arr,
      arrs: state => state.locations.arrs,
      isShow: state => state.locations.isShow
    })
  },
  methods: {
    ...mapActions({
      bink: "locations/getCity"
    }),
    goBack() {
      this.$store.commit("locations/changeShow");
    },
    getId(e) {
      let ids = e.target.dataset.id;
      this.flag = true;
      this.$store.dispatch("locations/getCitys", ids);
    },
    cityId(e) {
      let mins = e.target.dataset.id;
      if(mins){
           this.$store.dispatch("imgs/getPrice", { carId: this.ids, cityId: mins });
      this.$store.commit("locations/changeShow", e.target.innerText);
      this.flag = false;
      }
     this.flag = false;
    }
  },
  mounted() {
    this.bink();
  }
};
</script>
<style>
.locations {
  width: 100%;
  height: 100%;

  z-index: 100;
  top: 0;
  position: fixed;
  background: white;
  transform: translate3d(0, 100%, 0);
  transition: all 0.3s linear;
}
.locations.actives {
  transform: translate3d(0, 0, 0);
  transition: all 0.3s linear;
  height: 100%;
}
.city-one {
  width: 100%;
  
}
.city-one p:first-child {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  background: #f4f4f4;
  margin: 0;
}
.city-one p:nth-child(2) {
  padding-left: 0.4rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  margin: 0;
}
.city-two p {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  background: #f4f4f4;
  margin: 0;
}
.city-two ul li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
  position: relative;
}
.city-two ul li:after {
  content: "";
  display: inline-block;
  padding-top: 0.16rem;
  padding-right: 0.16rem;
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 0.35rem;
  top: 0.3rem;
}
.locations-one {
  width: 100%;
  height: 100%  ;
 overflow-y: scroll;
}
.locations-two {
  position: fixed;
  left: 100%;
  height: 100%;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.ls {
  width: 70%;
  height: 100%;
  background: white;
  position: absolute;
  transform: translate3d(100%, 0, 0);
  transition: all 0.3s linear;
  right: 0;
}
.ls li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
}
.rights {
  left: 0;
}
.ls.getCitys {
  transform: translate3d(0, 0, 0);
  transition: all 0.3s linear;
}
.amins {
  overflow: hidden;
}
</style>