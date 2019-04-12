var app = getApp()
Page({
  data: {
    array: [
      {
        id: '校长',
        time: '2019.4.11 16.22',
        version: '今天天气好',
        photo: '../../image/3.jpg',
        write:'必看！2019年购物新模式',
        imgArr: '../../image/27.jpg'

      },
      {
        id: '校长',
        time: '2019.4.11 16.22',
        version: '今天天气好',
        photo: '../../image/3.jpg',
        write: '必看！2019年购物新模式',
        imgArr: '../../image/27.jpg'


      }
    ],
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
    wx.request({
      url: url,
      data: {
        'id': id,  //用户名
        'time': time,  //时间
        'photo':photo,    //文章封面
        'version': version,   //评论内容
        'imgArr': imgArr,   // 头像
        'write':write   //文章标题



      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }

})