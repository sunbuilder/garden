

Page({
 
  data: {
    array: ['耐阴', '散光', '半日照', '全日照', '无'],


    objectArray: [
      {
        id: 0,
        name: '耐阴'
      },
      {
        id: 1,
        name: '散光'
      },
      {
        id: 2,
        name: '半日照'
      },
      {
        id: 3,
        name: '全日照',
      },

    ],
    index: 4,

    array1: ['有机肥', '缓解肥', '液体肥', '无'],
    objectArray1: [
      {
        id: 0,
        name: '有机肥'
      },
      {
        id: 1,
        name: '缓解肥'
      },
      {
        id: 2,
        name: '液体肥'
      }
    ],
    index1: 3,

    array2: ['30天', '15天', '7天', '3天', '1天', '无'],
    objectArray2: [
      {
        id: 0,
        name: '30天'
      },
      {
        id: 1,
        name: '15天'
      },
      {
        id: 2,
        name: '7天'
      },
      {
        id: 3,
        name: '3天'
      },
      {
        id: 4,
        name: '1天'
      }
    ],
    index2: 5,

    array3: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月', '无'],
    objectArray3: [
      {
        id: 0,
        name: '一月'
      },
      {
        id: 1,
        name: '二月'
      },
      {
        id: 2,
        name: '三月'
      },
      {
        id: 3,
        name: '四月'
      },
      {
        id: 4,
        name: '五月'
      },
      {
        id: 5,
        name: '六月'
      },
      {
        id: 6,
        name: '七月'
      },
      {
        id: 7,
        name: '八月'
      },
      {
        id: 8,
        name: '九月'
      },
      {
        id: 9,
        name: '十月'
      },
      {
        id: 10,
        name: '十一月'
      },
      {
        id: 11,
        name: '十二月'
      },

    ],
    index3: 12,


  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
  ,
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  }
  ,
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  }
  ,
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  }
  ,
onLoad:function(){

  var id=wx.getStorageSync("diaryid");
  var that=this;
  wx.request({
    url: getApp().globalData.path+'myDiary'+getApp().globalData.path2,
    data:{
      diary:id
    },
    success:function(res){
     var diary=res.data.diary;
    wx.getImageInfo({
      src: diary.diaryImage,
      success:function(res){
        console.log(diary.diaryImage)
        console.log(res.path)
        that.setData({
       
          imgurl:res.path
        })
      }
    })
     that.setData({
       userImage:res.data.diary.diaryImage,
       diary:res.data.diary
     })
      var array = that.data.array; var array1 = that.data.array1; var array2 = that.data.array2; var array3 = that.data.array3;
     if(diary.diarySun!="无"){
    
       for(var i in array){
    
         if(array[i]==diary.diarySun){
           that.setData({
             index:i
           })
         }
       }
     }
    
      if (diary.diaryWater != "无") {
        for (var i in array2) {
          if (array2[i] == diary.diaryWater) {
            that.setData({
              index2: i
            })
          }
        }
      }

      if (diary.diarySoil != "无") {
        for (var i in array1) {
          if (array1[i] == diary.diarySoil) {
            that.setData({
              index1: i
            })
          }
        }
      }

      if (diary.diaryTime != "无") {
        for (var i in array3) {
          if (array3[i] == diary.diaryFlowering) {
            that.setData({
              index3: i
            })
          }
        }
      }
       
    }
  })
}
,
  clickImg: function () {

    var that = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({ imgurl: res.tempFilePaths[0],
          userImage: res.tempFilePaths[0]
         })
       

      }

    })


  },
  reg: function (e) {
    var imgurl;
    var that = this;
    
    console.log(this.data.imgurl)
    wx.uploadFile({
      url: getApp().globalData.path + 'updateDiary' + getApp().globalData.path2,
      filePath: that.data.imgurl,
      name: 'file',
      formData: {
        "diaryId": this.data.diary.diaryId,
        "diaryImage": this.data.imgurl,
        "diaryPlantname": e.detail.value.diaryPlantname,
        "diarySpace": e.detail.value.diarySpace,
        "diaryMethod": e.detail.value.diaryMethod,
        "diaryCity": e.detail.value.diaryCity,
        "diarySun": e.detail.value.diarySun,
        "diarySoil": e.detail.value.diarySoil,
        "diaryWater": e.detail.value.diaryWater,
        "diaryFlowering": e.detail.value.diaryFlowering,
        "diaryUserid": wx.getStorageSync("openid")

      },
      header: {
        'content-type': 'multipart/form-data'
      },
      success: function (res) {
        console.log(res.data)
        wx.reLaunch({
          url: '../index/index?msg=' + "添加成功",
        })
      }


    })
    

    wx.showToast({
      title: "成功",
      icon: "success",
      duration: 2000
    });
  }

 
})
