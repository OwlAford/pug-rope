var getLineOptions = function (type, series) {
  return {
    tooltip: {
      show: true,
      formatter: '{c}',
    },
    legend: {
      y: 'bottom',
      data: type,
      textStyle: {
        color: '#FFF',
      },
    },
    calculable: false,
    xAxis: [
      {
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#3e434e',
            width: 1,
            type: 'solid',
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#979797',
            fontSize: 10,
          },
        },
        data: ['00', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'],
      },
    ],
    yAxis: [
      {
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3e434e',
            width: 1,
            type: 'solid',
          },
        },
        type: 'value',
        axisLabel: {
          margin: 5,
          textStyle: {
            color: '#979797',
            fontSize: 10,
          },
        },
      },
    ],
    grid: {
      borderWidth: 0,
      x: 35,
      y: 10,
      x2: 10,
      y2: 60,
    },
    series,
  };
};
