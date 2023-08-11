<template>
	<view class="container">
		<view class="model">
			<view class="model_title">{{title}}</view>
			<text class="model_content">{{content}}</text>
			<view class="model_button" @click="handleModelClone()">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			content: {
				type: String,
				default: ''
			}
		},
		methods: {
			handleModelClone() {
				this.$emit('handleModelClone')
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		z-index: 99999999999999999999;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(000, 000, 000, 0.3);

		.model {
			width: 65%;
			position: fixed;
			top: 22%;
			left: 18%;
			border-radius: 0.5rem;
			font-size: .3rem;
			background-color: #e2e2e2;

			.model_title {
				width: 100%;
				height: 75rpx;
				line-height: 75rpx;
				font-size: 1rem;
				font-weight: bold;
				text-align: center;
				color: #fff;
				background-color: #9795f0;
				border-top-left-radius: 16rpx;
				border-top-right-radius: 16rpx;
			}

			.model_content {
				width: 100%;
				color: #484848;
				letter-spacing: 0.1em;
				text-align: center;
				font-size: 1rem;
				font-weight: bold;
				display: block;
				box-sizing: border-box;
				padding: 30rpx;
			}

			.model_button {
				width: 50%;
				height: 70rpx;
				margin-left: 25%;
				margin-bottom: 30rpx;
				line-height: 70rpx;
				display: block;
				text-align: center;
				color: #fff;
				font-size: 0.9rem;
				letter-spacing: 0.4em;
				background: #9795f0;
				border-radius: 10rpx;
			}
		}
	}
</style>