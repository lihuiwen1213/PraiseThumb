'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
	function PraiseButton(num, element) {
		_classCallCheck(this, PraiseButton);

		this.num = num;
		this.element = element;
	}
	/**
  * 绑定点击事件
  * author     LIHUIWEN
  */


	_createClass(PraiseButton, [{
		key: 'clickAction',
		value: function clickAction() {
			var f = this.debounce(this.func, 500, 1000); // 函数防抖
			this.element.click(function () {
				// /PraiseThumb/php/updata.php
				// this.throttle(this.func,this); // 函数节流
				f();
			});
		}
		/**
   * 点击时间要执行的函数体
   * author     LIHUIWEN
   */

	}, {
		key: 'func',
		value: function func() {
			if (this.num < 10) {
				this.element.css('-webkit-filter', 'grayscale(0)');
				$('#animation').addClass("num");
				this.num = add(this.num);
				setTimeout(function () {
					$('#animation').removeClass('num');
				}, 1000);
				axios.get('/index/update').then(function (response) {
					console.log(response);
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.element.css('-webkit-filter', 'grayscale(1)');
				this.num = 0;
			}
			console.log(this.num);
		}
		/**
   * 函数节流
   * @Author LIHUIWEN
   * @param      {Function}  method   要执行的方法
   * @param      {this}    context  this对象
   */

	}, {
		key: 'throttle',
		value: function throttle(method, context) {
			clearTimeout(method.tId);
			method.tId = setTimeout(function () {
				method.call(context);
			}, 200);
		}
		/**
   * 函数防抖
   * @author     LIHUIWEN
   * @param      {Function}  fn            要执行的函数
   * @param      {number>}    delay         隔多长时间清除函数定时器
   * @param      {number}    mustRunDelay  多长时间需要执行一次
   */

	}, {
		key: 'debounce',
		value: function debounce(fn, delay, mustRunDelay) {
			var timer = null;
			var t_start = void 0;
			var context = this;
			return function () {
				var args = arguments;
				var t_curr = +new Date();
				clearTimeout(timer);
				if (!t_start) {
					t_start = t_curr;
				}
				if (t_curr - t_start >= mustRunDelay) {
					fn.apply(context, args);
					t_start = t_curr;
				} else {
					timer = setTimeout(function () {
						fn.apply(context, args);
					}, delay);
				}
			};
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(num, element) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
	}

	return Thumb;
}(PraiseButton);

exports.default = { Thumb: Thumb };
