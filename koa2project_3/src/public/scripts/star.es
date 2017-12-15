import {Star} from './index.es'
const star = new Star();
xtag.register('x-star', {
  content: "<div class='star' id='star' ></div>" +
    " <span class='hide' id='animation'>+1</span>",
  methods: {
    praise: function(){
      let _this = this;
      star.clickAction();
      let animation = _this.querySelector("#animation");
      animation.className = "num";
      setTimeout(function(){
        animation.className = "";
      },800)
    }
  },
  events: {
    click: function(e){
      let _this = this;
      if(e.target.id == "star"){
        let t = "";
        if(t){
          clearTimeout(t);
        }
        t = setTimeout(()=>{
          _this.praise();
        },500)
      }
    }
  }
});

