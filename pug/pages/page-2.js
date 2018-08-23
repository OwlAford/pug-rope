
$(function () {
  // 当前激活全屏显示元素索引值
  var fullShowChartIndex = null;

  // 布局可用宽度
  var availableWidth = 0;

  // 全屏化之前临时保留小图尺寸
  var tempHeight = 340;

  // 重置页面布局宽度
  function resetGrid() {
    var $grid = $('.flex-grid');
    var contentWidth = $grid.outerWidth();
    var slcieWidth = [];
    availableWidth = contentWidth - 40;

    var ratio = Array.prototype.slice.apply(arguments);
    var ratioDeno = eval(ratio.join('+'));

    var allCol = $grid.find('.grid-col');
    allCol.each(function (i, col) {
      var setWidth = ~~(ratio[i] / ratioDeno * availableWidth);
      slcieWidth.push(setWidth);
      $(col).width(setWidth);
    });
    return slcieWidth;
  }
  resetGrid(560, 560, 320);

  // 重置全部图表
  var renderAllCharts = function () {
    var renderList = [
      setRose1,
      setBar1,
      setRose2,
      setLine1,
      setLine2,
      setRose3,
      setRose4,
      setBar2,
    ]
    if (fullShowChartIndex === null) {
      $(renderList).each(function(i, item) {
        item()
      });
    } else {
      renderList[fullShowChartIndex](true);
    }
  }

  // 切换侧边栏显示隐藏触发页面主体部分重新布局
  $(window).on('resize', $.debounce(100, function () {
    // 页面布局宽度发生变化，图表尺寸需要重置
    resetGrid(560, 560, 320);
    renderAllCharts();
  }))

  // 南丁格尔玫瑰图1
  var setRose1 = function (full) {
    echarts
      .init(document.getElementById('rose1'))
      .setOption(getRoseOptions({
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
      }, full));
  };
  setRose1();

  // 堆积条形图1
  var setBar1 = function (full) {
    echarts
      .init(document.getElementById('bar1'))
      .setOption(getHeapBarOptions(full));
  };
  setBar1();

  // 南丁格尔玫瑰图2
  var setRose2 = function (full) {
    echarts
      .init(document.getElementById('rose2'))
      .setOption(getRoseOptions({
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
      }, full));
  };
  setRose2();

  // 折线图1
  var setLine1 = function (full) {
    echarts
      .init(document.getElementById('line1'))
      .setOption(getLineOptions(['平均在线', '峰值在线'], [
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
          data: [900, 1200, 1400, 1500, 1000, 800, 700, 1100, 2300, 2800, 1900],
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
          data: [900, 1542, 3682, 4724, 5122, 4512, 2523, 2321, 3344, 2200, 3598],
        },
      ], full));
  };
  setLine1();

  // 折线图1
  var setLine2 = function () {
    echarts
      .init(document.getElementById('line2'))
      .setOption(getLineOptions(['平均在线', '峰值在线'], [
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
          data: [900, 1200, 1400, 1500, 1000, 800, 700, 1100, 2300, 2800, 1900],
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
          data: [900, 1542, 3682, 4724, 5122, 4512, 2523, 2321, 3344, 2200, 3598],
        },
      ]));
  };
  setLine2();

  // 南丁格尔玫瑰图3
  var setRose3 = function (full) {
    echarts
      .init(document.getElementById('rose3'))
      .setOption(getRoseOptions({
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
      }, full));
  };
  setRose3();

  // 南丁格尔玫瑰图4
  var setRose4 = function (full) {
    echarts
      .init(document.getElementById('rose4'))
      .setOption(getRoseOptions({
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
      }, full));
  };
  setRose4();

  // 条形图2
  var setBar2 = function (full) {
    echarts
      .init(document.getElementById('bar2'))
      .setOption(getBarOptions(full));
  };
  setBar2();

  // 点击全屏显示当前图表
  var $allCard = $('.flex-grid .card');
  $('.app-zoom').on('click', function () {
    var $zoomBtn = $(this);
    var $card = $zoomBtn.parent();
    var activeIndex = Number($zoomBtn.attr('data-chart-index'));
    var $activeCard = $allCard.eq(activeIndex);
    var $chart = $card.find('.chart');
    var fullViewHeight = $chart.height() / $chart.width() * availableWidth;
  
    if ($zoomBtn.hasClass('in')) {
      $zoomBtn.removeClass('in');
      $allCard.show();
      $activeCard.removeClass('fixed');
      $chart.css('height', tempHeight + 'px');
      fullShowChartIndex = null;
    } else {
      tempHeight = $chart.height();
      $zoomBtn.addClass('in');
      $allCard.hide();
      $activeCard.show().addClass('fixed');
      $chart.css('height', fullViewHeight + 'px');
      fullShowChartIndex = activeIndex;
    }
    renderAllCharts();
  })

});
