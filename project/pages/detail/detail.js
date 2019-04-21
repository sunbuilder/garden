var app = getApp()
Page({
  data: {

  },
  reg: function (e) {
var that=this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        var they=that;
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
          wx.request({
            url: getApp().globalData.path + 'deleteDiary' + getApp().globalData.path2,
            data: {
              diaryid: they.data.diary.diaryId
            },
            success: function (res) {
             if(res.data=="ok"){
               wx.reLaunch({
                 url: '../index/index',
               })
             }
            }
          })
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // var plantname = e.detail.value.plantname;
    // var diarymethod = e.detail.value.diarymethod;
    // var diaryspace = e.detail.value.diaryspace;
    // var diarycity = e.detail.value.diarycity;
    // var userid = wx.getStorageSync("openid")
    // var diaryid = this.data.diary.diaryId;
    // wx.request({
    //   url: getApp().globalData.path + 'updateDiary' + getApp().globalData.path2,
    //   method: "POST",
    //   data: {
    //     diary: {
    //       diaryUserid: userid,
    //       diaryMethod: diarymethod,
    //       diaryPlantname: plantname,
    //       diarySpace: diaryspace,
    //       diaryCity: diarycity,
    //       diaryUserid: userid,
    //       diaryId: diaryid
    //     }
     

    //   },
    //      success: function (res) {


    //     if (res.data == "ok") {

         
    //       wx.reLaunch({
    //         url: '../index/index?msg='+"修改日记信息成功"
    //       })
    //     }
    //   }
    // })
  },
  onLoad: function (option) {
    var id = option.diaryid;
    var that = this;
    wx.request({
      url: getApp().globalData.path + 'myDiary' + getApp().globalData.path2,
      data: {
        diary: id
      },
      success: function (res) {
        that.setData({
          diary: res.data.diary,
          
          username: wx.getStorageSync("userInfo")
        })
        console.log(res.data.diary)
      }
    })
  }
})