var bindblur;
Page({
  bindblur: function (e) {
    console.log( e.detail.value)
    bindblur = e.detail.value;
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
  },
  onLoad: function (a) {
    var that = this;
    actid = a.id;
    // 查询评论fetch
    wx.request({
      url: 'https://m.yishushe.net/addons/up_text.php',
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      data: {
        act_id: actid
      },
      success: function (result) {
        that.setData({
          pl_list: result.data.reverse(),
        })
      },
      fail: res => {
        wx.showToast({
          title: '网络不好哟',
          image: '/image/wrong.png',
          duration: 3000
        })
      }
    })
  },
  btn_send: function () {
    var that = this
    //添加评论
    console.log('文章id：act_id :', actid);
    console.log('用户缓存id：user_id :', user_id);
    console.log('文本输入框: input_value :', bindblur);
    wx.request({
      url: 'https://m.yishushe.net/addons/up_text.php',
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      data: {
        act_id: actid,
        user_id: user_id,
        input_value: bindblur
      },
      success: function (result) {
        that.setData({
          pl_list: result.data.reverse(),
          input_value: "",
        })
      },
      fail: res => {
        wx.showToast({
          title: '网络不好哟',
          image: '/image/wrong.png',
          duration: 3000
        })
      }
    })
  }
})