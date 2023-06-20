var n = [ "我们的生命", "是血液和心脏的跳动", "蓝色的静脉， 和主动脉的红", "\n", "我们的爱情", "是心房和心室的重逢", "从右心房相识， 到左心室共梦", "\n", "我们的故事", "是逆热力学定律奇迹的交织", "我至死不渝， 而你跟随始终 ", "\n", "倘如 你问我", "永远是多远？", "到肌肤化为尘土， 到生命回归自然", "......" ], t = 0;

Page({
    onShareAppMessage: function() {
        return {
            title: "text",
            path: "page/component/pages/text/text"
        };
    },
    data: {
        text: ""
    },
    extraLine: [],
    add: function() {
        (t += 1) >= 17 && wx.showModal({
            title: "情人节快乐！",
            content: "血液将携带氧份去往全身\n\n一起期待美好的未来！",
            showCancel: !0,
            cancelText: "再看看诗",
            cancelColor: "red",
            confirmText: "要一起啊",
            confirmColor: "red",
            success: function(n) {
                n.cancel || wx.navigateTo({
                    url: "../index2/index"
                });
            },
            fail: function(n) {},
            complete: function(n) {}
        }), this.extraLine.push(n[this.extraLine.length % 17]), this.setData({
            text: this.extraLine.join("\n")
        });
    },
    onMusicTap: function() {
        var n = this, t = wx.getBackgroundAudioManager();
        t.title = "想你", t.epname = "《想你》", t.singer = "钟镇涛-", t.coverImgUrl = "https://y.gtimg.cn/music/photo_new/T002R300x300M000004D24aB1vZhaq.jpg?max_age=2592000", 
        t.src = "http://ws.stream.qqmusic.qq.com/C400004DghUQ4PidyF.m4a?guid=588788730&vkey=F3A5BB150E7F8F3233980073DD1114551CE13408798865587CB5EFB23A25E43C0C68F88EAC3091E694EC5637C14F34CA6A0EA9F2C849F179&uin=0&fromtag=66", 
        t.play(), t.onPlay(function() {
            console.log("音乐播放开始");
        }), t.onEnded(function() {
            console.log("音乐播放结束"), n.onMusicTap();
        });
    },
    onLoad: function() {
        this.onMusicTap();
    }
});