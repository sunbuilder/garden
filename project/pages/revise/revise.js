

Page({
 
  data: {
    array: ['耐阴', '散光', '半日照', '全日照'],
    objectArray: [
      {
        id: 0,
        name: '耐阴'
      },
      {
        id: 1,
        name: '散光'
      },
      {
        id: 2,
        name: '半日照'
      },
      {
        id: 3,
        name: '全日照'
      }
    ],
    index: 0,

    array1: ['有机肥', '缓解肥', '液体肥'],
    objectArray1: [
      {
        id: 0,
        name: '有机肥'
      },
      {
        id: 1,
        name: '缓解肥'
      },
      {
        id: 2,
        name: '液体肥'
      }
    ],
    index1: 0,

    array2: ['30天', '15天', '7天', '3天', '1天'],
    objectArray2: [
      {
        id: 0,
        name: '30天'
      },
      {
        id: 1,
        name: '15天'
      },
      {
        id: 2,
        name: '7天'
      },
      {
        id: 3,
        name: '3天'
      },
      {
        id: 4,
        name: '1天'
      }
    ],
    index2: 0,

    array3: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    objectArray3: [
      {
        id: 0,
        name: '一月'
      },
      {
        id: 1,
        name: '二月'
      },
      {
        id: 2,
        name: '三月'
      },
      {
        id: 3,
        name: '四月'
      },
      {
        id: 4,
        name: '五月'
      },
      {
        id: 5,
        name: '六月'
      },
      {
        id: 6,
        name: '七月'
      },
      {
        id: 7,
        name: '八月'
      },
      {
        id: 8,
        name: '九月'
      },
      {
        id: 9,
        name: '十月'
      },
      {
        id: 10,
        name: '十一月'
      },
      {
        id: 11,
        name: '十二月'
      },

    ],
    index3: 0,


  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
  ,
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  }
  ,
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  }
  ,
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  }
  ,

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
  },

 
})
