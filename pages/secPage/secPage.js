//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
   
  },
  onLoad: function () {
    var that = this;
   
    wx: wx.request({
      url: 'https://www.apiopen.top/weatherApi' + "?city=大连",
      data: '',
      header: {},
      method: "GET",
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
           console.log(res)
        that.proseccW(res.data)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
 
  proseccW: function (e) {
    console.log(e.data)
    var allmsg = e.data;
    this.setData(allmsg)
  }

})
