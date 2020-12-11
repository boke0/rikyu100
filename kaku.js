// 利休道歌全部
let data = [
  ["その<ruby><rb>道</rb><rt>みち</rt></ruby>に<ruby><rb>入</rb><rt>い</rt></ruby>らんと<ruby><rb>思ふ心</rb><rt>おもうこころ</rt></ruby>こそ",
   "<ruby><rb>我身</rb><rt>わがみ</rt></ruby>ながらの<ruby><rb>師匠</rb><rt>ししょう</rt></ruby>なりけれ"],
   ["なら<ruby><rb>ひ</rb><rt>い</rt></ruby>つつ<ruby><rb>見</rb><rt>み</rt></ruby>てこそ<ruby><rb>習へ習は</rb><rt>ならえならわ</rt></ruby>ずに",
   "よしあしい<ruby><rb>ふ</rb><rt>う</rt></ruby>は<ruby><rb>愚</rb><rt>おろ</rt></ruby>かなりけり"],
   ["こころざし<ruby><rb>深</rb><rt>ふか</rt></ruby>き<ruby><rb>人</rb><rt>ひと</rt></ruby>にはいくたびも",
   "あ<ruby><rb>は</rb><rt>わ</rt></ruby>れみ<ruby><rb>深</rb><rt>ぶか</rt></ruby>く<ruby><rb>奥</rb><rt>おく</rt></ruby>ぞ<ruby><rb>教ふ</rb><rt>おしう</rt></ruby>る"],
   ["は<ruby><rb>ぢ</rb><rt>じ</rt></ruby>をすて<ruby><rb>人</rb><rt>ひと</rt></ruby>に<ruby><rb>物</rb><rt>もの</rt></ruby>と<ruby><rb>ひ習ふ</rb><rt>いならう</rt></ruby>べし",
   "<ruby><rb>是</rb><rt>これ</rt></ruby>ぞ<ruby><rb>上手</rb><rt>じょうず</rt></ruby>の<ruby><rb>基</rb><rt>もとい</rt></ruby>なりける"],
   ["<ruby><rb>上手</rb><rt>じょうず</rt></ruby>にはすきと<ruby><rb>器用</rb><rt>きよう</rt></ruby>と<ruby><rb>功積</rb><rt>こうつ</rt></ruby>むと",
    "この<ruby><rb>三</rb><rt>み</rt></ruby>つそろ<ruby><rb>ふ人</rb><rt>うひと</rt></ruby>ぞ<ruby><rb>能</rb><rt>よ</rt></ruby>くしる"],
   ["<ruby><rb>点前</rb><rt>てまえ</rt></ruby>には<ruby><rb>弱</rb><rt>よわ</rt></ruby>みをすててただ<ruby><rb>強</rb><rt>つよ</rt></ruby>く",
   "されど<ruby><rb>風俗</rb><rt>ふうぞく</rt></ruby>いやしきを<ruby><rb>去</rb><rt>さ</rt></ruby>れ"],
   ["<ruby><rb>点前</rb><rt>てまえ</rt></ruby>には<ruby><rb>強</rb><rt>つよ</rt></ruby>みばかりを<ruby><rb>思ふ</rb><rt>おもう</rt></ruby>なよ",
   "<ruby><rb>強</rb><rt>つよ</rt></ruby>きは<ruby><rb>弱</rb><rt>よわ</rt></ruby>く<ruby><rb>軽</rb><rt>かる</rt></ruby>く<ruby><rb>重</rb><rt>おも</rt></ruby>かれ"],
   ["<ruby><rb>何</rb><rt>なに</rt></ruby>にても<ruby><rb>道具扱ふ</rb><rt>どうぐあつかう</rt></ruby>たびごとに",
   "<ruby><rb>取</rb><rt>と</rt></ruby>る<ruby><rb>手</rb><rt>て</rt></ruby>は<ruby><rb>軽</rb><rt>かる</rt></ruby>く<ruby><rb>置</rb><rt>お</rt></ruby>く<ruby><rb>手重</rb><rt>ておも</rt></ruby>かれ"],
   ["<ruby><rb>点前</rb><rt>てまえ</rt></ruby>こそ<ruby><rb>薄茶</rb><rt>うすちゃ</rt></ruby>にあれと<ruby><rb>聞</rb><rt>き</rt></ruby>くものを",
   "<ruby><rb>麁相</rb><rt>そそう</rt></ruby>になせし<ruby><rb>人</rb><rt>ひと</rt></ruby>はあやまり"],
   ["<ruby><rb>濃茶</rb><rt>こいちゃ</rt></ruby>には<ruby><rb>点前</rb><rt>てまえ</rt></ruby>をすてて<ruby><rb>一筋</rb><rt>ひとすじ</rt></ruby>に",
   "<ruby><rb>服</rb><rt>ふく</rt></ruby>の<ruby><rb>加減</rb><rt>かげん</rt></ruby>と<ruby><rb>息</rb><rt>いき</rt></ruby>をちらすな"],
   ["<ruby><rb>濃茶</rb><rt>こいちゃ</rt></ruby>には<ruby><rb>湯加減</rb><rt>ゆかげん</rt></ruby>あつく<ruby><rb>服</rb><rt>ふく</rt></ruby>はな<ruby><rb>ほ</rb><rt>お</rt></ruby>",
   "<ruby><rb>淡</rb><rt>あわ</rt></ruby>なき<ruby><rb>や</rb><rt>よ</rt></ruby>うにかたまりもなく"],
   ["とにかくに<ruby><rb>服</rb><rt>ふく</rt></ruby>の<ruby><rb>加減</rb><rt>かげん</rt></ruby>を<ruby><rb>覚</rb><rt>おぼ</rt></ruby>ゆるは",
   "<ruby><rb>濃茶</rb><rt>こいちゃ</rt></ruby>たびたび<ruby><rb>点</rb><rt>た</rt></ruby>てて<ruby><rb>能</rb><rt>よ</rt></ruby>くしれ"],
   ["よそにては<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>を<ruby><rb>汲</rb><rt>くみ</rt></ruby>て<ruby><rb>後茶杓</rb><rt>のちちゃしゃく</rt></ruby>にて",
   "<ruby><rb>茶碗</rb><rt>ちゃわん</rt></ruby>のふちを<ruby><rb>心</rb><rt>こころ</rt></ruby>してうて"],
   ["<ruby><rb>中継</rb><rt>なかつぎ</rt></ruby>は<ruby><rb>胴</rb><rt>どう</rt></ruby>を<ruby><rb>横手</rb><rt>よこて</rt></ruby>にかきて<ruby><rb>取</rb><rt>と</rt></ruby>れ",
   "<ruby><rb>茶杓</rb><rt>ちゃしゃく</rt></ruby>は<ruby><rb>直</rb><rt>じか</rt></ruby>におくものぞかし"],
   ["<ruby><rb>棗</rb><rt>なつめ</rt></ruby>には<ruby><rb>蓋半月</rb><rt>ふたはんつき</rt></ruby>に<ruby><rb>手</rb><rt>て</rt></ruby>をかけて",
   "<ruby><rb>茶杓</rb><rt>ちゃしゃく</rt></ruby>を<ruby><rb>丸</rb><rt>まる</rt></ruby>く<ruby><rb>置</rb><rt>お</rt></ruby>くとこそしれ"],
   ["<ruby><rb>薄茶入蒔絵彫</rb><rt>うすちゃいれまきえほり</rt></ruby>もの<ruby><rb>文字</rb><rt>もじ</rt></ruby>あらば",
   "<ruby><rb>順逆覚</rb><rt>じゅんぎゃくおぼ</rt></ruby>え<ruby><rb>扱ふ</rb><rt>あつかう</rt></ruby>と<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["<ruby><rb>肩衝</rb><rt>かたつき</rt></ruby>は<ruby><rb>中次</rb><rt>なかつぎ</rt></ruby>とまた<ruby><rb>同</rb><rt>おな</rt></ruby>じこと",
   "<ruby><rb>底</rb><rt>そこ</rt></ruby>に<ruby><rb>指</rb><rt>ゆび</rt></ruby>をばかけぬとぞ<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["<ruby><rb>文琳</rb><rt>ぶんりん</rt></ruby>や<ruby><rb>茄子</rb><rt>なす</rt></ruby><ruby><rb>丸壷大海</rb><rt>まるつぼたいかい</rt></ruby>は",
   "<ruby><rb>底</rb><rt>そこ</rt></ruby>に<ruby><rb>指</rb><rt>ゆび</rt></ruby>をばかけてこそ<ruby><rb>持</rb><rt>も</rt></ruby>て"],
   ["<ruby><rb>大海</rb><rt>たいかい</rt></ruby>をあしら<ruby><rb>ふ時</rb><rt>うとき</rt></ruby>は<ruby><rb>大指</rb><rt>おおゆび</rt></ruby>を",
   "<ruby><rb>肩</rb><rt>かた</rt></ruby>にかけるぞ<ruby><rb>習ひ</rb><rt>ならい</rt></ruby>なりける"],
   ["<ruby><rb>口</rb><rt>くち</rt></ruby>ひろき<ruby><rb>茶入</rb><rt>ちゃい</rt></ruby>れの<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>をば<ruby><rb>汲</rb><rt>く</rt></ruby>むといい",
   "<ruby><rb>狭</rb><rt>せま</rt></ruby>き<ruby><rb>口</rb><rt>くち</rt></ruby>をばすく<ruby><rb>ふ</rb><rt>う</rt></ruby>とぞい<ruby><rb>ふ</rb><rt>う</rt></ruby>"],
   ["<ruby><rb>筒茶碗</rb><rt>つつぢゃわん</rt></ruby><ruby><rb>深</rb><rt>ふか</rt></ruby>き<ruby><rb>底</rb><rt>そこ</rt></ruby>よりふき<ruby><rb>上</rb><rt>のぼ</rt></ruby>り",
   "<ruby><rb>重</rb><rt>かさ</rt></ruby>ねて<ruby><rb>内</rb><rt>うち</rt></ruby>へ<ruby><rb>手</rb><rt>て</rt></ruby>をやらぬもの"],
   ["<ruby><rb>乾</rb><rt>かわ</rt></ruby>きたる<ruby><rb>茶巾</rb><rt>ちゃきん</rt></ruby><ruby><rb>使は</rb><rt>つかわ</rt></ruby>ば<ruby><rb>湯</rb><rt>ゆ</rt></ruby>はすこし",
   "こぼし<ruby><rb>残</rb><rt>のこ</rt></ruby>してあしら<ruby><rb>ふ</rb><rt>う</rt></ruby>ぞよき"],
   ["<ruby><rb>炭置</rb><rt>すみお</rt></ruby>くはたと<ruby><rb>ひ</rb><rt>い</rt></ruby><ruby><rb>習ひ</rb><rt>ならい</rt></ruby>に<ruby><rb>背</rb><rt>そむ</rt></ruby>くとも",
   "<ruby><rb>湯</rb><rt>ゆ</rt></ruby>のよくたぎる<ruby><rb>炭</rb><rt>すみ</rt></ruby>は<ruby><rb>炭</rb><rt>すみ</rt></ruby>なり"],
   ["<ruby><rb>客</rb><rt>きゃく</rt></ruby>になり<ruby><rb>炭</rb><rt>すみ</rt></ruby>つぐならばそのたびに",
   "<ruby><rb>薫物</rb><rt>たきもの</rt></ruby>などはくべぬことなり"],
   ["<ruby><rb>炭</rb><rt>すみ</rt></ruby>つがば<ruby><rb>五徳</rb><rt>ごとく</rt></ruby>はさむな<ruby><rb>十文字</rb><rt>じゅうもんじ</rt></ruby>",
   "<ruby><rb>縁</rb><rt>えん</rt></ruby>をきらすな<ruby><rb>釣合</rb><rt>つりあい</rt></ruby>をみよ"],
   ["<ruby><rb>焚残</rb><rt>たきのこ</rt></ruby>る<ruby><rb>白炭</rb><rt>しろずみ</rt></ruby>あらば<ruby><rb>捨</rb><rt>す</rt></ruby>ておきて",
   "<ruby><rb>又</rb><rt>また</rt></ruby><ruby><rb>余</rb><rt>よ</rt></ruby>の<ruby><rb>炭</rb><rt>すみ</rt></ruby>を<ruby><rb>置</rb><rt>お</rt></ruby>くものぞかし"],
   ["<ruby><rb>炭</rb><rt>すみ</rt></ruby>おくも<ruby><rb>習ひ</rb><rt>ならい</rt></ruby>ばかりにかか<ruby><rb>は</rb><rt>わ</rt></ruby>りて",
   "<ruby><rb>湯</rb><rt>ゆ</rt></ruby>のたぎらざる<ruby><rb>炭</rb><rt>すみ</rt></ruby>は<ruby><rb>消</rb><rt>き</rt></ruby>え<ruby><rb>炭</rb><rt>ずみ</rt></ruby>"],
   ["<ruby><rb>崩</rb><rt>くず</rt></ruby>れたるその<ruby><rb>白炭</rb><rt>しろずみ</rt></ruby>をとりあげて",
   "<ruby><rb>又</rb><rt>また</rt></ruby><ruby><rb>焚</rb><rt>た</rt></ruby>きそ<ruby><rb>へ</rb><rt>え</rt></ruby>ることはなきなり"],
   ["<ruby><rb>風炉</rb><rt>ふろ</rt></ruby>の<ruby><rb>炭</rb><rt>すみ</rt></ruby><ruby><rb>見</rb><rt>み</rt></ruby>ることはなし<ruby><rb>見</rb><rt>み</rt></ruby>ぬとても",
   "<ruby><rb>見</rb><rt>み</rt></ruby>ぬこそ<ruby><rb>猶</rb><rt>なお</rt></ruby>も<ruby><rb>見</rb><rt>み</rt></ruby>る<ruby><rb>心</rb><rt>こころ</rt></ruby>なれ"],
   ["<ruby><rb>客</rb><rt>きゃく</rt></ruby>になり<ruby><rb>底取</rb><rt>そこと</rt></ruby>るならばいつにても",
   "<ruby><rb>囲炉裏</rb><rt>いろり</rt></ruby>の<ruby><rb>角</rb><rt>すみ</rt></ruby>を<ruby><rb>崩</rb><rt>くず</rt></ruby>し<ruby><rb>尽</rb><rt>つ</rt></ruby>くすな"],
   ["<ruby><rb>客</rb><rt>きゃく</rt></ruby>になり<ruby><rb>風炉</rb><rt>ふろ</rt></ruby>のそのうち<ruby><rb>見</rb><rt>み</rt></ruby>る<ruby><rb>時</rb><rt>とき</rt></ruby>に",
   "<ruby><rb>灰</rb><rt>はい</rt></ruby><ruby><rb>崩</rb><rt>くず</rt></ruby>れなん<ruby><rb>気</rb><rt>き</rt></ruby>づかいをせよ"],
   ["<ruby><rb>墨蹟</rb><rt>ぼくせき</rt></ruby>を<ruby><rb>掛</rb><rt>か</rt></ruby>ける<ruby><rb>時</rb><rt>とき</rt></ruby>にはたくぼくを",
   "<ruby><rb>末座</rb><rt>すえざ</rt></ruby>の<ruby><rb>方</rb><rt>ほう</rt></ruby>へおおかたは<ruby><rb>引</rb><rt>ひ</rt></ruby>け"],
   ["<ruby><rb>絵</rb><rt>え</rt></ruby>の<ruby><rb>物</rb><rt>もの</rt></ruby>を<ruby><rb>掛</rb><rt>か</rt></ruby>ける<ruby><rb>時</rb><rt>とき</rt></ruby>にはたくぼくを",
   "<ruby><rb>印</rb><rt>いん</rt></ruby>ある<ruby><rb>方</rb><rt>ほう</rt></ruby>へ<ruby><rb>引</rb><rt>ひ</rt></ruby>きおくもよし"],
   ["<ruby><rb>冬</rb><rt>ふゆ</rt></ruby>の<ruby><rb>釜</rb><rt>かま</rt></ruby><ruby><rb>囲炉裏縁</rb><rt>いろりぶち</rt></ruby>より<ruby><rb>六七分</rb><rt>ろくしちぶ</rt></ruby>",
   "<ruby><rb>高</rb><rt>たか</rt></ruby>くす<ruby><rb>へ</rb><rt>え</rt></ruby>るぞ<ruby><rb>習ひ</rb><rt>ならい</rt></ruby>なりける"],
   ["<ruby><rb>絵掛物</rb><rt>えかけもの</rt></ruby>ひだり<ruby><rb>右向</rb><rt>みぎむ</rt></ruby>きむか<ruby><rb>ふ</rb><rt>う</rt></ruby>むき",
   "<ruby><rb>使ふ</rb><rt>つかう</rt></ruby>も<ruby><rb>床</rb><rt>とこ</rt></ruby>の<ruby><rb>勝手</rb><rt>かって</rt></ruby>にぞよる"],
   ["<ruby><rb>姥口</rb><rt>うばぐち</rt></ruby>は<ruby><rb>囲炉裏縁</rb><rt>いろりぶち</rt></ruby>より<ruby><rb>六七分</rb><rt>ろくしちぶ</rt></ruby>",
   "<ruby><rb>低</rb><rt>ひく</rt></ruby>くす<ruby><rb>へ</rb><rt>え</rt></ruby>るぞ<ruby><rb>習ひ</rb><rt>ならい</rt></ruby>なりける"],
   ["<ruby><rb>品々</rb><rt>しなじな</rt></ruby>の<ruby><rb>釜</rb><rt>かま</rt></ruby>によりての<ruby><rb>名</rb><rt>な</rt></ruby>は<ruby><rb>多</rb><rt>おお</rt></ruby>し",
   "<ruby><rb>釜</rb><rt>かま</rt></ruby>の<ruby><rb>総名</rb><rt>そうみょう</rt></ruby><ruby><rb>鑵子</rb><rt>かんす</rt></ruby>とぞう<ruby><rb>ふ</rb><rt>う</rt></ruby>"],
   ["<ruby><rb>置合</rb><rt>おきあわ</rt></ruby>せ<ruby><rb>心</rb><rt>こころ</rt></ruby>をつけて<ruby><rb>見</rb><rt>み</rt></ruby>るぞかし",
   "<ruby><rb>袋</rb><rt>ふくろ</rt></ruby>は<ruby><rb>織目</rb><rt>おりめ</rt></ruby><ruby><rb>畳目</rb><rt>たたみめ</rt></ruby>に<ruby><rb>置</rb><rt>お</rt></ruby>け"],
   ["はこびだて<ruby><rb>水指</rb><rt>みずさし</rt></ruby>おくは<ruby><rb>横畳</rb><rt>よこだたみ</rt></ruby>",
   "<ruby><rb>二</rb><rt>ふた</rt></ruby>つ<ruby><rb>割</rb><rt>わ</rt></ruby>りにてまんなかに<ruby><rb>置</rb><rt>お</rt></ruby>け"],
   ["<ruby><rb>茶入</rb><rt>ちゃいれ</rt></ruby><ruby><rb>又</rb><rt>また</rt></ruby><ruby><rb>茶筅</rb><rt>ちゃせん</rt></ruby>のかねをよくも<ruby><rb>知</rb><rt>し</rt></ruby>れ",
   "あとに<ruby><rb>残</rb><rt>のこ</rt></ruby>せる<ruby><rb>道具</rb><rt>どうぐ</rt></ruby><ruby><rb>目当</rb><rt>めあて</rt></ruby>に"],
   ["<ruby><rb>何</rb><rt>なに</rt></ruby>にても<ruby><rb>置</rb><rt>お</rt></ruby>き<ruby><rb>付</rb><rt>つ</rt></ruby>けか<ruby><rb>へ</rb><rt>え</rt></ruby>る<ruby><rb>手離</rb><rt>てばな</rt></ruby>れは",
   "<ruby><rb>恋</rb><rt>こい</rt></ruby>しき<ruby><rb>人</rb><rt>ひと</rt></ruby>にわかるると<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["<ruby><rb>余所</rb><rt>よそ</rt></ruby>などへ<ruby><rb>花</rb><rt>はな</rt></ruby>をおくらば<ruby><rb>其花</rb><rt>そのはな</rt></ruby>は",
   "<ruby><rb>開</rb><rt>ひら</rt></ruby>きすぎしはやらぬものなり"],
   ["<ruby><rb>水指</rb><rt>みずさし</rt></ruby>に<ruby><rb>手桶</rb><rt>ておけ</rt></ruby><ruby><rb>出</rb><rt>いだ</rt></ruby>さば<ruby><rb>手</rb><rt>て</rt></ruby>は<ruby><rb>横</rb><rt>よこ</rt></ruby>に",
   "<ruby><rb>前</rb><rt>まえ</rt></ruby>の<ruby><rb>蓋</rb><rt>ふた</rt></ruby>とりさきに<ruby><rb>重</rb><rt>かさ</rt></ruby>ねよ"],
   ["<ruby><rb>釣瓶</rb><rt>つるべ</rt></ruby>こそ<ruby><rb>手</rb><rt>て</rt></ruby>は<ruby><rb>竪</rb><rt>たて</rt></ruby>におけ<ruby><rb>蓋</rb><rt>ふた</rt></ruby>とらば",
   "<ruby><rb>釜</rb><rt>かま</rt></ruby>に<ruby><rb>近</rb><rt>ちか</rt></ruby>づく<ruby><rb>方</rb><rt>かた</rt></ruby>と<ruby><rb>知</rb><rt>し</rt></ruby>るべし"],
   ["<ruby><rb>小板</rb><rt>こいた</rt></ruby>にて<ruby><rb>濃茶</rb><rt>こいちゃ</rt></ruby>をたてば<ruby><rb>茶巾</rb><rt>ちゃきん</rt></ruby>をば",
   "<ruby><rb>小板</rb><rt>こいた</rt></ruby>の<ruby><rb>端</rb><rt>はし</rt></ruby>におくものぞかし"],
   ["<ruby><rb>掛物</rb><rt>かけもの</rt></ruby>の<ruby><rb>釘打</rb><rt>くぎう</rt></ruby>つならば<ruby><rb>大輪</rb><rt>おおわ</rt></ruby>より",
   "<ruby><rb>九分</rb><rt>くぶ</rt></ruby><ruby><rb>下</rb><rt>さ</rt></ruby>げて<ruby><rb>打</rb><rt>う</rt></ruby>て<ruby><rb>釘</rb><rt>くぎ</rt></ruby>も<ruby><rb>九分</rb><rt>くぶ</rt></ruby>なり"],
   ["<ruby><rb>喚鐘</rb><rt>かんしょう</rt></ruby>は<ruby><rb>大</rb><rt>だい</rt></ruby>と<ruby><rb>小</rb><rt>しょう</rt></ruby>とに<ruby><rb>中々</rb><rt>なかなか</rt></ruby>に",
   "<ruby><rb>大</rb><rt>だい</rt></ruby>と<ruby><rb>五</rb><rt>いつ</rt></ruby>つの<ruby><rb>数</rb><rt>かず</rt></ruby>をうつなり"],
   ["<ruby><rb>茶入</rb><rt>ちゃいれ</rt></ruby>より<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>を<ruby><rb>掬ふ</rb><rt>すくう</rt></ruby>には<ruby><rb>心得</rb><rt>こころえ</rt></ruby>て",
   "<ruby><rb>初中後</rb><rt>しょちゅうご</rt></ruby>すく<ruby><rb>へ</rb><rt>え</rt></ruby>それが<ruby><rb>秘事</rb><rt>ひじ</rt></ruby><ruby><rb>也</rb><rt>なり</rt></ruby>"],
   ["<ruby><rb>湯</rb><rt>ゆ</rt></ruby>を<ruby><rb>汲</rb><rt>く</rt></ruby>むは<ruby><rb>柄杓</rb><rt>ひしゃく</rt></ruby>に<ruby><rb>心</rb><rt>こころ</rt></ruby>つきの<ruby><rb>輪</rb><rt>わ</rt></ruby>の",
   "そこねぬ<ruby><rb>や</rb><rt>よ</rt></ruby>うに<ruby><rb>覚悟</rb><rt>かくご</rt></ruby>してくむ"],
   ["<ruby><rb>柄杓</rb><rt>ひしゃく</rt></ruby>にて<ruby><rb>湯</rb><rt>ゆ</rt></ruby>をくむ<ruby><rb>時</rb><rt>とき</rt></ruby>の<ruby><rb>習</rb><rt>ならい</rt></ruby>には",
   "<ruby><rb>三</rb><rt>みっ</rt></ruby>つの<ruby><rb>心得</rb><rt>こころえ</rt></ruby>あるものぞかし"],
   ["<ruby><rb>湯</rb><rt>ゆ</rt></ruby>を<ruby><rb>汲</rb><rt>く</rt></ruby>みて<ruby><rb>茶碗</rb><rt>ちゃわん</rt></ruby>に<ruby><rb>入</rb><rt>い</rt></ruby>るる<ruby><rb>其時</rb><rt>そのとき</rt></ruby>の",
   "<ruby><rb>柄杓</rb><rt>ひしゃく</rt></ruby>のねぢは<ruby><rb>肱</rb><rt>ひじ</rt></ruby>よりぞする"],
   ["<ruby><rb>柄杓</rb><rt>ひしゃく</rt></ruby>にて<ruby><rb>白湯</rb><rt>さゆ</rt></ruby>と<ruby><rb>水</rb><rt>みず</rt></ruby>とを<ruby><rb>汲</rb><rt>く</rt></ruby>むときは",
   "<ruby><rb>汲</rb><rt>く</rt></ruby>むと<ruby><rb>思は</rb><rt>おもわ</rt></ruby>じ<ruby><rb>持</rb><rt>も</rt></ruby>つと<ruby><rb>思は</rb><rt>おもわ</rt></ruby>じ"],
   ["<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>を<ruby><rb>振</rb><rt>ふ</rt></ruby>るは<ruby><rb>手先</rb><rt>てさき</rt></ruby>をふると<ruby><rb>思ふ</rb><rt>おもう</rt></ruby>なよ",
   "<ruby><rb>臂</rb><rt>ひじ</rt></ruby>よりふれよそれが<ruby><rb>秘事</rb><rt>ひじ</rt></ruby>なり"],
   ["<ruby><rb>床</rb><rt>とこ</rt></ruby>に<ruby><rb>又</rb><rt>また</rt></ruby><ruby><rb>和歌</rb><rt>わか</rt></ruby>の<ruby><rb>類</rb><rt>たぐい</rt></ruby>をば<ruby><rb>掛</rb><rt>かけ</rt></ruby>るなら",
   "<ruby><rb>外</rb><rt>そと</rt></ruby>に<ruby><rb>歌書</rb><rt>かしょ</rt></ruby>をば<ruby><rb>荘</rb><rt>かざ</rt></ruby>らぬと<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["<ruby><rb>外題</rb><rt>げだい</rt></ruby>あるものを<ruby><rb>余所</rb><rt>よそ</rt></ruby>にて<ruby><rb>見</rb><rt>み</rt></ruby>るときは",
   "<ruby><rb>先</rb><rt>ま</rt></ruby>ず<ruby><rb>外題</rb><rt>げだい</rt></ruby>をば<ruby><rb>見</rb><rt>み</rt></ruby>せて<ruby><rb>披</rb><rt>ひら</rt></ruby>けよ"],
   ["<ruby><rb>羽箒</rb><rt>はぼうき</rt></ruby>は<ruby><rb>風炉</rb><rt>ふろ</rt></ruby>に<ruby><rb>右羽</rb><rt>みぎは</rt></ruby>よ<ruby><rb>炉</rb><rt>ろ</rt></ruby>の<ruby><rb>時</rb><rt>とき</rt></ruby>は",
   "<ruby><rb>左羽</rb><rt>ひだりは</rt></ruby>をば<ruby><rb>使ふ</rb><rt>つかう</rt></ruby>とぞ<ruby><rb>知</rb><rt>し</rt></ruby>る"],
   ["<ruby><rb>名物</rb><rt>めいぶつ</rt></ruby>の<ruby><rb>茶碗</rb><rt>ちゃわん</rt></ruby><ruby><rb>出</rb><rt>い</rt></ruby>でたる<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>の<ruby><rb>湯</rb><rt>ゆ</rt></ruby>には",
   "<ruby><rb>少</rb><rt>すこ</rt></ruby>し<ruby><rb>心得</rb><rt>こころえ</rt></ruby>か<ruby><rb>は</rb><rt>わ</rt></ruby>るとぞ<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["<ruby><rb>暁</rb><rt>あかつき</rt></ruby>は<ruby><rb>数寄屋</rb><rt>すきや</rt></ruby>のうちも<ruby><rb>行灯</rb><rt>あんどん</rt></ruby>に",
   "<ruby><rb>夜会</rb><rt>やかい</rt></ruby>などには<ruby><rb>短檠</rb><rt>たんけい</rt></ruby>を<ruby><rb>置</rb><rt>お</rt></ruby>け"],
   ["<ruby><rb>燈火</rb><rt>ともしび</rt></ruby>に<ruby><rb>油</rb><rt>あぶら</rt></ruby>をつがば<ruby><rb>多</rb><rt>おお</rt></ruby>くつげ",
   "<ruby><rb>客</rb><rt>きゃく</rt></ruby>にあかざる<ruby><rb>心得</rb><rt>こころえ</rt></ruby>と<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["ともしびに<ruby><rb>陰</rb><rt>いん</rt></ruby>と<ruby><rb>陽</rb><rt>よう</rt></ruby>との<ruby><rb>二</rb><rt>ふた</rt></ruby>つあり",
   "あかつき<ruby><rb>陰</rb><rt>いん</rt></ruby>によ<ruby><rb>ひ</rb><rt>い</rt></ruby>は<ruby><rb>陽</rb><rt>よう</rt></ruby>なり"],
   ["いにし<ruby><rb>へ</rb><rt>え</rt></ruby>は<ruby><rb>夜会</rb><rt>やかい</rt></ruby>などには<ruby><rb>床</rb><rt>とこ</rt></ruby>の<ruby><rb>内</rb><rt>うち</rt></ruby>",
   "<ruby><rb>掛物</rb><rt>かけもの</rt></ruby><ruby><rb>花</rb><rt>はな</rt></ruby>はなしとこそきけ"],
   ["<ruby><rb>炉</rb><rt>ろ</rt></ruby>の<ruby><rb>内</rb><rt>うち</rt></ruby>は<ruby><rb>炭斗</rb><rt>すみとり</rt></ruby><ruby><rb>瓢</rb><rt>ふくべ</rt></ruby><ruby><rb>柄</rb><rt>え</rt></ruby>の<ruby><rb>火箸</rb><rt>ひばし</rt></ruby>",
   "<ruby><rb>陶器</rb><rt>とうき</rt></ruby><ruby><rb>香合</rb><rt>こうごう</rt></ruby>ねり<ruby><rb>香</rb><rt>こう</rt></ruby>としれ"],
   ["いにし<ruby><rb>へ</rb><rt>え</rt></ruby>は<ruby><rb>名物</rb><rt>めいぶつ</rt></ruby>などの<ruby><rb>香合</rb><rt>こうごう</rt></ruby>へ",
   "<ruby><rb>直</rb><rt>じか</rt></ruby>にたきもの<ruby><rb>入</rb><rt>い</rt></ruby>れぬとぞきく"],
   ["<ruby><rb>風炉</rb><rt>ふろ</rt></ruby>のとき<ruby><rb>炭</rb><rt>すみ</rt></ruby>は<ruby><rb>菜籠</rb><rt>なかご</rt></ruby>にかね<ruby><rb>火箸</rb><rt>ひばし</rt></ruby>",
   "ぬり<ruby><rb>香合</rb><rt>こうごう</rt></ruby>に<ruby><rb>白檀</rb><rt>びゃくだん</rt></ruby>をたけ"],
   ["<ruby><rb>蓋置</rb><rt>ふたおき</rt></ruby>に<ruby><rb>三</rb><rt>み</rt></ruby>つ<ruby><rb>足</rb><rt>あし</rt></ruby>あらば<ruby><rb>一</rb><rt>ひと</rt></ruby>つ<ruby><rb>足</rb><rt>あし</rt></ruby>",
   "ま<ruby><rb>へ</rb><rt>え</rt></ruby>につか<ruby><rb>ふ</rb><rt>う</rt></ruby>と<ruby><rb>心得</rb><rt>こころえ</rt></ruby>ておけ"],
   ["<ruby><rb>二畳台</rb><rt>にじょうだい</rt></ruby><ruby><rb>三畳台</rb><rt>さんじょうだい</rt></ruby>の<ruby><rb>水指</rb><rt>みずさし</rt></ruby>は",
   "ま<ruby><rb>づ</rb><rt>ず</rt></ruby><ruby><rb>九</rb><rt>ここの</rt></ruby>つ<ruby><rb>目</rb><rt>め</rt></ruby>に<ruby><rb>置</rb><rt>お</rt></ruby>くが<ruby><rb>法</rb><rt>ほう</rt></ruby>なり"],
   ["<ruby><rb>茶巾</rb><rt>ちゃきん</rt></ruby>をば<ruby><rb>長</rb><rt>なが</rt></ruby>み<ruby><rb>布幅</rb><rt>ぬのはば</rt></ruby><ruby><rb>一尺</rb><rt>いっしゃく</rt></ruby>に",
   "<ruby><rb>横</rb><rt>よこ</rt></ruby>は<ruby><rb>五寸</rb><rt>ごすん</rt></ruby>のかね<ruby><rb>尺</rb><rt>じゃく</rt></ruby>としれ"],
   ["<ruby><rb>帛紗</rb><rt>ふくさ</rt></ruby>をば<ruby><rb>竪</rb><rt>たて</rt></ruby>は<ruby><rb>九寸余</rb><rt>くすんよ</rt></ruby>よこ<ruby><rb>巾</rb><rt>はば</rt></ruby>は",
   "<ruby><rb>八寸八分</rb><rt>はっすんはちぶ</rt></ruby><ruby><rb>曲尺</rb><rt>かねじゃく</rt></ruby>にせよ"],
   ["うす<ruby><rb>板</rb><rt>いた</rt></ruby>は<ruby><rb>床框</rb><rt>とこがまち</rt></ruby>より<ruby><rb>十七目</rb><rt>じゅうしちめ</rt></ruby>",
   "また<ruby><rb>十八十九目</rb><rt>じゅうはちじゅうくめ</rt></ruby>におけ"],
   ["うす<ruby><rb>板</rb><rt>いた</rt></ruby>は<ruby><rb>床</rb><rt>とこ</rt></ruby>の<ruby><rb>大小</rb><rt>だいしょう</rt></ruby>また<ruby><rb>花</rb><rt>はな</rt></ruby>や",
   "<ruby><rb>花生</rb><rt>はないけ</rt></ruby>によりか<ruby><rb>は</rb><rt>わ</rt></ruby>るしなしな"],
   ["<ruby><rb>花入</rb><rt>はないれ</rt></ruby>の<ruby><rb>折釘</rb><rt>おれくぎ</rt></ruby>うつは<ruby><rb>地敷居</rb><rt>じしきい</rt></ruby>より",
   "<ruby><rb>三尺三寸</rb><rt>さんしゃくさんずん</rt></ruby><ruby><rb>五分余</rb><rt>ごぶあまり</rt></ruby>もあり"],
   ["<ruby><rb>花入</rb><rt>はないれ</rt></ruby>に<ruby><rb>大小</rb><rt>だいしょう</rt></ruby>あらば<ruby><rb>見合</rb><rt>みあい</rt></ruby>せよ",
   "かねをはずして<ruby><rb>打</rb><rt>う</rt></ruby>つがかねなり"],
   ["<ruby><rb>竹釘</rb><rt>たけくぎ</rt></ruby>は<ruby><rb>皮目</rb><rt>かわめ</rt></ruby>を<ruby><rb>上</rb><rt>うえ</rt></ruby>にうつぞかし",
   "<ruby><rb>皮目</rb><rt>かわめ</rt></ruby>を<ruby><rb>下</rb><rt>した</rt></ruby>になすこともあり"],
   ["<ruby><rb>三</rb><rt>み</rt></ruby>つ<ruby><rb>釘</rb><rt>くぎ</rt></ruby>は<ruby><rb>中</rb><rt>なか</rt></ruby>の<ruby><rb>釘</rb><rt>くぎ</rt></ruby>より<ruby><rb>両脇</rb><rt>りょうわき</rt></ruby>を",
   "<ruby><rb>二</rb><rt>ふた</rt></ruby>つわりなるまんなかに<ruby><rb>打</rb><rt>う</rt></ruby>て"],
   ["<ruby><rb>三幅</rb><rt>さんぷく</rt></ruby>の<ruby><rb>軸</rb><rt>じく</rt></ruby>をかけるは<ruby><rb>中</rb><rt>なか</rt></ruby>をかけ",
   "<ruby><rb>軸</rb><rt>じく</rt></ruby>さきをかけ<ruby><rb>次</rb><rt>つぎ</rt></ruby>は<ruby><rb>軸</rb><rt>じく</rt></ruby>もと"],
   ["<ruby><rb>掛物</rb><rt>かけもの</rt></ruby>をかけて<ruby><rb>置</rb><rt>お</rt></ruby>くには<ruby><rb>壁付</rb><rt>かべつけ</rt></ruby>を",
   "<ruby><rb>三四分</rb><rt>さんしぶ</rt></ruby>すかしおくことときく"],
   ["<ruby><rb>花見</rb><rt>はなみ</rt></ruby>よりか<ruby><rb>へ</rb><rt>え</rt></ruby>りの<ruby><rb>人</rb><rt>ひと</rt></ruby>に<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>の<ruby><rb>湯</rb><rt>ゆ</rt></ruby>せば",
   "<ruby><rb>花鳥</rb><rt>かちょう</rt></ruby>の<ruby><rb>絵</rb><rt>え</rt></ruby>も<ruby><rb>花</rb><rt>はな</rt></ruby>も<ruby><rb>置</rb><rt>おく</rt></ruby>まじ"],
   ["<ruby><rb>時</rb><rt>とき</rt></ruby>ならず<ruby><rb>客</rb><rt>きゃく</rt></ruby>の<ruby><rb>来</rb><rt>きた</rt></ruby>らば<ruby><rb>点前</rb><rt>てまえ</rt></ruby>をば",
   "<ruby><rb>心</rb><rt>こころ</rt></ruby>は<ruby><rb>草</rb><rt>そう</rt></ruby>にわざを<ruby><rb>慎</rb><rt>つつ</rt></ruby>しめ"],
   ["<ruby><rb>釣舟</rb><rt>つりぶね</rt></ruby>はくさりの<ruby><rb>長</rb><rt>なが</rt></ruby>さ<ruby><rb>床</rb><rt>とこ</rt></ruby>により",
   "<ruby><rb>出船</rb><rt>でぶね</rt></ruby><ruby><rb>入船</rb><rt>いりふね</rt></ruby><ruby><rb>浮舟</rb><rt>うきふね</rt></ruby>としれ"],
   ["<ruby><rb>壷</rb><rt>つぼ</rt></ruby>などを<ruby><rb>床</rb><rt>とこ</rt></ruby>にかざらん<ruby><rb>心</rb><rt>こころ</rt></ruby>あらば",
   "<ruby><rb>花</rb><rt>はな</rt></ruby>より<ruby><rb>上</rb><rt>うえ</rt></ruby>にかざりおくべし"],
   ["<ruby><rb>風炉</rb><rt>ふろ</rt></ruby><ruby><rb>濃茶</rb><rt>こいちゃ</rt></ruby><ruby><rb>必</rb><rt>かなら</rt></ruby>ず<ruby><rb>釜</rb><rt>かま</rt></ruby>に<ruby><rb>水</rb><rt>みず</rt></ruby>さすと",
   "<ruby><rb>一筋</rb><rt>ひとすじ</rt></ruby>に<ruby><rb>思ふ</rb><rt>おもう</rt></ruby><ruby><rb>人</rb><rt>ひと</rt></ruby>はあやまり"],
   ["<ruby><rb>右</rb><rt>みぎ</rt></ruby>の<ruby><rb>手</rb><rt>て</rt></ruby>を<ruby><rb>扱ふ</rb><rt>あつかう</rt></ruby><ruby><rb>時</rb><rt>とき</rt></ruby>はわが<ruby><rb>心</rb><rt>こころ</rt></ruby>",
   "<ruby><rb>左</rb><rt>ひだり</rt></ruby>の<ruby><rb>方</rb><rt>かた</rt></ruby>にありと<ruby><rb>知</rb><rt>し</rt></ruby>るべし"],
   ["<ruby><rb>一点前</rb><rt>ひとてまえ</rt></ruby><ruby><rb>点</rb><rt>たて</rt></ruby>るうちには<ruby><rb>善悪</rb><rt>ぜんあく</rt></ruby>と",
   "<ruby><rb>有無</rb><rt>うむ</rt></ruby>の<ruby><rb>心</rb><rt>こころ</rt></ruby>のわかちをも<ruby><rb>知</rb><rt>し</rt></ruby>る"],
   ["なまるとは<ruby><rb>手</rb><rt>て</rt></ruby>つづき<ruby><rb>早</rb><rt>はや</rt></ruby>く<ruby><rb>又</rb><rt>また</rt></ruby>おそく",
   "ところどころのそろ<ruby><rb>は</rb><rt>わ</rt></ruby>ぬをい<ruby><rb>ふ</rb><rt>う</rt></ruby>"],
   ["<ruby><rb>点前</rb><rt>てまえ</rt></ruby>には<ruby><rb>重</rb><rt>おも</rt></ruby>きを<ruby><rb>軽</rb><rt>かる</rt></ruby>く<ruby><rb>軽</rb><rt>かる</rt></ruby>きをば",
   "<ruby><rb>重</rb><rt>おも</rt></ruby>く<ruby><rb>扱ふ</rb><rt>あつかう</rt></ruby><ruby><rb>味ひ</rb><rt>あじわい</rt></ruby>を<ruby><rb>知</rb><rt>し</rt></ruby>れ"],
   ["<ruby><rb>盆石</rb><rt>ぼんせき</rt></ruby>をかざりし<ruby><rb>時</rb><rt>とき</rt></ruby>の<ruby><rb>掛物</rb><rt>かけもの</rt></ruby>に",
   "<ruby><rb>山水</rb><rt>さんすい</rt></ruby>などはさしあ<ruby><rb>ひ</rb><rt>い</rt></ruby>としれ"],
   ["<ruby><rb>板床</rb><rt>いたどこ</rt></ruby>に<ruby><rb>葉茶壷</rb><rt>はちゃつぼ</rt></ruby><ruby><rb>茶入</rb><rt>ちゃいれ</rt></ruby><ruby><rb>品々</rb><rt>しなじな</rt></ruby>を",
   "かざらでかざる<ruby><rb>法</rb><rt>ほう</rt></ruby>もありけり"],
   ["<ruby><rb>床</rb><rt>とこ</rt></ruby>の<ruby><rb>上</rb><rt>うえ</rt></ruby>に<ruby><rb>籠花入</rb><rt>かごはないれ</rt></ruby>を<ruby><rb>置</rb><rt>お</rt></ruby>く<ruby><rb>時</rb><rt>とき</rt></ruby>は",
   "<ruby><rb>薄板</rb><rt>うすいた</rt></ruby>などはしかぬものなり"],
   ["<ruby><rb>掛物</rb><rt>かけもの</rt></ruby>や<ruby><rb>花</rb><rt>はな</rt></ruby>を<ruby><rb>拝見</rb><rt>はいけん</rt></ruby>する<ruby><rb>時</rb><rt>とき</rt></ruby>は",
   "<ruby><rb>三尺</rb><rt>さんしゃく</rt></ruby>ほどは<ruby><rb>座</rb><rt>ざ</rt></ruby>をよけてみよ"],
   ["<ruby><rb>稽古</rb><rt>けいこ</rt></ruby>とは<ruby><rb>一</rb><rt>いち</rt></ruby>より<ruby><rb>習ひ</rb><rt>ならい</rt></ruby><ruby><rb>十</rb><rt>じゅう</rt></ruby>を<ruby><rb>知</rb><rt>し</rt></ruby>り",
   "<ruby><rb>十</rb><rt>じゅう</rt></ruby>よりか<ruby><rb>へ</rb><rt>え</rt></ruby>るもとのその<ruby><rb>一</rb><rt>いち</rt></ruby>"],
   ["<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>の<ruby><rb>湯</rb><rt>ゆ</rt></ruby>をば<ruby><rb>心</rb><rt>こころ</rt></ruby>に<ruby><rb>染</rb><rt>そ</rt></ruby>めて<ruby><rb>眼</rb><rt>め</rt></ruby>にかけず",
   "<ruby><rb>耳</rb><rt>みみ</rt></ruby>をひそめてきくこともなし"],
   ["<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>を<ruby><rb>点</rb><rt>た</rt></ruby>てば<ruby><rb>茶筅</rb><rt>ちゃせん</rt></ruby>に<ruby><rb>心</rb><rt>こころ</rt></ruby>よくつけて",
   "<ruby><rb>茶碗</rb><rt>ちゃわん</rt></ruby>の<ruby><rb>底</rb><rt>そこ</rt></ruby>へ<ruby><rb>強</rb><rt>つよ</rt></ruby>くあたるな"],
   ["<ruby><rb>目</rb><rt>め</rt></ruby>にも<ruby><rb>見</rb><rt>み</rt></ruby>よ<ruby><rb>耳</rb><rt>みみ</rt></ruby>にもふれよ<ruby><rb>香</rb><rt>こう</rt></ruby>を<ruby><rb>嗅</rb><rt>か</rt></ruby>ぎて",
   "ことを<ruby><rb>問ひ</rb><rt>とい</rt></ruby>つつよく<ruby><rb>合点</rb><rt>がてん</rt></ruby>せよ"],
   ["<ruby><rb>習ひ</rb><rt>ならい</rt></ruby>をばちりあくたぞと<ruby><rb>思へ</rb><rt>おもえ</rt></ruby>かし",
   "<ruby><rb>書物</rb><rt>しょもつ</rt></ruby>は<ruby><rb>反古</rb><rt>ほご</rt></ruby><ruby><rb>腰張</rb><rt>こしばり</rt></ruby>にせよ"],
   ["<ruby><rb>水</rb><rt>みず</rt></ruby>と<ruby><rb>湯</rb><rt>ゆ</rt></ruby>と<ruby><rb>茶巾</rb><rt>ちゃきん</rt></ruby><ruby><rb>茶筅</rb><rt>ちゃせん</rt></ruby>に<ruby><rb>箸楊枝</rb><rt>はしようじ</rt></ruby>",
   "<ruby><rb>柄杓</rb><rt>ひしゃく</rt></ruby>と<ruby><rb>心</rb><rt>こころ</rt></ruby>あたらしきよし"],
   ["<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>はさびて<ruby><rb>心</rb><rt>こころ</rt></ruby>はあつくもてなせよ",
   "<ruby><rb>道具</rb><rt>どうぐ</rt></ruby>はいつも<ruby><rb>有合</rb><rt>ありあい</rt></ruby>にせよ"],
   ["<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>の<ruby><rb>湯</rb><rt>ゆ</rt></ruby>には<ruby><rb>梅寒菊</rb><rt>ばいかんぎく</rt></ruby>に<ruby><rb>黄葉</rb><rt>きば</rt></ruby>み<ruby><rb>落</rb><rt>お</rt></ruby>ち",
   "<ruby><rb>青竹</rb><rt>あおたけ</rt></ruby><ruby><rb>枯木</rb><rt>かれき</rt></ruby>あかつきの<ruby><rb>霜</rb><rt>しも</rt></ruby>"],
   ["<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>の<ruby><rb>湯</rb><rt>ゆ</rt></ruby>とはただ<ruby><rb>湯</rb><rt>ゆ</rt></ruby>をわかし<ruby><rb>茶</rb><rt>ちゃ</rt></ruby>をたてて",
   "のむばかりなる<ruby><rb>事</rb><rt>こと</rt></ruby>と<ruby><rb>知</rb><rt>し</rt></ruby>るべし"],
   ["もとよりもなきいにし<ruby><rb>へ</rb><rt>え</rt></ruby>の<ruby><rb>法</rb><rt>ほう</rt></ruby>なれど",
   "<ruby><rb>今</rb><rt>いま</rt></ruby>ぞ<ruby><rb>極</rb><rt>きわま</rt></ruby>る<ruby><rb>本来</rb><rt>ほんらい</rt></ruby>の<ruby><rb>法</rb><rt>ほう</rt></ruby>"],
   ["<ruby><rb>規矩作法</rb><rt>きくさほう</rt></ruby><ruby><rb>守</rb><rt>まも</rt></ruby>りつくして<ruby><rb>破</rb><rt>やぶ</rt></ruby>るとも",
   "はなるるとても<ruby><rb>本</rb><rt>もと</rt></ruby>を<ruby><rb>忘</rb><rt>わす</rt></ruby>るな"]
];
let ele;
let order  = new Array(101);
let num = 100;
let modeFlag = 0;

