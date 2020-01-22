<template>
	<view class="page-ranking-wraper">
		<view class="ranking-list-header" id="J_listHeader">
			<view class="ranking-type">
				<view @tap="rankTypeClick(0, 'male')" :class="rankTypeIndex === 0 ? 'active' : ''">男频</view>
				<view @tap="rankTypeClick(1, 'female')" :class="rankTypeIndex === 1 ? 'active' : ''">女频</view>
			</view>
		</view>
		<scroll-view class="ranking-box" :style="{ height: scrollHeight + 'px', width: width + 'px' }">
			<view class="box" id="male">
				<view class="rankingContent">
					<view class="nav_width" id="J_left_nav" :style="{ height: scrollHeight + 'px' }">
						<scroll-view class="left-nav" scrollY :style="{ height: scrollHeight + 'px' }">
							<block v-if="rankType === 'male'" v-for="(item, index) in male" :key="index">
								<view @tap="getRankBooksId(item,index)" :class="rankIndex === index ? 'active' : ''" v-if="!item.collapse">
									<i>{{ item.title }}</i>
								</view>
							</block>

							<block v-if="rankType === 'female'" v-for="(item, index) in female" :key="index">
								<view @tap="getRankBooksId(item,index)" :class="rankIndex === index ? 'active' : ''" v-if="!item.collapse">
									<i>{{ item.title }}</i>
								</view>
							</block>
						</scroll-view>
					</view>
					<scroll-view class="right-content" scrollY :style="{ height: scrollHeight + 'px', width: scrollWidth + 'px' }">
						<view class="c-booklist">
							<block v-for="(item, index) in bookList" :key="index">
								<navigator class="clearfix" :url="'../bookDetail/bookDetail?id=' + bookList[index]._id">
									<image alt="" class="cover" :src="item.cover + '?imageMogr2/thumbnail/100x140'"></image>
									<view class="right">
										<view class="name">
											<view>{{ item.title }}</view>
										</view>
										<view class="desc">{{ item.shortIntro }}</view>
										<view class="sku">
											<view class="popularity">
												<view class="c-red">{{ item.latelyFollower >= 10000 ? item.latelyFollower / 10000 + '万' : item.latelyFollower }}</view>
												<view>人气</view>
											</view>
											<view class="popularity">
												<view class="c-red">{{ item.retentionRatio * 1 }}%</view>
												<view>留存</view>
											</view>
										</view>
									</view>
								</navigator>
							</block>
						</view>
					</scroll-view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollHeight: 0,
			scrollWidth: 0,
			width: 0,
			rankType: 'male',
			rankTypeIndex: 0,
			rankIndex: 0,
			showCollapse: false,
			male: [],
			female: [],
			bookList: []
		};
	},
	onReady() {
		var that = this;
		var getSystemInfoSync = uni.getSystemInfoSync();
		uni.createSelectorQuery()
			.select('#J_listHeader')
			.boundingClientRect(function(t) {
				that.width = getSystemInfoSync.windowWidth;
				that.scrollHeight = getSystemInfoSync.windowHeight - t.height;
			})
			.exec();
		uni.createSelectorQuery()
			.select('#J_left_nav')
			.boundingClientRect(function(t) {
				console.log( t.width )
				that.scrollWidth = getSystemInfoSync.windowWidth - t.width;
				console.log(that.scrollWidth);
			})
			.exec();

		this.getRankingGender();
	},
	methods: {
		rankTypeClick(index, type) {
			this.rankTypeIndex = index;
			this.rankType = type;
			this.rankIndex = 0;
			this.showCollapse = false;
			this.bookList = [];
			if (type == 'male') {
				this.getRankingBooks(this.male[0].id);
			} else if (type == 'female') {
				this.getRankingBooks(this.female[0].id);
			}
		},
		async getRankingGender() {
			try {
				const res = await this.$Request.get('https://b.zhuishushenqi.com/v2/category/ranklist?node=8c31c6a912464c3e9de4cc6c2c8c402a');
				console.log(res);
				if (res.ok) {
					res.data.nodes.forEach((item, index) => {
						if (item.title == '男频') {
							this.male = item.nodes;
						}
						if (item.title == '女频') {
							this.female = item.nodes;
						}
					});
					this.getRankingBooks(this.male[0]['id']);
				}
			} catch (e) {
				console.log(e);
			}
		},
		async getRankingBooks(id) {
			console.log(id);
			uni.showLoading({
				title: '加载中'
			});
			try {
				const res = await this.$Request.get(`https://b.zhuishushenqi.com/category/rankinfo?ajax=ajax&size=100&st=1&node=${id}&token=&type=&packageName=`);
				uni.hideLoading();
				if (res.ok) {
					this.bookList = res.book;
				}
			} catch (e) {
				uni.hideLoading();
			}
		},
		getRankBooksId(item,index){
			if(this.rankIndex != index ){
				this.rankIndex = index;
				this.bookList = [];
				this.getRankingBooks(item.id)
			}
		}
	}
};
</script>

