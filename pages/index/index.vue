<template>
	<view class="container">
		<view class="header">
			<text>Couple's game</text>
			<view class="user">
				<img src="@/static/images/user.png">
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
			<!-- <view class="operstion-type-wrap">
				<view class="operstion-type-item" v-for="(operstion, i) in operations" :key="i"
					:style="`background-color:${operstion.backgroundColor};`">{{operstion.title}}</view>
			</view> -->
			<view class="cless-type-wrap">
				<view class="cless-type-item" v-for="(chessType, i) in chessTypes" :key="i"
					@click="handleChessTypeClick(chessType)">
					<view class="hot" v-if="chessType.isHot">HOT</view>
					<text class="cless-type-item-text">{{chessType.title}}</text>
					<view class="cless-type-item-lock">
						<img v-if="chessType.isLock" src="@/static/images/chess_item_lock.png">
						<img v-else src="@/static/images/chess_item_open.png">
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
					'https://cdn.pixabay.com/photo/2023/05/27/16/08/flowers-8021795_1280.jpg',
					'https://cdn.pixabay.com/photo/2023/05/27/16/08/flowers-8021795_1280.jpg',
					'https://cdn.pixabay.com/photo/2023/05/27/16/08/flowers-8021795_1280.jpg'
				],
				// 操作类型入口
				operations: [{
						title: '嘿嘿卡',
						url: '',
						backgroundColor: '#5267d1'
					},
					{
						title: '小本本',
						url: '',
						backgroundColor: '#41ab48'
					},
					{
						title: '嘿嘿卡',
						url: '',
						backgroundColor: '#c78544'
					}
				],
				// 游戏类型
				chessTypes: [{
					id: 1,
					title: '😉 基础模式',
					url: '',
					backgroundColor: '#5267d1',
					isHot: false,
					isLock: false
				}, {
					id: 2,
					title: '💞 恋爱模式',
					url: '',
					backgroundColor: '#41ab48',
					isHot: true,
					isLock: true
				}, {
					id: 3,
					title: '🧑🏻‍❤️‍🧑🏻 情侣模式',
					url: '',
					backgroundColor: '#c78544',
					isHot: true,
					isLock: true
				}, {
					id: 4,
					title: '💝️ 高级模式',
					url: '',
					backgroundColor: '#b041b0',
					isHot: true,
					isLock: true
				}, {
					id: 5,
					title: '🔞️ 羞羞模式',
					url: '',
					backgroundColor: '#b041b0',
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
					url: '/pages/chess/index',
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

		.operstion-type-wrap {
			width: 100%;
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 50rpx;

			.operstion-type-item {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 35rpx;
				font-weight: bold;
				color: white;
				margin-right: 10px;
			}

			.operstion-type-item:last-child {
				margin-right: 0;
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

				.hot {
					color: #fff;
					padding: 20rpx 0 5rpx 0;
					width: 121px;
					text-align: center;
					font-size: 25rpx;
					text-shadow: 4rpx 4rpx 8rpx rgba(0, 0, 0, .5);
					font-weight: 700;
					background: linear-gradient(90deg, #cb2b28, #a31f1c, #cb2b28);
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
				img {
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>