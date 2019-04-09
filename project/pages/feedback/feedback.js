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
})

