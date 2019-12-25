// pages/faer/faer.js
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
      'text': '三体:死神永生'
    },
    {
      'img': '../../imgs/paihang10.png',
      'text': '人类简史'
    },
    {
      'img': '../../imgs/paihang11.png',
      'text': '徐三观卖血记'
    },
    {
      'img': '../../imgs/paihang12.png',
      'text': '人类简史'
    }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    shang: function () {
      wx.navigateTo({
        url: "../../pages/faxian/faxian",
      })
    },
  }
})
