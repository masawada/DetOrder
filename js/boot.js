//
// boot.js
// Author: Masayoshi Wada
//

var init = function(){
  var view = ViewController();
  view.appendOrder(lts);
  view.detButton.onclick = function doDetOrder(){
    var order = DetOrder(lts);
    view.dropOrder();
    view.appendOrder(order);
  };
};

window.onload = init;
