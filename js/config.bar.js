var getBarOptions = function () {
  return {
    grid: {
      x: 60,
      y: 40,
      x2: 10,
      y2: 20,
      borderWidth: 0,
    },
    legend: {
      data: ['新增用户', '活跃用户'],
      textStyle: {
        color: '#e3e3e5',
        fontSize: 10,
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
            fontSize: 10,
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
        barWidth: 14,
        itemStyle: {
          normal: {
            barBorderRadius: 2,
            color: '#73b9bc',
            label: {
              show: true,
              textStyle: {
                fontSize: 10,
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
                fontSize: 10,
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
