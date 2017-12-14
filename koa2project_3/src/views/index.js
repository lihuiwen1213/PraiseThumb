module.exports=function (templateParams) {
	var _cssList=['vendor'];
	var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);
	var _html="{% extends './layout.html' %}"+
              "{% block title %}My Page{% endblock %}"+
              "{% block styles %}"+
              webAssetsHelp.styles+
              "{% endblock %}"+
              "{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
              "{% block script %}"+
              "<script>"+
              "(function(){"
              "var scriptsshow = ["+webAssetsHelp.scriptsshow+"];"+
              "for(let i = 0; i < scriptsshow.length; i++){"+
              "let a = scriptsshow[i];"+
              "if(localStorage.getItem(a)){"+
              "$('<scr'+'ipt>'+localStorage.getItem(a)+'</scr'+‘ipt>’).attr(}{type:'text/javascript'})"+
              "}"+
              "}"+
              "})()"
              "</script>"+
              // webAssetsHelp.scripts+
              "{% endblock %}";

              return _html;
}