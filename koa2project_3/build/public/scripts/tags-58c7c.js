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
xtag.register('x-clock', {
  lifecycle: {
    created: function created() {
      this.start();
    }
  },
  methods: {
    start: function start() {
      this.update();
      this.xtag.interval = setInterval(this.update.bind(this), 1000);
    },
    stop: function stop() {
      this.xtag.interval = clearInterval(this.xtag.interval);
    },
    update: function update() {
      this.textContent = new Date().toLocaleTimeString();
    }
  },
  events: {
    tap: function tap() {
      if (this.xtag.interval) this.stop();else this.start();
    }
  }
});

/***/ })

},[4]);