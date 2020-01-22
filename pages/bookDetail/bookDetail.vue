<template>
	<view>
		<view class="page-detail-wraper">
			<navigator class="toHome" openType="switchTab" url="../explore/index" v-if="entrance === 'share'"></navigator>
			<view class="book-detail clearfix">
				<view class="vipBg" v-if="bookDetail.allowMonthly"></view>
				<image class="cover" :src="url.cdn + bookDetail.cover"></image>
				<view class="desc">
					<view class="title">{{ bookDetail.title }}</view>
					<view class="rating" v-if="!bookDetail.allowMonthly && bookDetail.rating && bookDetail.rating.isEffect">
						<view class="score">{{ bookDetail.rating.score }}</view>
						<view :class="bookDetail.rating.score >= 1 ? 'star' : 'star-o'"></view>
						<view :class="bookDetail.rating.score >= 3 ? 'star' : 'star-o'"></view>
						<view :class="bookDetail.rating.score >= 5 ? 'star' : 'star-o'"></view>
						<view :class="bookDetail.rating.score >= 7 ? 'star' : 'star-o'"></view>
						<view :class="bookDetail.rating.score >= 9 ? 'star' : 'star-o'"></view>
						<view class="line">|</view>
						<view>{{ bookDetail.rating.count }}人评</view>
					</view>
					<view class="sku">
						<view class="author">{{ bookDetail.author }}</view>
						<view class="line">|</view>
						<view>{{ bookDetail.majorCate }}</view>
					</view>
					<view class="sku">
						<view>{{ bookDetail.wordCount >= 10000 ? bookDetail.wordCount / 10000 + '万' : bookDetail.wordCount }}字</view>
						<view class="line">|</view>
						<view class="update">{{ !bookDetail.isSerial ? '完结' : bookDetail.updated }}</view>
					</view>
					<view class="allowMonthly" v-if="!bookPrice.originalPrice && !bookDetail.allowMonthly">免费</view>
					<view bindtap="toPayMonthly" :class="!monthlyInfo.isMonthly ? 'needMonthly' : 'isvip'" v-if="bookDetail.allowMonthly">
						{{ !monthlyInfo.isMonthly ? (isIos ? '' : '开通VIP用户，免费阅读此书') : '你已开通VIP 免费阅读此书' }}
					</view>
				</view>
			</view>
			<view class="reader-data">
				<view class="item">
					<view class="">{{ bookDetail.latelyFollower ? bookDetail.latelyFollower : bookDetail.latelyFollower / 10000 + '万' }}</view>
					<view class="key">追书人气</view>
				</view>
				<view class="item">
					<view class="">{{ bookDetail.retentionRatio ? bookDetail.retentionRatio + '%' : '暂无统计' }}</view>
					<view class="key">读者留存</view>
				</view>
				<view class="item">
					<view class="">{{ bookDetail.serializeWordCount }}</view>
					<view class="key">日更字数</view>
				</view>
			</view>
			<view bindtap="showIntro" class="introduction">
				<view class="title">
					简介
					<view :class="!showAllIntro ? 'arrow' : 'arrow up'"></view>
				</view>
				<view :class="showAllIntro ? 'active' : ''">{{ bookDetail.longIntro }}</view>
			</view>
			<view class="hot-comment" v-if="bestComment.length > 0">
				<view class="hot-comment-top"><view>热门书评</view></view>
				<view class="c-comment-list" v-if="bestComment.length > 0">
					<view class="li" v-for="(item, index) in bestComment" :key="index">
						<view class="title">{{ item.title }}</view>
						<view class="content">{{ item.content }}</view>
						<view class="inner">
							<view class="left">
								<image class="avater" :src="url.cdn + item.author.avatar"></image>
								<view class="author">
									<view class="name">{{ item.author.nickname }}</view>
									<view class="updated">{{ item.updated }}</view>
								</view>
							</view>
							<view class="right">
								<view class="score">
									<view :class="item.rating >= 1 ? 'star' : 'star-o'"></view>
									<view :class="item.rating >= 2 ? 'star' : 'star-o'"></view>
									<view :class="item.rating >= 3 ? 'star' : 'star-o'"></view>
									<view :class="item.rating >= 4 ? 'star' : 'star-o'"></view>
									<view :class="item.rating >= 5 ? 'star' : 'star-o'"></view>
								</view>
								<view class="likeCount">{{ item.likeCount }}人觉得有用</view>
							</view>
						</view>
					</view>
				</view>
				<view class="c-comment-list-none" v-if="bestComment.length === 0">暂无评论~</view>
			</view>
			<view class="c-book-recommend-section mb20">
				<view class="title">猜你喜欢</view>
				<view class="sub-title" v-if="bookRecommend.secondTitle">
					<view>{{ bookRecommend.secondTitle }}</view>
				</view>
				<navigator class="more" :class="!bookRecommend.secondTitle ? 'null-sub-title' : ''" :url="'../results/index?type=book&id=' + bookId">
					<view>查看更多</view>
					<view class="arrow"></view>
				</navigator>
				<view class="content c-book-imageRecommended-3x">
					<navigator
						hoverClass="other-navigator-hover"
						openType="redirect"
						:url="'bookDetail?id=' + item._id"
						v-if="index < 6"
						v-for="(item, index) in bookRecommend.books"
						:key="index"
					>
						<view :class="bookRecommend.sellType !== '无' ? 'cover' : 'cover'">
							<image :src="url.cdn + item.cover + '?imageMogr2/thumbnail/190x270'"></image>
							<view class="is-vip" v-if="!isIos && item.allowMonthly"></view>
						</view>
						<view class="book-name">{{ item.title }}</view>
						<view class="author">{{ item.author }}</view>
					</navigator>
				</view>
			</view>
			<view class="book-copyright" v-if="bookDetail.copyright">
				<view>图书信息</view>
				<view class="desc">{{ bookDetail.copyright }}</view>
			</view>
			<view class="read-link">
				<view class="button" style="width:90%;background: #999;color: #fff;border:none;" v-if="copyright">应版权方要求 本书暂时下架</view>
				<view wx:else>
					<view bindtap="toggleSubtract" :class="!inBookshelf ? 'button' : 'button subtract'">{{ inBookshelf ? '移出书架' : '加入书架' }}</view>
					<navigator class="button" style="margin: 0px 0px 0px 5%;" :url="'../reader/index?id=' + bookId + '&index=1&bookName='+bookDetail.title">开始阅读</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			url: {
				cdn: 'http://statics.zhuishushenqi.com'
			},
			bookId: '',
			bookDetail: {},
			showAllIntro: !1,
			bestComment: [],
			bookRecommend: [],
			inBookshelf: !1,
			monthlyInfo: {},
			firstLoadPage: !0,
			isIos: !1,
			channelName: 'xiaochengxu',
			channelId: '200000842',
			copyright: !1
		};
	},
	onLoad(event) {
		console.log(event);
		this.bookId = event.id;
		this.loadData();
	},
	methods: {
		async loadData() {
			try {
				const res = await this.$Request.get(`https://api.zhuishushenqi.com/book/${this.bookId}`);
				console.log(res);
				this.updated = this.getDateDiff(new Date(res.updated))
				uni.setNavigationBarTitle({
					title: res.title,
				})
				this.bookDetail = res;
				this.copyright= res.copyright && (res.copyright.indexOf("阅文") > -1 || res.copyright.indexOf("晋江") > -1) || res.banned
				this.getBookRecommend(this.bookId);
			} catch (e) {
				//TODO handle the exception
			}
		},
		async getBookRecommend(bookId){
			try{
				const res = await this.$Request.get(`https://b.zhuishushenqi.com/book/${bookId}/recommend`)
				console.log(res);
				if(res.ok){
					this.bookRecommend = res
				}
			}catch(e){
				//TODO handle the exception
			}
		},
		getDateDiff: function(e) {
			var t = new Date().getTime() - e;
			if (!(t < 0)) {
				var n = t / 31104e6,
					a = t / 2592e6,
					g = t / 6048e5,
					r = t / 864e5,
					o = t / 36e5,
					s = t / 6e4;
				return n >= 1
					? parseInt(n) + '年前'
					: a >= 1
					? parseInt(a) + '月前'
					: g >= 1
					? parseInt(g) + '周前'
					: r >= 1
					? parseInt(r) + '天前'
					: o >= 1
					? parseInt(o) + '小时前'
					: s >= 1
					? parseInt(s) + '分钟前'
					: '刚刚';
			}
		}
	}
};
</script>

