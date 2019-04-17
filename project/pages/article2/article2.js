Page({
  
  data: {
    detailObj: {},
    index: null,
    // 是否收藏
    isCollected: false,
     showTitle: '', //详情页显示标题；
    showImg: '', //详情页显示图片；
    showDesc: '', //详情页显示描述；
    showTime: '',
    showNumber: '',
    //下面是先进行存储的不同产品数据；
    productsList: [
      {
        time:'2019.4.13',title: '新手养花小技巧', number:'2030',img: '../../image/17.jpg', desc: '测试1' },
      {
        time: '2019.4.13', title: '这样养殖花开的更好', number: '2030', img: '../../image/12.jpg', desc: '测试2' },
      {
        time: '2019.4.14', title: '最不起眼的养花小技巧', number:'2030', img: '../../image/5.jpg', desc: '测试3' },
     
    ]
  },
  onLoad: function (options) {
    var goodsId = options.goodsId;
    this.setData({
      showTitle: this.data.productsList[goodsId].title,
      showImg: this.data.productsList[goodsId].img,
      showDesc: this.data.productsList[goodsId].desc,
      showTime: this.data.productsList[goodsId].time,
      showNumber: this.data.productsList[goodsId].number,
    });
  },
  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },//转发
  onShareAppMessage: function () {
  },
  goBack: function () {
    wx.navigateBack({
    });
  },
  showselectregion: function () {
    this.setData({
      isShowSelectAddress: "block"
    })
  }
})

