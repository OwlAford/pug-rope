var getRoseOptions = function (setSeries, config, full) {
  config = config || {};
  var mySeries = $.extend({
    type: 'pie',
    center: ['50%', '50%'],
    roseType: 'radius',
    itemStyle: {
      normal: {
        label: {
          show:  full ? true : false,
        },
        labelLine: {
          show: full ? true : false,
        },
      },
      emphasis: {
        label: {
          show: full ? false : true,
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
