var techType = require("skilltype.js");
Page({
  data: {
    
    array: [
      {
       
        version: '养花的方法',
        time:'2019.4.11 9.26',
        imgArr:
          '../../image/3.jpg',
          comment:'30',
          like:'100'

      },
      {
        version: '养花的方法',
        time: '2019.4.11 9.26',
        imgArr:
          '../../image/10.jpg',
        comment: '30',
        like: '100'

      }
    ]
  },
  getArticle: function (event) {
    var type = event.currentTarget.dataset.techtype;
    wx.setStorageSync("techtype", type);

    var that = this;
    wx.request({
      url: getApp().globalData.path + 'getAllTechnique?type=' + type,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        for (var i = 0; i < res.data.length; i++) {
          var date = new Date(res.data[i].tech.techDate);
          date = date.getFullYear() + "年" + date.getMonth() + 1 + "月" + date.getDate() + "日" + " " + date.getHours() + "," + date.getMinutes();
          res.data[i].tech.techDate = date;
        }

        that.setData({
          "tech": res.data,
          "techType": techType.type
        })
      }
    })
  },
  onLoad: function () {
    var type = wx.getStorageSync("techtype");
    console.log(type)
    var that = this;
    wx.request({
      url: getApp().globalData.path + 'getAllTechnique?type=' + type + getApp().globalData.path2,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        for (var i = 0; i < res.data.length; i++) {
          var date = new Date(res.data[i].tech.techDate);
          date = date.getFullYear() + "年" + date.getMonth() + 1 + "月" + date.getDate() + "日" + " " + date.getHours() + "," + date.getMinutes();
          res.data[i].tech.techDate = date;
        }

        that.setData({
          "tech": res.data,
          "techType": techType.type
        })
    
      }
    })

  }


  ,
  techdescription: function (event) {
    var id = event.currentTarget.dataset.techid;
    wx.setStorageSync("techid", id);
   
  }

})