<style lang="less">
.page-detail-wraper {
	padding-bottom: 200rpx;
}

.page-detail-wraper .fixed {
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 20;
}

.page-detail-wraper .toHome {
	position: fixed;
	z-index: 999;
	right: 0rpx;
	bottom: 120rpx;
	width: 140rpx;
	height: 135rpx;
	background: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/home.png') no-repeat;
	background-size: 100% 100%;
}

.page-detail-wraper .book-detail {
	position: relative;
	overflow: hidden;
	padding: 30rpx;
	background: #fff;
}

.page-detail-wraper .book-detail .cover {
	float: left;
	width: 192rpx;
	height: 272rpx;
	background: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png') no-repeat;
	background-size: 100% 100%;
	box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.3);
	border-radius: 4rpx;
}

.page-detail-wraper .book-detail .vipBg {
	position: absolute;
	top: 214rpx;
	left: 26rpx;
	width: 200rpx;
	height: 40rpx;
	background: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/details_bg_vip.png');
	background-size: 100% 100%;
}

.page-detail-wraper .book-detail .desc {
	margin-left: 216rpx;
}

.page-detail-wraper .book-detail .desc .title {
	font-weight: bold;
	font-size: 38rpx;
	line-height: 1.2;
	padding-bottom: 30rpx;
}

