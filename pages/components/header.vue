<template>
	<view class="header">
		<view class="left">
			<view @click="back()"><uni-icons type="back" size="30" color="#ffffff" /></view>
		</view>
		<view class="center">
			<text class="title_text">{{title}}</text>
		</view>
		<view class="right">
			<view @click="renovate()" v-if="isShowReload"><uni-icons type="reload" size="30" color="#ffffff" /></view>
			<view @click="menu()" class="margin_left" v-if="isShowMenu"><uni-icons type="bars" size="30" color="#ffffff" /></view>
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
			},
			isShowMenu: {
				type: Boolean,
				default: true
			},
			isShowReload: {
				type: Boolean,
				default: true
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
			renovate() {
				this.$emit("header_renovate")
			},
			menu() {
				this.$emit("header_menu")
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

		.flex_container {
			display: flex;
			align-items: center;
		}

		.left {
			width: 25%;
			@extend .flex_container;
			justify-content: flex-start;
		}

		.center {
			width: 50%;
			@extend .flex_container;
			justify-content: center;
		}

		.right {
			width: 25%;
			@extend .flex_container;
			justify-content: flex-end;
		}

		.title_text {
			font-size: 40rpx;
		}

		.margin_left {
			margin-left: 20rpx;
		}
	}
</style>