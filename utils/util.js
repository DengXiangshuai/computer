function http(url, callBack) {
  wx.request({
    url: url,
    method: 'POST',
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

function callback(e){
 
    console.log(e)
    var allmsg = e;
    this.setData(allmsg)

}