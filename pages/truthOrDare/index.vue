<template>
	<view class="container">
		<view>
			<Header :title="headerTitle" @header_renovate="header_renovate" :is-show-reload="false" :is-show-menu="false"></Header>
		</view>
		<view class="content">
			<text class="title">即将上线, 敬请期待</text>
		</view>
	</view>
</template>

<script>
	import gameStore from '@/stores/gameStore.js'
	import Header from '@/pages/components/header.vue';
	
	export default {
		components: {
			Header
		},
		data() {
			return {
				headerTitle: '',
			};
		},
		onLoad() {
			this.headerTitle = gameStore.get().title
		},
	}
</script>

<style scoped lang="scss">
	.container {
		height: 30vh;
	}
	
	.content{
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 20px;
		color: #333;
		font-weight: bold;
		color: #fff;
		display: block;
	}
</style>