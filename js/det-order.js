//
// det-order.js
// Author: Masayoshi Wada
//

var DetOrder = function(raw_lts){
  var order = [], lts = [];
  Array.prototype.push.apply(lts, raw_lts);
  while(lts.length){Array.prototype.push.apply(order, lts.splice(Math.floor(Math.random()*2013)%lts.length,1));}
  return order;
};
