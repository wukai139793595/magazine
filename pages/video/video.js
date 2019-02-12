// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headword: '携一份美好幽居禅意里',
    danmuWord: [
      { text: '钟滴答', time: 1, color: '#ff0000'},
      { text: '一秒', time: 7, color: '#ff0000'},
      { text: '表情', time: 10, color: '#ff0000'}
    ],
    isHidden: true
  },
  videoPlay(e){
    var isHidden = !this.data.isHidden;
    this.setData({
      isHidden: isHidden
    })
  },
  toPlay(e){
    var hidden = this.data.isHidden;
    this.setData({
      isHidden: !hidden
    })
    this.oVideo.play();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.oVideo = wx.createVideoContext("myVideo", this);
    console.log(this.oVideo);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})