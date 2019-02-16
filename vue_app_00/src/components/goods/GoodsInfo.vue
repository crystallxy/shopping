<template>
  <div class="app-goodsinfo">
  
  <!--轮播图-->
    <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in list" :key="item.goods">
            <img :src="item.img_url" />
        </mt-swipe-item>
     </mt-swipe>
    <!--详情-->
    
    <!--商品信息-->
    <div class="mui-card">
      <div class="mui-card-header">
          {{info.name}}
      </div>
     <div class="mui-card-content detail">
        {{info.detail}}
     </div>
      <div class="mui-card-content">
        <div class="mui-card-inner">
           <div class="price">
              <span class="now">￥{{info.price}}</span>
              <del>￥{{info.price+200}}</del>  
           </div>
           购买数量:
           	<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodsSub">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" v-model="val" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodsAdd">+</button>
				</div>
        </div>
      </div>
      <div  class="mui-card-footer">
        <mt-button type="primary" size="small" class="mui-btn-warning">立即购买</mt-button>
        <mt-button type="primary" size="small" class="mui-btn-warning" @click="addCart">加入购物车</mt-button>
      </div>      
    </div>
    <!--商品参数-->
    <div>
      
    </div>
  </div>  

</template>
<script> 
  import {Toast} from "mint-ui";
  //1:引入子组件
  import swipe from "../sub/swiper.vue";
  //2:引入mui 组件js文件
  //import mui from "../../lib/mui/js/mui.js";
  export default {
    components:{
      "swiper-box":swipe
    },
    created() {
      //console.log("list组件参数:"+this.id);
      this.getImageList();//轮播图
      this.getGoodsInfo();//商品信息
      //当组件对象创建成功后即可发送ajax请求
      this.MIX3Images();
    },
    
    methods:{
      MIX3Images(){
       //完成一个功能,获取服务器端轮播图片
       //1:发送ajax请求

       var url = "http://127.0.0.1:3000/MIX3Images";
       this.axios.get(url).then(result=>{
         this.list = result.data;
       })
       //2:获取返回数据保存list
     },
      getGoodsInfo(){
        //1:获取参数 id
        var id = this.id;
        //2:发送ajax请求获取商品信息
        var url = "http://127.0.0.1:3000/getProduct";
        url +="?id="+id;
        this.axios.get(url).then(result=>{
            this.info = result.data.data;
        });
      },
      addCart(){
        console.log(123);
        //1:获取参数 uid=1 pid count price
        var uid = 1;//当前登录用户
        var pid = this.id;//商品编号
        var count = this.val;//商品数量
        var price =  99;
        //2:发送ajax请求将数据发送服务器
        var url = "http://127.0.0.1:3000";
        url += "/addCart";
        this.axios.get(url,{
          params:{
            uid:uid,
            pid:pid,
            count:count,
            detail:detail,
            price:price
          }
        }).then(result=>{
            if(result.data.code > 0){
              Toast(result.data.msg);
            }else{
              Toast(result.data.msg);
            }
        });
      },
      goodsSub(){
        if(this.val > 1){
           this.val--;
        }
      },
      goodsAdd(){
        if(this.val <= 998){
            this.val++;
        }
      },
      getImageList(){
         var url = "http://127.0.0.1:3000/";
         url +="getImages";
         this.axios.get(url).then(result=>{
           this.list = result.data;
         });
         //console.log(this.list);?????
       } 
    },
    data(){

      return {
        id:this.$route.params.id,
        list:[],
        val:1,
        info:{}
      }
    },
  }  
  
</script>
<style>
/*轮播图设置父元素高度*/
.app-goodsinfo .mint-swipe{
  height:350px;
}
.app-goodsinfo .mint-swipe img{
  width:100%;
  height:350px;
}
.mui-card-inner .price .now{
  color:orange;
  font-size:24px;
}
.mui-card .detail{
  width:100%;
  height:40px;
  overflow:hidden;
}
</style>