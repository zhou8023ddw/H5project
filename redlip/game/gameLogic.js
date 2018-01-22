/**
 * Created by Administrator on 2018/1/11 0011.
 */
var GameLogic=function () {
    this.id=null;
    this.starIndex=null;
    this.starName=["熊梓淇","王烁鑫","胡彦斌","虞书欣","毛不易","品冠","苏运莹","马丽","赵志伟"];
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
        this.inputName();
        var shou=document.getElementById('shou');
        shou.addEventListener('touchend',function (e) {
            if(e.target.className){
               var classname=e.target.className;
               if(classname.indexOf('star_')>=0){
                  $("#shou>.choice").attr('style',e.target.style.cssText)
                      .css('display','block').css('opacity','1');
                  $("#shou>img[class^='star_']").css('opacity','0');
                  _this.starIndex=classname.split("_")[1];//获取明星序列
                  clearInterval(_this.id);
                   hasChoile=true;
               }
               if(classname=='choice'){
                   if(hasChoile){
                       $("#shou>.choice").css('display','none');
                       _this.starIndex=null;
                       _this.addEffect1();
                       hasChoile=false;
                   }
               }
               if(classname.indexOf('start_')>=0){
                   if(_this.starIndex&&h5_config.username!=""){
                       $("#shou").css("display","none");
                       $("#main").css("display","block");
                       $("body").css("overflow","hidden");
                       _this.pageTest();
                   }else if(h5_config.username!=""&&_this.starIndex==null){
                       $("#shou>.noChoice").css("display","block");
                       setTimeout(function () {
                           $("#shou>.noChoice").css("display","none");
                       },3000)
                   } else if(h5_config.username==""&&_this.starIndex){
                       $("#shou>.noName").css("display","block");
                       setTimeout(function () {
                           $("#shou>.noName").css("display","none");
                       },3000)
                   }else {
                       $("#shou>.noAll").css("display","block");
                       setTimeout(function () {
                           $("#shou>.noAll").css("display","none");
                       },3000)
                   }
               }
            }
            //console.log(_this.starIndex);
        });
    },
    addEffect1:function () {
        //添加跑马灯效果
        var interval=500;//时间间隔
        var index=1;
        this.id=setInterval(function () {
          $("#shou>img[class^='star_']").css('opacity','0');
          $("#shou>.star_"+index+"").css('opacity','1');
          index++;
          if(index>9){
              index=1;
          }
        },interval)
    },
    inputName:function () {
       //根据输入框内容改变"开始测试"
        if(h5_config.username!=""){
            document.getElementById('inputName').value=h5_config.username;
            $("#shou>.start_n").css("display","none");
            $("#shou>.start_y").css("display","block");
        }else {
            //监听键盘抬起事件
            document.getElementById('inputName').addEventListener("keyup",function (e) {
                if(e.target.value.length>0){
                    $("#shou>.start_n").css("display","none");
                    $("#shou>.start_y").css("display","block");
                    h5_config.username=e.target.value;
                }else{
                    $("#shou>.start_n").css("display","block");
                    $("#shou>.start_y").css("display","none");
                    h5_config.username=e.target.value;
                }
            })
        }
    },
   pageTest:function () {
        var _this=this;
        var allLip=[1,2,3,4,5,6,7,8,9];
       //显示明星名字
       var name=_this.starName[_this.starIndex-1];
       document.getElementById('name_1').innerHTML="以下图片哪张是"+name+"的嘴唇？";
       document.getElementById('name_2').innerHTML="选对才能测运势，并亲耳听到"+name+"对你的新年祝福！";
   //显示嘴唇图片
       var lipIndex=_this.starIndex%3;
       if(lipIndex==0){
           lipIndex=3;
       }
       //显示正确答案
       $("#page_2 .lip_"+_this.starIndex+"").css("display",'block').attr("title",lipIndex);
       allLip.splice(_this.starIndex-1, 1);//排除正确答案
       for(var i=1;i<=3;i++){
           if(i!=lipIndex){
              var cssTest=$("#page_2>.lip_"+i+"").css("top");
              //从中选出一个
              var index= Math.ceil(Math.random()*allLip.length)-1;
              console.log(allLip[index]+"____"+cssTest);
              $("#page_2>.lip_"+allLip[index]+"").css({
                  display:"block",
                  top    :parseInt(cssTest)
              }).attr("title",i);
               allLip.splice(index,1);
           }
       }
       this.choiceEvent();
   },
    choiceEvent:function () {
        var _this=this;
        var canTouch=true;
        //控制选择答案
        document.getElementById('page_2').addEventListener("touchend",function (e) {
           e.preventDefault();
           if(canTouch){
               if(e.target.className.indexOf("lip_")>=0){
                   var index=e.target.className.split('_')[1];//明星顺序
                   var imgIndex=$('#page_2>.lip_'+index+'').attr('title');//位置
                   console.log(imgIndex);
                   if(index==_this.starIndex){
                       $('#page_2>.yes').css({
                           display:"block",
                           top    :parseInt($('#page_2>.choice_'+imgIndex+'').css("top"))
                       });
                       $('#page_2>.choice_'+imgIndex+'').css('display',"none");
                       setTimeout(function () {
                           $("#page_3").fadeIn();
                           _this.pageRock();
                       },1000)
                   }else{
                       $('#page_2>.lip_'+index+'').css('opacity','0.5');
                       $('#page_2>.no').css({
                           display:"block",
                           top    :parseInt($('#page_2>.choice_'+imgIndex+'').css("top"))
                       });
                       $('#page_2>.choice_'+imgIndex+'').css('display',"none");
                       $("#page_2>.box_on").css('display',"block");
                       canTouch=false;
                       setTimeout(function () {
                           $('#page_2>.lip_'+index+'').css('opacity','1');
                           $("#page_2>.box_on").css('display',"none");
                           $('#page_2>.choice_'+imgIndex+'').css('display',"block");
                           $('#page_2>.no').css('display',"none");
                           canTouch=true;
                       },1000);
                   }
               }
           }
        });
    },
    pageRock:function () {
        var _this=this;
        var startTime=new Date().getTime();
        var canMove=true;
        function move() {
          var endTime=new Date().getTime();
          if(parseInt((endTime-startTime)/500)%2==0){
              $("#page_3>.rock_1").css("display","none");
              $("#page_3>.rock_2").css("display","block");
          }else {
              $("#page_3>.rock_2").css("display","none");
              $("#page_3>.rock_1").css("display","block");
          }
          if(canMove){
              requestAnimationFrame(move)
          }
        }
        move();
    document.getElementById('page_3').addEventListener("touchend",function (e) {
        e.preventDefault();
        if(e.target.className.indexOf("rock_")>=0){
            canMove=false;
            $("#page_2").css("display",'none');
            $("#page_3").css("display",'none');
            $("#page_4").css("display",'block');
            _this.pageAudio();
        }
    });
   },
    pageAudio:function () {
        var _this=this;
        //语音页
        var page4=document.getElementById('page_4');
        var start={},move={};
        page4.addEventListener('touchstart',function (e) {
           start.y=e.changedTouches[0].clientY;

        });
        page4.addEventListener('touchmove',function (e) {
            move.y=e.changedTouches[0].clientY;
            if(move.y-start.y<-200){
                console.log("上滑");
                $("#page_4").css('display','none');
                $("#page_5").css('display','block');
                _this.pageDraw();
            }
        });
        page4.addEventListener('touchend',function (e) {

        });
    },
    pageDraw:function () {
        //抽奖页
        var page5 = document.getElementById('page_5');
        page5.addEventListener('touchend', function (e) {
            e.preventDefault();
            var classname=e.target.className;
            if(classname=="start"){
                $(".pan").css({

                });
            }
        });
    }

};