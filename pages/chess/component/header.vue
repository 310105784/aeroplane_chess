<template>
	<view class="header">
		<view class="return">
			<img src="@/static/images/return.png" @click="back()">
		</view>
		<text>{{title}}</text>
		<view class="menu">
			<img src="@/static/images/menu.png" @click="menu()">
		</view>
	</view>
</template>

<script>
	import gameStore from '@/stores/gameStore.js'
	export default {
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		},
		methods: {
			back() {
				uni.redirectTo({
					url: '/pages/index/index',
					success() {
						gameStore.remove()
					}
				})
			},
			menu() {

			}
		}
	}
</script>

<style scoped lang="scss">
	.header {
		@extend .cless_header;
		padding-left: 40rpx;
		padding-right: 40rpx;
		box-sizing: border-box;
		justify-content: space-between;
		display: flex;
		align-items: center;

		.return,
		img {
			width: 60rpx;
			height: 60rpx;
		}

		.menu,
		img {
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>