<style lang="less">
.page-ranking-wraper {
	width: 100%;
	height: 100%;
}

.page-ranking-wraper .ranking-list-header {
	width: 100%;
	height: 84rpx;
	padding: 0 30rpx;
}

.page-ranking-wraper .ranking-list-header .ranking-type {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	border-bottom: 1rpx solid #ebebeb;
	height: 100%;
}

.page-ranking-wraper .ranking-list-header .ranking-type view {
	position: relative;
	-webkit-box-flex: 1;
	flex: 1;
	line-height: 84rpx;
	color: #8a8a8f;
	font-size: 28rpx;
	text-align: center;
}

.page-ranking-wraper .ranking-list-header .ranking-type view:after {
	content: ' ';
	position: absolute;
	left: 50%;
	bottom: -2rpx;
	width: 60rpx;
	height: 3rpx;
	margin-left: -30rpx;
	background-color: transparent;
	border-radius: 4rpx;
	transition: all 0.2s ease;
}

.page-ranking-wraper .ranking-list-header .ranking-type view.active {
	color: #ee4745;
}

.page-ranking-wraper .ranking-list-header .ranking-type view.active:after {
	background-color: #ee4745;
}

.page-ranking-wraper .ranking-box {
	white-space: nowrap;
	overflow: hidden;
}

.page-ranking-wraper .ranking-box .box {
	display: inline-block;
	width: 100%;
}

.page-ranking-wraper .ranking-box .box .rankingContent {
	display: flex;
	width: 100%;
	height: 100%;
}

.page-ranking-wraper .left-nav {
	width: 160rpx;
	border-right: 1rpx solid #f0f0f0;
}

.page-ranking-wraper .left-nav view {
	position: relative;
	display: block;
	width: 100%;
	height: 104rpx;
	// padding: 0 22rpx 0 44rpx;
	text-align: center;
	transition: all 0.1s ease;
}

.nav_width {
	width: 180rpx;
}

.page-ranking-wraper .left-nav view i {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	height: 100%;
	border-bottom: 1px solid #f0f0f0;
	font-size: 30rpx;
	font-style: normal;
}

.page-ranking-wraper .left-nav view.active {
	background: rgba(240, 240, 245, 0.39);
}

.page-ranking-wraper .left-nav view.active:after {
	background: #ee4745;
}

.page-ranking-wraper .left-nav view:active {
	background: rgba(240, 240, 245, 0.39);
}

.page-ranking-wraper .left-nav view:after {
	content: ' ';
	position: absolute;
	width: 4rpx;
	height: 40rpx;
	left: 20rpx;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 2rpx;
}

.page-ranking-wraper .right-content {
	box-sizing: border-box;
}

.page-ranking-wraper .right-content .c-booklist .desc {
	white-space: pre-line;
}

.page-ranking-wraper .right-content .c-booklist .right .sku .popularity {
	max-width: 50%;
	width: 50%;
}

.page-ranking-wraper .right-content .c-booklist .right .sku .popularity .c-red {
	padding-right: 10rpx;
}
</style>
