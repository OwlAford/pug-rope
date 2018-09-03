function chartToolkit (opts) {
  var _this = this;

  this.opts = opts;

  // 保存图表初始化方法队列
  this.chartOptionQueue = [];

  // 保存图表实例队列
  this.chartInstanceQueue = [];

  // 布局可用宽度
  this.availableWidth = 0;

  // 保存全屏状态
  this.isFullScreen = false;

  // 全屏化之前临时保留小图尺寸
  this.tempHeight = 210;

  this.fullScreen();

  if (opts.gridRatio) {
    _this.resetGrid(opts.gridRatio);

    // 切换侧边栏显示隐藏触发页面主体部分重新布局
    $(window).on('resize', $.debounce(100, function () {
      // 页面布局宽度发生变化，图表尺寸需要重置
      _this.resetGrid(opts.gridRatio);
      _this.resizeTimer = setTimeout(function () {
        if (_this.isFullScreen) {
          _this.resize(_this.activeIndex);
        } else {
          _this.resize();
        }
        clearTimeout(_this.resizeTimer);
      }, opts.resizeDelay || 300);
    }))
  }
}

// 图表方法生成器塞进队列
chartToolkit.prototype.push = function (chartId, optionsFn) {
  var _this = this;
  var $chart = $(chartId);
  var dom = $chart.get(0);
  var $card = $chart.parents('.card');
  var $zoomBtn = $card.find('.app-zoom');
  var $cacheTime = $card.find('.cacheTime');

  var index = this.chartInstanceQueue.length;

  $zoomBtn.attr('data-chart-index', index);
  $cacheTime.attr('data-chart-index', index);

  _this.chartOptionQueue.push(optionsFn);
  _this.chartInstanceQueue.push(echarts.init(dom));
}

// 渲染图表
chartToolkit.prototype.render = function (index) {
  var _this = this;
  var isFull = _this.isFullScreen;
  if (index || index === 0) {
    _this.chartInstanceQueue[index].setOption(_this.chartOptionQueue[index](isFull));
  } else {
    _this.resizeTimer = setTimeout(function () {
      _this.resize();
      $(_this.chartInstanceQueue).each(function(i, instance) {
        instance.setOption(_this.chartOptionQueue[i](isFull))
      });
      clearTimeout(_this.resizeTimer);
    }, _this.opts.resizeDelay || 300);
  }
}

// 数据变更，重新渲染图表
chartToolkit.prototype.change = function (index, optionsFn) {
  this.chartOptionQueue[index] = optionsFn;
  this.render(index);
}

// 刷新图表数据
chartToolkit.prototype.refresh = function (index) {
  var _this = this;
  var queue = _this.chartInstanceQueue;
  queue[index].refresh();
}

// 重置图表尺寸
chartToolkit.prototype.resize = function (index) {
  var _this = this;
  var queue = _this.chartInstanceQueue;
  if (index || index === 0) {
    queue[index].resize()
  } else {
    $(queue).each(function(i, item) {
      item.resize()
    });
  }
}

// 获取随机数组（仅供演示）
chartToolkit.prototype.getRandomArray = function (len, min, max) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    var tmp = max * Math.random();
    if (tmp < min) {
      tmp = min
    }
    arr.push(tmp);
  }
  return arr;
}

 // 重置页面布局宽度
chartToolkit.prototype.resetGrid = function (ratio) {
  var _this = this;
  var $grid = $('.flex-grid');
  var contentWidth = $grid.parent().outerWidth();
  var slcieWidth = [];

  $grid.width(contentWidth);

  var ratioDeno = eval(ratio.join('+'));

  _this.availableWidth = contentWidth - ((ratio.length - 1) * 20);

  var allCol = $grid.find('.grid-col');
  allCol.each(function (i, col) {
    var setWidth = ~~(ratio[i] / ratioDeno * _this.availableWidth);
    slcieWidth.push(setWidth);
    $(col).width(setWidth);
  });
  return slcieWidth;
}

// 点击触发全屏切换
chartToolkit.prototype.fullScreen = function () {
  var _this = this;
  var $allCard = $('.card');

  $('.app-zoom').on('click', function () {
    var docEl = document.documentElement;
    var $zoomBtn = $(this);
    var $card = $zoomBtn.parent();
    var activeIndex = Number($zoomBtn.attr('data-chart-index'));
    var $activeCard = $allCard.eq(activeIndex);
    var $chart = $card.find('.chart');
    var ratio = $chart.height() / $chart.width();

    var chartType = _this.chartOptionQueue[activeIndex]().series[0].type;

    var fullViewHeight = ratio * _this.availableWidth;

    if (chartType === 'pie') {
      fullViewHeight = docEl.clientHeight - 148;
    }

    if (fullViewHeight < 380) {
      fullViewHeight = 380;
    }

    if ($zoomBtn.hasClass('in')) {
      $zoomBtn.removeClass('in');
      $allCard.removeClass('hide');
      $activeCard.removeClass('fixed');
      $chart.css('height', _this.tempHeight + 'px');
      _this.isFullScreen = false;
      this.activeIndex = null;
    } else {
      _this.tempHeight = $chart.height();
      $zoomBtn.addClass('in');
      $allCard.addClass('hide');
      $activeCard.removeClass('hide').addClass('fixed');
      $chart.css('height', fullViewHeight + 'px');
      _this.isFullScreen = true;
      this.activeIndex = activeIndex;
    }

    _this.render(activeIndex);
    _this.resize(activeIndex);
  })
}