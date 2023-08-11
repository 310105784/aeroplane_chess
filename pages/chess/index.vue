<template>
	<view>
		<view>
			<Header :title="headerTitle" @header_renovate="header_renovate" :is-show-menu="false"></Header>
		</view>
		<view class="chess-container">
			<image id="boy" src="https://cdn.edeng.love/img/man.870ce025.png"
				:style="`top:${gamePersons[0].top}%;left:${gamePersons[0].left}%;`">
				<image id="girl" src="https://cdn.edeng.love/img/woman.4163fe53.png"
					:style="`top:${gamePersons[1].top}%;left:${gamePersons[1].left}%;`">
					<view class="chess-container-top">
						<view class="chess-plank-top-bottom" v-for="num in [1,2,3,4,5,6]" :key="num">
							<view class="chess" @click="handleModelOpen('任务', chessData[num])">
								<view class="chess-number">{{num}}</view>
							</view>
						</view>
					</view>
					<view class="chess-container-center">
						<view class="chess-center-left">
							<view class="chess-plank-center" v-for="num in [7,8,9,10,11,12,13,14]" :key="num">
								<view class="chess" @click="handleModelOpen('任务', chessData[num])">
									<view class="chess-number">{{num}}</view>
								</view>
							</view>
						</view>
						<view class="chess-center-right">
							<view class="chess-plank-center" v-for="num in [28,27,26,25,24,23,22,21]" :key="num">
								<view class="chess" @click="handleModelOpen('任务', chessData[num])">
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
							<image :src="dices[dice].gifUrl" @click="handleDiceClick()">
						</view>
					</view>
					<view class="chess-container-bottom">
						<view class="chess-plank-top-bottom" v-for="num in [15,16,17,18,19,20]" :key="num">
							<view class="chess" @click="handleModelOpen('任务', chessData[num])">
								<view class="chess-number">{{num}}</view>
							</view>
						</view>
					</view>
		</view>
		<Model v-if="modelData.isShow" :title="modelData.title" :content="modelData.content"
			@handleModelClone="handleModelClone"></Model>
	</view>
</template>

<script>
	import gameStore from '@/stores/gameStore.js'
	import Header from '@/pages/components/header.vue';
	import Model from '@/pages/components/model.vue'
	import taskData from '@/pages/taskData.json'

	export default {
		components: {
			Header,
			Model
		},
		onLoad() {
			this.headerTitle = gameStore.get().title
			this.getTaskData(gameStore.get())
		},
		data() {
			return {
				headerTitle: '',
				isGameIn: false,
				dice: 0,
				dices: [{
						stepNum: 1,
						gifUrl: require('@/static/images/dices/dice1.gif')
					},
					{
						stepNum: 2,
						gifUrl: require('@/static/images/dices/dice2.gif')
					},
					{
						stepNum: 3,
						gifUrl: require('@/static/images/dices/dice3.gif')
					},
					{
						stepNum: 4,
						gifUrl: require('@/static/images/dices/dice4.gif')
					},
					{
						stepNum: 5,
						gifUrl: require('@/static/images/dices/dice5.gif')
					},
					{
						stepNum: 6,
						gifUrl: require('@/static/images/dices/dice6.gif')
					},
				],
				current: 0,
				gamePersons: [{
						top: 5,
						left: 85,
						index: 0
					},
					{
						top: 5,
						left: 85,
						index: 0
					}
				],
				modelData: {
					isShow: false,
					title: '',
					content: ''
				},
				chessData: [],
			}
		},
		methods: {
			getTaskData(gameData) {
				if (gameData.id) {
					let id = gameData.id
					if (id == 1) {
						this.chessData = taskData.data
					} else if (id == 2) {
						this.chessData = taskData.love
					} else if (id == 3) {
						this.chessData = taskData.coupleEdition
					} else if (id == 4) {
						this.chessData = taskData.senior
					} else if (id == 5) {
						this.chessData = taskData.privacy
					} else if (id == 6) {
						this.chessData = taskData.privacyAdvanced
					}
				}
			},
			header_renovate() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定重新开始游戏吗？',
					success: function(res) {
						if (res.confirm) {
							that.cz()
						}
					}
				});
			},
			randomDice() {
				return Math.floor(Math.random() * 6)
			},
			cz() {
				this.dice = 0
				this.current = 0
				this.gamePersons = [{
						top: 5,
						left: 85,
						index: 0
					},
					{
						top: 5,
						left: 85,
						index: 0
					}
				]
			},
			setDice() {
				let dice = this.dice
				do {
					dice = this.randomDice()
				} while (dice == this.dice)
				this.dice = dice
			},
			setChess(dice, dices) {
				this.isGameIn = true
				let that = this
				let timeout = 600
				let stepNum = dices[dice].stepNum
				console.log("bushu", stepNum);

				let number = 1
				let timer = setInterval(() => {
					let left = that.gamePersons[that.current].left;
					let top = that.gamePersons[that.current].top;
					that.gamePersons[that.current].index++
					if ((left <= 85 && left != 15) && top == 5) {
						// 右上角
						that.gamePersons[that.current].left = left - 14
					} else if (left <= 15 && (top >= 5 && top != 95)) {
						// 左上角
						that.gamePersons[that.current].top = top + 10
					} else if ((left >= 15 && left != 85) && top == 95) {
						// 左下角
						that.gamePersons[that.current].left = left + 14
					} else if (left == 85 && top <= 95) {
						// 右下角
						that.gamePersons[that.current].top = top - 10
					}
					// 判断是否到终点
					if (that.gamePersons[that.current].left == 85 && that.gamePersons[that.current].top == 15) {
						clearTimeout(timer)
						that.cz()
						uni.showToast({
							title: '游戏结束',
							icon: 'none',
							duration: 3000
						});
					}
					if (number >= stepNum) {
						clearTimeout(timer)
					}
					number++
				}, timeout)

				if (this.current == 0) {
					this.current = 1
				} else {
					this.current = 0
				}

				setTimeout(() => {
					this.modelData = {
						isShow: true,
						title: '任务',
						content: this.chessData[that.gamePersons[that.current].index]
					}
					this.isGameIn = false
				}, timeout * stepNum)
			},
			handleDiceClick() {
				if (this.isGameIn) {
					return
				}
				this.setDice()
				setTimeout(() => {
					this.setChess(this.dice, this.dices)
				}, 1000)
			},
			handleModelOpen(title, content) {
				this.modelData = {
					isShow: true,
					title: title,
					content: content
				}
			},
			handleModelClone() {
				this.modelData = {
					isShow: false,
					title: '',
					content: ''
				}
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
			height: 6.5%;
			position: absolute;
			z-index: 99;
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

				image {
					width: 50%;
					height: 75%;
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
			border: 1px solid #d3d3d3;
			background-color: rgba(255, 255, 255, 0.3);

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