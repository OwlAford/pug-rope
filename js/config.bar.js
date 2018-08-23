var getBarOptions = function (full) {
  var normalFontSize = 10;
  var barWidth = 14;
  var grid = {
    x: 60,
    y: 40,
    x2: 10,
    y2: 20,
    borderWidth: 0,
  }

  if (full) {
    normalFontSize = 13;
    barWidth = 24;
    grid = {
      x: 120,
      y: 40,
      x2: 10,
      y2: 20,
      borderWidth: 0,
    }
  }

  return {
    grid: grid,
    legend: {
      data: ['新增用户', '活跃用户'],
      textStyle: {
        color: '#e3e3e5',
        fontSize: normalFontSize,
      },
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'category',
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#e3e3e5',
            fontSize: normalFontSize,
          },
        },
        data: ['抢庄牛牛', '炸金花', '通比牛牛', '德州扑克', '二八杠', '十八水', '德州扑克1', '德州扑克2', '德州扑克3', '德州扑克4', '德州扑克5', '德州扑克6', '德州扑克7', '德州扑克8', '德州扑克9', '德州扑克10', '德州扑克11', '德州扑克12'],
      },
    ],
    series: [
      {
        name: '活跃用户',
        type: 'bar',
        stack: '总量',
        barWidth: barWidth,
        itemStyle: {
          normal: {
            barBorderRadius: 2,
            color: '#73b9bc',
            label: {
              show: true,
              textStyle: {
                fontSize: normalFontSize,
              },
              position: 'insideLeft',
            },
          },
          emphasis: {
            barBorderRadius: 2,
            color: '#65a2a5',
            label: {
              show: true,
              textStyle: {
                fontSize: normalFontSize,
              },
              position: 'insideLeft',
            },
          },
        },
        data: [120, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230],
      },
    ],
  };
};
