webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _index2.default();
xtag.register('x-praise', {
  content: ' <div class="hand" id="hand">' + ' <div class="finger"></div>' + ' <div class="thumb" id="thumb"></div>' + '</div>' + ' <div id="animation" class="animation">+1</div>',
  methods: {
    praise: function praise() {
      var _this = this;
      f.clickAction();
      var animation = _this.querySelector("#animation");
      animation.className = "num";
      setTimeout(function () {
        animation.className = "";
      }, 800);
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == "hand") {
        var t = "";
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this.praise();
        }, 500);
      }
    }
  }
});

/***/ })

},[4]);