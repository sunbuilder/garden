Page({
  data: {
        imgArr: [
        ]
     ,

    goodsList: [
    ]
  },
  // 更改点赞状态
  onCollectionTap: function (event) {
    // 获取当前点击下标
    var index = event.currentTarget.dataset.index;
    // data中获取列表
    var message = this.data.goodsList;
    for (let i in message) { //遍历列表数据
      if (i == index) { //根据下标找到目标
        var collectStatus = false
        if (message[i].collected == 0) { //如果是没点赞+1
          collectStatus = true
          message[i].collected = parseInt(message[i].collected) + 1
          message[i].like = parseInt(message[i].like) + 1
          
        } else {
          collectStatus = false
          message[i].collected = parseInt(message[i].collected) - 1
          message[i].like = parseInt(message[i].like) - 1
        }
        
        wx.showToast({
          title: collectStatus ? '点赞成功' : '取消点赞',
        })
      }
    }
    this.setData({
      goodsList: message
    })
  },

  onLoad: function () {
    var that=this;
    wx.request({
      url: 'http://localhost:8080/garden/selectDynamic',
      data: {
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          goodsList: res.data
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }
  

})


