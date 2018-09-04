
$(function () {
  var toolkit = new chartToolkit();

  // 南丁格尔玫瑰图1
  toolkit.push('rose1', getRoseOptions({
    name: '当日盈利',
    radius: [20, 90],
    data: [{
      value: 10,
      name: '抢庄牛牛',
    },
    {
      value: 5,
      name: '炸金花',
    },
    {
      value: 15,
      name: '通比牛牛',
    },
    {
      value: 25,
      name: '德州扑克',
    },
    {
      value: 20,
      name: '二八杠',
    },
    {
      value: 35,
      name: '十八水',
    },
    ],
  }, {
    color: ['#719b9e', '#627998', '#d47974', '#7e76cd', '#9dc582', '#e18045', '#3a4b66'],
  }, true));

  // 执行一次全局图表渲染
  toolkit.render();
});
