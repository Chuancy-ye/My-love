var o = getApp();

Page({
    data: {
        motto: "你好呀， 王馨可",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    bindViewTap2: function() {
        wx.navigateTo({
            url: "../biao/biao"
        });
    },
    onLoad: function() {
        var n = this;
        this.onMusicTap(), o.globalData.userInfo ? this.setData({
            userInfo: o.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? o.userInfoReadyCallback = function(o) {
            n.setData({
                userInfo: o.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(e) {
                o.globalData.userInfo = e.userInfo, n.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(n) {
        console.log(n), o.globalData.userInfo = n.detail.userInfo, this.setData({
            userInfo: n.detail.userInfo,
            hasUserInfo: !0
        });
    },
    onMusicTap: function() {
        var o = this, n = wx.getBackgroundAudioManager();
        n.title = "《I Found the Love》", n.epname = "I Found the Love", n.singer = "KOKIA", 
        n.coverImgUrl = "https://y.gtimg.cn/music/photo_new/T002R300x300M000004D24aB1vZhaq.jpg?max_age=2592000", 
        n.src = "http://music.163.com/song/media/outer/url?id=35447756", n.play(), n.onPlay(function() {
            console.log("音乐播放开始");
        }), n.onEnded(function() {
            console.log("音乐播放结束"), o.onMusicTap();
        });
    }
});