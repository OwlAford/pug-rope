var getHeapBarOptions = function () {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
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
        data: ['抢庄牛牛', '炸金花', '通比牛牛', '德州扑克', '二八杠', '十八水'],
      },
    ],
    series: [
      {
        name: '新增用户',
        type: 'bar',
        stack: '总量',
        barWidth: 20,
        itemStyle: {
          normal: {
            barBorderRadius: 3,
            color: '#e3c1a5',
            label: {
              show: true,
              textStyle: {
                fontSize: 10,
              },
              position: 'insideLeft',
            },
          },
          emphasis: {
            barBorderRadius: 3,
            color: '#d0b197',
            label: {
              show: true,
              textStyle: {
                fontSize: 10,
              },
              position: 'insideLeft',
            },
          },
        },
        data: [20, 22, 21, 34, 40, 30],
      },
      {
        name: '活跃用户',
        type: 'bar',
        stack: '总量',
        barWidth: 20,
        itemStyle: {
          normal: {
            barBorderRadius: 3,
            color: '#73b9bc',
            label: {
              show: true,
              textStyle: {
                fontSize: 10,
              },
              position: 'insideRight',
            },
          },
          emphasis: {
            barBorderRadius: 3,
            color: '#64a0a3',
            label: {
              show: true,
              textStyle: {
                fontSize: 10,
              },
              position: 'insideRight',
            },
          },
        },
        data: [120, 132, 101, 134, 90, 230],
      },
    ],
  };
};
