Page({
  data: {
    
        imgArr: [
          '../../image/16.jpg',
          '../../image/10.jpg',
          '../../image/12.jpg'
        ]
     ,
    array: [
      {
        time:'2019.4.11 13.55',
        version: '今天天气好',
        id:'小明',
        head:'../../image/28.jpg',
        see:'20',
        comment:'10',
        like:'20'

      },
      {
        time: '2019.4.11 13.55',
        version: '今天天气好',
        id: '小明',
        head: '../../image/27.jpg',
        see: '20',
        comment: '10',
        like: '20'

      }
    ]
  },
  onLoad: function () {
    wx.request({
      url: url,
      data: {
        'time': time,  //时间
        'id': id,    //用户名
        'version': version,//动态内容
        'head':head,    //头像
        'see':see,     //浏览次数
        'comment':comment,  //评论次数
        'like':like,  //点赞次数
        'imgArr': imgarr    //动态图片



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



