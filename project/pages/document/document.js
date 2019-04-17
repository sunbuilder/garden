

Page({
  data: {
    showDialog: false,
    items: [
     
      {name: '耐阴', value: '耐阴' },
      {name: '散光', value: '散光' },
      { name: '半日照', value: '半日照' },
      { name: '全日照', value: '全日照' },
    
     ],
    items1: [

      { name: 'hhh', value: 'hhh' },
      { name: '散光', value: '散光' },
      { name: '半日照', value: '半日照' },
      { name: '全日照', value: '全日照' },

    ]
     

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
  },
  /*点击变色*/
  click: function (e) {
    var id = e.currentTarget.dataset.id
    var id1 = e.currentTarget.dataset.id1
    var that = this
    that.setData({
      id: id,
       id1: id1
    })
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      value: '未填写',
      value1: '天蝎'
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      value: e.detail.value,
      value1: e.detail.value1
    })
    console.log(this.data.value, this.data.value1)
  },
  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value, e.detail.value1)
    var that = this
    that.setData({
      value: e.detail.value,
      value1: e.detail.value1
    })
    console.log(this.data.value, this.data.value1 )
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  freeBack: function () {
    var that = this
    if (this.data.value == 'show') {
      wx.showModal({
        title: '提示',
        content: '你没有选择任何内容',
      })
    }
    that.setData({
      showDialog: !this.data.showDialog
    })
  },
  freetoBack: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '你没有选择任何内容',
    })
    that.setData({
      showDialog: !this.data.showDialog,
      value: 'show',
      checked: false,
    })
  }
 
})

