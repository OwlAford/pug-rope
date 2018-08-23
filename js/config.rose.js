var getRoseOptions = function (setSeries, config, full) {
  var normalFontSize = 10;
  if (full) {
    normalFontSize = 13;
  }

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
            fontSize: normalFontSize,
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
        fontSize: normalFontSize,
      },
    },
    series: [
      mySeries,
    ],
  }, config);
  return myOptions;
};
