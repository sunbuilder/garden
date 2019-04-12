Page({
  data: {
    
   
    array2: [
      {

        
        imgArr2:
          '../../image/3.jpg',
        head2:'养花的100种小技巧',
        number2:'100'

      },
      {
        imgArr2:
          '../../image/12.jpg',
        head2: '养花的100种小技巧',
        number2: '100'

      }
      ,
      {
        imgArr2:
          '../../image/10.jpg',
        head2: '养花的100种小技巧',
        number2: '100'

      }
    ],
    array1: [
      {

        imgArr1:
          '../../image/12.jpg'

      },
      {

        imgArr1:
          '../../image/10.jpg'

      }
      ,
      {

        imgArr1:
          '../../image/9.jpg'

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
