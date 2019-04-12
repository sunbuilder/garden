var app = getApp()
Page({
  data: {
    id:[
        '小明'
        ],
    head:[
      '../../image/27.jpg'
    ],
    time:[
      '2910.4.11 17.41'
    ],
    version:[
      '今天天气真好'
    ],
    imgArr: [
      '../../image/16.jpg',
      '../../image/10.jpg',
      '../../image/12.jpg'
    ],
    comment:[
      '20'
    ],
    like:[
      '10'
      ],

    
    array: [
      {
        ids: '校长',
        date: '2019.4.11 16.22',
        write: '今天天气好',
        comments:'20',
        likes:'18',
        heads:'../../image/27.jpg'

      },
      {
        ids: '校长',
        date: '2019.4.11 16.22',
        write: '今天天气好',
        comments: '20',
        likes: '18',
        heads: '../../image/27.jpg'

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
        'time':time,  //时间
        'head':head,    //头像
        'version':version,   //动态内容
        'imgArr':imgArr,   // 图片
        'comment':comment,  //评论数量
        'like':like,   //点赞数量
        'ids':ids,   //评论者的用户名
        'date': date,    //评论者的时间
        'heads':heads,   //评论者的头像
        'write':write,   //评论内容
        'comments':comments,  //评论的评论数
        'likes':likes     //评论的点赞数



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