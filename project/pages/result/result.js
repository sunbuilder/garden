Page({
  uhide: false,
  data: {
    array1: [
      {


      imgArr2:
        '../../image/3.jpg',
      head2: '养花的100种小技巧',
      number2: '100',
     

    },
      {
    imgArr2:
      '../../image/12.jpg',
    head2: '养花的100种小技巧',
    number2: '100',
    

  }
  ,
  {
    imgArr2:
      '../../image/10.jpg',
    head2: '养花的100种小技巧',
    number2: '100',



  }
    ],

    array2: [
      {


       
        time: '2019.4.11 13.55',
        id: '牡丹',
        imgArr: '../../image/10.jpg'

      },
      {
        
         time: '2019.4.11 13.55',
        id: '牡丹',
        imgArr: '../../image/12.jpg'

      }
      ,
      {
        time: '2019.4.11 13.55',
        id: '牡丹',
        imgArr: '../../image/10.jpg'


      }
    ]
    
  },

  onLoad: function (e) {
    var that=this;
    wx.request({
      url: getApp().globalData.path + "search" + getApp().globalData.path2,
      method:"post",
      data: {
searchword:e.word

      },
      header:{
        'content-type':'application/json'
      },
      success: function (res) {
        console.log(res)
       that.setData({
         techlist:res.data.techlist,
         plantlist:res.data.plantlist
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
    var that = this;
    wx.request({
      url: getApp().globalData.path + "search" + getApp().globalData.path2,
      method: "post",
      data: {
        searchword: key

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          techlist: res.data.techlist,
          plantlist: res.data.plantlist
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  //搜素时触发，调用search: function (key)，传入输入的e.detail.value值
  wxSearchInput: function (e) {
    this.search(e.detail.value);
  }
  ,

  toggleBtn: function () {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    if (toggleBtnVal) {
      that.setData({
        uhide: false
      })
    } else {
      that.setData({
        uhide: true
      })
    }
    
  }
  ,
  toggleBtn1: function () {
    var that = this;
    var toggleBtnVal = that.data.uhide1;
    if (toggleBtnVal) {
      that.setData({
        uhide1: false
      })
    } else {
      that.setData({
        uhide1: true
      })
    }
  }

})
