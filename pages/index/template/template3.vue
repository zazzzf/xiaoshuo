<template>
	<view class="c-book-recommend-section mb20" v-if="books.title != '漫画精选'">
		<view class="title">{{ books.title }}</view>
		<view class="sub-title" v-if="books.secondTitle">
			<view>{{ books.secondTitle }}</view>
		</view>
		<navigator class="more" :class="!books.secondTitle ? 'null-sub-title' : ''" :url="'../results/index?type=recommend&id=' + data._id">
			<view>查看更多</view>
			<view class="arrow"></view>
		</navigator>
		<view class="content c-book-fullTextRecommended">
			<block v-for="(item, index2) in books.books" :key="index2">
				<navigator class="clearfix" :url="'../bookDetail/bookDetail?id=' + books.books[index2]._id" v-if="index2 < 4">
					<view class="cover">
						<image alt="" :src="item.cover + '?imageMogr2/thumbnail/100x140'"></image>
						<view class="is-vip" v-if="item.allowMonthly"></view>
					</view>
					<view class="right">
						<view class="name">
							<view>{{ item.title }}</view>
						</view>
						<view class="desc">{{ item.shortIntro }}</view>
						<view class="sku">
							<view class="author">
								<view class="person-icon"></view>
								<view>{{ item.author }}</view>
							</view>
							<view class="popularity">
								<view class="c-red">{{ item.latelyFollower >= 10000 ? item.latelyFollower / 10000 + '万人气' : item.latelyFollower + '人气' }}</view>
							</view>
							<view class="tag">
								<view>{{ item.majorCate }}</view>
								<view>{{ item.isSerial ? '连载' : '完结' }}</view>
								<view v-if="item.rating.score * 1">{{ item.rating.score * 1 }}分</view>
							</view>
						</view>
					</view>
				</navigator>
			</block>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		books: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style></style>
