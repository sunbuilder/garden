var app = getApp()

Page({
  data: {
    image:"../../image/1.jpg"
  },
  clickImg: function () {
    var me = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        me.setData({ image: res.tempFilePaths })

      }
    })
  }

 , reg: function (e) {
   var plantname = e.detail.value.plantname;
   var diarymethod = e.detail.value.diarymethod;
   var diaryspace = e.detail.value.diaryspace;
   var diarycity = e.detail.value.diarycity;
   var userid = wx.getStorageSync("openid");
   var that=this;

   wx.uploadFile({
     url: getApp().globalData.path + 'createDiary' + getApp().globalData.path2,
     filePath:that.data.image[0],
     name:"file",
     method: "POST",
     header:{
       'content-type': 'multipart/form-data '
     },
     formData: {
       
         diaryUserid: userid,
         diaryMethod: diarymethod,
         diaryPlantname: plantname,
         diarySpace: diaryspace,
         diaryCity: diarycity,
         diaryUserid: userid,
         diarySun: e.detail.value.diarysun,
         diarySoil: e.detail.value.diarysoil,
         diaryWater: e.detail.value.diarywater,
         diaryTime: e.detail.value.diarytime
       


     },
     success: function (res) {
       console.log(res.data)

       if (res.data == "ok") {


         wx.reLaunch({
           url: '../index/index?msg=' + "添加日记成功日记"
         })
       }
     }
   })

    wx.showToast({
      title:"成功",
      icon: "success",
      duration: 2000
    });
  }

})