<template>
     <div>
        <router-link :to="{path:'/getImageList', query:{id:info.SerialID}}" tag="p" class="imgs">
            <img v-lazy="info.CoverPhoto" alt="" >
            <div class="num">{{info.pic_group_count}}张图片</div>
        </router-link>
     
        <div class="info">
            <p>{{info.market_attribute && info.market_attribute.dealer_price}}</p>
            <p>指导价 {{info.market_attribute && info.market_attribute.official_refer_price}}</p> 
            <div class="action active flex-row">
                <button data-hover="hover" @click="quotation(info.list[0].car_id)" >{{info.BottomEntranceTitle}}</button></div></div>
                <li class="year">
                    <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
                </li>
        <section>
             <ul v-for="(item, index) in list" :key="index">
                <p>{{index}}</p>
                <li v-for="(value, key) in item" :key="key">
                    <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                    <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                    <p>
                        <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                        <span>{{value.market_attribute.official_refer_price}}</span>
                    </p>
                    <button @click="quotation">{{info.BottomEntranceTitle}}</button>
                </li>
            </ul>
            <div class="bottom flex-column flex-centerY" @click="quotation"><p class="dijia">询问底价</p> <p>本地经销商为你报价</p></div>
        </section>
       
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      id:''
    };
  },
  computed: {
    ...mapState({
      currentYear: state => state.detail.currentYear,
      info: state => state.detail.info,
      car_ids:state=>state.detail.car_ids
      
    }),
    ...mapGetters({
      list: "detail/list",
      years: "detail/years",
      
    }),

  },
  mounted() {
     
       window.localStorage.setItem('detailID',JSON.stringify(this.info.SerialID))
  },
  methods: {
    ...mapActions({
      getDetail: "detail/getDetail"
    }),
    ...mapMutations({
      changeYear: "detail/changeYear",
      // carid:'detail/car_id'
    }),
    quotation(id){
     
    this.$router.push({path:'/quotation', query:{id}})
    }
  },
  updated() {
    
  }
};
</script>

<style lang="scss" scoped>
.imgs {
  position: relative;
  height: 3.29rem;
  overflow: hidden;
  img {
    width: 100%;
    top: 50%;

    transform: translateY(-50%);
    position: absolute;
  }
}
li {
  list-style: none;
  span {
    padding-right: 0.46rem;
  }
}
.year {
  border-top: 0.15rem solid #f4f4f4;
  padding: 0 0.3rem;
  font-size: 0.32rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: #fff;
}
.year .active {
  color: #3aacff;
}
ul > p {
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.26rem;
  color: #999;
  background: #f4f4f4;
}
ul > li {
  padding: 0 0.2rem;
  border-bottom: 0.18rem solid #f4f4f4;
  overflow: hidden;
  p:nth-child(1) {
    padding: 0.26rem 0 0.18rem;
    font-size: 0.3rem;
    line-height: 1;
    color: #3d3d3d;
  }
  p:nth-child(2) {
    color: #bdbdbd;
    font-size: 0.26rem;
  }
  p:nth-child(3) {
    text-align: right;
    padding-bottom: 0.1rem;
    font-size: 0.24rem;
    color: #818181;
    span:nth-child(2) {
      font-size: 0.3rem;
      color: #ff2336;
      margin-left: 0.1rem;
    }
  }
}
ul > li:last-child {
  border-bottom: 0;
}
button {
  border: none;
  border-top: 1px solid #eee;
  width: 110%;
  height: 0.8rem;
  font-size: 0.32rem;
  color: #00afff;
  background: #fff;
  font-weight: 500;
  margin-left: -0.3rem;
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .dijia {
    font-size: 0.32rem;
    font-weight: 500;
  }
}
.info {
    padding: .36rem .2rem .3rem;
    background: #fff;
    position: relative;
  
}
  .info p:first-child {
    font-size: .36rem;
    color: red;
    font-weight: 500;
}
.info p {
    max-width: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info p:nth-child(2) {
    font-size: .26rem;
    color: silver;
}
.info p {
    max-width: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info .action {
    padding-top: .2rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: .1rem;
    top: .22rem;
}
.flex-column, .flex-row {
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
}
.flex-row {
    -webkit-box-orient: horizontal;
    flex-direction: row;
}
.info .action button:last-child {
    background: #00afff;
    color: #fff;
}
.info .action button {
    border-radius: .1rem;
    font-size: .32rem;
    height: .7rem;
    width: 3.45rem;
    border: none;
    box-sizing: border-box;
}
.num{
  position: absolute;
    bottom: .3rem;
    right: .3rem;
    color: #fff;
    padding: 1px .1rem;
    border-radius: .2rem;
    background: rgba(0,0,0,.6);
    font-size: .24rem;

}
</style>

