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
<<<<<<< HEAD
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
=======
  change:function(event){
    var type = event.currentTarget.dataset.type;
    var that=this;
    wx.request({
      url: getApp().globalData.path + "getPlantListByType" + getApp().globalData.path2,
     data:{
       type:type
     },
      success:function(res){
          that.setData({
            plantlist:res.data
          })
>>>>>>> 92f0ae416caa00d0d8fea26076e37a04d5b4b4c6
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

<<<<<<< HEAD
        that.setData({
          plantlist: res.data
        })
=======
          that.setData({
            plantlist:res.data
          })
>>>>>>> 92f0ae416caa00d0d8fea26076e37a04d5b4b4c6
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }



})
