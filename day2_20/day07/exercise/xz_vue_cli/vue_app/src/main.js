import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vue_app_00 main.js
// 0.1:先引入vuex
import Vuex from 'vuex'
//0.2注册vuex组件
Vue.use(Vuex);
//0.3创建store实例
var store =new Vuex.Store({
    state:{
        cartCount:0//共享数据  购物车中商品的数量有几个
    },//保存全局属性 
    mutations:{
        //购物车中数据加1   当点击商品详情[加入购物车]
        increment(state){
            state.cartCount++;
        },
        updateCount(state,count){
            state.cartCount=count;
        }
    },//保存操作全局数据的方法
    getters:{
        //获取购物车中数量多的方法
        optCartCount:function(state){
            return state.cartCount;
        }
    }//获取全局数据的方法
});


// 1.引入mint-ui的样式文件
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//2.引入mui样式文件
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//3.引入mint-ui组件 Header对象
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
//4.注册Header组件 
//Header.name 就是字符串的mt-header
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//5.引入axios库
import axios from 'axios'
//6.配置跨域访问保存session
axios.defaults.withCredentials=true;
//7.将axios库配置Vue实例对象中
Vue.prototype.axios=axios;
//7.1加载第三方模块 qs
import qs from 'qs';
//7.2配置qs模块，qs成为Vue属性
Vue.prototype.qs=qs;

//8.创建一个日期的过滤器
Vue.filter('datetimeFilter',function(val){
    //8.1创建一个日期对象
    var date=new Date(val);
    //8.2获取年 月  日 时 分 秒
    var y=date.getFullYear();// 年份
    var m=date.getMonth()+1;//0~11 月
    var d=date.getDate(); //日
    var h=date.getHours();//时
    var m=date.getMinutes();//分
    var s=date.getSeconds();//秒
    //8.2返回字符串 y-m-d h:m:s
    m<10&&(m='0'+m);
    d<10&&(d='0'+d);
    return `${y}-${m}-${d} ${h}:${m}:${s}`;

});
//9.创建一个日期年月日过滤器
Vue.filter('dateFilter',function(val){
    var date=new Date(val);
    var y=date.getFullYear();// 年份
    var m=date.getMonth()+1;//0~11 月
    var d=date.getDate(); //日
    m<10&&(m='0'+m);
    d<10&&(d='0'+d);
    return `${y}-${m}-${d}`;
});
new Vue({
  router,
  // 0.9将store对象添加到vue实例中成为一个属性
  render: h => h(App),
  store
}).$mount('#app')
//10.创建一个价格处理函数
Vue.filter('handlePrice',function(val){
    var price=parseInt(val).toFixed(2);
    return '¥'+price;
})
