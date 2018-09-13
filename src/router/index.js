import Vue from 'vue'
import Router from 'vue-router'
import '../reset/reset.css';
//路由懒加载
const Index = () => import('../components/index');
const Detail = () => import('../components/Detail');
const GetImageList = () => import('../components/getImageList.vue')
const Login = () => import('../components/login.vue')
const Quotation =()=>import('../components/quotation.vue')

Vue.use(Router)

 let router =new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/Detail',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/getImageList',
      name: 'getImageList',
      component: GetImageList,
    },{
      path:'/login',
      name:'Login',
      component: Login
    },{
      path:"/quotation",
      name:'Quotation',
      component: Quotation
    }
   
  ]
})
router.beforeEach((to,from,next)=>{
  if (to.path == '/login' || window.sessionStorage.getItem('token')){
      next();
  }else{
    next('/login')
  }
  next()
})
export default router