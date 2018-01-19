var config = {
    basic: {
        js    : [
            {name:"js",url:"js/jquery-2.1.3.min.js", sync: false},
            /*{name:"Zepto",url:"js/zepto.min.js", sync: false},*/
            {name:"KinerLottery",url:"js/kinerLottery.js", sync: false},
            {name: "jweixin", url: "http://res.wx.qq.com/open/js/jweixin-1.0.0.js", sync: true},
            {name: "wx", url: "js/m_wx.js", sync: false},
            {name: "jroll", url: "js/jroll.min.js", sync: false},
            {name: "sound", url: "js/Sound.js", sync: false},
            //{name:"turntable",url:"game/turnTable.js", sync: false},
            {name:"game",url:"game/gameLogic.js", sync: false}
        ],
        images: [
        ],
        video : [],
        res   : [
        ]
    },
    pages: [
           {
            id:"shou",
            animation:[],
            rect:{w:640,x:0,y:0},
            display:"none",
            dom:[
                {type:"img",src:"images/page_1_002.png",rect:{x:0,y:674,w:640,h:957},comment:"图层_1",class:""},
                {type:"img",src:"images/page_1_003.png",rect:{x:0,y:895,w:640,h:476},comment:"底纹",class:""},
                {type:"img",src:"images/page_1_004.png",rect:{x:48,y:1110,w:539,h:104},comment:"主办方",class:""},
                {type:"img",src:"images/page_1_005.png",rect:{x:47,y:1263,w:545,h:285},comment:"合作伙伴",class:""},
                {type:"img",src:"images/page_1_006.png",rect:{x:51,y:959,w:540,h:122},comment:"方法",class:""},
                {type:"img",src:"images/page_1_007.png",rect:{x:64,y:860,w:510,h:70},comment:"矩形_8",class:""},
                {type:"img",src:"images/page_1_008.png",rect:{x:421,y:880,w:121,h:29},comment:"开始测试-选中",class:"",id:"start",display:"none"},
                {type:"img",src:"images/page_1_010.png",rect:{x:422,y:880,w:120,h:29},comment:"开始测试-没选",class:""},
                {type:"input",rect:{x:95,y:875,w:271,h:39},comment:"请输入您的昵称",class:""},
                /*{type:"img",src:"images/page_1_009.png",rect:{x:100,y:879,w:178,h:29},comment:"张扣扣张扣扣",class:""},
                {type:"img",src:"images/page_1_011.png",rect:{x:95,y:880,w:211,h:29},comment:"请输入您的昵称",class:""},*/
                {type:"img",src:"images/page_1_012.png",rect:{x:0,y:0,w:640,h:680},comment:"明星照片",class:""},
                {type:"img",src:"images/page_1_013.png",rect:{x:0,y:0,w:214,h:227},comment:"1",class:"star_1"},
                {type:"img",src:"images/page_1_014.png",rect:{x:214,y:0,w:213,h:227},comment:"2",class:"star_2"},
                {type:"img",src:"images/page_1_015.png",rect:{x:427,y:0,w:213,h:227},comment:"3",class:"star_3"},
                {type:"img",src:"images/page_1_016.png",rect:{x:0,y:227,w:214,h:227},comment:"4",class:"star_4"},
                {type:"img",src:"images/page_1_017.png",rect:{x:214,y:227,w:213,h:227},comment:"5",class:"star_5"},
                {type:"img",src:"images/page_1_018.png",rect:{x:427,y:227,w:213,h:227},comment:"6",class:"star_6"},
                {type:"img",src:"images/page_1_019.png",rect:{x:0,y:454,w:214,h:227},comment:"7",class:"star_7"},
                {type:"img",src:"images/page_1_020.png",rect:{x:214,y:454,w:213,h:227},comment:"8",class:"star_8"},
                {type:"img",src:"images/page_1_021.png",rect:{x:427,y:454,w:213,h:227},comment:"9",class:"star_9"},
                {type:"img",src:"images/page_1_022.png",rect:{x:0,y:0,w:214,h:227},comment:"选中",class:"choice",display:"none"},
                {type:"img",src:"images/page_1_023.png",rect:{x:29,y:637,w:579,h:225},comment:"主文字",class:""},
                {type:"img",src:"images/page_1_024.png",rect:{x:62,y:782,w:80,h:82},comment:"矢量智能对象",class:""},
                {type:"img",src:"images/page_1_025.png",rect:{x:544,y:724,w:69,h:70},comment:"矢量智能对象_拷贝_2",class:""},
                {type:"img",src:"images/page_1_026.png",rect:{x:496,y:781,w:76,h:75},comment:"矢量智能对象",class:""},
                {type:"img",src:"images/page_1_027.png",rect:{x:22,y:724,w:64,h:65},comment:"矢量智能对象_拷贝",class:""},

            ]
        },
        {
            id:"page_2",
            animation:[],
            rect:{x:0,y:0},
            display:"block",
            dom:[
                {type:"img",src:"images/page_2_130.jpg",rect:{x:-70,y:0,w:780,h:1120},comment:"图层_1",class:""},
                {type:"img",src:"images/page_2_131.png",rect:{x:3,y:415,w:75,h:76},comment:"矢量智能对象_拷贝_3",class:""},
                {type:"img",src:"images/page_2_132.png",rect:{x:557,y:316,w:64,h:65},comment:"矢量智能对象_拷贝_4",class:""},
                {type:"img",src:"images/page_2_133.png",rect:{x:559,y:845,w:84,h:85},comment:"矢量智能对象_拷贝_5",class:""},
                {type:"img",src:"images/page_2_134.png",rect:{x:125,y:1056,w:387,h:26},comment:"下",class:""},
                {type:"img",src:"images/page_2_135.png",rect:{x:71,y:87,w:479,h:179},comment:"文字",class:""},
                {type:"img",src:"images/page_2_136.png",rect:{x:107,y:305,w:425,h:257},comment:"1",class:""},
                {type:"img",src:"images/page_2_137.png",rect:{x:107,y:536,w:425,h:257},comment:"2",class:""},
                {type:"img",src:"images/page_2_138.png",rect:{x:107,y:766,w:425,h:257},comment:"3",class:""},
                {type:"img",src:"images/page_2_139.png",rect:{x:107,y:305,w:425,h:257},comment:"4",class:""},
                {type:"img",src:"images/page_2_140.png",rect:{x:107,y:536,w:425,h:257},comment:"5",class:""},
                {type:"img",src:"images/page_2_141.png",rect:{x:107,y:766,w:425,h:257},comment:"6",class:""},
                {type:"img",src:"images/page_2_142.png",rect:{x:107,y:305,w:425,h:257},comment:"7",class:""},
                {type:"img",src:"images/page_2_143.png",rect:{x:107,y:536,w:425,h:257},comment:"8",class:""},
                {type:"img",src:"images/page_2_144.png",rect:{x:107,y:766,w:425,h:257},comment:"9",class:""},
                {type:"img",src:"images/page_2_145.png",rect:{x:444,y:463,w:48,h:48},comment:"未选择_拷贝_2",class:""},
                {type:"img",src:"images/page_2_146.png",rect:{x:444,y:693,w:48,h:48},comment:"未选择_拷贝_3",class:""},
                {type:"img",src:"images/page_2_147.png",rect:{x:444,y:919,w:48,h:48},comment:"未选择_拷贝_4",class:""},
                {type:"img",src:"images/page_2_148.png",rect:{x:446,y:921,w:45,h:45},comment:"已选择",class:""},
                {type:"img",src:"images/page_2_149.png",rect:{x:445,y:464,w:46,h:46},comment:"选错",class:""},
                {type:"img",src:"images/page_2_150.png",rect:{x:81,y:505,w:471,h:89},comment:"选错弹窗",class:""},

            ]
        },
        {
            id:"page_3",
            animation:[],
            rect:{x:0,y:0},
            display:"none",
            dom:[
                {type:"img",src:"images/page_3_123.jpg",rect:{x:-70,y:0,w:780,h:1120},comment:"矩形_567",class:""},
                {type:"img",src:"images/page_3_124.png",rect:{x:62,y:196,w:496,h:691},comment:"猜对了!",class:""},
                {type:"img",src:"images/page_3_125.png",rect:{x:506,y:285,w:80,h:82},comment:"矢量智能对象_拷贝_6",class:""},
                {type:"img",src:"images/page_3_126.png",rect:{x:40,y:631,w:76,h:75},comment:"矢量智能对象_拷贝_7",class:""},
                {type:"img",src:"images/page_3_127.png",rect:{x:495,y:713,w:66,h:65},comment:"矢量智能对象_拷贝_8",class:""},
                {type:"img",src:"images/page_3_128.png",rect:{x:177,y:484,w:263,h:363},comment:"签筒",class:""},
                {type:"img",src:"images/page_3_129.png",rect:{x:185,y:456,w:253,h:391},comment:"签筒_拷贝",class:""},

            ]
        },
        {
            id:"page_4",
            animation:[],
            rect:{x:0,y:0},
            display:"none",
            dom:[
                {type:"img",src:"images/page_4_072.jpg",rect:{x:-70,y:0,w:780,h:1120},comment:"bg_拷贝",class:""},
                {type:"img",src:"images/page_4_073.png",rect:{x:-20,y:100,w:724,h:846},comment:"底纹",class:""},
                {type:"img",src:"images/page_4_074.png",rect:{x:57,y:900,w:263,h:120},comment:"再测一次",class:""},
                {type:"img",src:"images/page_4_075.png",rect:{x:319,y:900,w:263,h:120},comment:"保存图片",class:""},
                {type:"img",src:"images/page_4_076.png",rect:{x:-4,y:1039,w:668,h:81},comment:"上滑",class:""},
                {type:"img",src:"images/page_4_077.png",rect:{x:63,y:909,w:471,h:174},comment:"小红唇",class:""},
                {type:"img",src:"images/page_4_078.png",rect:{x:420,y:1035,w:145,h:45},comment:"ofo",class:""},
                {type:"img",src:"images/page_4_079.png",rect:{x:420,y:1035,w:145,h:45},comment:"河狸",class:""},
                {type:"img",src:"images/page_4_080.png",rect:{x:420,y:1035,w:145,h:45},comment:"每日",class:""},
                {type:"img",src:"images/page_4_081.png",rect:{x:420,y:1035,w:145,h:45},comment:"快看",class:""},
                {type:"img",src:"images/page_4_082.png",rect:{x:420,y:1035,w:145,h:45},comment:"饿了么",class:""},
                {type:"img",src:"images/page_4_083.png",rect:{x:421,y:1035,w:170,h:45},comment:"连咖啡",class:""},
                {type:"img",src:"images/page_4_084.png",rect:{x:421,y:1035,w:170,h:45},comment:"天天跟我买",class:""},
                {type:"img",src:"images/page_4_085.png",rect:{x:421,y:1035,w:170,h:45},comment:"珂曼",class:""},
                {type:"img",src:"images/page_4_086.png",rect:{x:421,y:1035,w:170,h:45},comment:"joy'lab",class:""},
                {type:"img",src:"images/page_4_087.png",rect:{x:176,y:40,w:286,h:29},comment:"ofo",class:""},
                {type:"img",src:"images/page_4_088.png",rect:{x:185,y:36,w:265,h:38},comment:"河狸",class:""},
                {type:"img",src:"images/page_4_089.png",rect:{x:176,y:40,w:285,h:29},comment:"每日",class:""},
                {type:"img",src:"images/page_4_090.png",rect:{x:195,y:40,w:230,h:29},comment:"快看",class:""},
                {type:"img",src:"images/page_4_091.png",rect:{x:185,y:41,w:259,h:28},comment:"饿了么",class:""},
                {type:"img",src:"images/page_4_092.png",rect:{x:162,y:41,w:327,h:28},comment:"连咖啡",class:""},
                {type:"img",src:"images/page_4_093.png",rect:{x:167,y:41,w:304,h:28},comment:"天天跟我买",class:""},
                {type:"img",src:"images/page_4_094.png",rect:{x:167,y:41,w:305,h:28},comment:"珂曼",class:""},
                {type:"img",src:"images/page_4_095.png",rect:{x:177,y:33,w:287,h:38},comment:"joy'lab",class:""},
                {type:"img",src:"images/page_4_096.png",rect:{x:67,y:541,w:349,h:205},comment:"明星1",class:""},
                {type:"img",src:"images/page_4_097.png",rect:{x:67,y:541,w:352,h:205},comment:"明星2",class:""},
                {type:"img",src:"images/page_4_098.png",rect:{x:67,y:541,w:352,h:205},comment:"明星3",class:""},
                {type:"img",src:"images/page_4_099.png",rect:{x:67,y:541,w:312,h:205},comment:"明星4",class:""},
                {type:"img",src:"images/page_4_100.png",rect:{x:67,y:541,w:352,h:205},comment:"明星5",class:""},
                {type:"img",src:"images/page_4_101.png",rect:{x:67,y:541,w:313,h:205},comment:"明星6",class:""},
                {type:"img",src:"images/page_4_102.png",rect:{x:67,y:541,w:351,h:205},comment:"明星7",class:""},
                {type:"img",src:"images/page_4_103.png",rect:{x:67,y:541,w:352,h:205},comment:"明星8",class:""},
                {type:"img",src:"images/page_4_104.png",rect:{x:67,y:541,w:350,h:205},comment:"明星9",class:""},
                {type:"img",src:"images/page_4_105.png",rect:{x:302,y:589,w:216,h:27},comment:"图层_2",class:""},
                {type:"img",src:"images/page_4_106.png",rect:{x:302,y:547,w:79,h:26},comment:"图层_3",class:""},
                {type:"img",src:"images/page_4_107.png",rect:{x:314,y:798,w:240,h:21},comment:"听听TA送你的新年祝福吧",class:""},
                {type:"img",src:"images/page_4_108.png",rect:{x:200,y:693,w:353,h:81},comment:"圆角矩形_523",class:""},
                {type:"img",src:"images/page_4_109.png",rect:{x:238,y:722,w:11,h:21},comment:"1",class:""},
                {type:"img",src:"images/page_4_110.png",rect:{x:242,y:713,w:21,h:35},comment:"2",class:""},
                {type:"img",src:"images/page_4_111.png",rect:{x:251,y:710,w:19,h:44},comment:"3",class:""},
                {type:"img",src:"images/page_4_112.png",rect:{x:202,y:695,w:349,h:77},comment:"矢量智能对象",class:""},
                {type:"img",src:"images/page_4_113.png",rect:{x:564,y:698,w:14,h:14},comment:"椭圆_524",class:""},
                {type:"img",src:"images/page_4_114.png",rect:{x:53,y:154,w:532,h:343},comment:"运势词",class:""},
                {type:"img",src:"images/page_4_115.png",rect:{x:131,y:214,w:374,h:192},comment:"板式1",class:""},
                {type:"img",src:"images/page_4_116.png",rect:{x:133,y:210,w:378,h:186},comment:"板式2",class:""},
                {type:"img",src:"images/page_4_117.png",rect:{x:171,y:212,w:308,h:192},comment:"板式3",class:""},
                {type:"img",src:"images/page_4_118.png",rect:{x:171,y:88,w:301,h:29},comment:"你的2018新年运势签",class:""},
                {type:"img",src:"images/page_4_119.png",rect:{x:533,y:337,w:68,h:66},comment:"矢量智能对象_拷贝_9",class:""},
                {type:"img",src:"images/page_4_120.png",rect:{x:25,y:774,w:68,h:67},comment:"矢量智能对象_拷贝_12",class:""},
                {type:"img",src:"images/page_4_121.png",rect:{x:553,y:552,w:76,h:78},comment:"矢量智能对象_拷贝_11",class:""},
                {type:"img",src:"images/page_4_122.png",rect:{x:28,y:222,w:74,h:76},comment:"矢量智能对象_拷贝_10",class:""},

            ]
        },
        {
            id:"page_5",
            animation:[],
            rect:{x:0,y:0},
            display:"none",
            dom:[
                {type:"img",src:"images/page_5_058.jpg",rect:{x:-70,y:0,w:780,h:1120},comment:"BG",class:""},
                {type:"img",src:"images/page_5_059.png",rect:{x:-57,y:156,w:737,h:775},comment:"圆角矩形_1_拷贝_16",class:""},
                {type:"img",src:"images/page_5_060.png",rect:{x:54,y:835,w:518,h:245},comment:"规则",class:""},
                {type:"img",src:"images/page_5_061.png",rect:{x:159,y:63,w:317,h:55},comment:"新年好运转盘_",class:""},
                {type:"img",src:"images/page_5_062.png",rect:{x:289,y:137,w:185,h:29},comment:"转出你的大礼包",class:""},
                {type:"img",src:"images/page_5_063.png",rect:{x:42,y:204,w:556,h:557},comment:"底盘",class:""},
                {type:"img",src:"images/page_5_064.png",rect:{x:156,y:134,w:127,h:32},comment:"logo1_拷贝_11",class:""},
                {type:"img",src:"images/page_5_065.png",rect:{x:70,y:237,w:500,h:500},comment:"奖品",class:""},
                {type:"img",src:"images/page_5_066.png",rect:{x:250,y:380,w:141,h:166},comment:"GO",class:""},
                {type:"img",src:"images/page_5_067.png",rect:{x:488,y:261,w:80,h:82},comment:"矢量智能对象_拷贝_19",class:""},
                {type:"img",src:"images/page_5_068.png",rect:{x:442,y:740,w:64,h:65},comment:"矢量智能对象_拷贝_20",class:""},
                {type:"img",src:"images/page_5_069.png",rect:{x:121,y:677,w:79,h:80},comment:"矢量智能对象_拷贝_21",class:""},
                {type:"img",src:"images/page_5_070.png",rect:{x:43,y:242,w:69,h:70},comment:"矢量智能对象_拷贝_23",class:""},
                {type:"img",src:"images/page_5_071.png",rect:{x:558,y:687,w:58,h:59},comment:"矢量智能对象_拷贝_22",class:""},

            ]
        },
        {
            id:"page_6",
            animation:[],
            rect:{x:0,y:0},
            display:"none",
            dom:[
                {type:"img",src:"images/page_6_041.jpg",rect:{x:-70,y:0,w:780,h:1120},comment:"矩形_567",class:""},
                {type:"img",src:"images/page_6_042.png",rect:{x:110,y:304,w:419,h:590},comment:"bg",class:""},
                {type:"img",src:"images/page_6_043.png",rect:{x:163,y:779,w:318,h:57},comment:"继续测运势，听更多明星祝福，_还有转盘抽奖机会！大奖等你哟！",class:""},
                {type:"img",src:"images/page_6_044.png",rect:{x:258,y:373,w:121,h:33},comment:"恭喜获得",class:""},
                {type:"img",src:"images/page_6_045.png",rect:{x:126,y:676,w:203,h:94},comment:"更多明星祝福",class:""},
                {type:"img",src:"images/page_6_046.png",rect:{x:305,y:676,w:203,h:94},comment:"马上去领奖",class:""},
                {type:"img",src:"images/page_6_047.png",rect:{x:215,y:434,w:212,h:227},comment:"奖品－1",class:""},
                {type:"img",src:"images/page_6_048.png",rect:{x:187,y:434,w:272,h:227},comment:"奖品－2",class:""},
                {type:"img",src:"images/page_6_049.png",rect:{x:196,y:434,w:258,h:227},comment:"奖品－3",class:""},
                {type:"img",src:"images/page_6_050.png",rect:{x:196,y:434,w:257,h:227},comment:"奖品－4",class:""},
                {type:"img",src:"images/page_6_051.png",rect:{x:223,y:434,w:185,h:227},comment:"奖品－5",class:""},
                {type:"img",src:"images/page_6_052.png",rect:{x:197,y:434,w:245,h:227},comment:"奖品－6",class:""},
                {type:"img",src:"images/page_6_053.png",rect:{x:197,y:434,w:263,h:227},comment:"奖品－7",class:""},
                {type:"img",src:"images/page_6_054.png",rect:{x:223,y:434,w:185,h:227},comment:"奖品－8",class:""},
                {type:"img",src:"images/page_6_055.png",rect:{x:478,y:381,w:69,h:70},comment:"矢量智能对象_拷贝_6",class:""},
                {type:"img",src:"images/page_6_056.png",rect:{x:91,y:561,w:65,h:64},comment:"矢量智能对象_拷贝_7",class:""},
                {type:"img",src:"images/page_6_057.png",rect:{x:489,y:633,w:56,h:56},comment:"矢量智能对象_拷贝_8",class:""},

            ]
        },
        {
            id:"page_7",
            animation:[],
            rect:{x:0,y:0},
            display:"none",
            dom:[
                {type:"img",src:"images/page_7_001.jpg",rect:{x:-70,y:0,w:780,h:1120},comment:"bg_拷贝",class:""},
                {type:"img",src:"images/page_7_002.png",rect:{x:-20,y:98,w:724,h:846},comment:"底纹",class:""},
                {type:"img",src:"images/page_7_003.png",rect:{x:-4,y:1026,w:668,h:97},comment:"＋转盘的",class:""},
                {type:"img",src:"images/page_7_004.png",rect:{x:69,y:814,w:471,h:174},comment:"小红唇",class:""},
                {type:"img",src:"images/page_7_005.png",rect:{x:426,y:940,w:145,h:45},comment:"ofo",class:""},
                {type:"img",src:"images/page_7_006.png",rect:{x:426,y:940,w:145,h:45},comment:"河狸",class:""},
                {type:"img",src:"images/page_7_007.png",rect:{x:426,y:940,w:145,h:45},comment:"每日",class:""},
                {type:"img",src:"images/page_7_008.png",rect:{x:426,y:940,w:145,h:45},comment:"快看",class:""},
                {type:"img",src:"images/page_7_009.png",rect:{x:426,y:940,w:145,h:45},comment:"饿了么",class:""},
                {type:"img",src:"images/page_7_010.png",rect:{x:427,y:940,w:170,h:45},comment:"连咖啡",class:""},
                {type:"img",src:"images/page_7_011.png",rect:{x:427,y:940,w:170,h:45},comment:"天天跟我买",class:""},
                {type:"img",src:"images/page_7_012.png",rect:{x:427,y:940,w:170,h:45},comment:"珂曼",class:""},
                {type:"img",src:"images/page_7_013.png",rect:{x:427,y:940,w:170,h:45},comment:"joy'lab",class:""},
                {type:"img",src:"images/page_7_014.png",rect:{x:384,y:715,w:196,h:107},comment:"按钮_拷贝",class:""},
                {type:"img",src:"images/page_7_015.png",rect:{x:304,y:444,w:216,h:69},comment:"张扣扣_的新年特别好运官",class:""},
                {type:"img",src:"images/page_7_016.png",rect:{x:316,y:695,w:240,h:21},comment:"听听TA送你的新年祝福吧",class:""},
                {type:"img",src:"images/page_7_017.png",rect:{x:69,y:438,w:349,h:205},comment:"明星1",class:""},
                {type:"img",src:"images/page_7_018.png",rect:{x:69,y:438,w:352,h:205},comment:"明星2",class:""},
                {type:"img",src:"images/page_7_019.png",rect:{x:69,y:438,w:352,h:205},comment:"明星3",class:""},
                {type:"img",src:"images/page_7_020.png",rect:{x:69,y:438,w:312,h:205},comment:"明星4",class:""},
                {type:"img",src:"images/page_7_021.png",rect:{x:69,y:438,w:352,h:205},comment:"明星5",class:""},
                {type:"img",src:"images/page_7_022.png",rect:{x:69,y:438,w:313,h:205},comment:"明星6",class:""},
                {type:"img",src:"images/page_7_023.png",rect:{x:69,y:438,w:351,h:205},comment:"明星7",class:""},
                {type:"img",src:"images/page_7_024.png",rect:{x:69,y:438,w:352,h:205},comment:"明星8",class:""},
                {type:"img",src:"images/page_7_025.png",rect:{x:69,y:438,w:350,h:205},comment:"明星9",class:""},
                {type:"img",src:"images/page_7_026.png",rect:{x:204,y:592,w:349,h:77},comment:"矢量智能对象",class:""},
                {type:"img",src:"images/page_7_027.png",rect:{x:566,y:595,w:14,h:14},comment:"椭圆_524",class:""},
                {type:"img",src:"images/page_7_028.png",rect:{x:202,y:590,w:353,h:81},comment:"圆角矩形_523",class:""},
                {type:"img",src:"images/page_7_029.png",rect:{x:240,y:619,w:11,h:21},comment:"1",class:""},
                {type:"img",src:"images/page_7_030.png",rect:{x:244,y:610,w:21,h:35},comment:"2",class:""},
                {type:"img",src:"images/page_7_031.png",rect:{x:253,y:607,w:19,h:44},comment:"3",class:""},
                {type:"img",src:"images/page_7_032.png",rect:{x:53,y:93,w:532,h:343},comment:"运势词",class:""},
                {type:"img",src:"images/page_7_033.png",rect:{x:131,y:153,w:374,h:192},comment:"板式1",class:""},
                {type:"img",src:"images/page_7_034.png",rect:{x:133,y:149,w:378,h:186},comment:"板式2",class:""},
                {type:"img",src:"images/page_7_035.png",rect:{x:171,y:151,w:308,h:192},comment:"板式3",class:""},
                {type:"img",src:"images/page_7_036.png",rect:{x:533,y:335,w:68,h:66},comment:"矢量智能对象_拷贝_9",class:""},
                {type:"img",src:"images/page_7_037.png",rect:{x:5,y:713,w:68,h:67},comment:"矢量智能对象_拷贝_12",class:""},
                {type:"img",src:"images/page_7_038.png",rect:{x:557,y:493,w:76,h:78},comment:"矢量智能对象_拷贝_11",class:""},
                {type:"img",src:"images/page_7_039.png",rect:{x:39,y:220,w:74,h:76},comment:"矢量智能对象_拷贝_10",class:""},
                {type:"img",src:"images/page_7_040.png",rect:{x:171,y:50,w:301,h:29},comment:"你的2018新年运势签",class:""},

            ]
        },
    ]
};
