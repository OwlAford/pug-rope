$(function () {
  // checkbox 选框切换
  $('.app-checkbox-item').on('click', function () {
    var $cur = $(this);
    $cur.removeClass('indeterminate');
    $cur.find('input:checked').length ? $cur.removeClass('checked') : $cur.addClass('checked');
  });

  // 打开弹框
  var $dialog = $('.app-dialog');
  $('#addBtn').on('click', function () {
    $dialog.addClass('show');
  });

  // 关闭弹框
  $('.dialog-box .app-close').on('click', function () {
    $dialog.removeClass('show');
  });
});
