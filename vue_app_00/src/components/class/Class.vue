<template>

  <div class="mui-content mui-row mui-fullscreen">
			<div class="mui-col-xs-3">
				<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
				</div>
			</div>
			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
				<div id="item1" class="mui-control-content mui-active">
				</div>
				<div id="item2" class="mui-control-content">
				</div>
				<div id="item3" class="mui-control-content">
				</div>
			</div>
		</div>
</template>
<style>
			.mui-row.mui-fullscreen>[class*="mui-col-"] {
				height: 100%;
			}
			.mui-col-xs-3,
			.mui-control-content {
				overflow-y: auto;
				height: 100%;
			}
			.mui-segmented-control .mui-control-item {
				line-height: 50px;
				width: 100%;
			}
			.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
				background-color: #fff;
			}
		</style>