$(function () {
  var $menuGrp = $('.menu-group');
  var $allSubItems = $('.sub-list .sub-item');

  $menuGrp.each(function (i, e) {
    var $grp = $(e);
    var $subItems = $grp.find('.sub-item');
    $grp.attr('data-target-height', $subItems.length * 42 + 44);
  });

  function applyHeight(el, actived) {
    if (actived) {
      $(el).css('height', el.attr('data-target-height'));
    } else {
      $(el).css('height', 44);
    }
  }

  // 默认激活第一个
  applyHeight($menuGrp.eq(0), true);

  // 侧边栏菜单切换
  $menuGrp.find('.menu-title').on('click', function () {
    var $grp = $(this).parent();

    $grp.addClass('active').siblings().removeClass('active');

    applyHeight($menuGrp, false);
    applyHeight($grp, true);
  });

  $allSubItems.on('click', function () {
    $allSubItems.removeClass('active');
    $(this).addClass('active');
  });

  // 侧边菜单栏隐藏切换
  var $content = $('.app-content');
  $('.app-tabs-bar .sidebar-control').on('click', function () {
    var $btn = $(this);
    var isActive = $btn.hasClass('active');
    if (isActive) {
      $btn.removeClass('active');
      $content.css('left', '240px');
    } else {
      $btn.addClass('active');
      $content.css('left', '0');
    }
  });

  // 可关闭标签切换
  $('.app-tabs-bar .tab-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
