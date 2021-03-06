
$(function () {
  // 切换侧边栏显示隐藏触发页面主体部分重新布局
  $(window).on('resize', $.debounce(100, function () {
    // 页面布局宽度发生变化，图表尺寸需要重置
    myChart.resize();
  }))

  var areaData = [
    { name: '西藏', value: 60583 },
    { name: '青海', value: 167044 },
    { name: '宁夏', value: 210221 },
    { name: '海南', value: 252266 },
    { name: '甘肃', value: 502037 },
    { name: '贵州', value: 570184 },
    { name: '新疆', value: 661005 },
    { name: '云南', value: 889312 },
    { name: '重庆', value: 1001137 },
    { name: '吉林', value: 1056883 },
    { name: '山西', value: 1123755 },
    { name: '天津', value: 1130728 },
    { name: '江西', value: 1170282 },
    { name: '广西', value: 1172087 },
    { name: '陕西', value: 125123 },
    { name: '黑龙江', value: 12582 },
    { name: '内蒙古', value: 1435988 },
    { name: '安徽', value: 1530065 },
    { name: '北京', value: 1625193 },
    { name: '福建', value: 1756018 },
    { name: '上海', value: 1919569 },
    { name: '湖北', value: 1963226 },
    { name: '湖南', value: 1966956 },
    { name: '四川', value: 2102668 },
    { name: '辽宁', value: 222267 },
    { name: '河北', value: 2451576 },
    { name: '河南', value: 2693103 },
    { name: '浙江', value: 3231885 },
    { name: '山东', value: 4536185 },
    { name: '江苏', value: 4911027 },
    { name: '广东', value: 5321028 },
  ]
  
  var formatNumber = function (s, n, float) {
    n = n > 0 && n <= 20 ? n : 2
    s = parseFloat((s + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
    var l = s.split('.')[0].split('').reverse()
    var r = float ? '.' + s.split('.')[1] : ''
    var t = ''
    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
    return t.split('').reverse().join('') + r
  }

  // 初始化城市数据
  var $cityList = $('#cityList');
  $(areaData).each(function(i, e) {
    $cityList.append('<tr><td>' + e.name + '</td><td>' + formatNumber(e.value, null, false) + '</td></tr>');
  })
  var $cityListTr = $cityList.find('tr');

  var initMap = function () {
    return echarts
      .init(document.getElementById('map'))
      .setOption({
        tooltip: {
          trigger: 'item',
        },
        dataRange: {
          orient: 'horizontal',
          min: 0,
          max: 5500000,
          text: ['高', '低'],
          splitNumber: 0,
          textStyle: {
            color: '#FFF',
          },
        },
        series: [
          {
            name: '用户量',
            type: 'map',
            mapType: 'china',
            mapLocation: {
              x: 'center',
            },
            selectedMode: 'single',
            itemStyle: {
              normal: {label: { show: true } },
              emphasis: {label: { show: true } },
            },
            data: areaData,
          },
        ],
        animation: false,
      })
      .on('mapSelected', function (item) {
        // 获取选中城市
        for (var city in item.selected) {
          if (item.selected[city]) {
            // console.log(city);
            $cityListTr.each(function (i, item) {
              var $el = $(item);
              $el.html().indexOf(city) > 0
                ? $el.addClass('active')
                : $el.removeClass('active')
            })
            return
          }
        }
      });
  };
  var myChart = initMap();
});
