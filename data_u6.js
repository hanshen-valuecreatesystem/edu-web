// Unit 6: 时间主题 (14词)
var DATA_U6 = [
  {
    word: 'day',
    linkIcon: '🌞',
    linkLeft: 'd<br>a<br>y',
    linkBridge: '<span class="em">d</span>(大)+<span class="hl">a</span>(啊)+<span class="em">y</span>(呀) → 大啊呀！天亮啦！',
    linkDetail: '三个字母：<b class="em">d</b>（大）+ <b class="hl">a</b>（啊）+ <b class="em">y</b>（呀）<br>→ 天亮了！太阳出来了！<b>大啊呀！</b>→<b>天</b>(day)！',
    story: '🌞太阳从山后升起来，发出耀眼的光。它用光写出三个大字——<span class="hl">D-A-Y！</span>小鸟看到后，高兴地唱着"<span class="em">Day！Day！又是新的一天！</span>"',
    sentence: 'Today is a sunny <b>day</b>.',
    spellShow: '<span class="em">d</span><span class="hl">a</span><span class="em">y</span>',
    spellTip: '💡 d(大)+a(啊)+y(呀) → 三个字母<br>⚠️ 注意是 <span class="hl">a</span> 在中间<br>⚠️ day = d-a-y，不是d-e-y'
  },
  {
    word: 'night',
    linkIcon: '🌙',
    linkLeft: 'ni<br>ght',
    linkBridge: '<span class="em">ni</span>(你)+<span class="hl">ght</span>(拐特) → 你在拐角偷偷特出去→晚上偷偷溜出去',
    linkDetail: '拆成 <b class="em">ni</b>（像"你"的拼音）+ <b class="hl">ght</b>（拐特→拐弯特别多）。<br>→ <b>你</b>在<span class="hl">拐</span>弯<span class="hl">特</span>别多的地方→<b>夜晚</b>(night)，偷偷溜出去',
    story: '🌙月亮升起来了！月光下，一个小黑影<span class="hl">偷偷摸摸</span>穿过小巷。那是<span class="em">你</span>（ni）！在被窝里等到天黑——终于可以<span class="em">偷偷溜出去</span>玩啦！',
    sentence: 'Good <b>night</b>, Mum.',
    spellShow: '<span class="em">n</span><span class="hl">i</span><span class="em">g</span><span class="hl">h</span><span class="em">t</span>',
    spellTip: '💡 ni(你)+ght(拐特)<br>⚠️ 中间是 <span class="hl">igh</span>，不是"ite"或"it"<br>⚠️ 5个字母：n-i-g-h-t（g和h都不发音）'
  },
  {
    word: 'year',
    linkIcon: '📆',
    linkLeft: 'ye<br>ar',
    linkBridge: '<span class="em">ye</span>(叶)+<span class="hl">ar</span>(啊) → 叶子啊，一年一年的落下来',
    linkDetail: '拆成 <b class="em">ye</b>（谐音"叶"）+ <b class="hl">ar</b>（谐音"啊"）<br>→ 树叶啊！<span class="em">一年</span>又一年地落下→<b>年</b>(year)！',
    story: '🍂秋天来了，一片<span class="hl">叶子</span>从树上飘落，落在一本日历上。它指着"2024"——<span class="em">这是一年结束的叶子</span>，它在说"今年过去了！"',
    sentence: 'Happy New <b>year</b>!',
    spellShow: '<span class="em">y</span><span class="hl">e</span><span class="em">a</span><span class="hl">r</span>',
    spellTip: '💡 ye(叶)+ar(啊) → 叶子啊<br>⚠️ 4个字母：y-e-a-r<br>⚠️ 注意是 <span class="hl">ea</span>，不是"ae"'
  },
  {
    word: 'month',
    linkIcon: '📅',
    linkLeft: 'mon<br>th',
    linkBridge: '<span class="em">mon</span>(忙)+<span class="hl">th</span>(事) → 每个月都忙事',
    linkDetail: '拆成 <b class="em">mon</b>（谐音"忙"）+ <b class="hl">th</b>（像"事"的音首）<br>→ 每个月都有很多<span class="hl">忙</span>碌的<span class="em">事</span>→<b>月</b>(month)！',
    story: '📅你的日历上，每个月的小人都<span class="hl">忙忙碌碌</span>的跑来跑去！一月忙着堆雪人，二月忙着拜年……十二月忙着做<span class="em">最忙的事——等过年！</span>',
    sentence: 'There are 12 <b>months</b> in a year.',
    spellShow: '<span class="em">m</span><span class="hl">o</span><span class="em">n</span><span class="hl">t</span><span class="em">h</span>',
    spellTip: '💡 mon(忙)+th(事) → 每月忙事<br>⚠️ 5个字母：m-o-n-t-h<br>⚠️ 末尾是 <span class="hl">th</span>（咬舌尖）'
  },
  {
    word: 'hour',
    linkIcon: '🕐',
    linkLeft: 'hou<br>r',
    linkBridge: '<span class="em">hou</span>(后)+<span class="hl">r</span>(人) → 后人等了一小时',
    linkDetail: '拆成 <b class="em">hou</b>（谐音"后"）+ <b class="hl">r</b>（谐音"人"）<br>→ 后人在等了<span class="hl">一小时</span>了→<b>小时</b>(hour)！<br>⚠️ h不发音！h-our',
    story: '🕐一个钟面上，时针、分针、秒针在赛跑！它们跑了一圈又一圈，一个<span class="hl">小人坐在指针上</span>打哈欠——<span class="em">"已经一小时了！"</span>',
    sentence: 'I waited for an <b>hour</b>.',
    spellShow: '<span class="em">h</span><span class="hl">ou</span><span class="em">r</span>',
    spellTip: '💡 hou(后)+r(人) → 后人等一小时<br>⚠️ <span class="hl">h</span>不发音！是h-our，不是hour<br>⚠️ 4个字母：h-o-u-r（ou组合读/auər/）'
  },
  {
    word: 'minute',
    linkIcon: '⏱️',
    linkLeft: 'mi<br>nu<br>te',
    linkBridge: '<span class="em">mi</span>(谜)+<span class="hl">nu</span>(努)+<span class="em">te</span>(特) → 谜一样的努力特别快→分钟',
    linkDetail: '三个部分：<b class="em">mi</b>（谐音"谜"）+ <b class="hl">nu</b>（谐音"努"）+ <b class="em">te</b>（谐音"特"）<br>→ 时间像个<span class="hl">谜</span>，要<span class="em">努力</span>抓住每<span class="hl">一分</span>、每<span class="em">一秒</span>→<b>分钟</b>(minute)',
    story: '⏱️你看到一个沙漏，里面不是沙子——是<span class="hl">一只只小蚂蚁</span>！它们在30秒内搬完自己的小家。<span class="em">每一分钟，蚂蚁们都在努力搬东西！</span>',
    sentence: 'Wait a <b>minute</b>!',
    spellShow: '<span class="em">m</span><span class="hl">i</span><span class="em">n</span><span class="hl">u</span><span class="em">t</span><span class="hl">e</span>',
    spellTip: '💡 mi(谜)+nu(努)+te(特)<br>⚠️ 6个字母：m-i-n-u-t-e<br>⚠️ 末尾 <span class="hl">e</span>不发音！'
  },
  {
    word: 'second',
    linkIcon: '⏲️',
    linkLeft: 'se<br>con<br>d',
    linkBridge: '<span class="em">se</span>(色)+<span class="hl">con</span>(困)+<span class="em">d</span>(的) → 色困的→色彩困住的→秒',
    linkDetail: '拆成 <b class="em">se</b>（谐音"色"）+ <b class="hl">con</b>（谐音"困"）+ <b class="em">d</b>（的）<br>→ 色彩的困住的瞬间→<b>秒</b>(second)，一眨眼就过去了',
    story: '⏲️你闭上眼睛数数——滴答、滴答……每次滴答声，一只<span class="hl">彩色蝴蝶</span>就飞过去！<span class="em">一秒</span>一只蝴蝶，<span class="hl">色彩缤纷</span>的蝴蝶群！',
    sentence: 'There are 60 <b>seconds</b> in a minute.',
    spellShow: '<span class="em">se</span><span class="hl">c</span><span class="em">o</span><span class="hl">n</span><span class="em">d</span>',
    spellTip: '💡 se(色)+con(困)+d(的)<br>⚠️ 6个字母：s-e-c-o-n-d<br>⚠️ 中间是 <span class="hl">con</span>，不是"com"或"can"'
  },
  {
    word: 'measure',
    linkIcon: '📏',
    linkLeft: 'mea<br>su<br>re',
    linkBridge: '<span class="em">mea</span>(米啊)+<span class="hl">su</span>(素)+<span class="em">re</span>(热) → 米啊！素色的热尺子→测量',
    linkDetail: '三个部分：<b class="em">mea</b>（谐音"米啊"）+ <b class="hl">su</b>（谐音"素"）+ <b class="em">re</b>（谐音"热"）<br>→ <span class="hl">米啊</span>！一把<span class="em">素</span>色尺子在<span class="hl">热</span>量你的身高→<b>测量</b>(measure)',
    story: '📏一把尺子跳到你的头上，它变长了！从头顶一直拉到脚底，然后<span class="hl">在你身上咔咔咔地比划</span>——"嗯，120米？不对，120厘米！"<span class="em">它在测量你的身高！</span>',
    sentence: 'Let us <b>measure</b> the table.',
    spellShow: '<span class="em">m</span><span class="hl">e</span><span class="em">a</span><span class="hl">s</span><span class="em">u</span><span class="hl">r</span><span class="em">e</span>',
    spellTip: '💡 mea(米啊)+su(素)+re(热)<br>⚠️ 7个字母：m-e-a-s-u-r-e<br>⚠️ 中间是 <span class="hl">ea</span> + <span class="em">su</span>，不是"asure"'
  },
  {
    word: 'around',
    linkIcon: '🔄',
    linkLeft: 'a<br>roun<br>d',
    linkBridge: '<span class="em">a</span>(啊)+<span class="hl">round</span>(绕的) → 啊！绕的→围绕',
    linkDetail: '<b class="em">a</b>（一个）+ <b class="hl">round</b>（圆的/绕圈）<br>→ 一个<span class="hl">绕圈</span>→<b>围绕</b>(around)<br>→ around = a + round（在圆形周围）',
    story: '🔄一只小蚂蚁在一个大圆饼上<span class="hl">绕圈</span>走。它走了一圈又一圈，边走边吃——<span class="em">"我围绕这个饼走了三圈啦！"</span>',
    sentence: 'We sit <b>around</b> the table.',
    spellShow: '<span class="em">a</span><span class="hl">rou</span><span class="em">n</span><span class="hl">d</span>',
    spellTip: '💡 a(啊)+round(绕的)<br>⚠️ 6个字母：a-r-o-u-n-d<br>⚠️ <span class="hl">round</span>在里面（r-o-u-n-d）'
  },
  {
    word: 'question',
    linkIcon: '❓',
    linkLeft: 'ques<br>tion',
    linkBridge: '<span class="em">ques</span>(快斯)+<span class="hl">tion</span>(寻) → 快思寻→有问题要快想快寻',
    linkDetail: '<b class="em">ques</b>（谐音"快思"→快点想）+ <b class="hl">tion</b>（谐音"寻"→寻找答案）<br>→ <b>问题</b>需要快点思考→<b>question</b>！',
    story: '❓一个大问号从天上掉下来，它长着<span class="hl">一张惊讶的嘴</span>，追着你不停问"为什么？为什么？"——它就是一个<span class="em">不停问问题的问题！</span>',
    sentence: 'I have a <b>question</b>.',
    spellShow: '<span class="em">qu</span><span class="em">e</span><span class="hl">s</span><span class="em">t</span><span class="em">i</span><span class="hl">o</span><span class="em">n</span>',
    spellTip: '💡 <span class="em">ques</span>(快思)+<span class="hl">tion</span>(寻)<br>⚠️ <span class="hl">ques</span>开头是 <span class="hl">qu</span>（qu总是一起出现）<br>⚠️ 末尾是 <span class="hl">tion</span>（不是sion或cian）'
  },
  {
    word: 'at the same time',
    linkIcon: '⏰',
    linkLeft: 'at<br>the<br>same<br>time',
    linkBridge: 'at(在)+the(这)+same(相同)+time(时间) → "在同一个时间"→同时',
    linkDetail: '4个词组成：<br>① <b class="em">at</b> 在<br>② <b class="hl">the</b> 这<br>③ <b class="em">same</b> 相同的（s-a-m-e）<br>④ <b class="hl">time</b> 时间<br>→ <b>at the same time</b> = 在同一时间 → <b>同时</b>',
    story: '⏰你看到墙上有三个钟，它们<span class="hl">同时</span>指向12点整！三个钟一起敲响——叮咚叮咚！"<span class="em">我们在同一时间</span>敲响！"',
    sentence: 'We finish our homework <b>at the same time</b>.',
    spellShow: '<span class="em">at</span> <span class="hl">the</span> <span class="em">same</span> <span class="hl">time</span>',
    spellTip: '💡 4个词：at(在) + the(这) + same(相同) + time(时间)<br>⚠️ <span class="hl">same</span> = s-a-m-e（"嗖妹妹"→和妹妹样）<br>⚠️ 每个词之间有空格！'
  },
  {
    word: 'exercise',
    linkIcon: '🏋️',
    linkLeft: 'ex<br>er<br>cise',
    linkBridge: '<span class="em">ex</span>(X交叉)+<span class="hl">er</span>(儿)+<span class="em">cise</span>(赛姿) → 交叉手臂的儿子赛出好姿势',
    linkDetail: '拆成 <b class="em">ex</b>（像"X"交叉）+ <b class="hl">er</b>（像"儿"的拼音）+ <b class="em">cise</b>（谐音"赛姿"）。<br><span class="em">交叉</span>手臂的<span class="hl">儿</span>子，做运动<span class="em">赛出好姿势</span>→<b>锻炼</b>(exercise)！',
    story: '🎳你扔出一个保龄球！球瓶被击飞，但它们不是瓶子——是<span class="hl">哑铃和跳绳</span>！它们变成一群小人，原地开始做运动——<span class="em">举哑铃、跳绳、俯卧撑！</span>你也跟着跳起来！',
    sentence: 'We should <b>exercise</b> every day.',
    spellShow: '<span class="em">e</span><span class="em">x</span><span class="hl">e</span><span class="hl">r</span><span class="em">c</span><span class="em">i</span><span class="em">s</span><span class="em">e</span>',
    spellTip: '💡 X(<span class="em">ex</span>)+儿(<span class="hl">er</span>)+赛姿(<span class="em">cise</span>)<br>⚠️ 中间是 <span class="hl">er</span> 不是"rc"——e-x-<span class="hl">e-r</span>-c-i-s-e<br>⚠️ 一共8个字母：e x e r c i s e'
  },
  {
    word: 'get ready',
    linkIcon: '🎒',
    linkLeft: 'get<br>ready',
    linkBridge: '<span class="em">get</span>(得到)+<span class="hl">ready</span>(准备) → get=得到，ready=准备→"得到准备状态"→准备好',
    linkDetail: '<b class="em">get</b> 很简单，"得到"。<b class="hl">ready</b> = r-e-a-d-y。<br>记住 <span class="hl">r</span>(绕)+<span class="em">ea</span>(吃)+<span class="hl">d</span>(的)+<span class="em">y</span>(呀) → "绕着吃的呀"准备好！<br>两个词中间有一个空格。',
    story: '⚽你冲向足球球门，门后面藏着你的<span class="hl">书包和校服</span>！它们自动飞起来——书包跳到背上，校服穿好！"<span class="em">准备好！</span>上课啦！"',
    sentence: '<b>Get ready</b> for class!',
    spellShow: '<b>get</b> <span class="hl">r</span><span class="em">e</span><span class="em">a</span><span class="hl">d</span><span class="em">y</span>',
    spellTip: '💡 get很简单。<span class="hl">ready</span>：r-e-a-d-y(绕吃的呀)<br>⚠️ ready中间是 <span class="hl">ea</span>，不是"ee"或"ae"！<br>⚠️ 两个词别忘了空格！'
  },
  {
    word: 'What time is it?',
    linkIcon: '🤷',
    linkLeft: 'What<br>Time<br>Is<br>It',
    linkBridge: '<span class="em">What</span>(挖特)+<span class="hl">time</span>(太木)+<span class="em">is</em>(一斯)+<span class="hl">it</span>(一特) → 挖特太木一斯一特？→ 几点了？',
    linkDetail: '4个词，逐个记：<br>① <b class="em">What</b> = W-h-a-t（"挖特"→什么）<br>② <b class="hl">time</b> = t-i-m-e（"太木"→时间）<br>③ <b class="em">is</b>是 + <b class="hl">it</b>它 → "是它"<br>→ <b>What time is it?</b> = "什么时间是它？"→几点了？',
    story: '🥚一颗蛋裂开了！里面蹦出一个<span class="hl">会说话的小手表</span>。它飞到空中大声问你——<span class="em">"What time is it??"</span>你低头看手腕，你的手表也开始跟着喊这五个词！',
    sentence: "<b>What time is it?</b> It is 8 o'clock.",
    spellShow: '<span class="em">What</span> <span class="hl">time</span> <span class="em">is</span> <span class="hl">it</span>',
    spellTip: "💡 <span class=\"em\">What</span> = W-h-a-t（<span class=\"hl\">wh</span>一起读/w/）<br>💡 <span class=\"hl\">time</span> = t-i-m-e<br>💡 <span class=\"em\">is it</span> = i-s i-t<br>⚠️ what的 <span class=\"hl\">wh</span>读/w/不读/hw/。<br>⚠️ 末尾有<span class=\"hl\">问号</span>！别漏了。"
  }
];
