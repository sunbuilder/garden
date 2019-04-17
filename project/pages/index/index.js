Page({
  data: {
    length: 0,
    imgUrls: [
      '../../image/1.jpg',
      '../../image/3.jpg',
      '../../image/9.jpg'
    ],
    array1: [
      {

        imgArr1:
          '../../image/p2.png'

      },
      {

        imgArr1:
          '../../image/p1.png'

      }
    ],


  },
  getMsg: function (event) {
    var id = event.currentTarget.dataset.diaryid;

    wx.navigateTo({
      url: '../detail/detail?diaryid=' + id,
    })
  }
  ,
  change: function (event) {
    var id = event.currentTarget.dataset.diaryid;

    wx.setStorageSync("diaryid", id);
    var that = this;
    wx.request({
      url: getApp().globalData.path + 'getLoglist.action' + getApp().globalData.path2, //仅为示例，并非真实的接口地址
      data: {
        "diary": {
          "diaryId": id
        }
      },
      method: "post",
      header: {
        'content-type': 'application/json'
      },
      success: function (cos) {
        console.log(cos.data)
        that.setData({
          logList: cos.data
        })
      },

    })
  }
  ,


  onLoad: function (msg) {
    if(msg.msg)
    wx.showToast({
      title: msg.msg,
      icon: 'success',
      duration: 1000
    })

    var openid = wx.getStorageSync("openid");

    if (openid.length == 0) {
      console.log(getApp())
      wx.login({
        success(res) {

          if (res.code) {
            // 发起网络请求
            wx.request({
              url: getApp().globalData.path + 'http://192.168.31.153:8080/garden/login' + getApp().globalData.path2,
              data: {
                code: res.code

              },

              success: function (co) {
                openid = co.data;
                wx.setStorageSync("openid", co.data);
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)

          }
        }
      })

    }
    var that = this;
    wx.request({
      url: getApp().globalData.path + "index" + getApp().globalData.path2,
      data: {

        "userId": wx.getStorageSync("openid")

      },
      method: 'get',

      success: function (res) {

        wx.setStorageSync("diaryid", res.data[0].diary.diaryId);
        console.log(res.data)
        that.setData({
          diaryList: res.data,
          logList: res.data[0].logList
        })

      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }



})



