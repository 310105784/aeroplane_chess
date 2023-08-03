<template>
	<view>
		<view>
			<Header :title="headerTitle"></Header>
		</view>
		<view class="chess-container">
			<img data-v-10a9785c="" id="boy" src="https://cdn.edeng.love/img/man.870ce025.png" alt="">
			<img data-v-10a9785c="" id="girl" src="https://cdn.edeng.love/img/woman.4163fe53.png" alt="">
			<view class="chess-container-top">
				<view class="chess-plank-top-bottom" v-for="num in [1,2,3,4,5,6]" :key="num">
					<view class="chess">
						<view class="chess-number">{{num}}</view>
					</view>
				</view>
			</view>
			<view class="chess-container-center">
				<view class="chess-center-left">
					<view class="chess-plank-center" v-for="num in [7,8,9,10,11,12,13,14]" :key="num">
						<view class="chess">
							<view class="chess-number">{{num}}</view>
						</view>
					</view>
				</view>
				<view class="chess-center-right">
					<view class="chess-plank-center" v-for="num in [28,27,26,25,24,23,22,21]" :key="num">
						<view class="chess">
							<view class="chess-number">{{num}}</view>
						</view>
					</view>
				</view>
				<view class="rule-container">
					<view class="rule-title">游戏规则</view>
					<view class="rule-content">
						<span>1.摇色子自动走棋</span>
						<span>2.每个格子都有任务,也可以自行写上执行其他任务</span>
						<span>2.率先走到终点的一方,获得胜利</span>
					</view>
				</view>
				<view class="dice-container">
					<img src="@/static/images/dices/dice1.gif" @click="handleDiceClick()">
				</view>
			</view>
			<view class="chess-container-bottom">
				<view class="chess-plank-top-bottom" v-for="num in [15,16,17,18,19,20]" :key="num">
					<view class="chess">
						<view class="chess-number">{{num}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import gameStore from '@/stores/gameStore.js'
	import Header from '@/pages/chess/component/header.vue';

	export default {
		components: {
			Header
		},
		onLoad() {
			this.headerTitle = gameStore.get().title
		},
		data() {
			return {
				headerTitle: ''
			}
		},
		methods: {
			handleDiceClick() {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.chess-container {
		padding: 0 8%;
		position: relative;

		#boy,
		#girl {
			width: 10%;
			position: absolute;
			z-index: 99;
			top: 5.2%;
			left: 84.8%;
			transform: translate(-50%, -50%);
			transition: all .4s cubic-bezier(.25, 1, .3, 1);
		}

		.chess-container-top {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: row-reverse;

			.chess-plank-top-bottom:last-child>.chess {
				border-top-left-radius: 50%;
			}

			.chess-plank-top-bottom:first-child>.chess {
				border-top-right-radius: 50%;
				border-bottom-right-radius: 50%;
			}
		}

		.chess-container-center {
			position: relative;
			flex-flow: row;
			justify-content: space-between;
			display: flex;
			align-items: center;

			.rule-container {
				width: 50%;
				position: absolute;
				top: 10%;
				left: 20%;
				border-radius: 0.5rem;
				padding: 8% 5% 5% 5%;
				font-size: .3rem;
				background-color: rgba(000, 000, 000, 0.2);

				.rule-title {
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

				.rule-content {
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

			.dice-container {
				width: 60%;
				height: 30%;
				position: absolute;
				bottom: 3%;
				left: 20%;
				border-radius: 0.5rem;
				font-size: .3rem;
				background-color: rgba(000, 000, 000, 0.2);

				display: flex;
				align-items: center;
				justify-content: center;

				img {
					width: 50%;
				}
			}

			.chess-center-left,
			.chess-center-right {
				width: 16.66667%;
			}

			.chess-center-right>.chess-plank-center:first-child>.chess {
				border-top-left-radius: 50%;
				border-top-right-radius: 50%;
			}

			.chess-plank-center {
				margin: 6% 6% 12%;
			}

			.chess-plank-center:last-child {
				margin: 6% 6% 6%;
			}
		}

		.chess-container-bottom {
			display: flex;
			align-items: center;
			justify-content: flex-start;

			.chess-plank-top-bottom:first-child>.chess {
				border-bottom-left-radius: 50%;
			}

			.chess-plank-top-bottom:last-child>.chess {
				border-bottom-right-radius: 50%;
			}
		}

		.chess-plank-top-bottom {
			width: 16.66667%;
			margin: 1%;
		}

		.chess {
			width: 100%;
			padding-top: 100%;
			position: relative;
			border-radius: 14rpx;
			transition: all .5s linear;
			box-shadow: 0 0.02667rem 0.16rem 0 hsla(0, 0%, 100%, .1);
			background-image: linear-gradient(0deg, #ff9a9e 0, #fecfef 99%, #fecfef);

			.chess-img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			.chess-number {
				@extend .chess-img;
				font-size: 1.2rem;
				color: #fff;
				font-weight: 600;
			}
		}
	}
</style>