<template>
  <div class="app-home">
     <!--第一个：顶部导航条 学子商城-->
    <mt-search class="search"></mt-search>
     <!--第二个：轮播图-->
     <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img_url" />
        </mt-swipe-item>
     </mt-swipe>
     <!--第三个：九宫格-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/NewsList">
		            <img src="../../img/menu1.png" />
		            <div class="mui-media-body">
                 新品发布</div>
                 </router-link>
                </li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/GoodsList">
                        <img src="../../img/menu2.png" />
		                    <div class="mui-media-body">
                        每日甄选</div>
                 </router-link>
                 </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/ShopList">
		                    <img src="../../img/menu3.png" />
		                    <div class="mui-media-body">
                        购物车</div>
                 </router-link>
                 </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">
                        以旧换新</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">真心想要</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu6.png" />
		                    <div class="mui-media-body">米粉卡</div></a></li>
		        </ul>
           <!--精选--> 
          <div class="good-select">
          <img src="../../img/pic1.png" alt="">
          <img src="../../img/pic2.png" alt="">
          <img src="../../img/pic3.png" alt="">
          </div>
          
     <!--第四个：底部导航栏tabbar-->
  </div>  
</template>
<script>
 export default {
   created() {
      //当组件对象创建成功后即可发送ajax请求
      this.getImages();
   },
   methods:{
     getImages(){
       //完成一个功能,获取服务器端轮播图片
       //1:发送ajax请求
       var url = "http://127.0.0.1:3000/getImages";
       this.axios.get(url).then(result=>{
         this.list = result.data;
       })
       //2:获取返回数据保存list
     }
   },
   data(){
     return {
       list:[]
     }
   }
 }  
</script>
<style>
.app-home .search{
   width:100%;
   height:44px;
}
.app-home .mint-searchbar{
    background-color:#fff;
}
/*轮播图设置父元素高度*/
.app-home .mint-swipe{
  height:200px;
}
.app-home .mint-swipe img{
  width:100%;
  height:200px;
}
/*九宫格 图片大小 dpr 2*/
.app-home .mui-grid-9 img{
  width:50px;
  height:50px;
}
/*九宫格  背景白色*/
.app-home .mui-grid-view.mui-grid-9{
  background-color:#fff;
}
.app-home .mui-grid-view.mui-grid-9 li{
  border:0;
}
.mui-table-view-cell .mui-media-body{
  color:#bbb!important;
}
.good-select{
  width:375px;
  height:350px;
  
}
.good-select :first-child{
   height:300px;
   width:186px;
   display:block;
}
.good-select img{
  width:187px;
  height:150px;
  display:block;
  float:left;
}
</style>
