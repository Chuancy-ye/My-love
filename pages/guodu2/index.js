getApp();

Page({
    data: {},
    server: function() {
        wx.reLaunch({
            url: "../left/left"
        });
    }
});