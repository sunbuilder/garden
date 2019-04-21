Page({
  data: {

    array: [
      {

        version: '养花的方法',
        time: '2019.4.11 9.26',
        imgArr:
          '../../image/3.jpg',
        comment: '30',
        like: '100'

      },
      {
        version: '养花的方法',
        time: '2019.4.11 9.26',
        imgArr:
          '../../image/10.jpg',
        comment: '30',
        like: '100'

      }
    ],
    lastid: 0
  },
  //下拉刷新
  loadData: function (lastid) {
    var limit = 2
    var that = this
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
        var len = res.data.length
        that.setData({ lastid: res.data[len - 1].id })
        var dataArr = that.data.array2
        var newData = dataArrr.concat(res.data);
        that.setData({
          array2: newData
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  onLoad: function () {
    var that = this
    this.loadData(0);
  },
  loadMore: function (event) {
    var id = event.currentTarget.dataset.lastid
    this.loadData(id);
  }



})