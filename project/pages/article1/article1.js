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
        time:'2019.4.13',title: '新手养花小技巧', img: '../../image/3.jpg', desc: '很多刚养花的朋友总是比较苦恼，花卉莫名养着养着就死掉了，成了一名养花杀手，不是把花卉浇死就是，施肥不当导致花卉生长不佳，花卉养活了还容易出现叶黄、徒长等等情况，下面跟大家总结了几条新手养花的技巧，希望对大家有帮助。\n1.适应本地环境的花卉\n新手养花最好选择那些能够适应本地气候的花卉，北花南种、南花北种都有一定的难度，不太建议新手养花的朋友去种植，刚开始养花选择一些比较容易养，能够适应本地气候的盆栽，最好不要购买太小的花苗，买一些健康的成株最好。\n2.了解花卉的习性\n刚买回家的花卉我们要了解它的原生地的环境，对温度、光照、湿度的需求，从而能够有针对性的进行养护，根据花卉对光照的不同选择摆放到家中不同的位置，喜光的花卉要摆放到离窗子比较近的地方，喜阴的花卉要摆放到散射光的环境中，不要光照直射。\n3.新买花卉要先缓苗\n刚买回家的盆栽，要放到家中光线明亮的地方，又晒不到太阳的地方放几天，然后再根据花卉的习性进行养护，刚买回不要着急对花卉换盆换土，让其适应家中的环境之后再正常养护。\n4.不能养护过勤\n大多数花草的死亡都是跟浇水过多有关系，想要将花卉养好，先养好根，浇花的时候一般按照“见干见湿、干透浇透、不干不浇”为原则，切忌浇水过多，造成盆土积水，这样就非常容易造成植物烂根的情况。用自来水浇花，要先晾晒两天，浇花的时候尽量不要让水粘到叶片上，尤其是夜间。\n5.施肥\n植物能够从空气和土壤中获取生长所需的水分和矿物质，并能通过光照获得能力和养分，很多花卉对肥料的需求没有那么高，几个月不施肥也能够健康生长，施肥浓度过高过频繁都容易将植物“烧死”，新手施肥要掌握“薄肥勤施”的原则。' },
      { title: '我是产品名称2', img: '../../image/10.jpg', desc: '产品2非常好，balabala~~~' },
      { title: '我是产品名称3', img: '../../image/12.jpg', desc: '产品3非常好，balabala~~~' },
      { title: '我是产品名称4', img: '../../image/12.jpg', desc: '产品3非常好，balabala~~~' },
      { title: '我是产品名称5', img: '../../image/12.jpg', desc: '产品3非常好，balabala~~~' },
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

