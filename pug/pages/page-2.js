
$(function () {
  var toolkit = new chartToolkit({
    gridRatio: [560, 560, 320],
    resizeDelay: 210
  });

  // 南丁格尔玫瑰图1
  toolkit.push('#rose1', function (full) {
    return getRoseOptions({
      name: '当日盈利',
      radius: full ? [50, 200] : [25, 120],
      data: [
        { value: 10, name: '抢庄牛牛' },
        { value: 5, name: '炸金花' },
        { value: 15, name: '通比牛牛' },
        { value: 25, name: '德州扑克' },
        { value: 20, name: '二八杠' },
        { value: 35, name: '十八水' },
      ],
    },
    {
      color: ['#719b9e', '#627998', '#d47974', '#7e76cd', '#9dc582', '#e18045', '#3a4b66'],
    }, full)
  })

  // 堆积条形图1
  toolkit.push('#bar1', function (full) {
    return getHeapBarOptions(full);
  })

  // 南丁格尔玫瑰图2
  toolkit.push('#rose2', function (full) {
    return getRoseOptions({
      name: '本月盈利',
      radius: full ? [50, 200] : [20, 100],
      data: [
        { value: 10, name: '抢庄牛牛' },
        { value: 5, name: '炸金花' },
        { value: 15, name: '通比牛牛' },
        { value: 25, name: '德州扑克' },
        { value: 20, name: '二八杠' },
        { value: 35, name: '十八水' },
      ],
    },
    {
      color: ['#719b9e', '#627998', '#d47974', '#7e76cd', '#9dc582', '#e18045', '#3a4b66'],
    }, full)
  })

  // 折线图1
  toolkit.push('#line1', function (full) {
    return getLineOptions(['平均在线', '峰值在线'], ['00', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'], [
      {
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
            color: '#cb8622',
            areaStyle: {
              color: 'rgba(203, 134, 34, 0.2)',
            },
          },
        },
        symbolSize: 0,
        name: '平均在线',
        type: 'line',
        smooth: true,
        data: toolkit.getRandomArray(11, 900, 2800),
      }, {
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
            color: '#b56a74',
            areaStyle: {
              color: 'rgba(221, 106, 102, 0.2)',
            },
          },
        },
        symbolSize: 0,
        name: '峰值在线',
        type: 'line',
        smooth: true,
        data: toolkit.getRandomArray(11, 900, 5100),
      },
    ], full)
  })

  // 折线图2
  toolkit.push('#line2', function (full) {
    return getLineOptions(['平均在线', '峰值在线'], ['00', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'], [
      {
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
            color: '#8378ea',
            areaStyle: {
              color: 'rgba(131, 120, 234, 0.2)',
            },
          },
        },
        symbolSize: 0,
        name: '平均在线',
        type: 'line',
        smooth: true,
        data: toolkit.getRandomArray(11, 900, 2800),
      }, {
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
            color: '#319ad7',
            areaStyle: {
              color: 'rgba(56, 162, 219, 0.2)',
            },
          },
        },
        symbolSize: 0,
        name: '峰值在线',
        type: 'line',
        smooth: true,
        data: toolkit.getRandomArray(11, 900, 5100),
      },
    ], full)
  })

  // 南丁格尔玫瑰图3
  toolkit.push('#rose3', function (full) {
    return getRoseOptions({
      name: '当日总注单量',
      radius: full ? [50, 200] : [10, 60],
      data: [
        { value: 10, name: '抢庄牛牛' },
        { value: 5, name: '炸金花' },
        { value: 15, name: '通比牛牛' },
        { value: 25, name: '德州扑克' },
        { value: 20, name: '二八杠' },
        { value: 35, name: '十八水' },
      ],
    },
    {
      color: ['#719b9e', '#627998', '#d47974', '#7e76cd', '#9dc582', '#e18045', '#3a4b66'],
    }, full)
  })

  // 南丁格尔玫瑰图4
  toolkit.push('#rose4', function (full) {
    return getRoseOptions({
      name: '当日总投注',
      radius: full ? [50, 200] : [10, 60],
      data: [
        { value: 10, name: '抢庄牛牛' },
        { value: 5, name: '炸金花' },
        { value: 15, name: '通比牛牛' },
        { value: 25, name: '德州扑克' },
        { value: 20, name: '二八杠' },
        { value: 35, name: '十八水' },
      ],
    },
    {
      color: ['#719b9e', '#627998', '#d47974', '#7e76cd', '#9dc582', '#e18045', '#3a4b66'],
    }, full)
  })

  // 条形图2
  toolkit.push('#bar2', function (full) {
    return getBarOptions(full);
  })

  // 执行一次全局图表渲染
  toolkit.render();

});