// リスト表示
function writeList(){
  // data全部それっぽく書いてく
    document.getElementById("container").innerHTML = '<ul id="list"></ul>';
    for (let i=0; i<data.length; i++){
      document.getElementById("list").innerHTML += "<li>" + data[i][0] +"<br>　　　　" + data[i][1] + "</li><br>";
    }
  // ルビチェック
    Ruby();
  // 一番右までスクロール！
    window.scroll(15000, 0);
}


// クイズ表示&進める
function writeQuiz(){
  if (modeFlag == 1 && order[num] != -1){
    // 乱数生成（２個連続で同じ出題はしない）
    // while(p==q)p = Math.floor(Math.random() * data.length);
    // q = p;

    // 上の句書く
    document.getElementById("container").innerHTML += "<br><br>" + data[order[num]][0] +"<br>";
    Ruby();
    modeFlag = 2
  } else if(modeFlag == 2){
    // 下の句書く
    document.getElementById("container").innerHTML += data[order[num]][1] ;
    Ruby();
    num += 1;
    modeFlag = 1;
  }
}

// 一覧モードとクイズモード切り替え
function switchMode(){
  if (modeFlag == 0){
    modeFlag = 1;
    document.getElementById("container").innerHTML = "<button onclick='numSet();'>番<br>号<br>指<br>定</button><br>";
    ele.style.visibility = "";
    //順番初期化→シャッフル
    for(let i=0; i<order.length; i++){
      order[i] = -1;
    }
    for(let i=0; i<100; i++){
      let random;
      do
        random = Math.floor(Math.random() * 100);
      while(order[random] != "-1")
      order[random] = i;
    }
    order[100] = -1;
    num = 0;
    writeQuiz();
  }else{
    modeFlag = 0;
    ele.style.visibility = "hidden";
    writeList();
  }
}


// ルビを状態に合わせて表示
let rubyFlag = -1;
function Ruby(){
  let eles = document.getElementsByTagName("rt");
  if (rubyFlag == 1){
    for (let i=0; i<eles.length; i++){
      eles[i].style.visibility = "";
    }
  }else{
    for (let i=0; i<eles.length; i++){
      eles[i].style.visibility = "hidden";
    }
  }
}

// ルビ切り替え
function switchRuby(){
  rubyFlag *= -1;
  Ruby();
}


// body.onloadで動くやつ
function ready(){
  alert("利休道歌確認サイト\n＊スマホ縦向き推奨\n\n使い方：\n(> <) 漢字が読めなくて困った時\n(｀･ ･´) モードを切り替えたい時\n\\(・ω・) ランダムモードを進めたい時");
  writeList();
  Ruby();
  ele = document.getElementById("centerButton");
  ele.style.visibility = "hidden";
}
