import PraiseButton from './index.es'
const f = new PraiseButton();
xtag.register('x-praise', {
  content: ' <div class="hand" id="hand">'+
          ' <div class="finger"></div>'+
          ' <div class="thumb" id="thumb"></div>'+
       '</div>'+
       ' <div id="animation" class="animation">+1</div>',
  methods: {
    praise: function(){
      let _this = this;
      f.clickAction();
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
      if(e.target.id == "hand"){
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

