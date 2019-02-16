<template>
  <div class="mui-content">
			<div class="title">
			</div>
			
			<ul class="mui-table-view">
			<li class="titlepic">
				<img class="userpic" src="../../img/1.jpg" alt="">
				<router-link to="/Login">请登录</router-link>
			</li>
			<li class="mui-table-view-cell">
					<a class="mui-navigate-right dingdan">
						我的订单
					</a>
				</li>
			<li class="ddbox">
				<img src="../../img/01.png" alt="">
				<img src="../../img/02.png" alt="">
				<img src="../../img/03.png" alt="">
				<img src="../../img/04.png" alt="">
			</li>
			<li class="ddbox">
				<div>待付款</div>
				<div>待收货</div>
				<div>待评价</div>
				<div>退换修</div>
				</li>
				<li class="mui-table-view-cell">
				<img src="../../img/title1.png" alt="">
					<a class="mui-navigate-right">
						会员中心
					</a>
				</li>
				<li class="mui-table-view-cell">
				<img src="../../img/title2.png" alt="">
					<a class="mui-navigate-right">
						服务中心
					</a>
				</li>
				<li class="mui-table-view-cell">
				<img src="../../img/title3.png" alt="">
					<a class="mui-navigate-right">
						小米之家
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
				<img src="../../img/title4.png" alt="">
					<a id="about" class="mui-navigate-right">
						设置
					</a>
				</li>
			</ul>
			<ul class="mui-table-view " style="margin-top: 25px;">
				<li style="text-align:center; padding:10px;">
					<a style="text-align:center;color: #FF3B30;">
						退出登录
					</a>
				</li>
			</ul>
		</div>
</template>
<style>
.mui-table-view .titlepic{

	display:flex;
	height:100px;
	align-items:center;
}
.mui-table-view .titlepic div{
	margin-left:20px;
}
.mui-table-view .titlepic .userpic{
	width:80px;
	height:80px;
}
.mui-table-view-cell .dingdan{
	font-size:14px;
	color:#aaa;
}
.mui-table-view .ddbox{
	display:flex;
	justify-content:space-around;
	font-size:14px;
	color:#aaa;
	margin-bottom:20px;
}
.mui-table-view-cell{
	display:flex;
}
.mui-table-view-cell img{
	height:25px;
}
</style>