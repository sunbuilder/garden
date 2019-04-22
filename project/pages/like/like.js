var app = getApp()
Page({
  data: {
    array: [
      {
        id: '校长',
        time: '2019.4.11 16.22',
        photo: '../../image/3.jpg',
        write: '必看！2019年购物新模式',
        imgArr: '../../image/24.jpg'

      },
      {
        id: '校长',
        time: '2019.4.11 16.22',
        photo: '../../image/3.jpg',
        write: '必看！2019年购物新模式',
        imgArr: '../../image/24.jpg'


      }
    ]
  },
  onLoad: function () {
    wx.request({
      url: url,
      data: {
        'id': id,  //用户名
        'time': time,  //时间
        'photo': photo,    //文章封面
        
        'imgArr': imgArr,   // 头像
        'write': write   //文章标题



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
  },
  //点击删除按钮事件
  delItem: function (e) {
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var array = this.data.array;
    //移除列表中下标为index的项
    array.splice(index, 1);
    //更新列表的状态
    this.setData({
      array: array
    });
  },

})