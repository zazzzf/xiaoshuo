<template>
	<view class="c-book-recommend-section mb20">
		<view class="title">{{ books.title }}</view>
		<view class="sub-title" v-if="books.secondTitle">
			<view>{{ books.secondTitle }}</view>
		</view>
		<navigator class="more" :class="!books.secondTitle ? 'null-sub-title' : ''" :url="'../results/index?type=recommend&id=' + data._id">
			<view>查看更多</view>
			<view class="arrow"></view>
		</navigator>
		<view class="content c-book-coverTextRecommended">
			<view class="c-book-fullTextRecommended">
				<navigator class="clearfix" :url="'../bookDetail/bookDetail?id=' + books.books[0]._id">
					<image alt="" class="cover" :src="books.books[0].cover + '?imageMogr2/thumbnail/100x140'"></image>
					<view class="right">
						<view class="name">
							<view>{{ books.books[0].title }}</view>
						</view>
						<view class="desc">{{ books.books[0].shortIntro }}</view>
						<view class="sku">
							<view class="author">
								<view class="person-icon"></view>
								<view>{{ books.books[0].author }}</view>
							</view>
							<view class="popularity">
								<view class="c-red">
									{{ books.books[0].latelyFollower >= 10000 ? books.books[0].latelyFollower / 10000 + '万人气' : books.books[0].latelyFollower + '人气' }}
								</view>
							</view>
							<view class="tag">
								<view>{{ books.books[0].majorCate }}</view>
								<view>{{ books.books[0].isSerial ? '连载' : '完结' }}</view>
								<view v-if="books.books[0].rating.score * 1">{{ books.books[0].rating.score * 1 }}分</view>
							</view>
						</view>
					</view>
				</navigator>
			</view>
			<view class="sub-list">
				<navigator :url="'../bookDetail/bookDetail?id=' + books.books[index]._id" v-if="index > 0 && index < 4" v-for="(item, index) in books.books" :key="index">
					<view class="inner">
						<view class="title">{{ item.title }}</view>
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
						<view class="desc">{{ item.shortIntro }}</view>
					</view>
				</navigator>
			</view>
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
