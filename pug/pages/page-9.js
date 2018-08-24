$(function () {
  var mySpin = $('.main-content').spinner();

  // 3秒后自动关闭
  setTimeout(function () {
    mySpin.stop();
  }, 3000);
})