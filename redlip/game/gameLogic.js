/**
 * Created by Administrator on 2018/1/11 0011.
 */
var GameLogic=function () {
    this.id=null;
    this.starIndex=null;
    this.init();
};
GameLogic.prototype={
    init:function () {
        $("#loading").css("display","none");
        //判断是否是微信端打开
        var ua=navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger"){
            console.log("在微信端");
        }else {
            console.log("不在微信端");
        }
        this.pageShou()
    },
    pageShou:function () {
        var _this=this;
        var hasChoile=false;//是否选择明星
        this.addEffect1();
        var shou=document.getElementById('shou');
        shou.addEventListener('touchend',function (e) {
            if(e.target.className){
               var classname=e.target.className;
               if(classname.indexOf('star_')>=0){
                  $("#shou>.choice").attr('style',e.target.style.cssText)
                      .css('opacity','1');
                  $("#shou>img[class^='star_']").css('opacity','0');
                  _this.starIndex=classname.split("_")[1];//获取明星序列
                  clearInterval(_this.id);
                   hasChoile=true;
               }
               if(classname=='choice'){
                   if(hasChoile){
                       $("#shou>.choice").css('opacity','0');
                       _this.starIndex=null;
                       _this.addEffect1();
                       hasChoile=false;
                   }
               }
            }else if(e.target.id){
                switch (e.target.id){
                    case "start":(function () {
                        $("#shou").css("display","none");
                        $("#main").css("display","block");
                        $("body").css("overflow","hidden");
                    })();break;
                }
            }
            console.log(_this.starIndex);
        });
    },
    addEffect1:function () {
        //添加跑马灯效果
        var interval=1000;//时间间隔
        var index=1;
        this.id=setInterval(function () {
          $("#shou>img[class^='star_']").css('opacity','0');
          $("#shou>.star_"+index+"").css('opacity','1');
          index++;
          if(index>9){
              index=1;
          }
        },interval)
    }
};