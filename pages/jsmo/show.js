module.exports = {
    biao: function() {
        wx.showActionSheet({
            itemList: [ "去主静脉", "去左心房", "去右心房" ],
            success: function(n) {
                console.log(n.tapIndex), 2 == n.tapIndex ? wx.showModal({
                    title: "去右心房",
                    content: "确定要去右心房？",
                    showCancel: !0,
                    cancelText: "再选选",
                    cancelColor: "skyblue",
                    confirmText: "是",
                    confirmColor: "skyblue",
                    success: function(n) {
                        n.cancel || wx.navigateTo({
                            url: "../index/index"
                        });
                    },
                    fail: function(n) {},
                    complete: function(n) {}
                }) : 1 == n.tapIndex ? wx.showModal({
                    title: "去左心房",
                    content: "确定要去左心房？",
                    showCancel: !0,
                    cancelText: "再选选",
                    cancelColor: "skyblue",
                    confirmText: "是",
                    confirmColor: "skyblue",
                    success: function(n) {
                        n.cancel || wx.navigateTo({
                            url: "../index/index"
                        });
                    },
                    fail: function(n) {},
                    complete: function(n) {}
                }) : wx.showModal({
                    title: "去主动脉",
                    content: "确定要去主动脉？",
                    showCancel: !0,
                    cancelText: "再选选",
                    cancelColor: "skyblue",
                    confirmText: "是",
                    confirmColor: "skyblue",
                    success: function(n) {
                        n.cancel || wx.navigateTo({
                            url: "../index/index"
                        });
                    },
                    fail: function(n) {},
                    complete: function(n) {}
                });
            },
            fail: function(n) {
                console.log(n.errMsg);
            }
        });
    }
};