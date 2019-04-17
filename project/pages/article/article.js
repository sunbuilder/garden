Page({

  data: {
    detailObj: {},
    index: null,
    // 是否收藏
    isCollected: false
  },
  onLoad: function () {
    console.log(getApp().globalData.path)
    var id = wx.getStorageSync("techid");
    var that = this;
    wx.request({

      url: getApp().globalData.path + 'getTechById?techid=' + id + getApp().globalData.path2,

      success: function (res) {
        var date = new Date(res.data.tech.techDate);
        date = date.getFullYear() + "." + date.getMonth() + 1 + "." + date.getDate() + "." + " " + date.getHours() + "." + date.getMinutes();
        res.data.tech.techDate = date;
        console.log(res.data.tech)
        that.setData({
          "tech": res.data.tech
        })
        var they = that;
        wx.request({
          url: getApp().globalData.path + 'findcollection' + getApp().globalData.path2,
          data: {
            "userid": wx.getStorageSync("openid"),
            "techid": wx.getStorageSync("techid")
          },
          success: function (res) {
            they.setData({
              isCollected: !res.data
            })
          }
        })
      }

    }

    )

  }
  ,
  handleCollection() {
    let isCollected = !this.data.isCollected
    console.log(isCollected)
    wx.request({
      url: getApp().globalData.path + 'collectTechById' + getApp().globalData.path2,
      data: {
        "techid": wx.getStorageSync("techid"),
        "userid": wx.getStorageSync("openid"),
        "buer": isCollected
      },
      success: function (res) {
        console.log(res.data)
      }
    })

    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },

})
