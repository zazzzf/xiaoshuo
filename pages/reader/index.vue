<template>
	<view class="Box" style="">
		<!-- 网页背景开始 -->
		<view class="pagbg anmt" :style="{backgroundColor:pageBg}"></view>
		<!-- <view class="zhongMenu" @click="dianjile()"></view> -->
		<!-- 网页背景结束 -->
		<!-- 带返回键的导航栏开始 -->
		<view class="topBox anmt" :style="{color:fontColor,backgroundColor:menuBg,top:show?'0':'-150px'}">
			<view :style="{height:statusBarHeight}"></view>
			<view style="height: 40upx;"></view>
			<view style="height: 100upx;line-height: 100upx;text-overflow: ellipsis;" class="tMain">
				<image src="../../static/yueduBack.png" class="back" @click="back()"></image>
				<text style="font-size: 24upx;">({{section_title}})</text>
			</view>
		</view>
		<!-- 带返回键的导航栏结束 -->
		<!-- 菜单开始 -->
		<view class="bottomBox anmt" :style="{color:fontColor,backgroundColor:menuBg,bottom:show?'0':'-150px'}">
			<view style="overflow: hidden;">
				<view style="float: left;width: 50%;overflow: hidden;">
					<view style="float: left;width: 30%;line-height: 70upx;text-align: center;font-size: 24upx;">字体</view>
					<view style="float: left;width: 70%;height: 70upx;display: flex;align-content: center;justify-content: center;">
						<slider style="width: 100%;" :value="size" min="20" max="100" @changing="changeFontSize" @change="changeFontSize" :activeColor="fontColor" :backgroundColor="pageBg" :block-color="fontColor" block-size="20" />
					</view>
				</view>
				<view style="float: left;width: 50%;overflow: hidden;">
					<view style="float: left;width: 30%;line-height: 70upx;text-align: center;font-size: 24upx;">间距</view>
					<view style="float: left;width: 70%;height: 70upx;display: flex;align-content: center;justify-content: center;">
						<slider style="width: 100%;" :value="lineHeight" min="50" max="150" @changing="changeLineHeight" @change="changeLineHeight" :activeColor="fontColor" :backgroundColor="pageBg" :block-color="fontColor" block-size="20" />
					</view>
				</view>
			</view>
			<view style="overflow: hidden;">
				<view style="float: left;width: 15%;line-height: 100upx;text-align: center;font-size: 24upx;">背景</view>
				<view style="float: left;width: 85%;height: 100upx;display: flex;">
					<view class="sekuai" v-for="(item,index) in zhutiList" @tap="qiehuan(index)" :key="item.name" :style="{backgroundColor:item.pageBg,borderColor:dqzhuti==index?item.fontColor:'rgba(0,0,0,0)'}" v-if="index!=1&&index!=2"></view>
				</view>
			</view>
			<view style="width: 100%;display: flex;" class="ddd">
				<view @click="mulu()">
					<view><text class="tficon">&#xe671;</text></view>
					<view>目录</view>
				</view>
				<view @click="qiehuan(dqzhuti==1?0:1)">
					<view><text class="tficon">{{dqzhuti==1?'&#xe699;':'&#xe612;'}}</text></view>
					<view>{{dqzhuti==1?'白天':'夜间'}}</view>
				</view>
				<view @click="qiehuan(dqzhuti==2?0:2)" :style="dqzhuti==2?'color:green':''">
					<view><text class="tficon">&#xe639;</text></view>
					<view>护眼</view>
				</view>
			</view>
		</view>
		<!-- 菜单结束 -->
		<!-- 顶部开始 -->
		<view class="anmt" :style="{color:fontColor,lineHeight:statusBarHeight,backgroundColor:show?menuBg:pageBg,position:'fixed',top:'0',left:'0',zIndex:'6',width:'100%',fontSize:'3vw',zIndex:'20'}">
			<!-- 时间电量开始 -->
			<view :style="{height:statusBarHeight,padding: '0 5vw'}">
				<view style="float: left;letter-spacing:0">
					<text v-text="systemTime"></text>
				</view>
				<view style="float: right;letter-spacing:0;">
					<text class="iconfont icon-80dianliang" style="font-size: 5vw;position: relative;">
						<text class="dianxin" :style="{backgroundColor:show?menuBg:pageBg}">
							<text class="dLiang" :style="{backgroundColor:fontColor,width:battery+'%'}"></text>
						</text>
					</text>
				</view>
			</view>
			<!-- 时间电量结束 -->
			<!-- 书名章节开始 -->
			<view style="height: 40upx;line-height: 40upx;padding: 0 5vw;">
				<view style="float: left;width: 300upx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" v-text="shuming"></view>
				<view v-text="section_title" style="float: right;width: 300upx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align: right;"></view>
			</view>
			<!-- 书名章节结束 -->
		</view>
		<!-- 顶部结束 -->
		<!-- 小说正文开始 -->
		<scroll-view  scroll-y="true" scroll-top="scrollTop" @scrolltolower="nextBook" style="height:100vh;overflow-y: auto;">
			<view class="sview" @click="dianjile()" :style="{paddingTop:'calc('+statusBarHeight+' + 40px)',color:textColor,fontSize:forUpx(size)+'px',lineHeight:forUpx(lineHeight)+'px'}">
				<rich-text :nodes="content_text"></rich-text>
			</view>
		</scroll-view>
		<!-- 小说正文结束 -->
		<!-- 目录抽屉 -->
		<view class="chaptersBox" v-if="showChapters" :style="{backgroundColor:menuBg,paddingTop:'calc('+statusBarHeight+' + 80px)',color:textColor,fontSize:forUpx(size)+'px',lineHeight:forUpx(lineHeight)+'px'}">
			<view class="topBox anmt" :style="{color:fontColor,backgroundColor:menuBg,top:'0'}">
				<view :style="{height:statusBarHeight}"></view>
				<view style="height: 40upx;"></view>
				<view style="height: 100upx;line-height: 100upx;text-overflow: ellipsis;" class="tMain">
					<image src="../../static/yueduBack.png" class="back" @click="showChapters=false"></image>
					<text style="font-size: 24upx;">({{section_title}})</text>
				</view>
			</view>
			<uni-list>
				<uni-list-item :title="item.title.replace('正文 ','')" v-for="(item,index) in chapters" @click="checkChapter(item.link,index)" />
			</uni-list>
		</view>
	</view>