.page-detail-wraper .book-detail .desc .rating {
	height: 48rpx;
	margin-bottom: 20rpx;
}

.page-detail-wraper .book-detail .desc .rating view {
	display: inline-block;
	vertical-align: middle;
	color: #bdbdbd;
	font-size: 28rpx;
}

.page-detail-wraper .book-detail .desc .rating .score {
	line-height: 48rpx;
	font-size: 40rpx;
	color: #ffcd3e;
	padding-right: 18rpx;
}

.page-detail-wraper .book-detail .desc .rating .star {
	width: 28rpx;
	height: 28rpx;
	margin-left: 12rpx;
	background-image: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star.png');
	background-size: 100% 100%;
}

.page-detail-wraper .book-detail .desc .rating .star-o {
	width: 28rpx;
	height: 28rpx;
	margin-left: 12rpx;
	background-image: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png');
	background-size: 100% 100%;
}

.page-detail-wraper .book-detail .desc .rating .line {
	margin: 0 16rpx;
}

.page-detail-wraper .book-detail .desc .sku {
	height: 36rpx;
	margin-bottom: 20rpx;
	line-height: 36rpx;
	overflow: hidden;
	font-size: 0;
}

.page-detail-wraper .book-detail .desc .sku view {
	display: inline-block;
	vertical-align: middle;
	color: #bdbdbd;
	font-size: 28rpx;
}

.page-detail-wraper .book-detail .desc .sku view.author {
	color: #ee4745;
}

.page-detail-wraper .book-detail .desc .sku .line {
	margin: 0 14rpx;
}

.page-detail-wraper .book-detail .desc .allowMonthly {
	width: 64rpx;
	height: 32rpx;
	background: #f0f0f5;
	border-radius: 76rpx;
	font-size: 20rpx;
	color: #999;
	text-align: center;
	line-height: 32rpx;
}

.page-detail-wraper .book-detail .desc .needMonthly {
	width: 100%;
	height: 32rpx;
	background: #fff;
	border-radius: 0;
	font-size: 26rpx;
	color: #ee4745;
	text-align: left;
	line-height: 32rpx;
}

.page-detail-wraper .book-detail .desc .isvip {
	width: 100%;
	height: 32rpx;
	background: #fff;
	border-radius: 0;
	font-size: 26rpx;
	color: #c8c7cc;
	text-align: left;
	line-height: 32rpx;
}

.page-detail-wraper .book-detail .desc .tags {
	height: 30rpx;
}

.page-detail-wraper .book-detail .desc .tags .monthly {
	display: inline-block;
	height: 30rpx;
	border: 1px solid #cb2622;
	background-color: #cb2622;
	border-radius: 2px;
	overflow: hidden;
	border-left: none;
	font-size: 0px;
}

.page-detail-wraper .book-detail .desc .tags .monthly .key {
	width: 30rpx;
	height: 100%;
	display: inline-block;
	vertical-align: middle;
	background-size: 90% 90%;
}

