Page({
  data:{
    delBtnWidth: 180,
    diarylength:0,
    loglength:0,
    imgUrls:[
      '../../image/1.jpg',
      '../../image/3.jpg',
      '../../image/9.jpg'
    ],
  logList:[]
   
    
  },

  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  }
,
  getMsg:function(event){
    var id = event.currentTarget.dataset.diaryid;
  
    wx.navigateTo({
      url: '../detail/detail?diaryid='+id,
    })
  }
  ,
  change: function (event) {
    var id = event.currentTarget.dataset.diaryid;
   
    wx.setStorageSync("diaryid", id);
    var that = this;
    wx.request({
      url: getApp().globalData.path + 'getLoglist.action' + getApp().globalData.path2, //仅为示例，并非真实的接口地址
      data: {
        "diary": {
          "diaryId": id
       
        }
      },
      method: "post",
      header: {
        'content-type': 'application/json'
      },
      success: function (cos) {
        that.setData({
          logList: cos.data,
          loglength:cos.data.length
        })
      },

    })
  }
,
 

  onLoad: function (msg) {
    // 页面初始化 options为页面跳转所带来的参数
   
    if (msg.msg)
      wx.showToast({
        title: msg.msg,
        icon: 'success',
        duration: 1000
      })
    var openid = wx.getStorageSync("openid");

    if (openid.length == 0) {
      wx.login({
        success(res) {
          if (res.code) {
            // 发起网络请求
            wx.request({
              url: getApp().globalData.path + 'login' + getApp().globalData.path2,
              data: {
            
                code: res.code
              },         
              success: function (co) {
               openid=co.data;
                wx.setStorageSync("openid", co.data);
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)

          }
        }
      })

    }
  var that=this;
    wx.request({
      url: getApp().globalData.path + 'randomTech' + getApp().globalData.path2,
      success: function (res) {
        that.setData({
          techlist: res.data
        })
      }
    })
    wx.request({
      url: getApp().globalData.path+"index"+getApp().globalData.path2,
      data: {
        
          "userId": wx.getStorageSync("openid")
       
      },
      method: 'get',
      
      success: function (res) {
        if(res.data.length!=0){
       

          wx.setStorageSync("diaryid", res.data[0].diary.diaryId);
          that.setData({
            diarylength: res.data.length,
            diaryList: res.data,
            logList: res.data[0].logList,
            loglength: res.data[0].logList.length
          })
        }else{
          that.data.diarylength=0;
        }

      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }
  ,
  

 
  //点击删除按钮事件
  delItem: function (e) {
    var that=this;
    var index = e.currentTarget.dataset.index;
    //获取列表中要删除项的下标
    wx.showModal({
      title: '提示',
      content: '确定要此纪录吗？',
      success: function (sm) {
        var they = that;
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
          wx.request({
            url: getApp().globalData.path + 'deleteDiarylog' + getApp().globalData.path2,
            data: {
              logdiaryid: index
            },
            success: function (res) {
              if(res.data=="ok"){
              wx.showToast({
                title: '删除成功',
              })
               
                var logList = they.data.logList;
                logList.splice(e.currentTarget.dataset.number,1)
                if(logList.length==0){
                  they.setData({
                    loglength: 0
                  })
                 
                }
                //更新列表的状态
                they.setData({
                  logList: logList
                });
              }else{
                wx.showToast({
                  title: '删除失败',
                })
              }
            }
          })
        }
      }
    })
    
  },


})



