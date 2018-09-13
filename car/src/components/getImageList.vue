<template>
    <div class="car_img">
        <div class="list">
            <p data-hover="hover"><span>颜色</span></p> 
            <p data-hover="hover"><span><em>车款</em></span></p>
        </div>
      
        <div class="odiv">
            <ul class="defaults" v-for="(item,ind) in setimg" :key="ind">
            <li v-for="(v,inde) in item.List" :key="inde">
                <img v-lazy="v.Url" alt="">    
               <div class="title" v-if="inde===0"> {{item.Name}}
                 <p>{{item.Count}}></p>
               </div>
               
            </li>
        </ul>
        </div>
       
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      //imgList:state=>state.getimage.imgList,
      setimg: state => state.getimage.setimg
    })
  },
  methods: {
     
  },
  mounted() {
    let id = window.localStorage.getItem("detailID");
    this.$store.dispatch("getimage/getImgList", Number(this.$route.query.id));

    // this.getImgList(this.$route.params.id)
  }
};
</script>

<style lang="scss" scoped>

.car_img {
  height: 100%;
  display: flex;
  flex-direction: column;
  .odiv{
  height: 100%;
   flex: 1;
   overflow-y: scroll;
}
  .list {
    width: 100%;
    height: 0.8rem;
    border-bottom: 0.2rem solid #eee;
    display: flex;
    align-items: center;
    p {
      flex: 1;
      text-align: center;
    }
  }
}
.defaults {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
  li{
      width: 33.0%;
      height: 2.4rem;;
      position: relative;
      margin-right: 0.3%;
       margin-top: 0.3%;
       img{
      width: 100%;
      height: 100%;
  }
  }
 .title{
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     color:#fff;
     background: rgba(56,90,130,.5);
         flex-direction: column;
 }
}
</style>
