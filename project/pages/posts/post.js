
Page({
  data:{
   postList: [
     {
      imgArr:"../../image/3.jpg",
        time: "2019.4.16",
        number: "1000",
        article: "关于花的文章精选：养花我喜欢花，也喜欢养花。在我的院子里错落有致的种满了各种各样的花花草草，每到春暖花开的时节，争妍斗奇，葱茏翠滴，无论是近观还是远望，那真叫一个美。花草之美，美在这份葱茏，美在这份生命; 养花之乐，乐在这份情趣，乐在这份性情。[由Www.DuanMeiWen.Com整理]我不养什么名贵的花，也不养南方的花，每一株花草都像我的孩子一样，我宠着她，爱着他。那些名贵的花草都需要温室里的特殊照顾，我没有那么多的时间，如果一不留意让她生病了或是枯萎了，我会很悲哀，我不愿意悲哀难过。所以我大多养些容易成活，生命力旺盛的植物。像菊花，海棠，滴水观音，君子兰，茉莉，探春，迎春之类的花草。它们容易养活，生命里有个性旺盛.养花是一种情绪，一种生活的态度，花草皆是有灵性的，你用一种怎样的心态和情绪去侍弄它，它就会以一种怎样的姿态回报你。一朵朵黄色的小花，五个瓣，吐露着花蕊，一串串，一簇簇绽放在青绿色的枝条，极显生命的顽强和不畏严寒强势的高尚品质。我特意的把它摆放在书桌的案头，读书之余，多看几眼那种赏心悦目不是一个不爱花惜花的人所能感受的。说到迎春，我是个性钟爱，我从父亲那里得到一盆迎春花，它有三十多年的花龄了，能称得上是盆景中的品。它古朴苍劲，风姿优美，造型独特，加之配上椭圆形的花盆，真是让我对它情有独钟。每到隆冬到来，大雪漫天，别的花草大多都进入休眠期，唯独迎春花风姿绰影，竞相开放。有时候工作累了或是心里烦闷，我便会到院子里看看花草，侍弄一下。每一株每一盆都像会说话似的与你交流，只要你有心，它们就毫不吝啬的向你打开心怀，吐露芬芳。有的含羞不语却也楚楚动人，有的热情绽放，尽情地彰显生命的张扬，也有的无花无果，但也青翠逼人，摄人心魄。无论你有怎样的情绪，总有那么一两株会融入进你当时的感情，你也会情不自禁的随着花草的吐露而融入其中，最终会以美的享受乐在其中。",
       postId:0
     },
     {
       imgArr: "../../image/3.jpg",
       time: "2019.4.16",
       number: "1000",
       article: "关于花的文章精选：养花我喜欢花，也喜欢养花。在我的院子里错落有致的种满了各种各样的花花草草，每到春暖花开的时节，争妍斗奇，葱茏翠滴，无论是近观还是远望，那真叫一个美。花草之美，美在这份葱茏，美在这份生命; 养花之乐，乐在这份情趣，乐在这份性情。[由Www.DuanMeiWen.Com整理]我不养什么名贵的花，也不养南方的花，每一株花草都像我的孩子一样，我宠着她，爱着他。那些名贵的花草都需要温室里的特殊照顾，我没有那么多的时间，如果一不留意让她生病了或是枯萎了，我会很悲哀，我不愿意悲哀难过。所以我大多养些容易成活，生命力旺盛的植物。像菊花，海棠，滴水观音，君子兰，茉莉，探春，迎春之类的花草。它们容易养活，生命里有个性旺盛.养花是一种情绪，一种生活的态度，花草皆是有灵性的，你用一种怎样的心态和情绪去侍弄它，它就会以一种怎样的姿态回报你。一朵朵黄色的小花，五个瓣，吐露着花蕊，一串串，一簇簇绽放在青绿色的枝条，极显生命的顽强和不畏严寒强势的高尚品质。我特意的把它摆放在书桌的案头，读书之余，多看几眼那种赏心悦目不是一个不爱花惜花的人所能感受的。说到迎春，我是个性钟爱，我从父亲那里得到一盆迎春花，它有三十多年的花龄了，能称得上是盆景中的品。它古朴苍劲，风姿优美，造型独特，加之配上椭圆形的花盆，真是让我对它情有独钟。每到隆冬到来，大雪漫天，别的花草大多都进入休眠期，唯独迎春花风姿绰影，竞相开放。有时候工作累了或是心里烦闷，我便会到院子里看看花草，侍弄一下。每一株每一盆都像会说话似的与你交流，只要你有心，它们就毫不吝啬的向你打开心怀，吐露芬芳。有的含羞不语却也楚楚动人，有的热情绽放，尽情地彰显生命的张扬，也有的无花无果，但也青翠逼人，摄人心魄。无论你有怎样的情绪，总有那么一两株会融入进你当时的感情，你也会情不自禁的随着花草的吐露而融入其中，最终会以美的享受乐在其中。",
       postId:1
     }
   
    ]

  },
  detail:function(event){
    var postId=event.currentTarget.dataset.id;
    wx.navigateTo({
      url:'posts/post',
    })
  }
})