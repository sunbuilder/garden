const app = getApp()
Page({
  data: {
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
      var that = this;
      that.setData({
        details: e.detail.value
      });
    },
    
  },
  //事件处理函数
  bindViewTap: function () {
  

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })


  }

})

