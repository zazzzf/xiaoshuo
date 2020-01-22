<template>
	<view class="page-category-wraper">

		<scroll-view class="right-content" :scrollTop="scrollTop" scrollWithAnimation scrollY :style="{ height: scrollHeight + 'px' }">
			<view class="cetegory-section" data-type="male">
				<view class="title"><i>男生</i></view>
				<view class="inner">
					<block v-for="(item, index) in category.male" :key="index">
						<navigator class="category-item" hoverClass="hover-category" :url="'./categoryDetail?gender=male&major=' + item.name">
							<view class="name">{{ item.name }}</view>
							<view class="count">{{ item.bookCount }} 本</view>
							<view class="covers">
								<view><image :src="cdn + item.bookCover[0] + '?imageMogr2/thumbnail/148x204'"></image></view>
								<view><image :src="cdn + item.bookCover[1] + '?imageMogr2/thumbnail/148x204'"></image></view>
								<view><image :src="cdn + item.bookCover[2] + '?imageMogr2/thumbnail/148x204'"></image></view>
							</view>
						</navigator>
					</block>
				</view>
			</view>
			<view class="cetegory-section" data-type="female">
				<view class="title"><i>女生</i></view>
				<view class="inner">
					<block v-for="(item, index) in category.female" :key="index">
						<navigator class="category-item" hoverClass="hover-category" :url="'.categoryDetail/index?gender=male&major=' + item.name">
							<view class="name">{{ item.name }}</view>
							<view class="count">{{ item.bookCount }} 本</view>
							<view class="covers">
								<view><image :src="cdn + item.bookCover[0] + '?imageMogr2/thumbnail/148x204'"></image></view>
								<view><image :src="cdn + item.bookCover[1] + '?imageMogr2/thumbnail/148x204'"></image></view>
								<view><image :src="cdn + item.bookCover[2] + '?imageMogr2/thumbnail/148x204'"></image></view>
							</view>
						</navigator>
					</block>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cdn: 'http://statics.zhuishushenqi.com',
			category: {},
			scrollHeight: 0,
			scrollTop: 0,
			categoryIndex: 0
		};
	},
	onLoad() {
		this.scrollHeight = uni.getSystemInfoSync().windowHeight;
		this.getCategory();
	},
	methods: {
		async getCategory() {
			uni.showLoading({
				title: '加载中'
			});
			try {
				const res = await this.$Request.get('https://b.zhuishushenqi.com/category/statics');
				uni.hideLoading();
				if (res.ok) {
					this.category = res;
				}
			} catch (e) {
				uni.hideLoading();
			}
		},
		chooseType(index, type) {
			var scrollTop = 0;
			uni.createSelectorQuery()
				.selectAll('.cetegory-section')
				.boundingClientRect(function(t) {
					for (var c = 0; c < index + 1 - 1; c++) {
						scrollTop += t[c].height;
					}
					this.scrollTop = scrollTop;
					this.categoryIndex = index - 1;
				})
				.exec();
		}
	}
};
</script>

<style>
.page-category-wraper {
	display: flex;
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding-bottom: 50rpx;
}

.page-category-wraper .left-nav {
	width: 136rpx;
	height: 100%;
	border-right: 1rpx solid #f0f0f0;
}

.page-category-wraper .left-nav view {
	position: relative;
	display: block;
	width: 100%;
	height: 104rpx;
	text-align: center;
	transition: all 0.1s ease;
}

.page-category-wraper .left-nav view i {
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

.page-category-wraper .left-nav view.active {
	background: rgba(240, 240, 245, 0.39);
}

.page-category-wraper .left-nav view.active:after {
	background: #ee4745;
}

.page-category-wraper .left-nav view:active {
	background: rgba(240, 240, 245, 0.39);
}

.page-category-wraper .left-nav view:after {
	content: ' ';
	position: absolute;
	width: 4rpx;
	height: 40rpx;
	left: 20rpx;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 2rpx;
}

.page-category-wraper .right-content {
	flex: 1;
}

.page-category-wraper .right-content .cetegory-section {
	width: 100%;
	padding: 40rpx 16rpx;
}

.page-category-wraper .right-content .cetegory-section:last-of-type {
	width: 100%;
	padding: 40rpx 16rpx 300rpx 16rpx;
}

.page-category-wraper .right-content .cetegory-section .title {
	height: 20rpx;
	text-align: center;
	border-bottom: 1rpx solid #f0f0f5;
	margin-bottom: 20rpx;
}

.page-category-wraper .right-content .cetegory-section .title i {
	position: relative;
	display: inline-block;
	width: 140rpx;
	height: 38rpx;
	line-height: 38rpx;
	background: #fff;
	text-align: center;
	color: #d6d5db;
	font-size: 30rpx;
}

.page-category-wraper .right-content .cetegory-section .title i:before {
	content: ' ';
	position: absolute;
	width: 10rpx;
	height: 10rpx;
	left: 50%;
	margin-left: -50rpx;
	margin-top: 19rpx;
	transform: translateY(-50%);
	background: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png') center center no-repeat;
	background-size: cover;
	overflow: hidden;
}

.page-category-wraper .right-content .cetegory-section .title i:after {
	content: ' ';
	position: absolute;
	width: 10rpx;
	height: 10rpx;
	right: 50%;
	margin-right: -50rpx;
	margin-top: 19rpx;
	transform: translateY(-50%);
	background: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png') center center no-repeat;
	background-size: cover;
	overflow: hidden;
}

.page-category-wraper .right-content .cetegory-section .title:after {
	position: absolute;
}

.page-category-wraper .right-content .cetegory-section .inner {
	font-size: 0px;
}

.page-category-wraper .right-content .cetegory-section .inner navigator {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	width: 48%;
	height: 120rpx;
	padding: 28rpx 24rpx;
	margin: 28rpx 2% 0 0;
	background: rgba(240, 240, 245, 0.39);
	border-radius: 2rpx;
}

.page-category-wraper .right-content .cetegory-section .inner navigator:nth-child(2n + 2) {
	margin-right: 0;
}

.page-category-wraper .right-content .cetegory-section .inner navigator:active {
	background: rgba(240, 240, 245, 0.6);
}

.page-category-wraper .right-content .cetegory-section .inner navigator .name {
	height: 40rpx;
	line-height: 40rpx;
	font-size: 28rpx;
	color: #616166;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .count {
	height: 28rpx;
	line-height: 28rpx;
	font-size: 20rpx;
	color: #9b9b9b;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .covers {
	position: absolute;
	bottom: 0;
	right: 12rpx;
	width: 104rpx;
	height: 102rpx;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .covers view {
	position: absolute;
	box-shadow: 0 0rpx 1rpx #ccc;
	overflow: hidden;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .covers view image {
	width: 100%;
	height: 100%;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .covers view:first-child {
	margin-top: 0rpx;
	margin-left: 18rpx;
	width: 74rpx;
	height: 102rpx;
	z-index: 3;
	background: #fff url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png') center center no-repeat;
	background-size: cover;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .covers view:nth-child(2) {
	margin-top: 16rpx;
	margin-left: 0rpx;
	width: 60rpx;
	height: 86rpx;
	z-index: 2;
	background: #fff url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png') center center no-repeat;
	background-size: cover;
}

.page-category-wraper .right-content .cetegory-section .inner navigator .covers view:last-child {
	margin-top: 28rpx;
	margin-left: 50rpx;
	width: 52rpx;
	height: 74rpx;
	z-index: 1;
	background: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png') center center no-repeat;
	background-size: cover;
}
</style>
