<template>
    <!-- 外层父元素 -->
    <div class="app-goodlist">
        <!-- 商品项目-->
        <div class="goods-item" v-for="item in list" :key="item.lid">
                                    <!--data-lid自定义属性，用来传递数据 item.lid-->
            <img  :src="'http://127.0.0.1:3000/'+item.md" @click="jumpInfo" :data-lid='item.lid'/>
            <h4>{{item.title}}</h4>
            <div class="info">
                <span class="now">{{item.price|handlePrice}}</span>  
            </div>
            <div class="sell">
                <span>热卖中</span>
            </div>
        </div> 
        <mt-button @click='getMore' type='primary' size='large'>加载更多...</mt-button>
    </div>
</template>
<script>
export default {
    data(){
      return {pno:0,pageSize:2,list:[]}
    },
    created() {
      this.getMore();
    },
    methods:{
        //e是事件对象
        jumpInfo(e){
            //e.target获得的就是触发事件的对象，就是那个标签
            // console.log(e.target);
            // item.lid(自定义属性获得)
            var pid=e.target.dataset.lid
            //跳转新闻详细组件----参数pid
            this.$router.push('/GoodInfo?pid='+pid);
        },
      getMore(){
        this.pno++;
        var url = "http://127.0.0.1:3000";
        url+="/products?pno="+this.pno
        url+="&pageSize="+this.pageSize;
        this.axios.get(url).then(result=>{
          var rows = this.list.concat(result.data.data);
          this.list = rows;
        })
      }
    }
   
}
</script>
<style>
    .app-goodlist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:4px;
    }
    .app-goodlist .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        min-height: 230px;
        justify-content: space-between;
    }
    .app-goodlist .goods-item img{
        width: 100%;
    }
    .app-goodlist .goods-item h4{
        font-size: 18px;
    }
    .app-goodlist .goods-item .now{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
</style>