.page-detail-wraper .book-detail .desc .tags .monthly .value {
	height: 100%;
	line-height: 28rpx;
	padding: 0 4rpx;
	display: inline-block;
	vertical-align: middle;
	color: #fff;
	font-style: normal;
	color: #cb2622;
	font-size: 20rpx;
	background-color: #fff;
}

.page-detail-wraper .book-detail .desc .tags .not-monthly {
	border: 1px solid #ccc;
	background-color: #ccc;
}

.page-detail-wraper .book-detail .desc .tags .not-monthly .value {
	color: #ccc;
}

.page-detail-wraper .read-link {
	width: 100%;
	height: 120rpx;
	position: fixed;
	z-index: 999;
	bottom: 0;
	padding: 20rpx 30rpx 40rpx 30rpx;
	border-top: 1px solid #ebebeb;
	font-size: 0px;
	background: #fff;
}

.page-detail-wraper .read-link view.button {
	display: inline-block;
	vertical-align: middle;
	height: 80rpx;
	line-height: 80rpx;
	background-color: #fce4e4;
	border: 1px solid #fce4e4;
	border-radius: 40rpx;
	text-align: center;
	color: #ee4745;
	font-size: 32rpx;
	width: 45%;
	margin-right: 5%;
}

.page-detail-wraper .read-link navigator.button {
	display: inline-block;
	vertical-align: middle;
	height: 80rpx;
	line-height: 80rpx;
	background-color: #ee4745;
	border: 1px solid #ee4745;
	border-radius: 40rpx;
	text-align: center;
	color: #fff;
	font-size: 32rpx;
	width: 45%;
	margin-right: 5%;
}

.page-detail-wraper .read-link .button view {
	font-style: normal;
	font-weight: 700;
}

.page-detail-wraper .read-link .button .plus {
	font-family: serif;
	margin-right: 2px;
	font-weight: bold;
	font-size: 32rpx;
}

.page-detail-wraper .read-link .button .subtract {
	font-family: serif;
	margin-right: 2px;
	font-weight: bold;
	font-size: 32rpx;
}

.page-detail-wraper .read-link .button:first-child {
	color: #ff5e01;
	border: 1px solid #ffdec6;
	background-color: #ffdec6;
}

.page-detail-wraper .read-link .button:last-child {
	margin: 0 0 0 5%;
}

.page-detail-wraper .read-link .button.subtract {
	border: 1px solid #999;
	background: #999;
	color: #fff;
}

.page-detail-wraper .read-link .monthly-tags {
	display: block;
	margin-top: 40rpx;
	text-align: center;
	color: #ff9a57;
}

.page-detail-wraper .read-link .monthly-tags.gray {
	color: #ccc;
}

.page-detail-wraper .read-link .monthly-tags view {
	font-size: 28rpx;
}

.page-detail-wraper .read-link .monthly-tags view {
	font-style: normal;
	font-family: monospace;
	margin-left: 0.08rpx;
}

.page-detail-wraper .read-link .unable {
	height: 80rpx;
	line-height: 80rpx;
	background: #999;
	border: 1px solid #999;
	border-radius: 40rpx;
	text-align: center;
	color: #fff;
	font-size: 32rpx;
	width: 80%;
	margin-left: 10%;
}

.page-detail-wraper .reader-data {
	margin: 0 30rpx;
	padding-bottom: 40rpx;
	font-size: 0px;
	background: #fff;
}

.page-detail-wraper .reader-data .item {
	display: inline-block;
	vertical-align: middle;
	width: 33%;
	text-align: center;
}

.page-detail-wraper .reader-data .item view {
	display: block;
	line-height: 40rpx;
}

.page-detail-wraper .reader-data .item view:first-child {
	color: #858e98;
	font-size: 34rpx;
	font-weight: bold;
}

.page-detail-wraper .reader-data .item view:last-child {
	margin-top: 10rpx;
	color: #c8c7cc;
	font-size: 24rpx;
}

.page-detail-wraper .introduction {
	position: relative;
	margin: 0 30rpx 40rpx;
	padding: 40rpx 0;
	background: #fff;
}

