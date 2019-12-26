// pages/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    fabu: [{
      'img': '../../imgs/kehuan1.png',
      'text': '三体:死神永生',
      'actor': '刘慈心'
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
    }
    ],
    fabuer: [{
      'img': '../../imgs/kehuan1.png',
      'text': '三体:死神永生',
      'actor': '刘慈心'
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
        'img': '../../imgs/kehuan1.png',
        'text': '三体:死神永生',
        'actor': '刘慈心'
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
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jieshao:function(){
      wx.navigateTo({
        url: "../../pages/shuji/shuji",
      })
    }
  }
})
