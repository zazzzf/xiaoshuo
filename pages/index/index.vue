<template>
	<view class="content">
		<view class="page-explore-wrapper" v-if="booksData">
			<swiper autoplay="true" circular="true" class="explore-banner" duration="1000" interval="3000" v-if="banner.length !== 0">
				<swiper-item  class="explore-banner-item" v-for="(item, index) in banner" :key="index">
					<navigator :url="'../bookDetail/bookDetail?id=' + item.link">
						<image class="banner-img" :src="item.img"></image>
					</navigator>
				</swiper-item>
			</swiper>

			<view class="explore-entrance">
				<navigator hoverClass="navigator-hover" url="../ranking/ranking">
					<view class="entrance-img nav-3"></view>
					<view>排行榜</view>
				</navigator>
				<navigator hoverClass="navigator-hover" url="../vip/index">
					<view class="entrance-img nav-1"></view>
					<view>VIP</view>
				</navigator>
				<navigator hoverClass="navigator-hover" url="../category/category">
					<view class="entrance-img nav-2"></view>
					<view>分类</view>
				</navigator>
			</view>

			<view class="explore-recommended" v-for="(item, index) in booksData" :key="index">
				<block v-if="booksData[index].bookType === '3列表'"><template3 :books="booksData[index]"></template3></block>

				<block v-else-if="booksData[index].bookType === '全文推'"><template3 :books="booksData[index]"></template3></block>

				<block v-else-if="booksData[index].bookType === '封文推1'"><template1 :books="booksData[index]"></template1></block>

				<block v-else><template2 :books="booksData[index]"></template2></block>
			</view>
		</view>
	</view>
</template>

<script>
import template3 from './template/template3.vue';
import template1 from './template/template1.vue';
import template2 from './template/template2.vue';
export default {
	data() {
		return {
			booksData: [],
			banner:[]
		};
	},
	components: {
		template3,
		template1,
		template2
	},
	onLoad() {
		this.getData();
	},
	methods: {
		async getData() {
			var gender = '2e54d6bb591c4891ad239ea53399a20c'; // 男频
			var gender = 'bf0a65255a5b4c138052dca8ef065753'; // 女频
			try {
				const res = await this.$Request.get(`https://b.zhuishushenqi.com/category/classifylist?node=${gender}`);
				if (res.ok) {
					this.booksData = res.data.nodes;
					this.banner = res.data.spread[0]['advs']
				}
			} catch (e) {
				console.log(e)
			}
		}
	}
};
</script>

<style></style>
