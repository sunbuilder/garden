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
        time:'2019.4.13',title: '风信子', number:'2030',img: '../../image/17.jpg', desc: '测试1' },
      {
        time: '2019.4.13', title: '这样养殖花开的更好', number: '2030', img: '../../image/12.jpg', desc: '测试2' },
      {
        time: '2019.4.14', title: '最不起眼的养花小技巧', number:'2030', img: '../../image/5.jpg', desc: '测试3' },
     
    ]
  },
  onLoad: function (options) {
    var that=this;
    var goodsId = options.goodsId;
    wx.request({
      url: getApp().globalData.path + 'getPlantById'+ getApp().globalData.path2,
      header: {'content-type': 'application/x-www-form-urlencoded'},
      data:{
        id:goodsId,
        userid:wx.getStorageSync("openid")
      },
    
     
     success:function(res){

      if(res.data.collect=="true"){
        that.setData({
          isCollected:true,
          plant: res.data.plant
        });
      }else{
        that.setData({
          plant: res.data.plant
        });
      }
     
     }
    })

    
  },
  handleCollection() {
    var that=this;
    let isCollected = !this.data.isCollected
    wx.request({
      url: getApp().globalData.path + 'collectPlant'  + getApp().globalData.path2,
      data:{
        userid:wx.getStorageSync("openid"),
        plantid: that.data.plant.plantId
      },
      success:function(res){
        if(res.data="ok"){
          that.setData({
            // 下面本来是这样子的:isCollected=isCollected,可以简写
            isCollected
          })
        }
    }
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

