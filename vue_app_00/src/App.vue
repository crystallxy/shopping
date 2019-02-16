<!--App.vue-->
<template>
 <div class="app-container">
    <!--1:顶部搜索栏-->
    <mt-header title="小米商城" class="title">
    </mt-header>
    <!--2:router-view-->
    <router-view>
    </router-view>
    <!--3:tabbar-->
         	<nav class="mui-bar mui-bar-tab">
			<router-link to="/" class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/NewsList" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-list"></span>
				<span class="mui-tab-label">评论</span>
			</router-link>

			<router-link to="/ShopList" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
         <span class="mui-badge">1</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link to="/Setting" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">
        我的</span>
			</router-link>
		</nav>
 </div>
</template>


<style>
/*App.vue 顶部和底部导航栏*/
.app-container .title{
    background-color:orange;
}
.app-container .mint-searchbar-core{
    margin-top:14px;
    weight:100%;
    height:28px;
    background-color:#fff;
    border:1px solid #ddd;
}
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
