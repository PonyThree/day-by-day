import Vue from 'vue'
import App from './App.vue'
import router from './router'


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
  render: h => h(App)
}).$mount('#app')
