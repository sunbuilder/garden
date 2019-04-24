var app = getApp()
Page({
  bindblur: function(e) {
    console.log(e.detail.value)
    bindblur = e.detail.value;
  },

  data: {

    dynamic: [],
    pointnum:[],
    commentnum:[],

    like: ['10'],
    collected1: [0],

    comment:[],
    hiddenmodalput: true,
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
  },
  // 更改点赞状态
  onCollectionTap: function(event) {
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
          message[i].likes = parseInt(message[i].likes) + 1
        } else {
          collectStatus = false
          message[i].collected = parseInt(message[i].collected) - 1
          message[i].likes = parseInt(message[i].likes) - 1
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




  //点击按钮痰喘指定的hiddenmodalput弹出框
  modalinput: function() {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮
  cancel: function() {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function() {
    this.setData({
      hiddenmodalput: true
    })
  },


  onLoad: function(options) {
    console.log(options)
    var that = this
    var thats = this
    //根据动态id查询详细动态
    wx.request({
      url: 'http://localhost:8080/garden/findDynamicByDynamicId',
      data: {
        "dynamic_id": options.dynamic_id
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          dynamic: res.data
        })
      },
      fail: function(res) {
        console.log(".....fail.....");
      }
    })

    //根据动态id查询评论
    wx.request({
      url: 'http://localhost:8080/garden/findCommentByDynamicId',
      data: {
        "dynamic_id": options.dynamic_id
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        thats.setData({
          comment: res.data
        })
      },
      fail: function(res) {
        console.log(".....fail.....");
      }
    })
  }

})