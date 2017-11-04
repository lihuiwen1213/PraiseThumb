class PraiseButton{
	constructor(num,element){
		this.num = num;
		this.element = element;
	}
	/**
	 * 绑定点击事件
	 * author     LIHUIWEN
	 */
	clickAction(){
		let f = this.debounce(this.func, 500, 1000);	// 函数防抖
		this.element.click(()=>{
			// this.throttle(this.func,this); // 函数节流
			f();
		})
	}
	/**
	 * 点击时间要执行的函数体
	 * author     LIHUIWEN
	 */
	func(){
		if(this.num<10){
			this.element.css('-webkit-filter','grayscale(0)');
			$('#animation').addClass("num");
			this.num=add(this.num);
			setTimeout(function(){
				$('#animation').removeClass('num')
			},1000);
		}else{
			this.element.css('-webkit-filter','grayscale(1)');
			this.num = 0;
		}
		console.log(this.num)
	}
	/**
	 * 函数节流
	 * @Author LIHUIWEN
	 * @param      {Function}  method   要执行的方法
	 * @param      {this}    context  this对象
	 */
	throttle(method, context){
		clearTimeout(method.tId);
		method.tId = setTimeout(function(){
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
	debounce(fn, delay, mustRunDelay){
		let timer = null;
		let t_start;
		let  context = this;
		return function(){
			let args = arguments;
			let t_curr = +new Date();
			clearTimeout(timer);
			if(!t_start){
				t_start = t_curr;
			}
			if(t_curr - t_start >= mustRunDelay){
				fn.apply(context, args);
				t_start = t_curr;
			}else{
				timer = setTimeout(function(){
					fn.apply(context, args);
				}, delay);
			}
		}
	}
}

class Thumb extends PraiseButton{
	constructor(num,element){
		super(num,element);
	}
}
export default{Thumb}
