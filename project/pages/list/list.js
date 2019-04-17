Page({
  data: {
    
   
    array2: [
      {

        
        imgArr2:
          '../../image/3.jpg',
        head2:'养花的100种小技巧',
        number2:'100'

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
    wx.request({
      url: url,
      data: {

        'version': version,//文章标题
        'imgArr': imgarr,  //封面
        'time': time,//时间
        'comment': comment,//浏览次数
        'like': like //点赞



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
