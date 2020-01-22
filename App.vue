<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./static/css/book.css");
page {
    width: 100%;
    height: 100%;
    font-size: 24rpx;
    font-family: PingFang SC,"Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}

view,navigator,text,swiper,input {
    box-sizing: border-box;
}

.c-red {
    color: #DA3D3F;
}

.c-gray {
    color: #bbb;
}
</style>
