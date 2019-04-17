Page({
  data: {


    array2: [
      {


        imgArr2:
          '../../image/3.jpg',
        head2: '养花的100种小技巧',
        number2: '100'

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
    var that = this;
    wx.request({

      url: "http://localhost:8080/garden/recommendTech",


      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        that.setData({
          techlist: res.data
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }



})
