var typelist=require("skilltype.js")
Page({
  data: {
    plantlist:'',
    array2: [
      {
       id:1,

        imgArr2:
          '../../image/17.jpg',
        head2: '风信子',
        from: '小明'

      },
      {
        id: 2,
        imgArr2:
          '../../image/12.jpg',
        head2: '月季',
        from: '小明'

      }
      ,
      {
        id: 3,
        imgArr2:
          '../../image/5.jpg',
        head2: '梅花',
        from: '小明'

      }
    ],
    lastid:0
  },
//下拉刷新
 loadData:function(lastid){
   var limit=2
   var that=this
   wx.request({
     url: getApp().globalData.path + "getAllPlantList" + getApp().globalData.path2,
     data: {
      
       lastid: lastid,
       limit: limit,
       'version': version,//文章标题
       'imgArr': imgarr,  //封面
       'time': time,//时间
       'comment': comment,//浏览次数
       'like': like //点赞


     },
     success: function (res) {
       var len = res.data.length
       that.setData({ lastid: res.data[len - 1].id })
       var dataArr = that.data.array2
       var newData = dataArrr.concat(res.data);
       that.setData({
         array2: newData
       })
       console.log(res.data)
       that.setData({
         plantlist: res.data
       })
     },
     fail: function (res) {
       console.log(".....fail.....");
     }
   })

 },
  change:function(e){
    var type=e.currentTarget.data.type;
    var that=this;
    wx.request({
      url: getApp().globalData.path + "getPlantListByType" + getApp().globalData.path2,
      data:{
        type=type
      },
      success:function(res){
          that.setData({
            plantlist:res.data
          })
      }
    })
  }
  ,
  onLoad: function () {
 
    var that=this;
    this.loadData(0);
    that.setData({
      typelist: typelist.type
    })
  },
  //下拉刷新
  loadMore: function (event) {
    var id = event.currentTarget.dataset.lastid
    this.loadData(id);
  }

})