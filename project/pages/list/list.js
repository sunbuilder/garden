Page({
  data: {
    uhide: false,
   
   
    array2: [
      {

        
        imgArr2:
          '../../image/17.jpg',
        head2:'新手养花小技巧',
        number2:'2030'

      },
      {
        imgArr2:
          '../../image/12.jpg',
        head2: '这样养殖让花开更美',
        number2: '2030'

      }
      ,
      {
        imgArr2:
          '../../image/5.jpg',
        head2: '最不起眼的养花小技巧',
        number2: '2030'

      }
    ],
    brand: [
      {

        imgArr1:
          '../../image/3.jpg'

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
      url: getApp().globalData.path + 'randowPlant' + getApp().globalData.path2,
      success:function(res){
        that.setData({
          plantlist:res.data,
          list:wx.getStorageSync("history")
        })
      }
    })
    wx.request({
      url: getApp().globalData.path + 'recommendTech' + getApp().globalData.path2,
      success: function (res) {
          console.log(res.data)
        that.setData({
          techlist: res.data
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }

,
  //搜索方法 key为用户输入的查询字段
  search: function (key) {
    /*console.log('搜索函数触发')*/
    var list=[{}];
    if(wx.getStorageSync("history")){
      list = wx.getStorageSync("history");
      if(list.length==6){
        list.splice(0,1)
      }
      list.push({text:key});
      wx.setStorageSync("history", list)
    }else{
      list.push({text: key})
      wx.setStorageSync("history", list);
    }
    var that = this;
    wx.navigateTo({
      url: "../result/result?word=" + key,
    })
  
  },
//搜素时触发，调用search: function (key)，传入输入的e.detail.value值
wxSearchInput: function (e) {

   this.setData({
     word:e.detail.value
   })
    
  },
  historySearch:function(res){
    this.search(res.currentTarget.dataset.text)
  }
  ,
wxSearchFn : function() {

  this.search(this.data.word);
  },
 
  //切换隐藏和显示
  toggleBtn: function () {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    if (toggleBtnVal) {
      that.setData({
        uhide: false
      })
    } else {
      that.setData({
        uhide: true,
        list:wx.getStorageSync("history")
      })
    }
  },

 
})