.page-detail-wraper .introduction view {
	line-height: 42rpx;
	font-size: 30rpx;
	text-align: justify;
	word-break: break-all;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	-webkit-transition: all 0.4s ease;
}

.page-detail-wraper .introduction view.title {
	height: 52rpx;
	font-size: 38rpx;
	line-height: 52rpx;
	margin-bottom: 26rpx;
	font-weight: bold;
}

.page-detail-wraper .introduction view.active {
	height: auto !important;
	overflow: auto !important;
	display: block !important;
}

.page-detail-wraper .introduction view .arrow {
	position: absolute;
	width: 26rpx;
	height: 40rpx;
	top: 40rpx;
	right: 0;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEeklEQVR4XuWbz4scRRTH37dnZjcquhuFgB6iJIrmoBcPHkIMm1XM4g/EHwOLO73sTNcMexLPktVg/oDgwXWnZ1bp3mVhEPyJipAfqyeRFQxiAgoKQggEZRcxiclMv1DpCQRJunp6unuaqb7Wq6rv+3RVdderV6A+Htt2n2bmEhHGAD4mhPluH80NpCqi9mrb7hwRLd9Yn5l+GB31pmZnZ/+K2m7a9SIBaDbdhz2PztxMLDOfKRQ6E3Nzc+fSdiZKf5EA2LZzhAhv3rpD/j2XK+wvl6f/jCIqzTqRANTrzgKAwwqhZ9vt/N75+ek/0nSo174iAVheXt3V6XROEeGO4A75PEAHLMv8uVdhadlHAiDFNRruQWb6SiWUmbYAY1KI1zZUtoMojwxAirVt5wAzvgDoNsVI+NfzaLJWM78fhJNBffYFQDa8tOQ8AeAbgO4K6oiZLgL8nBDm8SxB6BuAD2HlUcPwviXCeDAEvmIYeMGySl9nBUIsALrTYQ8znQSwQzES2gCmhZj5KAsQYgMgnVlcXHsgl7uyDmCnwjkmoooQpQ8GDSFWAP50cO8FaB2gh1TOMfN8tWq+r7JLsjx2AP4nsnU386UTRHhMJZ6ZD1Wr5hGVXVLliQCQYpvN5p2eN3KCiB5Xi+ejQphvqO3it0gMgD8dPr/dMDblir9PJZ2Zl6tVs6Kyi7s8UQBSbKvVGtnc/O8TgKZU4plpVYiZEgC5SKbyJA6gCyG3tXVpjQivqr3iT8fGtr1cLBY7atv+LVIBcF1mve40AZRVsuUeY3x89MVisXhZZdtveaoApFjbdt8jovkQwr/zvPGDtdrzF0LYRjZJHUAXwttE9FYI1RuGcXmiUqn8E8I2kslAAEil9br7OkBH1ar5FLBtwrKKf6tte7cYGIDuSJCB1SYRBepgpl/z+dG95XLxfO8uBtcYKAAfwsorzLwGUD5YajJxxoEDkE7L6JLn8WcACoo3fBag/ZZV+i2ukZAJAP5ICB1dkmcO+4QwT8cBITMApDNho0tEvOl5mKzVSj/2CyFTAHwI16JLcid5j2JNiCXOmDkA3TXhQWZaJ6L7giDEEWfMJIDudNhpGJDb6V2qYQ7gKcuaOaayu1l5ZgH4EGR0iY8DeEQxHc553vbdUX6bMw3Anw5ho0v8rBDml72OgqEBwIyXqtWZj4cKwOKisyOfp5NE2BO8GPKFQqGzO8qRfGZHwNKS08MiSFNRD1syCaDRcPX9DGr9I6T1r7DWmyGtt8NaB0S6uYZ6hsS0DoratqtvWFzrgxFtj8ZarZa+h6NaH49rnSChdYpM+DDWtTDHghCld3qN5MRlH3s8QOs0Oa0TJW3b0TdVVutk6bBRnDiOseJa+G5sp69FsIcoTiwHmZkCoPWVGX+1b/+kuiVCNKSXpmzblSluck8f9Azvtbl63TkMYOHW3ieT0JSZNSD46iz9Uii0J6Oc0yXhoKrNyF+BRmNllpk//F8HGyMj3jNDf3n6utONxuqTzF6Fme8H6LQQZpgcYNVLSbX8Kr2QQF+sLrzTAAAAAElFTkSuQmCC)
		center center no-repeat;
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center center;
	-webkit-transition: all 0.1s ease;
	-webkit-transform: rotate(90deg);
}

