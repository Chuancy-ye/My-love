var t = 1;

Page({
    data: {
        password: "",
        username: "王小明"
    },
    passWdInput: function(t) {
        this.setData({
            password: t.detail.value
        });
    },
    userNameInput: function(t) {
        this.setData({
            username: t.detail.value
        });
    },
    server: function() {
        var o = this.data.username, e = this.data.password;
        return "" == o ? (wx.showToast({
            title: "请输入户主名"
        }), !1) : "王小明" != o && "该溜子da王" != o && "王馨可" != o ? (wx.showToast({
            title: "错误的户主名"
        }), !1) : "" == e ? (wx.showToast({
            title: "请输入密码"
        }), !1) : "1314" != e ? ("971011" == e ? (console.log("用户名：" + this.data.username + " 密码：" + e), 
        wx.showLoading({
            title: "自行退回主页"
        })) : "981004" == e ? (console.log("用户名：" + this.data.username + " 密码：" + e), wx.showToast({
            title: "你还记得啊"
        })) : "520" == e ? (console.log("用户名：" + this.data.username + " 密码：" + e), wx.showToast({
            title: "我爱你"
        })) : "521" == e ? (console.log("用户名：" + this.data.username + " 密码：" + e), wx.showToast({
            title: "还想看啊？"
        })) : "5201314" == e ? (console.log("用户名：" + this.data.username + " 密码：" + e), wx.showToast({
            title: "我爱你一生一世"
        })) : (console.log("用户名：" + this.data.username + " 密码：" + e), (t += 1) >= 5 ? t < 6 ? wx.showToast({
            title: "密码是四位数"
        }) : e < 1314 ? wx.showToast({
            title: "数字小了"
        }) : e > 1314 ? wx.showToast({
            title: "数字大了"
        }) : wx.showToast({
            title: "知道啦"
        }) : wx.showToast({
            title: "再猜猜"
        })), !1) : (console.log("用户名：" + this.data.username + " 密码：" + e), wx.showLoading({
            title: "欢迎回来"
        }), this.setData({
            password: ""
        }), wx.showActionSheet({
            itemList: [ "去主静脉", "去左心房", "去右心房" ],
            success: function(t) {
                console.log(t.tapIndex), 2 == t.tapIndex ? wx.showModal({
                    title: "去右心房",
                    content: "准备好了嘛",
                    showCancel: !0,
                    cancelText: "再选选",
                    cancelColor: "skyblue",
                    confirmText: "冲冲冲",
                    confirmColor: "skyblue",
                    success: function(t) {
                        t.cancel || wx.navigateTo({
                            url: "../guodu/index"
                        });
                    },
                    fail: function(t) {},
                    complete: function(t) {}
                }) : 1 == t.tapIndex ? wx.showModal({
                    title: "去左心房",
                    content: "先去右心房，谢谢！",
                    showCancel: !0,
                    cancelText: "好的",
                    cancelColor: "skyblue",
                    confirmText: "没问题",
                    confirmColor: "skyblue",
                    success: function(t) {
                        t.cancel;
                    },
                    fail: function(t) {},
                    complete: function(t) {}
                }) : wx.showModal({
                    title: "去主静脉",
                    content: "确定要去主静脉？",
                    showCancel: !0,
                    cancelText: "再选选",
                    cancelColor: "skyblue",
                    confirmText: "是",
                    confirmColor: "skyblue",
                    success: function(t) {
                        t.cancel || wx.navigateTo({
                            url: "../index/index"
                        });
                    },
                    fail: function(t) {},
                    complete: function(t) {}
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        }), void setTimeout(function() {
            wx.hideLoading(), wx.navigateTo();
        }, 1e3));
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {}
});