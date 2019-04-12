var app = getApp()
Page({
  data: {
    array: [
      {
       version:'必看！2019年种花新模式',
        imgArr: '../../image/3.jpg'

      },
      {
        version: '必看！2019年种花新模式',
        imgArr: '../../image/24.jpg'


      }
    ]
  },
  onLoad: function () {
    wx.request({
      url: url,
      data: {
      
        'imgArr': photo,    //文章封面

        'version': write   //文章标题



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