Page({

  data: {
    photos: ""
  },
  uploadImg: function (e) {
    var that = this
    var msg;
    wx.uploadFile({
      url: 'http://localhost:8080/garden/createDiarylog', //仅为示例，非真实的接口地址
      filePath: that.data.photos[0],
      name: 'file',
      formData: {

        "logDescription": e.detail.value.description,
        "logDiaryid": wx.getStorageSync("diaryid")
      },
      header: {
        'content-type': 'multipart/form-data'
      },
      success: function (res) {
          if(res.data=="ok"){
            wx.reLaunch({
              url: '../index/index',
            })
          }

      },

    })
  }
  ,
  chooseImg: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          photos: tempFilePaths
        })
        console.log(that.data.photos)
      }
    })
  }
})
