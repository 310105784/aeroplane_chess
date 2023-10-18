<div align=center>
<h3>🎉🎉🎉 情侣升温小游戏 🎉🎉🎉</h3>
</div>

## 🚀技术
### 🚖框架
- uni-app
- vue

### 🚔插件
- uni-icons

- uni-scss

## 📔配置
```
├─aeroplane_chess
│  ├─pages
│  │  │  gameConfig.json 游戏配置
│  │  │  taskData.json  游戏类型对应的数据
```

### 📒 文件说明
- `gameConfig.json`
``` text
{
    // 首页轮播图
    "background": [
	    "https://i.niupic.com/images/2023/08/08/bA4K.jpg"
    ],
    // 游戏类型
    "chessTypes": [
        {
	        "id": 1,    // 游戏ID
	        "title": "😉 基础模式",    // 游戏名称
	        "url": "/pages/chess/index",    // 游戏页面路由
	        "taskData": "love",    // 对应taksData中的任务数据
	        "isLock": false    //是否锁定
        },
    ...
    ]
}
```
- `taskData.json`
```text
{
    // 对应 gameConfig.json 游戏类型的 taksData ,可添加多个数据组
    "love": [
        "学猫叫三声",
        "一起恶搞自拍",
        "给对方说悄悄话",
        "给对方按小腿1分钟",
        "对视5秒",
        "喂对方喝水",
        "手牵手30秒",
        "拥抱30秒",
        "对视5秒",
        "尝试接吻的感觉",
        "说说初次见面的感受",
        ...
    ]
}
```


## 📌页面

### 🌹首页

<img src="https://foruda.gitee.com/images/1697621994006888977/b44c4281_7467053.png" alt="首页"  />


### 🍄游戏页
<img src="https://foruda.gitee.com/images/1697622117140475361/26d94964_7467053.png" alt="游戏页"  />