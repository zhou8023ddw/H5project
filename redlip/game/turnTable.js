/**
 * Created by Administrator on 2018/1/12 0012.
 */
//圆盘抽奖
var whichAward = function(deg) {
    if ((deg > 342 && deg <= 360) || (deg > 0 && deg <= 18)) { //360-342 0-18
        return "第一个";
    } else if ((deg > 18 && deg <= 54)) { //342-306
        return "第二个";
    } else if (deg > 54 && deg <= 90) { //306-270
        return "第三个";
    } else if (deg > 90 && deg <= 126) { //270-234
        return "第四个";
    } else if (deg > 126 && deg <= 162) { //234-198
        return "第五个";
    } else if (deg > 162 && deg <= 198) { //198-162
        return "第六个";
    }else if (deg > 198 && deg <= 234) { //162-126
        return "第七个";
    }else if (deg > 234 && deg <= 270) { //126-90
        return "第八个";
    }else if (deg > 270 && deg <= 306) { //90-54
        return "第九个";//0%
    }else if (deg > 306 && deg <= 342) { //54-18
        return "第十个";//40%
    }
};
var KinerLottery = new KinerLottery({
    rotateNum: 8, //转盘转动圈数
    body: "#page", //大转盘整体的选择符或zepto对象
    direction: 0, //0为顺时针转动,1为逆时针转动
    disabledHandler: function(key) {
        switch (key) {
            case "noStart":
                alert("活动尚未开始");
                break;
            case "completed":
                alert("活动已结束");
                break;
        }
    }, //禁止抽奖时回调
    clickCallback: function() {
        //此处访问接口获取奖品
        function random() {
            var angle=Math.floor(Math.random() * 100);//360-angle为顺时针图片奖品
            //确定不显示内容或许几率大的位置可以操作angle的
            if(angle>=15 && angle<25){
                //中奖率为0
               angle-=10;
            }else if(angle>=25&&angle<35){
                angle-=20;
            }else if(angle>=35&&angle<45){
                angle-=30;
            }
            console.log(angle);
            return angle*3.6;
        }
        this.goKinerLottery(random());
    }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
    KinerLotteryHandler: function(deg) {
         console.log(whichAward(deg));
    } //抽奖结束回调
});