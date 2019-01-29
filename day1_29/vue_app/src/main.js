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
import {Header,Swipe,SwipeItem} from 'mint-ui'
//4.注册Header组件 
//Header.name 就是字符串的mt-header
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//5.引入axios库
import axios from 'axios'
//6.配置跨域访问保存session
axios.defaults.withCredentials=true;
//7.将axios库配置Vue实例对象中
Vue.prototype.axios=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