</template>
<script>
var interval,timeInter,dianliangInter;
import zhuti from '../../zhuti'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
export default{
	components:{uniList,uniListItem},
	data(){
		return{
			showChapters:false,
			section_title:'',//章节标题
			//正文
			content_text:'',
			show:false,//菜单display
			dqzhuti:0,//当前主题
			zhutiList:zhuti.data,//主题列表
			fontColor:'rgb(100,103,120)',//菜单字体颜色
			pageBg:'rgb(247,247,247)',//页面背景色
			menuBg:'#fff',//菜单背景色
			textColor:'#000',//富文本文字颜色
			statusBarHeight: '',
			Dindex:'',//当前章节索引
			shuming:'',//书名
			id:'',//本书ID
			battery:'',//电量
			systemTime:'',//系统时间
			size:uni.getStorageSync('fontsize')?uni.getStorageSync('fontsize'):40,//正文字体大小
			lineHeight:uni.getStorageSync('lineHeight')?uni.getStorageSync('lineHeight'):70,//正文行间距
			bookId:'',
			chapters:[]
		}
	},
	onUnload() {
		// 页面卸载的时候清除定时器
		clearInterval(timeInter)
		clearInterval(dianliangInter)
		uni.hideLoading();
		//页面卸载的时候将通知栏显示出来
		// #ifdef APP-PLUS
			plus.navigator.setFullscreen(false);
		// #endif
	},
	created() {
		var this_ = this;
		//获取状态栏高度给顶部占位节点
		// #ifdef APP-PLUS
			plus.navigator.setFullscreen(true);
		// #endif
		var zt = uni.getStorageSync('zhuti');//主题索引
		if(zt){
			this.dqzhuti = zt;
			this.fontColor=zhuti.data[zt].fontColor;//菜单字体颜色
			this.pageBg=zhuti.data[zt].pageBg;//页面背景色
			this.menuBg=zhuti.data[zt].menuBg;//菜单背景色
			this.textColor=zhuti.data[zt].textColor;//富文本文字颜色
		}else{
			this.dqzhuti = 0;
			this.fontColor=zhuti.data[0].fontColor;//菜单字体颜色
			this.pageBg=zhuti.data[0].pageBg;//页面背景色
			this.menuBg=zhuti.data[0].menuBg;//菜单背景色
			this.textColor=zhuti.data[0].textColor;//富文本文字颜色
		}
		uni.getSystemInfo({
			success: res=>{
				this.statusBarHeight = res.statusBarHeight + 'px';
			}
		})
	},
	onShow() {
		//页面显示的时候将通知栏隐藏掉
		// #ifdef APP-PLUS
			plus.navigator.setFullscreen(true);
		// #endif
		
	},
	onHide() {
		//页面隐藏的时候将通知栏显示出来
		// #ifdef APP-PLUS
			plus.navigator.setFullscreen(false);
		// #endif
	},
	onLoad(e) {
		const index = e.index //章节
		this.bookId = e.id  //书id
		this.shuming = e.bookName
		this.Dindex = e.index - 1
		this.getBookData(this.bookId,this.Dindex)
		
		// #ifdef APP-PLUS
			plus.navigator.setStatusBarStyle('dark');
			plus.navigator.setStatusBarBackground('#FF0000');
		// #endif
		this.dianliang();
		this.getTimes();
		//每分钟获取一次电量
		dianliangInter = setInterval(()=>{
			this.dianliang();
		},60000)
		//每秒获取一次时间
		timeInter = setInterval(()=>{
			this.getTimes();
		},1000)
		
		
	},
	methods:{
		nextBook(){
			this.Dindex += 1
			this.getBookData(this.bookId,this.Dindex)
		},
		async checkChapter(link,index){
			const res = await this.$Request.post(`/book/bookText`,{link})
			if(res.code == 200 && res.data.isVip == false){
				uni.hideLoading()
				this.Dindex = index
				this.section_title = res.data.title;
				this.content_text = res.data.title + '<br>' +res.data.cpContent +  '<br><br>';
				this.showChapters = false
			}else if(res.code == 200 && res.data.isVip == true){
				uni.hideLoading()
				uni.showToast({
					title:'书源为vip章节，无法获取',
					icon:"none"
				})
			}else{
				uni.hideLoading()
				uni.showToast({
					title:'获取错误',
					icon:"none"
				})
			}
		},
		async getBookData(bookId,index){
			uni.showLoading({
				title:'加载中'
			})
			const data = await this.$Request.get(`/book/bookGenuine/${bookId}`)
			const sourceId = data.data[0]._id
			const chapterData = await this.$Request.post(`/book/bookunCharpter`,{sourceId})
			this.chapters = chapterData.data.chapters
			const link = chapterData.data.chapters[index].link
			const res = await this.$Request.post(`/book/bookText`,{link})
			if(res.code == 200 && res.data.isVip == false){
				uni.hideLoading()
				this.section_title = res.data.title;
				this.content_text += res.data.title + '<br>' +res.data.cpContent +  '<br><br>';
				console.log(res)
			}else if(res.code == 200 && res.data.isVip == true){
				uni.hideLoading()
				uni.showToast({
					title:'书源为vip章节，无法获取',
					icon:"none"
				})
			}else{
				uni.hideLoading()
				uni.showToast({
					title:'获取错误',
					icon:"none"
				})
			}
		},
		
		//修改正文字体大小
		changeFontSize(e){
			this.size = e.detail.value;
			uni.setStorageSync('fontsize',e.detail.value);
		},
		//修改正文行间距
		changeLineHeight(e){
			this.lineHeight = e.detail.value;
			uni.setStorageSync('lineHeight',e.detail.value);
		},
		mulu(){
			this.showChapters=true
		},
		back(){
			uni.navigateBack({});
		},
		dianjile(){
			this.show=!this.show;
		},
		//切换主题
		qiehuan(e){
			this.fontColor=zhuti.data[e].fontColor;//菜单字体颜色
			this.pageBg=zhuti.data[e].pageBg;//页面背景色
			this.menuBg=zhuti.data[e].menuBg;//菜单背景色
			this.textColor=zhuti.data[e].textColor;//富文本文字颜色
			uni.setStorageSync('zhuti',e);
			this.dqzhuti=e;
		},
		//获取系统电量
		dianliang(){
			var this_ = this;
			if (uni.getSystemInfoSync().platform != 'ios'){
				var main = plus.android.runtimeMainActivity();
				var Intent = plus.android.importClass('android.content.Intent');  
				var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {  
				          onReceive: function(context, intent) {  
				        var action = intent.getAction();  
				        if (action == Intent.ACTION_BATTERY_CHANGED) {  
				            var level   = intent.getIntExtra("level", 0); //电量  
				            var voltage = intent.getIntExtra("voltage", 0); //电池电压  
				            var temperature = intent.getIntExtra("temperature", 0); //电池温度  
				                        //如需获取别的，在这里继续写，此代码只提供获取电量  
							this_.battery = level;
				        }  
				     }  
				 });  
				var IntentFilter = plus.android.importClass('android.content.IntentFilter');  
				var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);  
				main.registerReceiver(recevier, filter); 
			}else{
				var UIDevice = plus.ios.import("UIDevice");  
				var dev = UIDevice.currentDevice();  
				if (!dev.isBatteryMonitoringEnabled()) {  
				    dev.setBatteryMonitoringEnabled(true);  
				}  
				var level =dev.batteryLevel();
				this_.battery = level*100;
			}
		},
		getTimes(){
			var times = new Date();
			this.systemTime = (times.getHours()<10?'0'+times.getHours():times.getHours()) + ':' + (times.getMinutes()<10?'0'+times.getMinutes():times.getMinutes());
		},
		forUpx(e){
			return uni.upx2px(e)
		}
	}
}
</script>
<style>
	.chaptersBox{
		width: 100vw;
		height: 100vh;
		position: fixed;
		padding-top: 40upx;
		top: 0;
		left: 0;
		z-index: 999;
		overflow-y: auto;
		background: #fff;
	}
	@font-face {font-family: "iconfont";
	  src: url('../../font/dianliang.ttf') format('truetype');
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	.icon-80dianliang:before {
	  content: "\e617";
	}
	.pagbg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.zuizhong.active{
		opacity: 1;
		position: fixed;
		width: 100upx;
		text-align: center;
		font-size: 30upx;
		font-weight: bold;
		color: #ec706b;
		transform: translateX(50%) scale(0.7);
		right: 80upx;
		-webkit-transition: all 0.5s;
		z-index: 9
	}
	.zuizhong{
		opacity: 0;
		position: fixed;
		width: 100upx;
		text-align: center;
		font-size: 20upx;
		font-weight: bold;
		color: #ec706b;
		right: 80upx;
		transform: translateX(50%)  scale(0.1);
		-webkit-transition: all 0.5s;
		transition: all 0.5s;
		z-index: 9
	}
	.quanquan{
		-webkit-box-shadow: rgba(0,0,0,0.12) 0px 3px 13px 1px;
		box-shadow: rgba(0,0,0,0.12) 0px 3px 13px 1px;
		position: fixed;
		right: 70upx;
		z-index: 9;
		border-radius: 50%;
		overflow: hidden;
		transform: translateX(50%) scale(0.5);
	}
	.back{
		width: 40upx;
		height: 40upx;
		margin: 0 40upx;
	}
	.sview{
		width: calc(100% - 40upx);
		font-size: 45upx;
		line-height: 90upx;
		position: relative;
		text-indent:calc(2em + 12upx);
		margin: 0 auto;
		z-index: 5;
		white-space:normal;
		word-break:break-all;
		word-wrap:break-word;
		overflow: hidden;
		padding: 0 20upx 30upx;
	}
	.titlee{
		width: 100%;
		font-size: 45upx;
		line-height: 65upx;
		position: relative;
		z-index: 5;
		padding: 0 20upx 50upx;
		text-indent:-2.3em;
	}
	.tMain{
		display: flex;
		align-items:center;
	}
	page{
		letter-spacing:6upx;
	}
	.topBox{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		opacity: 1;
		z-index: 9;
	}
	.bottomBox{
		padding: 0 0 20upx 0;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		opacity: 1;
		z-index: 9;
	}
	.bottomBox .ddd>view{
		width: 100%;
		text-align: center;
		font-size: 24upx;
		line-height: 40upx;
	}
	.bottomBox .ddd image{
		width: 40upx;
		height: 40upx;
	}
	@font-face {font-family: "ydiconfont";
	  src: url('https://at.alicdn.com/t/font_1282539_9h0uwv1sxps.ttf') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	}
	.tficon{
		font-family: ydiconfont;
		font-size: 34upx;
	}
	.guanggao{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 6;
		width: 100%;
	}
	.dianxin{
		position: absolute;
		top: 32.5%;
		left: 11%;
		width: 72%;
		height: 35%;
	}
	.dLiang{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
	}
	.anmt{
		transition: all 0.5s;
	}
	.sekuai{
		width: 150upx;
		height: 100upx;
		background-color: #EC706B;
		border-radius: 12upx;
		border: 5upx solid #000;
		transform: scale(0.4);
		margin: -10upx -35upx 0;
	}
	.zhongMenu{
		top: 50%;
		position: fixed;
		left: 0;
		width: 100%;
		height: 50%;
		transform: translateY(-50%);
		z-index: 9;
	}
</style>
