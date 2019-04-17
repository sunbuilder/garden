var app = getApp()

Page({
  data: {

  },
  clickImg: function () {
    var me = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        me.setData({ imgUrl: res.tempFilePaths })

      },
    })
  },

  clickImg: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: ((res) => {
        this.setData({ imgUrl: res.tempFilePaths })

      })
    })
      , wx.chooseImage({
        success: function (res) {
          var tempFilePaths = res.tempFilePaths
          wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res) {
              var data = res.data
              //do something
            }
          })
        }
      })

  },
  reg: function (e) {
    wx.request({
      url: 'url',
      data: {
        'imgArr': e.detail.value.imgArr,
        'name': e.detail.value.name,
        'space': e.detail.value.space,
        'mode': e.detail.value.mode,
        'city': e.detail.value.city,
        'sun': e.detail.value.sun,
        'turang': e.detail.value.turang,
        'rain': e.detail.value.rain,
        'time': e.detail.value.time
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    });

    wx.showToast({
      title: "成功",
      icon: "success",
      duration: 2000
    });
  }


})