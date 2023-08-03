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

<style lang="scss">
	/*每个页面公共css */
	body{
		background-color: $uni-bg;
		box-sizing: border-box;
	}
	
	body {
	    /* 背景渐变色 - 原理2 */
		background: linear-gradient(-45deg, #b45841, #b44177, #4398b4, #41b496, #41b443);
		/* 背景尺寸 - 原理3 */
	    background-size: 600% 600%;
	    /* 循环动画 - 原理4 */
		animation: gradientBG 5s ease infinite;
	  }
	 
	  /* 动画，控制背景 background-position */
	  @keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	  }
</style>
