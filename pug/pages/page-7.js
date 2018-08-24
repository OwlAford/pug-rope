
$(function () {
  var toolkit = new chartToolkit({
    gridRatio: [1, 1],
    resizeDelay: 210
  });

  // 为作演示，统一生成相似数据配置参数
  function getLineSettings(data, full) {
    var days = [];

    for (var i = 1; i <= 30; i++) {
      days.push('6/' + i)
    }

    var tempItem = function (title, lineColor, areaColor) {
      return {
        itemStyle: {
          normal: {
            lineStyle: {
              width: 1,
              type: 'solid',
            },
            label: {
              textStyle: {
                fontSize: '12',
                fontWeight: 'normal',
              },
            },
            color: lineColor,
            areaStyle: {
              color: areaColor,
            },
          },
        },
        symbolSize: 0,
        name: title,
        type: 'line',
        smooth: true,
        data: toolkit.getRandomArray(30, 900, 2800),
      }
    }

    var xData = [];
    var items = [];

    for (var i = 0; i < data.length; i++) {
      xData.push(data[i][0]);
      items.push(tempItem.apply(null, data[i]));
    }

    return getLineOptions(xData, days, items, full)
  }

  // 折线图1
  toolkit.push('#line1', function (full) {
    return getLineSettings([
      ['新增', '#bf605f', 'rgba(191, 96, 95, 0.1)'],
      ['有效新增', '#38a2db', 'rgba(56, 162, 219, 0.1)'],
    ], full)
  })

  // 折线图2
  toolkit.push('#line2', function (full) {
    return getLineSettings([
      ['幸运五张', '#bf605f', 'rgba(191, 96, 95, 0.1)'],
      ['21点', '#6e7073', 'rgba(110, 112, 115, 0.1)'],
    ], full)
  })

  // 折线图3
  toolkit.push('#line3', function (full) {
    return getLineSettings([
      ['7日', '#cb8622', 'rgba(203, 134, 34, 0.1)'],
      ['15日', '#dd6a66', 'rgba(221, 106, 102, 0.1)'],
      ['30日', '#73a372', 'rgba(115, 163, 114, 0.1)'],
    ], full)
  })

  // 折线图4
  toolkit.push('#line4', function (full) {
    return getLineSettings([
      ['有效投注', '#38a2db', 'rgba(56, 162, 219, 0.1)'],
      ['抽水', '#cb8622', 'rgba(203, 134, 34, 0.1)'],
      ['盈利', '#73a372', 'rgba(115, 163, 114, 0.1)'],
      ['人均盈利', '#dd6a66', 'rgba(221, 106, 102, 0.1)'],
    ], full)
  })

  // 折线图5
  toolkit.push('#line5', function (full) {
    return getLineSettings([
      ['消费率', '#38a2db', 'rgba(56, 162, 219, 0.1)'],
      ['付费率', '#73a372', 'rgba(115, 163, 114, 0.1)'],
    ], full)
  })

  // 折线图6
  toolkit.push('#line6', function (full) {
    return getLineSettings([
      ['7日', '#cb8622', 'rgba(203, 134, 34, 0.1)'],
      ['15日', '#dd6a66', 'rgba(221, 106, 102, 0.1)'],
      ['30日', '#73a372', 'rgba(115, 163, 114, 0.1)'],
    ], full)
  })

  // 执行一次全局图表渲染
  toolkit.render();

  // 日期范围选择
  $('.time-range .cacheTime').on('click', function () {
    var $btn = $(this);
    var $activeIndex = Number($btn.attr('data-chart-index'));
    laydate.render({
      elem: $btn.get(0),
      show: true,
      range: true,
      done: function (value, date, endDate) {
        // 此处打印日历选中数据
        console.log(value, date, endDate)

        // 更新对应数据，当选择日期数据不为空则模拟重新渲染
        if (!$.isEmptyObject(date)) {
          toolkit.change($activeIndex, function (full) {
            return getLineSettings([
              ['7日', '#cb8622', 'rgba(203, 134, 34, 0.1)'],
              ['15日', '#dd6a66', 'rgba(221, 106, 102, 0.1)'],
              ['30日', '#73a372', 'rgba(115, 163, 114, 0.1)'],
            ], full) 
          })
        }
      }
    });
  })

});