.page-detail-wraper .introduction view .up {
	-webkit-transform: rotate(270deg);
}

.page-detail-wraper .chapter-item {
	display: block;
	background: #fff;
	padding: 40rpx 30rpx;
	margin-bottom: 40rpx;
	color: #333;
	font-weight: bold;
}

.page-detail-wraper .chapter-item:active {
	background-color: #f4f4f4;
}

.page-detail-wraper .chapter-item .inner {
	position: relative;
	height: 52rpx;
	font-size: 38rpx;
	line-height: 52rpx;
}

.page-detail-wraper .chapter-item .inner view {
	float: right;
	max-width: 60%;
	font-size: 30rpx;
	color: #8a8a8a;
	word-break: break-all;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	font-weight: 300;
}

.page-detail-wraper .chapter-item .inner .arrow {
	float: right;
	width: 26rpx;
	height: 52rpx;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEeklEQVR4XuWbz4scRRTH37dnZjcquhuFgB6iJIrmoBcPHkIMm1XM4g/EHwOLO73sTNcMexLPktVg/oDgwXWnZ1bp3mVhEPyJipAfqyeRFQxiAgoKQggEZRcxiclMv1DpCQRJunp6unuaqb7Wq6rv+3RVdderV6A+Htt2n2bmEhHGAD4mhPluH80NpCqi9mrb7hwRLd9Yn5l+GB31pmZnZ/+K2m7a9SIBaDbdhz2PztxMLDOfKRQ6E3Nzc+fSdiZKf5EA2LZzhAhv3rpD/j2XK+wvl6f/jCIqzTqRANTrzgKAwwqhZ9vt/N75+ek/0nSo174iAVheXt3V6XROEeGO4A75PEAHLMv8uVdhadlHAiDFNRruQWb6SiWUmbYAY1KI1zZUtoMojwxAirVt5wAzvgDoNsVI+NfzaLJWM78fhJNBffYFQDa8tOQ8AeAbgO4K6oiZLgL8nBDm8SxB6BuAD2HlUcPwviXCeDAEvmIYeMGySl9nBUIsALrTYQ8znQSwQzES2gCmhZj5KAsQYgMgnVlcXHsgl7uyDmCnwjkmoooQpQ8GDSFWAP50cO8FaB2gh1TOMfN8tWq+r7JLsjx2AP4nsnU386UTRHhMJZ6ZD1Wr5hGVXVLliQCQYpvN5p2eN3KCiB5Xi+ejQphvqO3it0gMgD8dPr/dMDblir9PJZ2Zl6tVs6Kyi7s8UQBSbKvVGtnc/O8TgKZU4plpVYiZEgC5SKbyJA6gCyG3tXVpjQivqr3iT8fGtr1cLBY7atv+LVIBcF1mve40AZRVsuUeY3x89MVisXhZZdtveaoApFjbdt8jovkQwr/zvPGDtdrzF0LYRjZJHUAXwttE9FYI1RuGcXmiUqn8E8I2kslAAEil9br7OkBH1ar5FLBtwrKKf6tte7cYGIDuSJCB1SYRBepgpl/z+dG95XLxfO8uBtcYKAAfwsorzLwGUD5YajJxxoEDkE7L6JLn8WcACoo3fBag/ZZV+i2ukZAJAP5ICB1dkmcO+4QwT8cBITMApDNho0tEvOl5mKzVSj/2CyFTAHwI16JLcid5j2JNiCXOmDkA3TXhQWZaJ6L7giDEEWfMJIDudNhpGJDb6V2qYQ7gKcuaOaayu1l5ZgH4EGR0iY8DeEQxHc553vbdUX6bMw3Anw5ho0v8rBDml72OgqEBwIyXqtWZj4cKwOKisyOfp5NE2BO8GPKFQqGzO8qRfGZHwNKS08MiSFNRD1syCaDRcPX9DGr9I6T1r7DWmyGtt8NaB0S6uYZ6hsS0DoratqtvWFzrgxFtj8ZarZa+h6NaH49rnSChdYpM+DDWtTDHghCld3qN5MRlH3s8QOs0Oa0TJW3b0TdVVutk6bBRnDiOseJa+G5sp69FsIcoTiwHmZkCoPWVGX+1b/+kuiVCNKSXpmzblSluck8f9Azvtbl63TkMYOHW3ieT0JSZNSD46iz9Uii0J6Oc0yXhoKrNyF+BRmNllpk//F8HGyMj3jNDf3n6utONxuqTzF6Fme8H6LQQZpgcYNVLSbX8Kr2QQF+sLrzTAAAAAElFTkSuQmCC)
		center right no-repeat;
	background-size: 80%;
	background-repeat: no-repeat;
}

