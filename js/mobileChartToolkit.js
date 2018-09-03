function chartToolkit (opts) {
  this.opts = opts;

  // 保存图表初始化方法队列
  this.chartOptionQueue = {};

  // 保存图表实例队列
  this.chartInstanceQueue = {};
}

// 图表方法生成器塞进队列
chartToolkit.prototype.push = function (chartId, options) {
  var _this = this;
  var $chart = $('#' + chartId);
  var dom = $chart.get(0);

  _this.chartOptionQueue[chartId] = options;
  _this.chartInstanceQueue[chartId] = echarts.init(dom);
};

// 渲染图表
chartToolkit.prototype.render = function (chartId) {
  var _this = this;
  var insQueue = _this.chartInstanceQueue;
  var optQueue = _this.chartOptionQueue;
  if (chartId) {
    insQueue[chartId].setOption(optQueue[chartId]);
  } else {
    Object.keys(insQueue).forEach(function (key) {
      insQueue[key].setOption(optQueue[key]);
    });
  }
};

// 数据变更，重新渲染图表
chartToolkit.prototype.change = function (chartId, options) {
  this.chartOptionQueue[chartId] = options;
  this.render(chartId);
};

// 刷新图表数据
chartToolkit.prototype.refresh = function (chartId) {
  var _this = this;
  var insQueue = _this.chartInstanceQueue;
  insQueue[chartId].refresh();
};

// 重置图表尺寸
chartToolkit.prototype.resize = function (chartId) {
  var _this = this;
  var insQueue = _this.chartInstanceQueue;
  if (chartId) {
    insQueue[chartId].resize();
  } else {
    Object.keys(insQueue).forEach(function (key) {
      insQueue[key].setOption(_this.chartOptionQueue[key]);
    });
  }
};

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
};
