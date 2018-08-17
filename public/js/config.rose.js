var getRoseOptions = function (setSeries, config) {
  config = config || {};
  var mySeries = $.extend({
    type: 'pie',
    center: ['50%', '50%'],
    roseType: 'radius',
    itemStyle: {
      normal: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
      emphasis: {
        label: {
          show: true,
          textStyle: {
            fontSize: 10,
          },
          position: 'inner',
        },
        labelLine: {
          show: false,
        },
      },
    },
  }, setSeries);

  var myOptions = $.extend({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      textStyle: {
        fontSize: 10,
      },
    },
    series: [
      mySeries,
    ],
  }, config);
  return myOptions;
};
