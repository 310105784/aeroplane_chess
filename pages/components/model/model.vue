<template>
	<view class="container">
		<view class="model">
			<view class="model_title">{{title}}</view>
			<text class="model_content">{{content}}</text>
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
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		left: 0;

		background: transparent !important;

		.model {
			width: 80%;
			position: fixed;
			top: 20%;
			left: 10%;
			box-sizing: border-box;
			border-radius: 0.5rem;
			padding: 8% 5% 5% 5%;
			font-size: .3rem;
			background-color: rgba(000, 000, 000, 0.2);

			.model_title {
				$height: 34rpx;
				width: 50%;
				min-height: calc(#{$height} * 2);
				line-height: calc(#{$height} * 2);
				position: absolute;
				top: #{-$height};
				left: 25%;
				font-size: 1rem;
				font-weight: bold;
				text-align: center;
				color: #fff;
				background-color: #9795f0;
				border-radius: 16rpx;
			}

			.model_content {
				width: 100%;
				color: #e2e2e2;
				font-size: 0.8rem;
				font-weight: bold;

				span {
					display: block;
					margin-bottom: 10px;
				}
			}
		}
	}
</style>