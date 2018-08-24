
$(function () {
  // 切换侧边栏显示隐藏触发页面主体部分重新布局
  $(window).on('resize', $.debounce(100, function () {
    // 页面布局宽度发生变化，图表尺寸需要重置
    myChart.resize();
  }))

  var initRose = function () {
    return echarts
      .init(document.getElementById('rose1'))
      .setOption(getRoseOptions({
        name: '盈利',
        radius: [30, 160],
        itemStyle: {
          normal: {
            label: {
              show: true,
              textStyle: {
                fontSize: 14,
              },
              formatter: '{a} \n {b} : {c} ({d}%)',
            },
            labelLine: {
              show: true,
            },
          },
        },
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
      }));
  };
  var myChart = initRose();
});
