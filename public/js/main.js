$(function () {
  var $menuGrp = $('.menu-group');
  var $menuTit = $menuGrp.find('.menu-title');
  var $subList = $('.sub-list');
  var $allSubItems = $subList.find('.sub-item');

  var $content = $('.app-content');
  var $tabBar = $('.app-tabs-bar');
  var $tabList = $tabBar.find('.tabs-list');
  var $tabCtrl = $tabBar.find('.sidebar-control');
  var tabCapcity = $tabList.width();

  var $subFrame = $('#subFrame');

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
  $menuTit.on('click', function () {
    var $grp = $(this).parent();

    $grp.addClass('active').siblings().removeClass('active');

    applyHeight($menuGrp, false);
    applyHeight($grp, true);
  });

  $allSubItems.on('click', function () {
    var $cur = $(this);
    var $allTabItems = $tabList.find('.tab-item');
    var target = $cur.attr('data-target');
    var newId = 's' + (new Date()).getTime();
    var newSubId = 't' + newId;
    var allItemsWidth = 0;

    // 为元素添加原始ID
    if ($cur.attr('id')) {
      newId = $cur.attr('id');
      newSubId = 't' + newId;
    } else {
      $cur.attr('id', newId);
    }

    $allSubItems.removeClass('active');
    $cur.addClass('active');

    $allTabItems.each(function (i, item) {
      var $item = $(item);
      allItemsWidth += $item.width() + 45;
    });

    if ($tabList.find('#' + newSubId).length > 0) {
      $allTabItems.removeClass('active');
      $tabList.find('#' + newSubId).addClass('active');
      $subFrame.attr('src', $cur.attr('data-target'));
    } else if (tabCapcity - allItemsWidth > 150) {
      $allTabItems.removeClass('active');
      var $newNode = '<div class="tab-item active" id="' + newSubId + '" data-target="' + target + '">'
        + '<span>' + $cur.text() + '</span>'
        + '<i class="close"></i>'
        + '</div>';
      $tabList.append($newNode);
      $subFrame.attr('src', target);
    } else {
      alert('当前打开标签过多，请关闭部分标签！');
    }
  });

  // 侧边菜单栏隐藏切换
  $tabCtrl.on('click', function () {
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
  $tabList.delegate('.tab-item', 'click', function () {
    var $cur = $(this);
    var tarSubItemId = $cur.attr('id').substring(1);
    $cur.addClass('active').siblings().removeClass('active');
    $allSubItems.removeClass('active');
    $subList.find('#' + tarSubItemId).addClass('active');
    $subFrame.attr('src', $cur.attr('data-target'));
  });

  $tabList.delegate('.tab-item .close', 'click', function (e) {
    $(this).parent().remove();
    e.stopPropagation();
  });

  // 设置子iframe尺寸
  function resetSize() {
    $subFrame.attr('height', $('.app-content').height() - 52);
  }

  resetSize();
  $(window).on('resize', resetSize);
});
