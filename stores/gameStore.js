const key = "GAMEINFO"
export default {
	get() {
		return uni.getStorageSync(key)
	},
	set(info) {
		uni.setStorageSync(key, info)
	},
	remove(){
		uni.removeStorageSync(key)
	}
}