function setClient() {
  var doc = document.documentElement;
  doc.style.fontSize = 100 * doc.clientWidth / 750 + 'px';
}
setClient();
window.addEventListener('resize', setClient, false);

$(function () {
  var $sidebar = $('.app-sidebar');
  var $ctrl = $sidebar.find('.sidebar-control');
  var $menu = $sidebar.find('.menu-list');
  var $menuWrap = $menu.find('.list-wrap');
  var $mask = $sidebar.find('.app-mask');

  var $menuGrp = $('.menu-group');
  var $menuTit = $menuGrp.find('.menu-title');
  var $subList = $('.sub-list');
  var $allSubItems = $subList.find('.sub-item');

  var $subFrame = $('#subFrame');

  function applyMenuHeight(isShow) {
    var showMenuTimer = setTimeout(function () {
      isShow
        ? $menu.css('height', $menuWrap.height() + 'px').addClass('show') && $sidebar.addClass('active')
        : $menu.css('height', 0).removeClass('show') && $sidebar.removeClass('active');

      clearTimeout(showMenuTimer);
    }, 200);
  }

  // 切换菜单显示隐藏
  $ctrl.on('click', function () {
    var $el = $(this);
    if ($el.hasClass('active')) {
      applyMenuHeight();
      $el.removeClass('active');
    } else {
      applyMenuHeight(true);
      $el.addClass('active');
    }
  });

  function applyHeight(el, actived) {
    if (actived) {
      $(el).css('height', el.attr('data-target-height') + 'rem');
    } else {
      $(el).css('height', '0.88rem');
    }
  }

  // 保存菜单所需高度
  $menuGrp.each(function (i, e) {
    var $grp = $(e);
    var $subItems = $grp.find('.sub-item');
    $grp.attr('data-target-height', $subItems.length * 0.84 + 0.88);
  });

  // 切换主菜单
  $menuTit.on('click', function () {
    var $grp = $(this).parent();

    $grp.addClass('active').siblings().removeClass('active');

    applyHeight($menuGrp, false);
    applyHeight($grp, true);
    applyMenuHeight(true);
  });

  // 子菜单选择
  $allSubItems.on('click', function () {
    var $cur = $(this);
    $allSubItems.removeClass('active');
    $cur.addClass('active');
    $subFrame.attr('src', $cur.attr('data-target'));
    applyMenuHeight();
    $ctrl.removeClass('active');
    $sidebar.removeClass('active');
  });

  // 点击遮罩部分
  $mask.on('click', function () {
    $ctrl.removeClass('active');
    $sidebar.removeClass('active');
  });

  // 设置子iframe尺寸
  function resetSize() {
    $subFrame.attr('height', $('.app-content').height() + 'px');
  }
  resetSize();
});
