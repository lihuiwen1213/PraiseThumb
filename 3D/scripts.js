var container = document.getElementById("container");
var box = document.getElementById('box');
console.log(box)
var arr = box.getElementsByTagName('div');
var radius = calculateRadius(129,20);
var audio = document.getElementById('audio');

for(var i = 0; i < arr.length; i++){
    arr[i].style.background = "url('img/p"+(i + 1)+".png') no-repeat";
    arr[i].style.WebkitTransform = "rotateY("+360/arr.length * i +"deg) translateZ("+radius+"px)";
}

function calculateRadius(length, totalNum){
    return Math.round(length/(2*Math.tan(Math.PI/totalNum))) - 3;
}

var startX = 0,
              x = 0,
        endX = 0;
var flag = true;
$("#box").on("touchstart",function(event){
    event.preventDefault();
    var touch = event.targetTouches[0];
    startX = touch.pageX - x;
})
$("#box").on("touchmove",function(event){
    if(flag){
        event.preventDefault();
        var touch = event.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX;
        box.style.transform = 'rotateY('+x+'deg)';
    }else{
        return false;
    }
})

$("#box").on("touchend",function(event){
    console.log("over");
})

window.addEventListener("deviceorientation",function(event){
    var gamma = event.gamma;
    if(Math.abs(gamma)>1){
        flag = false;
        box.style.transform = 'rotateY('+gamma*3+'deg)';
    }else{
        flag = true;
    }
})

$("#laba").on("tap",function(e){
    if(audio.pauesd){
        audio.play();
        $("#laba").text("暂停");
    }else{
        audio.pause();
        $("#laba").text("开始");
    }
})