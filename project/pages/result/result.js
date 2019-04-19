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
searchword:"菊"

      },
      header:{
        'content-type':'application/json'
      },
      success: function (res) {
       that.setData({
          list:res.data
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
    var that = this;
    var newsList = wx.getStorage({
      key: 'newsList',
      success: function (res) {//从storage中取出存储的数据*/
        /*console.log(res)*/
        if (key == '') {//用户没有输入 全部显示
          that.setData({
            newsList: res.data
          })
          return;
        }
        var arr = [];//临时数组 用于存放匹配到的数据
        for (let i in res.data) {
          if (res.data[i].title.indexOf(key) >= 0) {//查找
            arr.push(res.data[i])
          }
        }
        if (arr.length == 0) {
          that.setData({
            newsList: []
          })
        } else {
          that.setData({
            newsList: arr//在页面显示找到的数据
          })
        }
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
