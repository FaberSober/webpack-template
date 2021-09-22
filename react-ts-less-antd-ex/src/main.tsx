import React from 'react';
import ReactDom from 'react-dom';
import App from '@/App'

import './index.less'

if(!Array.from){
  Array.from = function (el) {
      return Array.apply(this, el);
  }
} 


/*兼容处理 低版本IE*/
//
Array.prototype.find || (Array.prototype.find = function (predicate) { 
  if (this == null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }
  var list = Object(this);
  var length = list.length || 0;
  var thisArg = arguments[1];
  var value;

  for (var i = 0; i < length; i++) {
    value = list[i];
    if (predicate.call(thisArg, value, i, list)) {
      return value;
    }
  }
  return null;
})

ReactDom.render(<App />, document.getElementById('root'));
