Page({
  data: {

    array: [
      {

        version: '养花的方法',
        time: '2019.4.11 9.26',
        imgArr:
          '../../image/3.jpg',
        comment: '30',
        like: '100'

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
  onLoad: function () {
    wx.request({
      url: url,
      data: {

        'version': version,//文章标题
        'imgArr': imgarr,  //封面
        'time': time,//时间
        'comment': comment,//浏览次数
        'like': like //点赞



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