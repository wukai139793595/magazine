var baseUrl = 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine';
function requestFail(){
  wx.showToast({
    title: '网络请求错误',
    duration: 2000
  })
}
function request(url, method, func) {
  wx.request({
    url: baseUrl + url,
    method: method,
    success(res){
      if(res.data.code==0) {
        func(res.data.data)
      }else{
        requestFail();
      }
    },
    fail(err){
      requestFail();
    }
  })
}


module.exports = request