!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.checkPointInRectangle=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// check-point-in-rectangle.js
// check point intersects with rectangle
// http://martin-thoma.com/how-to-check-if-a-point-is-inside-a-rectangle/
function pointInRect(pt,rect,precision) {
  var p = precision || 6;
  var rectArea = 0.5*Math.abs(
    (rect[0][1] - rect[2][1]) * (rect[3][0] - rect[1][0])
    + (rect[1][1] - rect[3][1]) * (rect[0][0] - rect[2][0])
  );
  var triangleArea = rect.reduce(function(prev,cur, i, arr) {
    var j = i == arr.length-1 ? 0 : i+1;
    return prev + 0.5*Math.abs(
      pt[0] * (arr[i][1] - arr[j][1])
      + arr[i][0] * (arr[j][1] - pt[1])
      + arr[j][0] * (pt[1] - arr[i][1])
    );
  }, 0);
  return fix(triangleArea,p) == fix(rectArea,p);
}
// fix to the precision
function fix(n,p) {
  return parseInt(n * Math.pow(10,p));
};

module.exports = pointInRect;

},{}]},{},[1])(1)
});


//# sourceMappingURL=check-point-in-rectangle.js.map