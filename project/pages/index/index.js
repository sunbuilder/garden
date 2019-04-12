Page({
  data:{
    imgUrls:[
      '../../image/1.jpg',
      '../../image/3.jpg',
      '../../image/9.jpg'
    ],
    array1: [
      {
        
        imgArr1:
          '../../image/p2.png'

      },
      {
       
        imgArr1:
          '../../image/p1.png'

      }
    ],
    array:[
      {
        month:'5月',
        date:'3日',
        version:'今天天气好',
        imgArr: 
'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182509903-262101227.jpg'
      
      },
      {
        month: '5月',
        date: '3日',
        version: '今天天气好',
        imgArr:
          'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182509903-262101227.jpg'

      }
    ]
  },
  onLoad: function () {
    wx.request({
      url: url,
      data: {
        'month':month,  //月
        'date':date,    //日
        'version':version,//日记内容
        'imgArr':imgarr    //图片
        
        

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



