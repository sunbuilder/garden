Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    imgArr: [
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182236559-1327605945.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182250298-497034468.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182305644-1789918961.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182323329-1304534958.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182340135-193336783.jpg',       
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182356657-243811745.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182418664-246032430.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182435804-1440141718.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182454633-208795874.jpg',
      'https://img2018.cnblogs.com/blog/1238131/201904/1238131-20190403182509903-262101227.jpg'
    ]
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:8080/garden/myDiaryList.action',
      data: {
        'imgArr': imgarr    //相册图片

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
