$(function(){
  // 重置页面布局宽度
  function resetGrid () {
    var $grid = $('.flex-grid');
    var contentWidth = $grid.outerWidth();
    var availableWidth = contentWidth - 60;
    var slcieWidth = [];

    var ratio = Array.prototype.slice.apply(arguments);
    var ratioDeno = eval(ratio.join('+'));
    
    var allCol = $grid.find('.grid-col');
    allCol.each(function (i, col) {
      var setWidth = ~~(ratio[i] / ratioDeno * availableWidth);
      slcieWidth.push(setWidth);
      $(col).width(setWidth);
    })
    return slcieWidth
  }
  resetGrid(560, 560, 320);

  var temp;
  $('.app-tabs-bar .sidebar-control').on('click', function () {
    temp && clearTimeout(temp);
    temp = setTimeout(function () {
      resetGrid(560, 560, 320);
      clearTimeout(temp);
    }, 300);
  })
})