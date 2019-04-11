const app = getApp()
Page({
  data: {
    list: '',
    upload_picture_list: []

  },
  //选择图片方法
  uploadpic: function (e) {
    var that = this //获取上下文
    var upload_picture_list = that.data.upload_picture_list
    //选择图片
    wx.chooseImage({
      count: 3,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFiles = res.tempFiles
        //把选择的图片 添加到集合里
        for (var i in tempFiles) {
          tempFiles[i]['upload_percent'] = 0
          tempFiles[i]['path_server'] = ''
          upload_picture_list.push(tempFiles[i])

        }
        //显示
        that.setData({
          upload_picture_list: upload_picture_list,
        });

      }
    })

  },
  //点击上传事件
  uploadimage: function () {
    var page = this
    var upload_picture_list = page.data.upload_picture_list
    //循环把图片上传到服务器 并显示进度       
    for (var j in upload_picture_list) {
      if (upload_picture_list[j]['upload_percent'] == 0) {
        //调用函数
        app.util.upload_file_server(app.api.up_pic, page, upload_picture_list, j)

      }

    }

  },

  // 删除图片
  deleteImg: function (e) {
    let upload_picture_list = this.data.upload_picture_list;
    let index = e.currentTarget.dataset.index;
    upload_picture_list.splice(index, 1);
    this.setData({
      upload_picture_list: upload_picture_list

    });

  },
}),
  function upload_file_server(url, that, upload_picture_list, j) {
    //上传返回值
    const upload_task = wx.uploadFile({

      url: url,
      filePath: upload_picture_list[j]['path'], //上传的文件本地地址    
      name: 'file',
      formData: {
        'num': j
      },
      //附近数据，这里为路径     
      success: function (res) {

        var data = JSON.parse(res.data);
        // //字符串转化为JSON  
        if (data.Success == true) {

          var filename = data.file //存储地址 显示

          upload_picture_list[j]['path_server'] = filename

        } else {
          upload_picture_list[j]['path_server'] = filename

        }
        that.setData({
          upload_picture_list: upload_picture_list

        });

        wx.setStorageSync('imgs', upload_picture_list);

      }
    })
    upload_task.onProgressUpdate((res) => {
      upload_picture_list[j]['upload_percent'] = res.progress
      that.setData({
        upload_picture_list: upload_picture_list
      });

    });

  }

