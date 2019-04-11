Page({
  data:{
    imgUrls:[
      '../../image/1.jpg',
      '../../image/3.jpg',
      '../../image/9.jpg'
    ], imgArr: [
     
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
  onShow() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(3, 3).rotate(360).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(45).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale() {
    // 旋转同时放大
    this.animation.rotate(90).scale(1, 1).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale() {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(1, 1).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate() {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(1, 1).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
}

)
