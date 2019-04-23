Page({
  data: {
    goodsList: [
      {
        time: '2019.4.11 13.55',
        version: '今天天气好',
        id: '小明',
        head: '../../image/28.jpg',
        see: '20',
        comment: '10',
        like: '20',
        collected: 0
      }
    ],
    dynamic:[]
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
    var that = this;
    wx.request({
      url:'http://localhost:8080/garden/findDynamicByUserId',
      data: {
        'dynamic_userid': wx.getStorageSync("openid")
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          dynamic: res.data
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
//点击删除按钮事件
  delItem: function (e) {
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var goodsList = this.data.goodsList;
    //移除列表中下标为index的项
    goodsList.splice(index, 1);
    //更新列表的状态
    this.setData({
      goodsList: goodsList
    });
  },


})