.page-detail-wraper .hot-comment {
	margin: 0 30rpx 40rpx;
	padding-bottom: 48rpx;
	background: #fff;
}

.page-detail-wraper .hot-comment .hot-comment-top {
	position: relative;
	margin-bottom: 26rpx;
}

.page-detail-wraper .hot-comment .hot-comment-top view {
	height: 60rpx;
	line-height: 60rpx;
	font-size: 38rpx;
	font-weight: bold;
}

.page-detail-wraper .hot-comment .hot-comment-top .more {
	display: block;
	height: 80rpx;
	line-height: 80rpx;
	padding: 0 40rpx;
	font-size: 24rpx;
	color: #999;
	font-weight: 400;
	position: absolute;
	top: 0;
	right: 0;
}

.page-detail-wraper .hot-comment .c-comment-list-none {
	background: #fff;
	color: #c8c7cc;
}

.page-detail-wraper .hot-comment .c-comment-list {
	width: 100%;
}

.page-detail-wraper .hot-comment .c-comment-list .li {
	overflow: hidden;
	padding-bottom: 40rpx;
	background: #fff;
}

.page-detail-wraper .hot-comment .c-comment-list .li .title {
	padding-bottom: 10rpx;
	font-size: 32rpx;
	line-height: 44rpx;
	color: #000;
}

.page-detail-wraper .hot-comment .c-comment-list .li .content {
	margin-bottom: 28rpx;
	line-height: 40rpx;
	font-size: 30rpx;
	text-align: justify;
	word-break: break-all;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	color: #8a8a8f;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner {
	overflow: hidden;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .left {
	float: left;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .left .avater {
	display: inline-block;
	vertical-align: middle;
	width: 56rpx;
	height: 56rpx;
	margin-right: 16rpx;
	border-radius: 56rpx;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .left .author {
	display: inline-block;
	vertical-align: middle;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .left .author .name {
	height: 34rpx;
	font-size: 24rpx;
	color: #666;
	line-height: 34rpx;
	margin-bottom: 6rpx;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .left .author .updated {
	height: 34rpx;
	font-size: 24rpx;
	line-height: 34rpx;
	color: #a3a3a3;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .right {
	float: right;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .right .score {
	overflow: hidden;
	height: 34rpx;
	margin-bottom: 6rpx;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .right .score .star {
	display: inline-block;
	vertical-align: middle;
	width: 22rpx;
	height: 22rpx;
	margin-left: 12rpx;
	background-image: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star.png');
	background-size: 100% 100%;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .right .score .star-o {
	display: inline-block;
	vertical-align: middle;
	width: 22rpx;
	height: 22rpx;
	margin-left: 12rpx;
	background-image: url('https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png');
	background-size: 100% 100%;
}

.page-detail-wraper .hot-comment .c-comment-list .li .inner .right .likeCount {
	height: 34rpx;
	font-size: 26rpx;
	line-height: 34rpx;
	text-align: right;
	color: #b7b7bd;
}

.page-detail-wraper .c-book-recommend-section .title {
	height: 52rpx;
	font-size: 38rpx;
	line-height: 52rpx;
	font-weight: bold;
}

.page-detail-wraper .book-copyright {
	background: #fff;
	margin: 40rpx 0;
	padding: 0 30rpx;
}

.page-detail-wraper .book-copyright view {
	font-size: 38rpx;
	font-weight: 700;
}

.page-detail-wraper .book-copyright .desc {
	line-height: 44rpx;
	color: #8a8a8f;
	font-size: 28rpx;
	margin-top: 10rpx;
}
</style>
