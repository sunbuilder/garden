Page({
  data: {
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
      var that = this;
      that.setData({
        details: e.detail.value
      });
    }

  }
  , formSubmit: function (e) {
    console.log('form发生了submit事件，提交数据：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
  ,
  formSubmit: function (e) {
    wx.request({
      url: 'url',
      data: {
        'details': e.detail.value.details
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    });
    wx.showToast({
      title: "成功",
      icon: "success",
      duration: 2000
    });
  }


})

