
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

  var lineSettings = function (full) {
    return getLineSettings([
      ['炸金花','#cb8622', 'rgba(203, 134, 34, 0.1)'],
      ['幸运五张','#b56a74', 'rgba(221, 106, 102, 0.1)'],
      ['21点','#73a372', 'rgba(115, 163, 114, 0.1)'],
      ['射龙门','#8378ea', 'rgba(131, 120, 234, 0.1)'],
      ['斗地主','#38a2db', 'rgba(56, 162, 219, 0.1)'],
      ['抢庄牛牛','#6e7073', 'rgba(110, 112, 115, 0.1)']
    ], full)
  }
  

  // 折线图1
  toolkit.push('#line1', function (full) {
    return lineSettings(full);
  })

  // 折线图2
  toolkit.push('#line2', function (full) {
    return lineSettings(full);
  })

  // 折线图3
  toolkit.push('#line3', function (full) {
    return lineSettings(full);
  })

  // 折线图4
  toolkit.push('#line4', function (full) {
    return lineSettings(full);
  })

  // 执行一次全局图表渲染
  toolkit.render();

});
