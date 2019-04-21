var typelist = require("skilltype.js")
Page({
  data: {
    plantlist: '',
    array2: [
      {


        imgArr2:
          '../../image/17.jpg',
        head2: '风信子',
        from: '小明'

      },
      {
        imgArr2:
          '../../image/12.jpg',
        head2: '月季',
        from: '小明'

      }
      ,
      {
        imgArr2:
          '../../image/5.jpg',
        head2: '梅花',
        from: '小明'

      }
    ],
  },
  change: function (event) {
    var type = event.currentTarget.dataset.type;
    var that = this;
    wx.request({
      url: getApp().globalData.path + "getPlantListByType" + getApp().globalData.path2,
      data: {
        type: type
      },
      success: function (res) {
        that.setData({
          plantlist: res.data
        })
      }
    })
  }
  ,
  onLoad: function () {

    var that = this;
    that.setData({
      typelist: typelist.type
    })
    wx.request({
      url: getApp().globalData.path + "getPlantList" + getApp().globalData.path2,

      success: function (res) {

        that.setData({
          plantlist: res.data
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }



})