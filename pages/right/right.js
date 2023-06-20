var n = [ "本来叶富贵想写成一个记录本", "\n\n但是他发现工作量太大", "\n\n并且某些创意被‘扯犊子da王’抄袭", "\n\n所以这部分功能隐藏", "临时修改成一个问题", "\n\n假如你是叶富贵", "你会想什么样的王馨可？？？", "\n\n三秒钟思考" ], e = [], o = -1;

Page({
    data: {
        text: "你好，我是叶富贵的右心房。",
        array: [ 0 ]
    },
    add: function(n) {
        o += 1, this.adline(), o > 10 && wx.showActionSheet({
            itemList: [ "喜欢她甜甜的口红", "喜欢她淡雅的体香", "喜欢听她动听的声线" ],
            success: function(n) {
                console.log(n.tapIndex), 0 == n.tapIndex ? wx.showModal({
                    title: "兑奖已结束",
                    content: "获得叶富贵精选口红一支",
                    showCancel: !0,
                    cancelText: "再选选",
                    cancelColor: "skyblue",
                    confirmText: "谢谢富贵",
                    confirmColor: "skyblue",
                    success: function(n) {
                        n.cancel || (console.log("口红发货"), wx.reLaunch({
                            url: "../guodu2/index"
                        }));
                    },
                    fail: function(n) {},
                    complete: function(n) {}
                }) : 1 == n.tapIndex ? (console.log("香水发货"), wx.showModal({
                    title: "仅供娱乐",
                    content: "获得叶富贵独特品味香水一瓶",
                    showCancel: !0,
                    cancelText: "不能反悔",
                    cancelColor: "skyblue",
                    confirmText: "好滴",
                    confirmColor: "skyblue",
                    success: function(n) {
                        n.cancel, wx.reLaunch({
                            url: "../guodu2/index"
                        });
                    },
                    fail: function(n) {},
                    complete: function(n) {}
                })) : wx.showModal({
                    title: "明年再来",
                    content: "获得叶富贵zhenchang耳机一副",
                    showCancel: !0,
                    cancelText: "还想看看",
                    cancelColor: "skyblue",
                    confirmText: "好啊",
                    confirmColor: "skyblue",
                    success: function(n) {
                        n.cancel || (console.log("耳机发货"), wx.reLaunch({
                            url: "../guodu2/index"
                        }));
                    },
                    fail: function(n) {},
                    complete: function(n) {}
                });
            },
            fail: function(n) {
                console.log(n.errMsg);
            }
        });
    },
    adline: function(c) {
        e.push(n[o]), this.setData({
            text: e
        });
    },
    remove: function(n) {
        e.length > 0 && (e.pop(), this.setData({
            text: "你好，我是叶富贵的右心房。\n" + e.join("\n")
        }));
    }
});