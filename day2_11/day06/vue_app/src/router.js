import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Exam01 from './components/Exam01.vue'//引入组件
import List from './components/List.vue'
import Home from './components/tabbar/Home.vue'
import NewsList from './components/home/Newslist.vue'
import Goodslist from './components/goods/GoodList.vue'
import NewsInfo from './components/home/NewsInfo.vue'
import GoodInfo from './components/goods/GoodInfo.vue'
import Login from './components/home/Login.vue'
import ShopCart from './components/home/ShopCart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},//默认路由  redirect:重定向地址
    {path:'/Exam01',component:Exam01},
    {path:'/List',component:List},
    {path:'/Home',component:Home},
    {path:'/NewsList',component:NewsList},
    {path:'/Goodslist',component:Goodslist},
    {path:'/NewsInfo',component:NewsInfo},
    {path:'/GoodInfo',component:GoodInfo},
    {path:'/Login',component:Login},
    {path:'/ShopCart',component:ShopCart}
  ]
})
