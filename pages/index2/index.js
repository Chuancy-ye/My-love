var a = getApp();

Page({
    data: {
        motto: "永远在一起呀， 王馨可",
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
        var o = this;
        a.globalData.userInfo ? this.setData({
            userInfo: a.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? a.userInfoReadyCallback = function(a) {
            o.setData({
                userInfo: a.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(e) {
                a.globalData.userInfo = e.userInfo, o.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(o) {
        console.log(o), a.globalData.userInfo = o.detail.userInfo, this.setData({
            userInfo: o.detail.userInfo,
            hasUserInfo: !0
        });
    }
});