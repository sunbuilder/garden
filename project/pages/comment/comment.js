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
    var index = e.target.dataset.index;
    var array = this.data.array;
    //移除列表中下标为index的项
    array.splice(index, 1);
    //更新列表的状态
    this.setData({
      array: array
    });
  },

})