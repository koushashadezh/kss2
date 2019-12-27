//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fenhang: [
    //   {
    //   'img': '../../imgs/paihang1.png',
    //   'text': '科幻'
    // },
    // {
    //   'img': '../../imgs/paihang2.png',
    //   'text': '生活'
    // },
    // {
    //   'img': '../../imgs/paihang3.png',
    //   'text': '露营'
    // },
    // {
    //   'img': '../../imgs/paihang4.png',
    //   'text': '职场'
    // }
    ],
    zuohang:[{
      'img': '../../imgs/paihang5.png',
      'text': '刘慈欣'
    },
      {
        'img': '../../imgs/paihang6.png',
        'text': '田小花'
      },
      {
        'img': '../../imgs/paihang7.png',
        'text': '马尔克斯'
      },
      {
        'img': '../../imgs/paihang8.png',
        'text': '余秋雨'
      },
      {
        'img': '../../imgs/paihang2.png',
        'text': '刘慈欣'
      },
      {
        'img': '../../imgs/paihang2.png',
        'text': '刘慈欣'
      }
    ],
    fabu:[{
      'img': '../../imgs/kehuan1.png',
      'text': '三体:死神永生',
      'actor':'刘慈心'
    },
      {
        'img': '../../imgs/paihang10.png',
        'text': '人类简史',
        'actor': '尤瓦力.郝拉利'
      },
      {
        'img': '../../imgs/paihang11.png',
        'text': '徐三观卖血记',
        'actor': '余华'
      },
      {
        'img': '../../imgs/paihang12.png',
        'text': '人类简史',
        'actor': '刘慈心'
      },
      {
        'img': '../../imgs/paihang13.png',
        'text': '未来简史',
        'actor': '尤瓦力.郝拉利'
      },
      {
        'img': '../../imgs/paihang14.png',
        'text': '百年孤独',
        'actor': '马尔克斯'
      }
    ],
    rexiao:[
    // {
    //   'img':'../../imgs/paihang9.png',
    //   'title':'三体:死神永生',
    //   'actor':'作者:刘慈心',
    //   'content':'刘慈心创作的系列长篇科幻小说地球往事三部曲的第三部作品...'
    // },
    //   {
    //     'img': '../../imgs/paihang9.png',
    //     'title': '三体:死神永生',
    //     'actor': '作者:刘慈心',
    //     'content': '刘慈心创作的系列长篇科幻小说地球往事三部曲的第三部作品...'
    //   },
    //   {
    //     'img': '../../imgs/paihang9.png',
    //     'title': '三体:死神永生',
    //     'actor': '作者:刘慈心',
    //     'content': '刘慈心创作的系列长篇科幻小说地球往事三部曲的第三部作品...'
    //   }
    ]
  },
  onLoad: function (options) {
    console.log(app)
    app.bookList().then(res=>{
      this.setData({
        rexiao:app.globalData.bookList
      })
    })
    app.rankList().then(res => {
      console.log(res)
      this.setData({
        fenhang: app.globalData.rankList
      })
    })
    
    
   
    console.log(app.globalData.bookList)
   
  },

    ketiao: function () {
      wx.navigateTo({
        url: "../../pages/kehang/kehang",
      })
    },
  zuotiao: function () {
    wx.navigateTo({
      url: "../../pages/zuozhe/zuozhe",
    })
  },
  fenlei: function () {
    wx.navigateTo({
      url: "../../pages/fenlei/fenlei",
    })
  },
  shuji: function () {
    wx.navigateTo({
      url: "../../pages/shuji/shuji",
    })
  },
  search: function () {
    wx.navigateTo({
      url: "../../pages/search/search",
    })
  },

})
