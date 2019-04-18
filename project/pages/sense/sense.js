Page({
  data: {

    array2: [
      {


        imgArr2:
          '../../image/17.jpg',
        head2: '风信子',
        from: '小明'

      },
      {
        imgArr2:
          '../../image/12.jpg',
        head2: '月季',
        from: '小明'

      }
      ,
      {
        imgArr2:
          '../../image/5.jpg',
        head2: '梅花',
        from: '小明'

      }
    ],
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