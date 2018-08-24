 $(function () {
  var colorOrder = ['#cbced4','#c4c7cf','#babec8','#afb5c3','#a6adbe','#9ea6bb','#959eb8','#8c97b4','#8491b2','#7c8baf','#7585ad','#6f7fa9','#6778a6','#5e6f9f','#57699a','#506395','#475a8e','#405389','#3a4e84','#33487f'];

  var $tbl = $('#detailTbl table');
  var $tblBody = $tbl.find('tbody');

  // 生成随机数据
  function randomDataTd () {
    var domStr = '';
    for (var i = 0; i < 9; i++) {
      var ram = (Math.random() * 100).toFixed(1);
      var order = Math.round(ram / 5);
      domStr += '<td class="per" style="background-color: ' + colorOrder[order] + '">' + ram + '%</td>'
    }
    return domStr
  }

  // 模拟渲染表格
  function renderTable () {
    $tblBody.html('');
    for (var i = 1; i <= 30; i++) {
      $tblBody.append('<tr>'
      + '<td class="item">6月' + i + '日</td>'
      + '<td class="item">' + ~~(Math.random() * 4000) + '</td>'
      + randomDataTd()
      + '</tr>')
    }
  }

  renderTable();

  // 日期范围选择
  $('.conditionFilter .cacheTime').on('click', function () {
    var $btn = $(this);
    laydate.render({
      elem: $btn.get(0),
      show: true,
      range: true,
      done: function (value, date, endDate) {
        // 此处打印日历选中数据
        console.log(value, date, endDate);
        renderTable();
      }
    });
  })

  // checkbox 选框切换
  $('.check-item').on('click', function () {
    var $cur = $(this).find('.app-checkbox-item');
    if ($cur.find('input').attr('checked')) {
      $cur.removeClass('checked');
      $cur.find('input').removeAttr('checked');
    } else {
      $cur.addClass('checked');
      $cur.find('input').attr('checked', true);
    }
  });


  // 打开弹框
  var $dialog = $('.app-dialog');
  $('#filterBtn').on('click', function () {
    $dialog.addClass('show');
  });

  // 关闭弹框
  $('.dialog-box .app-close').on('click', function () {
    $dialog.removeClass('show');
  });

  // 点击取消
  $('.dialog-box .app-btn.hollow').on('click', function () {
    $dialog.removeClass('show');
  })

  // 点击确定
  $('.dialog-box .app-btn.warning').on('click', function () {
    renderTable();
    $dialog.removeClass('show');
  })

})
