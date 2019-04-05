//logs.js

Page({
  data: {
    
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.apiopen.top/journalismApi',
      data: '',
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
       console.log(res);
        that.Setdata(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  Setdata:function(e){
  //  console.log(e.data)
    var allmsg = e.data.data;
    this.setData(allmsg)
  }
})
