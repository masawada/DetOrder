//
// view.js
// Author: Masayoshi Wada
//

var ViewController = function Class(){
  if(!(this instanceof Class)){ return new ViewController(); }

  this.orderlist = document.getElementById('orderlist');
  this.detButton = document.getElementById('detbutton');
  this.base = document.getElementById('main');
};

ViewController.prototype = (function(){
  var proto = {};

  proto.dropOrder = function(){
    this.base.removeChild(this.orderlist);
  };

  proto.appendOrder = function(order){
    var ul = document.createElement('ul');
    ul.id = 'orderlist';
    
    var i, ordersize = order.length;
    for(i=0;i<ordersize;i++){
      var li = document.createElement('li');
      li.innerText = order[i];
      li.className = 'list-item';
      ul.appendChild(li);
    }

    this.base.insertBefore(ul, this.detButton);
    this.orderlist = ul;
  };

  return proto;
}());
