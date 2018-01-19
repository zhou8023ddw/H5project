/**
 * Created by Administrator on 2018/1/11 0011.
 */
var GameLogic=function () {
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
        this.upMove();
    },
    playAudio:function (musicName) {
        game.playMusic(musicName);
        game.sound.audios[musicName].addEventListener('timeupdate',function (e) {
            $("#musicDiv").css('width',500*e.target.currentTime/e.target.duration+'px');
        });
        game.sound.audios[musicName].addEventListener('ended',function (e) {
            //播放结束
            console.log("播放结束");
        });
        var musicDiv=document.getElementById('musicDiv');
        var musicPlay=true;
        musicDiv.addEventListener('touchstart',function (event) {
            event.preventDefault();
        });
        musicDiv.addEventListener('touchend',function (event) {
            event.preventDefault();
            if(musicPlay){
                game.pauseMusic(musicName);
            }else {
                game.playMusic(musicName);
            }
            musicPlay = musicPlay==false?true:false;
        });
    },
    upMove:function () {
        var _this=this;
        var pageMove=document.getElementById('page_1');
        var moveY,startY,hasMove=false;
        pageMove.addEventListener('touchstart',function (event) {
            startY=event.changedTouches[0].clientY;
            hasMove=false;
        });
        pageMove.addEventListener('touchmove',function (event) {
            moveY=event.changedTouches[0].clientY;
            if(moveY-startY<-80){
                hasMove=true;
                $('#page_1').css("top",moveY-startY);
                $('#drawLottery').css("top",1120+(moveY-startY));
            }

        });
        pageMove.addEventListener('touchend',function (event) {
            if(hasMove){
                $('#page_1').animate({top:'-1120px'});
                $('#drawLottery').animate({top:'0px'});
                //切换到该页面后播放音乐
                //_this.playAudio('music');
            }
        });
    },
    longPress:function () {
        var saveImg=document.getElementById('saveImg');
        var startTime,endTime,hasMove=true,start,move;
        saveImg.addEventListener('touchstart',function (event) {
            startTime=event.timeStamp;
            start={
                x:event.changedTouches[0].clientX,
                y:event.changedTouches[0].clientY
            };
            hasMove=true;
        });
        saveImg.addEventListener('touchmove',function (event) {
            move={
                x:event.changedTouches[0].clientX,
                y:event.changedTouches[0].clientY
            };
            if(move.x-start.x>20 ||move.x-start.x<-20 ||move.y-start.y>20 ||move.y-start.y<-20){
                hasMove=false;
            }
        });
        saveImg.addEventListener('touchend',function (event) {
            endTime=event.timeStamp;
            if(hasMove){
                if(endTime-startTime>500){
                    console.log(endTime-startTime);
                }
            }
        });
    }
};/**
 * Created by Administrator on 2018/1/19 0019.
 */
