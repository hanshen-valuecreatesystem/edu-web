// Unit 7-8: 物态变化&食品 + 礼貌&日常 (45词)
var DATA_U78 = [];
(function(){ var a = DATA_U78;
  var arr = [

  {
    word: 'liquid', linkIcon: '💧',
    linkLeft: 'li<br>力',
    linkBridge: '<span class="em">li</span>(力)+<span class="hl">quid</span>(快的) → 力的快的→液体流动很快',
    linkDetail: '拆成 <b class="em">li</b>（像"力"的拼音li）+ <b class="hl">quid</b>（谐音"快的"）。<br><span class="em">力</span>气大、<span class="hl">快的</span>速度——液体就是这样流动的！<br>⚠️ <b class="hl">qu</b>组合读/kw/，不是/k/。',
    story: '💧水龙头<span class="hl">哗啦啦</span>地打开，水流像<span class="em">大力士</span>一样冲出来！它们在地上<span class="hl">飞快流动</span>，变成一条小溪，你追着水流跑啊跑——"液体跑得好快！"',
    sentence: '<b>Liquid</b> water flows quickly.',
    spellShow: '<span class="em">l</span><span class="em">i</span><span class="hl">q</span><span class="hl">u</span><span class="em">i</span><span class="em">d</span>',
    spellTip: '💡 <span class="em">li</span>(力)+<span class="hl">quid</span>(快的)<br>⚠️ 中间是 <span class="hl">qu</span> 不是"ku"！q后面永远跟u。<br>⚠️ 结尾有 <span class="em">d</span>，别写成"liqui"。'
  },
  {
    word: 'solid', linkIcon: '🧱',
    linkLeft: 'so<br>所',
    linkBridge: '<span class="em">so</span>(所)+<span class="hl">lid</span>(立的) → 所有东西立在地上→固体',
    linkDetail: '拆成 <b class="em">so</b>（像"所"的拼音）+ <b class="hl">lid</b>（像"立的"拼音）。<br><span class="em">所</span>有的东西<span class="hl">立</span>在地上一动不动的——这就是<b>固体</b>！<br>⚠️ 和liquid是反义词对记。',
    story: '🪨你走进一个房间，里面<span class="hl">堆满了大石头</span>！它们一动不动地<span class="em">立在地上</span>。你用力推，推不动！这些石头真是<span class="hl">固体</span>啊！',
    sentence: 'Ice is a <b>solid</b>.',
    spellShow: '<span class="em">s</span><span class="em">o</span><span class="em">l</span><span class="em">i</span><span class="hl">d</span>',
    spellTip: '💡 <span class="em">so</span>(所)+<span class="em">li</span>(立)+<span class="hl">d</span>(的)<br>⚠️ 结尾必须写 <span class="hl">d</span>！很多人写成"solid"漏了d。<br>⚠️ 中间的"li"别写成"le"。'
  },
  {
    word: 'gas', linkIcon: '💨',
    linkLeft: 'g<br>盖子',
    linkBridge: '<span class="hl">g</span>(盖子)+<span class="em">as</span>(阿斯) → 盖子一开，气体冒出',
    linkDetail: '<b class="hl">g</b>像<span class="em">盖子</span>盖住，<b class="em">as</b>读音像"阿斯"。<br>把盖子(<span class="hl">g</span>)一打开——"<span class="em">阿斯</span>！"——气体(<b>gas</b>)冒出来了！<br>⚠️ 只有3个字母，别写长了。',
    story: '🥫你打开一罐<span class="hl">可乐</span>，拉环一拉——"<span class="em">滋——</span>"气体喷出来！你被喷了一脸，<span class="hl">气泡在你鼻子上噼啪作响</span>！',
    sentence: 'Air is a <b>gas</b>.',
    spellShow: '<span class="hl">g</span><span class="em">a</span><span class="em">s</span>',
    spellTip: '💡 <span class="hl">g</span>盖子+<span class="em">as</span>(阿斯)=gas<br>⚠️ 就3个字母！别写成"gass"或"gas的"。'
  },
  {
    word: 'sugar', linkIcon: '🍬',
    linkLeft: 'su<br>苏',
    linkBridge: '<span class="em">su</span>(苏)+<span class="hl">gar</span>(嘎) → 苏打饼干嘎嘣脆，加上糖甜甜的',
    linkDetail: '读音像"<span class="hl">书嘎</span>"。<b class="em">su</b>像"苏打"的"苏"，<b class="hl">gar</b>谐音"嘎"（脆的声音）。<br>苏打饼干(<span class="em">su</span>)咔擦<span class="hl">嘎</span>嘣脆，上面撒了<span class="em">糖</span>！<br>⚠️ <span class="hl">su</span>读/ʃʊ/不是/suː/！',
    story: '🍪你抓起一把<span class="hl">苏打饼干</span>"咔嚓咔嚓"咬下去——但咬到一半发现饼干上洒满了<span class="em">糖</span>！你的牙齿<span class="hl">嘎嘣嘎嘣</span>响，甜味在嘴里爆炸！',
    sentence: 'I like to eat <b>sugar</b>.',
    spellShow: '<span class="em">s</span><span class="hl">u</span><span class="em">g</span><span class="em">a</span><span class="hl">r</span>',
    spellTip: '💡 <span class="em">su</span>(苏)+<span class="hl">gar</span>(嘎)<br>⚠️ 中间的 <span class="hl">u</span> 读/ʃ/（虚）不是/s/！<br>⚠️ 结尾是 <span class="em">ar</span>，别写成"erg"或"er"。'
  },
  {
    word: 'salt', linkIcon: '🧂',
    linkLeft: 'sal<br>撒了',
    linkBridge: '<span class="em">sal</span>(撒了)+<span class="hl">t</span>(特) → 撒了大量的特制盐',
    linkDetail: '<b class="em">sal</b>读音像"<span class="hl">撒了</span>"——把盐撒在食物上。<br>加个 <b class="hl">t</b> 就是"撒了<span class="em">特</span>制盐"！<br>⚠️ 注意：salt和sugar容易搞混，但salt是咸的(撒了盐)，sugar是甜的。',
    story: '🍳你煎了一个鸡蛋，然后抓起盐罐<span class="hl">撒了撒了撒了</span>！盐粒像<span class="em">小雪花</span>飘落在金黄的煎蛋上——你吃了一口，咸咸的！',
    sentence: 'Please pass me the <b>salt</b>.',
    spellShow: '<span class="em">s</span><span class="em">a</span><span class="em">l</span><span class="hl">t</span>',
    spellTip: '💡 <span class="em">sal</span>("撒了")+<span class="hl">t</span>=salt<br>⚠️ 结尾有 <span class="hl">t</span>！别写成"sal"。<br>⚠️ 别和salt(盐)搞混——sugar是甜的，salt是咸的。'
  },
  {
    word: 'cream', linkIcon: '🍦',
    linkLeft: 'cr<br>克人',
    linkBridge: '<span class="hl">cr</span>(克人)+<span class="em">eam</span>(一木) → 克人一木在吃奶油蛋糕',
    linkDetail: '拆成 <b class="hl">cr</b> + <b class="em">eam</b>。<br><span class="hl">c</span>像弯钩，<span class="em">ream</span>谐音"瑞木"。<br>弯钩(<span class="hl">c</span>)勾住<span class="em">瑞木</span>牌奶油——好吃！<br>⚠️ <span class="hl">ea</span>组合读/iː/，长音。',
    story: '🍰你面前摆着一个巨大的<span class="hl">奶油蛋糕</span>！奶油像<span class="em">软绵绵的白云</span>堆在蛋糕上。你一头扎进去——"嘬嘬嘬"奶油糊了一脸！',
    sentence: 'I eat ice <b>cream</b>.',
    spellShow: '<span class="em">c</span><span class="hl">r</span><span class="em">e</span><span class="em">a</span><span class="hl">m</span>',
    spellTip: '💡 <span class="hl">cr</span> (c弯钩+r)+ <span class="em">eam</span>(一木)<br>⚠️ 中间是 <span class="hl">ea</span> 不是"ee"！c-r-e-a-m。<br>⚠️ "ice cream"是两个词，中间有空格。'
  },
  {
    word: 'melt', linkIcon: '🧊',
    linkLeft: 'me<br>我',
    linkBridge: '<span class="em">me</span>(我)+<span class="hl">lt</span>(楼梯) → 我站在楼梯上，冰淇淋在融化',
    linkDetail: '<b class="em">me</b> = "我"，<b class="hl">lt</b>像"楼梯"(l+ t像梯子)。<br><span class="em">我</span>站在<span class="hl">楼梯</span>上吃冰淇淋，太阳一晒，冰淇淋<span class="em">融化了</span>，滴答滴答流下来！<br>反义词：<span class="hl">melt</span>(融化) ↔ <span class="em">freeze</span>(结冰)。',
    story: '🍦你手上举着一个巨大的冰淇淋，太阳<span class="hl">火辣辣</span>地晒着！冰淇淋从上面<span class="em">往下滴水</span>——滴答、滴答——你的手黏糊糊的，奶油流到指尖上！',
    sentence: 'Butter <b>melts</b> in the sun.',
    spellShow: '<span class="em">m</span><span class="em">e</span><span class="em">l</span><span class="hl">t</span>',
    spellTip: '💡 <span class="em">me</span>(我)+<span class="hl">lt</span>(楼梯)<br>⚠️ 结尾是 <span class="hl">t</span> 不是"d"！m-e-l-t。<br>⚠️ 别和"meat"(肉)搞混。'
  },
  {
    word: 'steam', linkIcon: '♨️',
    linkLeft: 's<br>蛇',
    linkBridge: '<span class="em">s</span>(蛇)+<span class="hl">team</span>(队) → 蛇的队伍冒蒸汽',
    linkDetail: '<b class="em">s</b>像一条蛇，<b class="hl">team</b>是"队伍"。<br>一条蛇(<span class="em">s</span>)带着一支<span class="hl">队伍</span>从热水里爬出来——身上冒着<span class="em">蒸汽</span>！<br>⚠️ <span class="hl">ea</span>读/iː/，和cream一样。',
    story: '🫖水壶烧开了！壶嘴<span class="hl">突突突</span>地冒白烟，烟雾变成<span class="em">一条长长的白蛇</span>在空中盘旋。你的眼镜全被<span class="hl">雾住了</span>，什么都看不见！',
    sentence: 'I can see <b>steam</b> from the pot.',
    spellShow: '<span class="em">s</span><span class="hl">t</span><span class="em">e</span><span class="em">a</span><span class="hl">m</span>',
    spellTip: '💡 <span class="em">s</span>蛇+<span class="hl">team</span>(队)=st+team=steam<br>⚠️ 是 <span class="hl">ea</span> 不是"ee"！s-t-e-a-m。<br>⚠️ 别写成"stem"(茎)，多了个a。'
  },
  {
    word: 'heat', linkIcon: '🔥',
    linkLeft: 'h<br>火',
    linkBridge: '<span class="hl">h</span>(火)+<span class="em">eat</span>(吃) → 火在吃食物=加热',
    linkDetail: '<b class="hl">h</b>像<span class="em">火焰</span>的侧影，<b class="em">eat</b>是"吃"。<br>火焰(<span class="hl">h</span>)在<span class="em">吃</span>东西——它在<span class="hl">加热</span>食物！<br>⚠️ <span class="hl">ea</span>读/iː/。',
    story: '🔥你往锅里倒油，打开<span class="hl">炉子</span>！火苗"嗖"地窜上来，像一只饥饿的<span class="em">火舌在舔锅底</span>。锅开始冒烟——"好热啊！"你赶紧后退。',
    sentence: 'Please <b>heat</b> the soup.',
    spellShow: '<span class="hl">h</span><span class="em">e</span><span class="em">a</span><span class="hl">t</span>',
    spellTip: '💡 <span class="hl">h</span>(火)+<span class="em">eat</span>(吃)=heat<br>⚠️ <span class="hl">h</span>发音/h/，不是不发音！<br>⚠️ 别写成"heet"——是<span class="hl">ea</span>不是"ee"。'
  },
  {
    word: 'hungry', linkIcon: '🍽️',
    linkLeft: 'hun<br>混',
    linkBridge: '<span class="em">hun</span>(混)+<span class="hl">gry</span>(格瑞) → 混日子的格瑞饿得肚子咕咕叫',
    linkDetail: '拆成 <b class="em">hun</b>（像"混"的拼音）+ <b class="hl">gry</b>（谐音"格瑞"）。<br>一个叫格瑞(<span class="hl">gry</span>)的人在<span class="em">混</span>日子，没钱吃饭——他好饿(<b>hungry</b>)！<br>⚠️ 注意：不是"hungary"（匈牙利）！少了一个a。',
    story: '🐶你下班回家，你的小狗扑上来<span class="hl">肚子咕咕叫</span>！它用<span class="em">可怜巴巴的眼神</span>看着你，舌头伸出来，口水滴答滴答——"我饿啦！"',
    sentence: 'I am <b>hungry</b>.',
    spellShow: '<span class="em">h</span><span class="em">u</span><span class="em">n</span><span class="hl">g</span><span class="hl">r</span><span class="em">y</span>',
    spellTip: '💡 <span class="em">hun</span>(混)+<span class="hl">gry</span>(格瑞)<br>⚠️ 结尾是 <span class="hl">gry</span>，不是"gery"！<br>⚠️ 注意区别：hungry(饿) vs Hungary(匈牙利)！'
  },
  {
    word: 'party', linkIcon: '🎉',
    linkLeft: 'par<br>趴',
    linkBridge: '<span class="em">par</span>(趴)+<span class="hl">ty</span>(体) → 趴在地上身体动→开派对',
    linkDetail: '<b class="em">par</b>读音像"趴"（趴在地上），<b class="hl">ty</b>像"体"的拼音ti。<br>在派对上大家都<span class="em">趴</span>在地上<span class="hl">跳舞</span>——开派对了！<br>⚠️ <span class="hl">ar</span>读/ɑːr/。',
    story: '🎈你走进一个房间，彩带<span class="hl">哗啦啦</span>落下来！所有人<span class="em">趴在地上跳舞</span>，音响震得地板在抖。气球飞到天花板，你被一个<span class="hl">气球砸中脑袋</span>——"嘭！"',
    sentence: 'We have a <b>party</b> today.',
    spellShow: '<span class="em">p</span><span class="em">a</span><span class="hl">r</span><span class="hl">t</span><span class="em">y</span>',
    spellTip: '💡 <span class="em">par</span>(趴)+<span class="hl">ty</span>(体)<br>⚠️ 中间是 <span class="hl">ar</span> 不是"er"！p-a-r-t-y。<br>⚠️ 结尾是<span class="em">y</span>，不是"ie"。'
  },
  {
    word: 'ice cream', linkIcon: '🍦',
    linkLeft: 'ice<br>冰',
    linkBridge: '<span class="em">ice</span>(冰)+<span class="hl">cream</span>(奶油) → 冰+奶油=冰淇淋',
    linkDetail: '两个单词拼在一起：<b class="em">ice</b>（冰）+ <b class="hl">cream</b>（奶油）。<br>冰镇奶油→冰淇淋！<br>⚠️ 两个单词中间有空格！<br>已知<span class="hl">cream</span>：c-r-e-a-m。',
    story: '🍦太阳好大，你打开冰箱——里面<span class="hl">飞出5个冰淇淋</span>！它们在你头顶绕圈跳舞，<span class="em">奶油味、草莓味、巧克力味</span>轮流在你鼻尖蹭来蹭去！',
    sentence: 'I love <b>ice cream</b>.',
    spellShow: '<span class="em">ice</span> <span class="hl">cream</span>',
    spellTip: '💡 <span class="em">ice</span>冰 + <span class="hl">cream</span>奶油<br>⚠️ 是两个词，中间有空格！<br>⚠️ <span class="hl">cream</span>拼写：c-r-e-a-m。'
  }

];
  for(var i=0;i<arr.length;i++) a.push(arr[i]);
  var arr = [

  {
    word: 'freezer', linkIcon: '🧊',
    linkLeft: 'freeze<br>结冰',
    linkBridge: '<span class="em">freeze</span>(结冰) + <span class="hl">r</span>(的东西) → 能结冰的东西=冰柜',
    linkDetail: '<b class="em">freeze</b>是"结冰"，去掉e加<span class="hl">er</span> = "做……的东西"。<br>能结冰的东西→<b>冰柜</b>！<br>⚠️ <span class="hl">ee</span>读长音/iː/，嘴唇往两边咧开。',
    story: '❄️你打开家里的大铁柜子——里面<span class="hl">全是白雾</span>！你伸手一摸，<span class="em">冰柜的壁冻住了你的手指</span>！你使劲一拽"啵"的一声拔出来了！',
    sentence: 'Put the meat in the <b>freezer</b>.',
    spellShow: '<span class="em">f</span><span class="hl">r</span><span class="em">ee</span><span class="hl">z</span><span class="em">er</span>',
    spellTip: '💡 freeze+er = freezer<br>⚠️ 中间是 <span class="hl">ee</span>(双e)不是"ea"！<br>⚠️ 结尾是<span class="em">er</span>，不是"or"。'
  },
  {
    word: 'door', linkIcon: '🚪',
    linkLeft: 'd<br>大',
    linkBridge: '<span class="hl">d</span>(大)+<span class="em">oor</span>(哦哦) → 大大的门，开关时\"哦哦\"响',
    linkDetail: '<b class="hl">d</b>像"大"的拼音第一个字母，<b class="em">oor</b>像门打开时的声音"哦哦"。<br>大大的(<span class="hl">d</span>)门，开的时候"<span class="em">哦——哦——</span>"响！<br>⚠️ <span class="hl">oo</span>读/ɔː/，嘴巴圆圆。',
    story: '🚪你面前有一扇巨大的<span class="hl">木门</span>，你一推——门<span class="em">吱呀</span>地打开，发出悠长的"哦——哦——"声。你探头一看，门后面是一面墙！',
    sentence: 'Open the <b>door</b>, please.',
    spellShow: '<span class="hl">d</span><span class="em">oo</span><span class="hl">r</span>',
    spellTip: '💡 <span class="hl">d</span>(大)+<span class="em">oor</span>(哦哦)<br>⚠️ 两个 <span class="hl">o</span>！别写成"dor"或"dore"。<br>⚠️ d-o-o-r，4个字母。'
  },
  {
    word: 'open', linkIcon: '🔓',
    linkLeft: 'o<br>圈',
    linkBridge: '<span class="hl">o</span>(圈)+<span class="em">pen</span>(钢笔) → 圈着钢笔，笔盖就打开了',
    linkDetail: '<b class="hl">o</b>像<span class="em">圆圈</span>（打开的圆形开口），<b class="em">pen</b>是"钢笔"。<br>圆形的开口(<span class="hl">o</span>)就像<span class="em">钢笔</span>的笔帽——一转就打开！<br>反义词：<span class="hl">open</span> ↔ <span class="em">close</span>。',
    story: '✏️你拿出一支<span class="hl">钢笔</span>，把笔帽转出一个<span class="em">圆形</span>的开口——\"咔！\"笔帽弹开了！墨水喷了你一脸！',
    sentence: 'Please <b>open</b> the window.',
    spellShow: '<span class="hl">o</span><span class="em">p</span><span class="em">e</span><span class="hl">n</span>',
    spellTip: '💡 <span class="hl">o</span>(圈)+<span class="em">pen</span>(钢笔)<br>⚠️ 只有一个 <span class="hl">o</span>！别写成"opoen"或"oppen"。'
  },
  {
    word: 'plastic', linkIcon: '🪣',
    linkLeft: 'pl<br>噼里',
    linkBridge: '<span class="em">pl</span>(噼里)+<span class="hl">a</span>(啊)+<span class="em">stic</span>(斯蒂克) → 噼里啪啦的塑料斯蒂克',
    linkDetail: '拆成 <b class="em">pl</b>（像"噼里"的声母）+ <b class="hl">a</b>（啊）+ <b class="em">stic</b>（谐音"斯蒂克"）。<br><span class="em">噼里啪啦</span>响的<span class="hl">啊斯蒂克</span>——塑料的声音！<br>⚠️ <span class="hl">stic</span>不是"stick"，少个k。',
    story: '🪣你拿一个<span class="hl">塑料桶</span>，敲一下——"<span class="em">噼里啪啦</span>咚咚！"塑料桶很轻，你一松手它就被风吹跑了，在街上骨碌骨碌滚！',
    sentence: 'This is a <b>plastic</b> bottle.',
    spellShow: '<span class="em">p</span><span class="em">l</span><span class="hl">a</span><span class="em">s</span><span class="em">t</span><span class="em">i</span><span class="hl">c</span>',
    spellTip: '💡 <span class="em">pl</span>(噼里)+<span class="hl">a</span>(啊)+<span class="em">stic</span>(斯蒂克)<br>⚠️ 结尾是 <span class="hl">c</span> 不是"ck"！p-l-a-s-t-i-c。<br>⚠️ 中间是 <span class="hl">a</span> 不是"e"。'
  },
  {
    word: 'mix', linkIcon: '🥣',
    linkLeft: 'mi<br>蜜',
    linkBridge: '<span class="em">mi</span>(蜜)+<span class="hl">x</span>(交叉) → 蜜和叉子交叉混合在一起',
    linkDetail: '<b class="em">mi</b>像"蜜"的拼音，<b class="hl">x</b>像交叉的叉子。<br>把蜂蜜(<span class="em">mi</span>)和<span class="hl">叉子</span>交叉搅拌——<b>混合</b>在一起！<br>⚠️ 只有3个字母。',
    story: '🥄你拿出一罐蜂蜜和一把叉子，把<span class="hl">叉子伸进蜜罐</span>搅啊搅！蜂蜜黏糊糊地缠在叉子上，你往杯子里一倒——<span class="em">蜂蜜和茶混合在一起了</span>！',
    sentence: 'You <b>mix</b> the ingredients.',
    spellShow: '<span class="em">m</span><span class="em">i</span><span class="hl">x</span>',
    spellTip: '💡 <span class="em">mi</span>(蜜)+<span class="hl">x</span>(交叉)=mix<br>⚠️ 结尾是 <span class="hl">x</span>！别写成"miks"或"mixs"。'
  },
  {
    word: 'put', linkIcon: '📥',
    linkLeft: 'p<br>屁',
    linkBridge: '<span class="hl">p</span>(屁)+<span class="em">ut</span>(乌特) → 屁股在乌特上放东西',
    linkDetail: '<b class="hl">p</b>像"屁"的拼音，<b class="em">ut</b>谐音"乌特"。<br>把<span class="hl">屁</span>股坐在<span class="em">乌特</span>上——就是"<b>放</b>上去"！<br>⚠️ 不规则动词，过去式不变还是put。',
    story: '🪑你搬来一把椅子，把你的<span class="hl">屁股</span>重重地<span class="em">放</span>在椅子上——"嘭！"椅子腿差点裂开！你的书包也被你<span class="hl">放</span>在旁边的地上。',
    sentence: '<b>Put</b> the book on the table.',
    spellShow: '<span class="hl">p</span><span class="em">u</span><span class="hl">t</span>',
    spellTip: '💡 <span class="hl">p</span>(屁)+<span class="em">ut</span>(乌特)=put<br>⚠️ 读音是/pʊt/，不是/pʌt/！<br>⚠️ 过去式还是put(不变)！'
  },
  {
    word: 'mixture', linkIcon: '🧪',
    linkLeft: 'mix<br>混合',
    linkBridge: '<span class="em">mix</span>(混合)+<span class="hl">ture</span>(车) → 混合的车=混合物',
    linkDetail: '<b class="em">mix</b>是"混合"，<b class="hl">ture</b>像"车"的读音。<br>把各种东西<span class="em">混合</span>在一起，<span class="hl">车</span>里装的就是一团<b>混合物</b>！<br>⚠️ <span class="hl">ture</span>读/tʃər/（彻儿），不是"车儿"。',
    story: '🚚你打开一辆卡车的后门——里面<span class="hl">装着乱七八糟的东西</span>！沙子、石头、水、盐、糖全混在一起！你伸手一捞，<span class="em">黏糊糊的混合物</span>从指缝漏下去！',
    sentence: 'The <b>mixture</b> is thick.',
    spellShow: '<span class="em">m</span><span class="em">i</span><span class="em">x</span><span class="hl">t</span><span class="hl">u</span><span class="em">r</span><span class="el">e</span>',
    spellTip: '💡 <span class="em">mix</span>(混合)+<span class="hl">ture</span>(车)<br>⚠️ 结尾是 <span class="hl">ture</span> 不是"cher"！t-u-r-e。<br>⚠️ 别写成"mixure"漏了t！'
  },
  {
    word: 'chocolate', linkIcon: '🍫',
    linkLeft: 'cho<br>绰',
    linkBridge: '<span class="hl">cho</span>(绰)+<span class="em">co</span>(可)+<span class="hl">late</span>(雷特) → 绰可雷特=巧克力的读音',
    linkDetail: '读音就是"<span class="hl">绰可雷特</span>"，拆成三部分：<br>① <b class="hl">cho</b>(绰) ② <b class="em">co</b>(可) ③ <b class="hl">late</b>(雷特)<br>⚠️ 注意！有3个音节，但拼写中<span class="hl">cho-co-late</span>，第二个o别漏了。',
    story: '🍫你撕开包装纸，<span class="hl">巧克力</span>的香气冲进鼻子！你咬一口——"咔嚓！"<span class="em">巧克力在嘴里慢慢融化</span>，甜甜的、滑滑的……你闭上眼睛享受！',
    sentence: 'I like to eat <b>chocolate</b>.',
    spellShow: '<span class="hl">ch</span><span class="em">o</span><span class="em">c</span><span class="em">o</span><span class="em">l</span><span class="hl">a</span><span class="em">t</span><span class="em">e</span>',
    spellTip: '💡 <span class="hl">cho</span>(绰)+<span class="em">co</span>(可)+<span class="hl">late</span>(雷特)<br>⚠️ 第二个 <span class="hl">o</span> 别漏了！ch-o-c-o-l-a-t-e。<br>⚠️ 结尾是<span class="em">te</span>不是"t"。'
  },
  {
    word: 'shake', linkIcon: '🥤',
    linkLeft: 'sh<br>是',
    linkBridge: '<span class="em">sh</span>(是)+<span class="hl">a</span>(一)+<span class="em">ke</span>(壳) → 是一个壳在摇动',
    linkDetail: '拆成 <b class="em">sh</b>（像"是"的声母）+ <b class="hl">a</b>（"一"）+ <b class="em">ke</b>（"壳"的拼音）。<br><span class="em">是</span>一个<span class="hl">鸡蛋壳</span>(ke)在<span class="em">摇动</span>——蛋壳里的东西在晃！<br>⚠️ <span class="hl">sh</span>读/ʃ/，和"是"的sh一样。',
    story: '🥤你拿起一瓶<span class="hl">汽水</span>，疯狂地<span class="em">摇摇摇摇摇</span>！汽水里的气泡"噗噗噗"往上冒！你一拧盖子——"<span class="hl">滋——</span>"汽水喷了你一身！',
    sentence: 'Please <b>shake</b> the bottle.',
    spellShow: '<span class="hl">sh</span><span class="em">a</span><span class="em">k</span><span class="hl">e</span>',
    spellTip: '💡 <span class="hl">sh</span>(是)+<span class="em">a</span>(一)+<span class="em">k</span>(壳)+<span class="hl">e</span><br>⚠️ 结尾有 <span class="hl">e</span>！别写成"shak"或"shack"！<br>⚠️ 过去式是 <span class="hl">shook</span>，不规则！'
  },
  {
    word: 'freeze', linkIcon: '❄️',
    linkLeft: 'fr<br>飞人',
    linkBridge: '<span class="em">fr</span>(飞人)+<span class="hl">eeze</span>(椅子) → 飞人被椅子冻住了',
    linkDetail: '拆成 <b class="em">fr</b>（像"飞人"的声母）+ <b class="hl">eeze</b>（谐音"椅子"）。<br>一个<span class="em">飞人</span>(fr)坐在<span class="hl">椅子</span>(eeze)上，椅子突然结冰——飞人被<span class="hl">冻住</span>了！<br>反义词：<span class="em">melt</span>(融化) ↔ <span class="hl">freeze</span>(结冰)。',
    story: '🥶你站在湖边，湖面上<span class="hl">开始结冰</span>！冰面从岸边<span class="em">咔嚓咔嚓</span>地向中心延伸，你低头一看——你的鞋子已经被<span class="hl">冻在冰面</span>上了！',
    sentence: 'Water <b>freezes</b> at 0°C.',
    spellShow: '<span class="hl">f</span><span class="hl">r</span><span class="em">ee</span><span class="hl">z</span><span class="em">e</span>',
    spellTip: '💡 <span class="em">fr</span>(飞人)+<span class="hl">eeze</span>(椅子)<br>⚠️ 中间是 <span class="hl">ee</span>(双e)不是"ea"！<br>⚠️ 结尾有<span class="em">e</span>，freeze去掉e=freez(错的)。'
  },
  {
    word: 'Sure!', linkIcon: '👍',
    linkLeft: 'su<br>书',
    linkBridge: '读音\"舒儿\" → <span class="em">su</span>(书)+<span class="hl">re</span>(热) → 书热了当然可以！',
    linkDetail: '读音 [ʃʊr] 像"<span class="hl">舒儿</span>"。<br><b class="em">S</b>开头的词+<b class="hl">ure</b>结尾。<br><span class="em">书</span>拿到<span class="hl">热</span>炉子上烤，当然可以烤干！→ 当然可以！<br>⚠️ <span class="hl">s</span>读/ʃ/（嘘音）。',
    story: '🙋朋友问你能不能帮他——你竖起大拇指，咧嘴一笑："<span class="hl">当然可以</span>！"然后你拿出<span class="em">一本书放在火上烤</span>——"当然能烤干！"',
    sentence: '— Can you help? — <b>Sure!</b>',
    spellShow: '<span class="hl">S</span><span class="em">u</span><span class="em">r</span><span class="hl">e</span>',
    spellTip: '💡 <span class="hl">S</span>大写开头！<br>⚠️ 读音 /ʃʊr/，<span class="hl">S</span>读/ʃ/(嘘)不是/s/。<br>⚠️ 结尾有<span class="em">e</span>。'
  },
  {
    word: "Don't worry!", linkIcon: '😌',
    linkLeft: "Don't<br>不",
    linkBridge: "<span class=\"em\">Don't</span>(不)+<span class=\"hl\">wor</span>(我)+<span class=\"em\">ry</span>(累) → 别让我累→别担心",
    linkDetail: '三个词：<b class="em">Don\'t</b>（don\'t=do not）+ <b class="hl">wor</b>（谐音"我"）+ <b class="em">ry</b>（谐音"累"）。<br>"<span class="em">别</span>(don\'t)让<span class="hl">我</span>(wor)<span class="em">累</span>(ry)" → 别担心，我来搞定！<br>⚠️ worry注意双写r！',
    story: '😰你愁眉苦脸，朋友拍拍你的肩膀："<span class="hl">别担心！</span>"他的手发着<span class="em">金色的光芒</span>，你感觉一切压力都消失了！',
    sentence: "<b>Don't worry!</b> I can do it.",
    spellShow: "<span class=\"em\">Don't</span> <span class=\"hl\">w</span><span class=\"hl\">o</span><span class=\"hl\">r</span><span class=\"em\">r</span><span class=\"em\">y</span>",
    spellTip: "💡 <span class=\"em\">Don't</span>(别)+<span class=\"hl\">worry</span>(担心)<br>⚠️ worry是<span class=\"hl\">双r</span>！w-o-r-r-y。<br>⚠️ Don't有撇号'，D大写。"
  },
  {
    word: 'Done!', linkIcon: '✅',
    linkLeft: 'd<br>大',
    linkBridge: '<span class="hl">d</span>(大)+<span class="em">one</span>(一/万) → 大事一万件，做完了！',
    linkDetail: '<b class="hl">d</b>(大)+<b class="em">one</b>(一/一个)。<br>大(<span class="hl">d</span>)的<span class="em">一件事</span>(one)终于做完了！<br>⚠️ done的读音/dʌn/（当），不是/dəʊn/（豆嗯）。',
    story: '📋你列了一张长长的待办清单，打钩打钩打钩……最后一个任务，你用力画了一个大大的<span class="hl">✓</span>！你把笔一扔——"<span class="em">做好啦！</span>"',
    sentence: '<b>Done!</b> I finished my homework.',
    spellShow: '<span class="hl">D</span><span class="em">o</span><span class="em">n</span><span class="hl">e</span>',
    spellTip: '💡 <span class="hl">D</span>大写开头！<br>⚠️ 读音 /dʌn/，不是"豆恩"！<br>⚠️ 别写成"don"漏了e，或"done"多e。'
  }

];
  for(var i=0;i<arr.length;i++) a.push(arr[i]);
  var arr = [

  {
    word: 'polite', linkIcon: '🙇',
    linkLeft: 'po<br>破',
    linkBridge: '<span class="em">po</span>(破)+<span class="hl">li</span>(礼)+<span class="em">te</span>(特) → 破了礼貌特别不好→要有礼貌',
    linkDetail: '拆成 <b class="em">po</b>（"破"的拼音）+ <b class="hl">li</b>（"礼"的拼音）+ <b class="em">te</b>（"特"的拼音）。<br><span class="em">破</span>坏了<span class="hl">礼</span>貌<span class="em">特</span>别不好——所以要做个有<b>礼貌</b>的人！<br>反义词：<span class="hl">polite</span> ↔ <span class="em">rude</span>。',
    story: '🙇你准备去别人家做客，你<span class="hl">穿西装打领带</span>，进门先鞠躬——"您好！"但是领带太紧了，你<span class="em">憋红了脸</span>喘不过气！',
    sentence: 'Be <b>polite</b> to others.',
    spellShow: '<span class="em">p</span><span class="em">o</span><span class="em">l</span><span class="em">i</span><span class="hl">t</span><span class="hl">e</span>',
    spellTip: '💡 <span class="em">po</span>(破)+<span class="hl">li</span>(礼)+<span class="em">te</span>(特)<br>⚠️ 结尾是 <span class="hl">te</span> 不是"t"！<br>⚠️ 中间是 <span class="em">li</span> 不是"le"。'
  },
  {
    word: 'take turns', linkIcon: '🔄',
    linkLeft: 'take<br>拿',
    linkBridge: '<span class="em">take</span>(拿/做)+<span class="hl">turns</span>(转动) → 拿着转=轮流',
    linkDetail: '两个词：<b class="em">take</b>（拿/做）+ <b class="hl">turns</b>（转动/轮流）。<br><span class="em">拿</span>着东西<span class="hl">转</span>一圈，下一个人接着拿→<b>轮流</b>！<br>⚠️ <span class="hl">turns</span>的结尾有s，turn是"转"，turns是"轮流"。',
    story: '🎠小朋友们坐<span class="hl">旋转木马</span>，一个接一个上去——"<span class="em">你玩一次，我玩一次</span>！"转盘上写着"TAKE TURNS"发光大字！',
    sentence: '<b>Take turns</b> on the swing.',
    spellShow: '<span class="em">take</span> <span class="hl">turn</span><span class="em">s</span>',
    spellTip: '💡 <span class="em">take</span>(拿)+<span class="hl">turns</span>(轮流)<br>⚠️ <span class="hl">turn</span>结尾加<span class="em">s</span>！别写成"turn"忘了s。<br>⚠️ 中间有空格！'
  },
  {
    word: 'knock', linkIcon: '🚪',
    linkLeft: 'kn<br>克努',
    linkBridge: '<span class="em">kn</span>(克努)+<span class="hl">ock</span>(奥克) → 克努奥克在敲门',
    linkDetail: '拆成 <b class="em">kn</b> + <b class="hl">ock</b>。<br><span class="em">kn</span>里的<span class="hl">k不发音</span>！读音/nɑk/（诺克）。<br><span class="em">kn</span>="克努"在<span class="hl">敲</span>门——咚！咚！咚！<br>⚠️ <span class="hl">k</span>是哑巴！不发音！',
    story: '🚪你走到朋友家门前，握起拳头——"<span class="hl">咚咚咚</span>！"你使劲敲了几下，门裂开了一条缝，<span class="em">从缝里伸出一只眼睛</span>看着你！',
    sentence: '<b>Knock</b> on the door first.',
    spellShow: '<span class="hl">k</span><span class="em">n</span><span class="hl">o</span><span class="em">c</span><span class="em">k</span>',
    spellTip: '💡 <span class="hl">k</span>不发音！开头的kn读/n/。<br>⚠️ 结尾是两个字母<span class="em">ck</span>！k-n-o-<span class="hl">ck</span>。<br>⚠️ 别写成"nock"——开头写k。'
  },
  {
    word: 'ox', linkIcon: '🐂',
    linkLeft: 'o<br>圆',
    linkBridge: '<span class="em">o</span>(圆) + <span class="hl">x</span>(叉) → 圆圈+叉叉=公牛的角',
    linkDetail: '<b class="em">o</b>像公牛的<span class="hl">圆身体</span>，<b class="hl">x</b>像公牛的<span class="em">两只角</span>。<br>身体圆圆的(<span class="em">o</span>)，角交叉成X(<span class="hl">x</span>)——<b>公牛</b>！<br>⚠️ 复数形式是<span class="hl">oxen</span>（不规则），不是oxes。',
    story: '🐂一头<span class="hl">巨大的公牛</span>站在你面前！它的<span class="em">圆肚子</span>像一个大鼓，<span class="hl">X形的角</span>在阳光下闪闪发光。它冲你"哞——"地叫，你吓得拔腿就跑！',
    sentence: 'The <b>ox</b> is very strong.',
    spellShow: '<span class="em">o</span><span class="hl">x</span>',
    spellTip: '💡 <span class="em">o</span>圆身体+<span class="hl">x</span>叉角=ox<br>⚠️ 只有2个字母！<br>⚠️ 复数是 <span class="hl">oxen</span> ！不是"oxes"！'
  },
  {
    word: 'until', linkIcon: '⏳',
    linkLeft: 'un<br>安',
    linkBridge: '<span class="em">un</span>(安)+<span class="hl">til</span>(替尔) → 安替尔一直等到...为止',
    linkDetail: '拆成 <b class="em">un</b>（谐音"安"）+ <b class="hl">til</b>（谐音"替尔"）。<br><span class="em">安</span>静地等<span class="hl">替尔</span>来——一直等到他来为止！<br>⚠️ <span class="hl">un</span> 读/ən/，不是/ʌn/。',
    story: '⏰你在公园等朋友，从<span class="hl">太阳高照等到月亮升起</span>！你不停地看手表——"<span class="em">怎么还没来呀？</span>"你一直等到星星都出来了！',
    sentence: 'I wait <b>until</b> you come.',
    spellShow: '<span class="em">u</span><span class="em">n</span><span class="hl">t</span><span class="hl">i</span><span class="em">l</span>',
    spellTip: '💡 <span class="em">un</span>(安)+<span class="hl">til</span>(替尔)<br>⚠️ 只有一个 <span class="hl">l</span>！别写成"untill"。<br>⚠️ 是un+til=until。'
  },
  {
    word: 'someone', linkIcon: '👤',
    linkLeft: 'some<br>一些',
    linkBridge: '<span class="em">some</span>(一些)+<span class="hl">one</span>(一个人) → 一些中的一个人=某个人',
    linkDetail: '<b class="em">some</b> = 一些，<b class="hl">one</b> = 一个人。<br><span class="em">一些</span>人当中的一个(<span class="hl">one</span>) = <b>某个人</b>。<br>⚠️ some的发音/sʌm/，不是/səʊm/。',
    story: '👤你走在走廊里，突然<span class="hl">有人</span>在后面拍你的肩膀！你回头一看——<span class="em">没人</span>！再回头——"<span class="hl">哈哈，是我！</span>"一个隐形人在逗你！',
    sentence: '<b>Someone</b> is at the door.',
    spellShow: '<span class="em">s</span><span class="em">o</span><span class="em">m</span><span class="hl">e</span><span class="em">o</span><span class="em">n</span><span class="hl">e</span>',
    spellTip: '💡 <span class="em">some</span>(一些)+<span class="hl">one</span>(一个)<br>⚠️ 是一个词，中间没有空格！<br>⚠️ 别写成"some one"(两个词)。'
  },
  {
    word: 'invite', linkIcon: '✉️',
    linkLeft: 'in<br>进',
    linkBridge: '<span class="hl">in</span>(进)+<span class="em">vite</span>(外特) → 请你进来(外特进来)→邀请',
    linkDetail: '<b class="hl">in</b> = "进来"，<b class="em">vite</b>谐音"外特"。<br>"<span class="hl">进</span>来<span class="em">外特</span>？" → 请你进来做客，就是<b>邀请</b>你！<br>⚠️ invite的名词是 <span class="hl">invitation</span>。',
    story: '✉️你收到一封金色的信，信封上写着"<span class="hl">INVITE</span>"。你一打开，信里<span class="em">飘出彩带和亮片</span>！一张卡片弹出来："请来参加我的生日派对！🎂"',
    sentence: 'I <b>invite</b> you to my party.',
    spellShow: '<span class="hl">i</span><span class="em">n</span><span class="hl">v</span><span class="em">i</span><span class="em">t</span><span class="hl">e</span>',
    spellTip: '💡 <span class="hl">in</span>(进)+<span class="em">vite</span>(外特)<br>⚠️ 结尾有 <span class="hl">e</span>！别写成"invit"。<br>⚠️ 去掉e加ation=invitation(邀请)。'
  },
  {
    word: 'behind', linkIcon: '🏃',
    linkLeft: 'be<br>被',
    linkBridge: '<span class="em">be</span>(被)+<span class="hl">hind</span>(害的) → 被害的人在后面追',
    linkDetail: '拆成 <b class="em">be</b>（"被"的拼音）+ <b class="hl">hind</b>（谐音"害的"）。<br><span class="em">被</span><span class="hl">害</span>的人在你<span class="hl">后面</span>追你——快跑！<br>反义词：<span class="hl">behind</span>(在后面) ↔ <span class="em">in front of</span>(在前面)。',
    story: '👻你走在黑暗的巷子里，总觉得<span class="hl">后面有人</span>！你回头——没人！再回头——一个<span class="em">白影</span>在你背后用冰冷的手碰了你的脖子！"啊——！"',
    sentence: 'The cat is <b>behind</b> the door.',
    spellShow: '<span class="em">b</span><span class="em">e</span><span class="hl">h</span><span class="em">i</span><span class="em">n</span><span class="hl">d</span>',
    spellTip: '💡 <span class="em">be</span>(被)+<span class="hl">hind</span>(害的)<br>⚠️ 开头是 <span class="em">be</span> 不是"bi"！<br>⚠️ <span class="hl">h</span>发音！不是哑巴。'
  },
  {
    word: 'maybe', linkIcon: '🤔',
    linkLeft: 'may<br>五月',
    linkBridge: '<span class="em">may</span>(五月)+<span class="hl">be</span>(是) → 五月大概是...',
    linkDetail: '<b class="em">may</b> = "五月"，<b class="hl">be</b> = "是"。<br>"五月是……" → 大概、可能(<b>maybe</b>)是五月吧！<br>⚠️ <span class="hl">ay</span>读/eɪ/，嘴唇向两边咧。',
    story: '🤔你问妈妈："我的生日是什么时候？"妈妈想了半天说——"<span class="hl">大概是五月吧？</span>"你翻开日历，五月那一页突然<span class="em">自己翻了起来</span>！',
    sentence: '<b>Maybe</b> it will rain today.',
    spellShow: '<span class="em">m</span><span class="em">a</span><span class="em">y</span><span class="hl">b</span><span class="em">e</span>',
    spellTip: '💡 <span class="em">may</span>(五月)+<span class="hl">be</span>(是)=maybe<br>⚠️ 是一个词，不是"may be"(两个词)！<br>⚠️ <span class="hl">ay</span>读/eɪ/。'
  },
  {
    word: 'cry', linkIcon: '😭',
    linkLeft: 'cr<br>克人',
    linkBridge: '<span class="hl">cr</span>(克人)+<span class="em">y</span>(歪) → 克人歪着嘴哭泣',
    linkDetail: '<b class="hl">cr</b>是"crying"的声母，<b class="em">y</b>像歪着的嘴。<br>一个<span class="hl">克</span>难的<span class="em">歪</span>嘴在<span class="hl">哭泣</span>——呜呜呜！<br>⚠️ 过去式是 <span class="hl">cried</span>（变y为i+ed）。',
    story: '😭你的玩具熊摔到地上了！你<span class="hl">歪着嘴</span>"哇——"的一声哭出来，眼泪像<span class="em">瀑布一样流</span>，把地板都淹了！你坐着小船在眼泪上划！',
    sentence: 'Do not <b>cry</b>.',
    spellShow: '<span class="em">c</span><span class="hl">r</span><span class="em">y</span>',
    spellTip: '💡 <span class="hl">cr</span>(克人)+<span class="em">y</span>(歪嘴)<br>⚠️ 就3个字母！c-r-y。<br>⚠️ 过去式是 <span class="hl">cried</span>(cry→cried)，不是"cryed"。'
  },
  {
    word: 'kind', linkIcon: '😊',
    linkLeft: 'k<br>科',
    linkBridge: '<span class="hl">k</span>(科)+<span class="em">ind</span>(因的) → 科因的人对大家友善',
    linkDetail: '<b class="hl">k</b>（"科"的声母）+ <b class="em">ind</b>（谐音"因的"）。<br>一个姓<span class="hl">科</span>的人<span class="em">因</span>为大家都很<span class="hl">友善</span>——<b>kind</b>！<br>⚠️ <span class="hl">ind</span>读/aɪnd/，不是/ɪnd/。',
    story: '😊你摔倒了，一个<span class="hl">友善的</span>同学跑过来扶起你。她的手<span class="em">发着暖洋洋的金光</span>，你感觉伤口不疼了！她递给你一张创可贴，上面写着"BE KIND"。',
    sentence: 'She is a <b>kind</b> person.',
    spellShow: '<span class="hl">k</span><span class="em">i</span><span class="em">n</span><span class="hl">d</span>',
    spellTip: '💡 <span class="hl">k</span>(科)+<span class="em">ind</span>(因的)<br>⚠️ 结尾有 <span class="hl">d</span>！别写成"kin"。<br>⚠️ <span class="em">ind</span>读/aɪnd/，长音i。'
  }

];
  for(var i=0;i<arr.length;i++) a.push(arr[i]);
  var arr = [

  {
    word: 'honey', linkIcon: '🍯',
    linkLeft: 'hon<br>洪',
    linkBridge: '<span class="em">hon</span>(洪)+<span class="hl">ey</span>(诶) → 洪诶爱吃蜂蜜',
    linkDetail: '拆成 <b class="em">hon</b>（谐音"洪"）+ <b class="hl">ey</b>（谐音"诶"）。<br><span class="em">洪</span>诶(<span class="hl">ey</span>，是个人名)最爱吃<span class="hl">蜂蜜</span>！又甜又黏！<br>⚠️ <span class="hl">ey</span>读/i/（伊），不是/eɪ/。',
    story: '🍯你打开一个蜂巢，里面<span class="hl">金黄色的蜂蜜</span>慢慢流出来！黏糊糊的蜂蜜<span class="em">拉出一条金丝</span>，你伸出舌头一舔——好甜啊！蜜蜂追着你跑！',
    sentence: '<b>Honey</b> is very sweet.',
    spellShow: '<span class="em">h</span><span class="em">o</span><span class="em">n</span><span class="hl">e</span><span class="hl">y</span>',
    spellTip: '💡 <span class="em">hon</span>(洪)+<span class="hl">ey</span>(诶)<br>⚠️ 结尾是 <span class="hl">ey</span> 不是"ie"或"ee"！h-o-n-e-y。<br>⚠️ 别和"money"(钱)搞混。'
  },
  {
    word: 'joke', linkIcon: '😂',
    linkLeft: 'j<br>姐',
    linkBridge: '<span class="hl">j</span>(姐)+<span class="em">oke</span>(哦科) → 姐姐哦了一声科科笑→讲笑话',
    linkDetail: '<b class="hl">j</b>像"姐"的声母，<b class="em">oke</b>谐音"哦科"（笑声"呵呵"）。<br><span class="hl">姐</span>姐"<span class="em">呵科呵科</span>"地笑——她在讲<b>笑话</b>！<br>⚠️ <span class="hl">o</span>读/əʊ/，嘴巴从大到小。',
    story: '😂你讲了一个笑话："有一只<span class="hl">猫</span>掉进了海里，它就变成了<span class="em">落汤猫</span>哈哈哈！"你笑得前仰后合，笑到眼泪都出来了！',
    sentence: 'He tells a funny <b>joke</b>.',
    spellShow: '<span class="hl">j</span><span class="em">o</span><span class="em">k</span><span class="hl">e</span>',
    spellTip: '💡 <span class="hl">j</span>(姐)+<span class="em">oke</span>(哦科)<br>⚠️ 结尾有 <span class="hl">e</span>！别写成"jok"。<br>⚠️ 别和"joke"(玩笑)的读音混淆。'
  },
  {
    word: 'whatever', linkIcon: '🤷',
    linkLeft: 'what<br>什么',
    linkBridge: '<span class="em">what</span>(什么)+<span class="hl">ever</span>(曾经) → 无论曾经是什么',
    linkDetail: '<b class="em">what</b> = "什么"，<b class="hl">ever</b> = "曾经"。<br>"<span class="em">什么</span><span class="hl">曾经</span>"→ 无论曾经是什么=无论什么！<br>⚠️ <span class="hl">wh</span>读/w/，h不发音。',
    story: '🤷你的朋友说："我想吃……"然后犹豫了半天。你说："<span class="hl">随便什么都可以啦！</span>"话音刚落，天上<span class="em">下起了糖果雨</span>——什么糖果都有！',
    sentence: 'Eat <b>whatever</b> you like.',
    spellShow: '<span class="hl">wh</span><span class="em">a</span><span class="em">t</span><span class="em">e</span><span class="em">v</span><span class="em">e</span><span class="hl">r</span>',
    spellTip: '💡 <span class="hl">what</span>(什么)+<span class="em">ever</span>(曾经)<br>⚠️ <span class="hl">wh</span>读/w/，h不发音。<br>⚠️ 是一个词，中间没空格。'
  },
  {
    word: 'another', linkIcon: '➕',
    linkLeft: 'an<br>一个',
    linkBridge: '<span class="em">an</span>(一个)+<span class="hl">other</span>(其他) → 另一个其他的=另一个',
    linkDetail: '<b class="em">an</b> = "一个"，<b class="hl">other</b> = "其他的/另外的"。<br><span class="em">一个</span>(an)+<span class="hl">其他的</span>(other)=<b>另一个</b>！<br>⚠️ 是一个词，不是"an other"两个词。',
    story: '🍎你吃了一个苹果，还想吃——你伸手去拿<span class="hl">另一个</span>苹果。但那个苹果突然<span class="em">长出了腿</span>自己跑了！你追着苹果在桌子上绕圈！',
    sentence: 'I want <b>another</b> cookie.',
    spellShow: '<span class="em">a</span><span class="em">n</span><span class="hl">o</span><span class="em">t</span><span class="em">h</span><span class="em">e</span><span class="hl">r</span>',
    spellTip: '💡 <span class="em">an</span>(一个)+<span class="hl">other</span>(其他的)=another<br>⚠️ 是一个词！不是"an other"！<br>⚠️ <span class="hl">o</span>在中间，别漏了。'
  },
  {
    word: 'helpful', linkIcon: '🤝',
    linkLeft: 'help<br>帮助',
    linkBridge: '<span class="em">help</span>(帮助)+<span class="hl">ful</span>(充满) → 充满帮助=愿意帮忙的',
    linkDetail: '<b class="em">help</b> = "帮助"，<b class="hl">ful</b> = "充满……的"（形容词后缀）。<br>充满(<span class="hl">ful</span>)了<span class="em">帮助</span>(help)的意愿→<b>愿意帮忙的</b>！<br>⚠️ 后缀是<span class="hl">ful</span>只有一个l，不是"full"。',
    story: '🤝你迷路了，一个<span class="hl">热心的</span>叔叔走过来，他<span class="em">浑身发着金光</span>，像超人一样！他一把抱起你飞上天，帮你找到了回家的路！',
    sentence: 'She is very <b>helpful</b>.',
    spellShow: '<span class="em">h</span><span class="em">e</span><span class="em">l</span><span class="em">p</span><span class="hl">f</span><span class="el">u</span><span class="em">l</span>',
    spellTip: '💡 <span class="em">help</span>(帮助)+<span class="hl">ful</span>(充满)<br>⚠️ 后缀 <span class="hl">ful</span> 只有1个l！不是"full"！<br>⚠️ help+ful=helpful。'
  },
  {
    word: 'way', linkIcon: '🗺️',
    linkLeft: 'w<br>双',
    linkBridge: '<span class="em">w</span>(双)+<span class="hl">ay</span>(哎) → 双哎是用什么方法？',
    linkDetail: '<b class="em">w</b>像两条路交汇，<b class="hl">ay</b>读音/eɪ/。<br>两条(<span class="em">w</span>)路交叉哎(<span class="hl">ay</span>)一声——这就是去那里的<b>方法</b>！<br>⚠️ <span class="hl">ay</span>读/eɪ/，和may一样。',
    story: '🗺️你面前有两条路，你拿出地图一看——地图上<span class="hl">W形的路线</span>在闪闪发光！你跟着W形的路走，<span class="em">哎的一声</span>，就走到了目的地！',
    sentence: 'Show me the <b>way</b>.',
    spellShow: '<span class="em">w</span><span class="hl">a</span><span class="em">y</span>',
    spellTip: '💡 <span class="em">w</span>(双路)+<span class="hl">ay</span>(哎)<br>⚠️ 就3个字母！w-a-y。<br>⚠️ <span class="hl">ay</span>读/eɪ/，不是/æ/。'
  },
  {
    word: 'May I come in?', linkIcon: '🚪',
    linkLeft: 'May<br>可以',
    linkBridge: '<span class="em">May</span>(可以)+<span class="hl">I</span>(我)+<span class="em">come</span>(来)+<span class="hl">in</span>(里) → 可以我进来吗？',
    linkDetail: '4个词：<br>① <b class="em">May</b> = "可以"（礼貌）② <b class="hl">I</b> = "我"<br>③ <b class="em">come</b> = "来" ④ <b class="hl">in</b> = "在……里"<br>→ "可以我来里面吗？" → <b>我可以进来吗？</b><br>⚠️ 结尾有<span class="hl">问号</span>！',
    story: '🚪你站在老师的办公室门前，轻轻敲了三下。"<span class="hl">May I come in?</span>"门自动打开，一只<span class="em">机械手臂</span>伸出来把你拉了进去！',
    sentence: '<b>May I come in?</b> Yes, please!',
    spellShow: '<span class="em">May</span> <span class="hl">I</span> <span class="em">come</span> <span class="hl">in</span><span class="em">?</span>',
    spellTip: '💡 <span class="em">May</span>(可以)+<span class="hl">I</span>(我)+<span class="em">come</span>(来)+<span class="hl">in</span>(里)<br>⚠️ <span class="hl">May</span> M大写！<br>⚠️ 结尾有 <span class="em">问号</span>！'
  }

];
  for(var i=0;i<arr.length;i++) a.push(arr[i]);
})();
