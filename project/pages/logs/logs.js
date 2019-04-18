//logs.js
const app = getApp()

Page({
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },
  //事件处理函数
  bindViewTap: function () {
    //wx.showModal({
    // title: '测试',
    // content: '测试文字',
    // success(res){
    // if(res.confirm){
    //   wx.navigateTo({
    //   url:'../talk/talk'
    //  })
    // }
    //}
    //})

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })


  },
  onLoad: function () {
    console.log(wx.getStorageSync("userInfo"))
    if (wx.getStorageSync("userInfo")) {
      this.setData({
        userInfo: wx.getStorageSync("userInfo"),
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  getUserInfo: function (e) {

    wx.setStorageSync("userInfo", e.detail.userInfo)
    console.log(e.detail.userInfo.avatarUrl)
    console.log(wx.getStorageSync("openid"))
    console.log(e.detail.userInfo.nickName)
    wx.request({
      url: getApp().globalData.path + 'addUserImageUrl' + getApp().globalData.path2,
      data: {
       userImage: e.detail.userInfo.avatarUrl,
        userid: wx.getStorageSync("openid"),
       userName:e.detail.userInfo.nickName
      },
      header:{
        'content-type': 'application/json'},
      method:"POST",
      success: function (res) {
console.log(res.data)

      }
    })

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
