var app = getApp()
Page({
  data: {

  }, reg: function () {

  wx.showModal({
    title: '提示',
    content: '确定要删除吗？',
    success: function (sm) {
      if (sm.confirm) {
        // 用户点击了确定 可以调用删除方法了
      } else if (sm.cancel) {
        console.log('用户点击取消')
      }
    }
  })
    wx.request({
      success: reg => {
        console.log(reg.data)
        if (reg.data) {
          wx.navigateTo({
            url: `../pages/index/index` // 希望跳转过去的页面
          })
        }
      }
    })
 
  }
})