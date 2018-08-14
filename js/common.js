$(function(){
  // 侧边栏菜单切换
  $('.menu-group .menu-title').on('click', function () {
    var $grp = $(this).parent();
    var $subItems = $grp.find('.sub-item');

    $grp.addClass('active').siblings().removeClass('active');
    $subItems.removeClass('active');
  })

  $('.sub-list .sub-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  })

  // 侧边菜单栏隐藏切换
  var $content = $('.app-content');
  $('.app-tabs-bar .sidebar-control').on('click', function () {
    var $btn = $(this);
    var isActive = $btn.hasClass('active');
    if (isActive) {
      $btn.removeClass('active');
      $content.css('left', '250px');
    } else {
      $btn.addClass('active');
      $content.css('left', '0');
    }
  })

  // 可关闭标签切换
  $('.app-tabs-bar .tab-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  })
})