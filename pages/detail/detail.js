// pages/list/list.js
const app = getApp();
var request = require('../../util/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendMsg: {},
    collectList: [],
    articleList: [],
    likeList: [
      { isLike: true },
      { isLike: false },
      { isLike: true },
      { isLike: false },
      { isLike: true },
      { isLike: false },
      { isLike: true },
      { isLike: false }
    ]
  },
  toDetaill(e) {
    console.log(e);
    var typeId = e.target.dataset.typeid;
    wx.navigateTo({
      url: '/pages/detail/detail?typeId=' + typeId,
    })
  },
  toChangeLike(e) {
    console.log(e);
    var likeList = this.data.likeList;
    var index = e.currentTarget.dataset.index;
    var like = !this.data.likeList[index].isLike;
    likeList[index].isLike = like;
    this.setData({
      likeList: likeList
    })
    wx.setStorageSync("likeList", likeList);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getData(that) {
    request('/getRecommendInfo', 'GET', function (result) {
      that.setData({
        recommendMsg: result
      })
    });
    request('/getMarkTypeList', 'GET', function (result) {
      that.setData({
        collectList: result
      })
    })
    request('/getHomeArticleList', 'GET', function (result) {
      that.setData({
        articleList: result
      })
    })
  },
  onLoad: function (options) {
    var likeList = wx.getStorageSync("likeList");
    this.setData({
      likeList: likeList
    })
    this.getData(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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