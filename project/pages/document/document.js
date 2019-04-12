var app = getApp()
Page({
  data: {
    
  },
  reg: function (e) {
    console.log(e.detail.value);

    wx.showToast({
      icon: "success",
      duration: 2000
    });
  }
})