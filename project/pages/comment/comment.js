var app = getApp()
Page({
  data: {
    array: [
      {
        id: '校长',
        time: '2019.4.11 16.22',
        version: '今天天气好',
        photo: '../../image/3.jpg',
        write: '必看！2019年购物新模式',
        imgArr: '../../image/27.jpg'

      },
    ],
    comment: [],
    hiddenmodalput: true,
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
  },
  //点击按钮痰喘指定的hiddenmodalput弹出框
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/garden/findMyCommentByDynamicId',
      data: {
        'dynamic_userid': wx.getStorageSync("openid")
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          comment: res.data
        })
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  //点击删除按钮事件
  delItem: function (e) {
    //获取列表中要删除项的下标
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定要此回复吗？',
      success: function (sm) {
        var they = that
        if (sm.confirm) {
          wx.request({
            url: 'http://localhost:8080/garden/delCommentByCommentId',
            data: {
              'comment_id': index
            },
            method: 'post',
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              if (res.data == "ok") {
                wx.showToast({
                  title: '删除成功',
                })
                var comment = they.data.comment;
                comment.splice(e.currentTarget.dataset.index, 1)
                they.setData({
                  comment: comment
                });
              } else {
                wx.showToast({
                  title: '删除失败',
                })
              }
            }
          })
        }
      }
    })
  },
})