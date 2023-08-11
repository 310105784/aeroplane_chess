<template>
	<view class="container">
		<view class="header">
			<text>Couple's game</text>
			<view class="user">
				<uni-icons type="contact" size="40" color="#ffffff"></uni-icons>
			</view>
		</view>
		<view class="cless-type-container">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000"
					:duration="500">
					<swiper-item class="swiper-item" v-for="(bg, i) in background" :key="i">
						<image class="swiper-item-img" :src="bg">
					</swiper-item>
				</swiper>
			</view>
			<view class="cless-type-wrap">
				<view class="cless-type-item" v-for="(chessType, i) in chessTypes" :key="i"
					@click="handleChessTypeClick(chessType)">
					<view class="tag" v-if="chessType.isHot">HOT</view>
					<view class="tag" v-if="chessType.isNew">NEW</view>
					<text class="cless-type-item-text">{{chessType.title}}</text>
					<view class="cless-type-item-lock">
						<image v-if="chessType.isLock" src="@/static/images/chess_item_lock.png">
						<image v-else src="@/static/images/chess_item_open.png">
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import gameStore from '@/stores/gameStore.js'

	export default {
		data() {
			return {
				// 轮播图图片
				background: [
					'https://i.niupic.com/images/2023/08/08/bA4K.jpg'
				],
				// 游戏类型
				chessTypes: [{
					id: 0,
					title: '真心话大冒险',
					url: '/pages/truthOrDare/index',
					isNew: true
				}, {
					id: 1,
					title: '😉 基础模式',
					url: '/pages/chess/index',
				}, {
					id: 2,
					title: '💞 恋爱模式',
					url: '/pages/chess/index',
					isHot: true,
					isLock: true
				}, {
					id: 3,
					title: '🧑🏻‍❤️‍🧑🏻 情侣模式',
					url: '/pages/chess/index',
					isHot: true,
					isLock: true
				}, {
					id: 4,
					title: '💝️ 高级模式',
					url: '/pages/chess/index',
					isHot: true,
					isLock: true
				}, {
					id: 5,
					title: '🔞️ 羞羞模式',
					url: '/pages/chess/index',
					isHot: true,
					isLock: true
				}, {
					id: 6,
					title: '🔞️ 羞羞高级模式',
					url: '/pages/chess/index',
					isHot: true,
					isLock: true
				}]
			}
		},
		onLoad() {
			//http://cdn.edeng.love/
		},
		methods: {
			// 点击游戏类型
			handleChessTypeClick(chessType) {
				if (chessType.isLock) {
					uni.showToast({
						title: '当前模式未解锁',
						icon: 'error',
						duration: 2000
					})
					return;
				}
				uni.navigateTo({
					url: chessType.url,
					success(res) {
						gameStore.set(chessType)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;

		.header {
			@extend .cless_header;
			padding-left: 40rpx;
			padding-right: 40rpx;
			box-sizing: border-box;
			justify-content: space-between;
			display: flex;
			align-items: center;

			.user,
			img {
				width: 70rpx;
				height: 70rpx;
			}
		}
	}

	.cless-type-container {
		width: 100%;
		padding: 0 40rpx 40rpx 40rpx;
		box-sizing: border-box;

		.uni-margin-wrap {
			width: 100%;

			.swiper {
				border-radius: 20rpx;
				overflow: hidden;
			}

			.swiper-item {
				display: block;
				height: 100%;
				line-height: 100%;
				text-align: center;
				border-radius: 20rpx;
				background-color: white;
			}

			.swiper-item-img {
				width: 100%;
				height: 100%;
			}
		}

		.cless-type-wrap {
			width: 100%;
			margin-top: 50rpx;

			.cless-type-item {
				width: 100%;
				height: 140rpx;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				overflow: hidden;
				padding: 40rpx;
				box-sizing: border-box;
				margin-bottom: 40rpx;
				border: 1px solid $uni-color;
				box-shadow: 0 0 5px $uni-color;
				border-radius: 40rpx;
				background-color: rgba(255, 255, 255, 0.3);

				.tag {
					color: #fff;
					padding: 20rpx 0 5rpx 0;
					width: 121px;
					text-align: center;
					font-size: 25rpx;
					text-shadow: 4rpx 4rpx 8rpx rgba(0, 0, 0, .5);
					font-weight: 700;
					background: linear-gradient(90deg, #f78ca0, #f9748f, #fd868c, #fe9a8b);
					-webkit-transform: rotate(-50deg);
					transform: rotate(-45deg);
					position: absolute;
					top: -2rpx;
					left: -90rpx;
				}

				.cless-type-item-text {
					font-size: 40rpx;
					font-weight: bold;
					color: $uni-color;
					padding-left: 60rpx;
				}

				.cless-type-item-lock,
				uni-image {
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>