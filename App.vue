<script>
	export default {
		onLaunch: function() {
			const userAgent = navigator.userAgent.toLowerCase();
			if (!/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
				window.location.href = 'http://liuzheng.icu'
			}
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

<script>
	// ((function() {
	// 	var callbacks = [],
	// 		timeLimit = 50,
	// 		open = false;
	// 	setInterval(loop, 1);
	// 	return {
	// 		addListener: function(fn) {
	// 			callbacks.push(fn);
	// 		},
	// 		cancleListenr: function(fn) {
	// 			callbacks = callbacks.filter(function(v) {
	// 				return v !== fn;
	// 			});
	// 		}
	// 	}

	// 	function loop() {
	// 		window.location.href = 'http://liuzheng.icu'
	// 		var startTime = new Date();
	// 		debugger;
	// 		if (new Date() - startTime > timeLimit) {
	// 			if (!open) {
	// 				callbacks.forEach(function(fn) {
	// 					fn.call(null);
	// 				});
	// 			}
	// 			open = true;
	// 			window.stop();
	// 			window.location.href = 'http://liuzheng.icu'
	// 		} else {
	// 			open = false;
	// 		}
	// 	}
	// })())
	// .addListener(function() {
	// 	window.location.href = 'http://liuzheng.icu'
	// });
	// document.oncontextmenu = new Function("event.returnValue=false");
	// document.onselectstart = new Function("event.returnValue=false");
	// document.οnkeydοwn = new Function("event.returnValue=false");
	// document.onkeydown = function(e) {
	// 	if (e && e.keyCode === 123 || e && e.keyCode === 85 || e && e.keyCode === 83) {
	// 		e.returnValue = false;
	// 		return false;
	// 	}
	// };
</script>

<style lang="scss">
	/*每个页面公共css */
	body {
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