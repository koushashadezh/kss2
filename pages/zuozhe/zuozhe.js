// pages/zuozhe/zuozhe.js
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
      reactor:[{
        'img': '../../imgs/paihang5.png',
        'text': '王源源',
        'guanzhu':'已关注'
      },
        {
          'img': '../../imgs/paihang5.png',
          'text': '张小佳',
          'guanzhu': '关注'
        },
        {
          'img': '../../imgs/paihang5.png',
          'text': '谢华英',
          'guanzhu': '已关注'
        },
         {
          'img': '../../imgs/paihang5.png',
          'text': '李小军',
           'guanzhu': '已关注'
        },
        {
          'img': '../../imgs/paihang5.png',
          'text': '王安娜',
          'guanzhu': '已关注'
        },
        {
          'img': '../../imgs/paihang5.png',
          'text': '花花',
          'guanzhu': '已关注'
        },

      ],
    newactor: [{
      'img': '../../imgs/paihang5.png',
      'text': '赵晓磊',
      'guanzhu': '已关注'
    },
    {
      'img': '../../imgs/paihang5.png',
      'text': '钟大华',
      'guanzhu': '关注'
    },
    {
      'img': '../../imgs/paihang5.png',
      'text': '王中金',
      'guanzhu': '已关注'
    },
    {
      'img': '../../imgs/paihang5.png',
      'text': '李权柱',
      'guanzhu': '已关注'
    },
    {
      'img': '../../imgs/paihang5.png',
      'text': '王安娜',
      'guanzhu': '已关注'
    },
    {
      'img': '../../imgs/paihang5.png',
      'text': '花花',
      'guanzhu': '已关注'
    },

    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    zuozhexq() {
      wx.navigateTo({
        url: '../../pages/zuozhexq/zuozhexq',
      })
    },
  }
})
