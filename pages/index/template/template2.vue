<template>
	<view class="c-book-recommend-section mb20">
		<view class="title">{{ books.title }}</view>
		<view class="sub-title" v-if="books.secondTitle">
			<view>{{ books.secondTitle }}</view>
		</view>
		<navigator class="more" :class="!books.secondTitle ? 'null-sub-title' : ''" :url="'../results/index?type=recommend&id=' + books._id">
			<view>查看更多</view>
			<view class="arrow"></view>
		</navigator>
		<view class="content c-book-imageRecommended-4x">
			<navigator :url="'../bookDetail/bookDetail?id=' + books.books[index]._id" v-if="index < 4" v-for="(item, index) in books.books" :key="index">
				<view :class="books.sellType !== '无' ? 'cover discount' : 'cover'">
					<image alt="" :src="item.cover + '?imageMogr2/thumbnail/100x140'"></image>
					<view class="is-vip" v-if="item.allowMonthly"></view>
				</view>
				<view class="book-name">{{ item.title }}</view>
			</navigator>
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
