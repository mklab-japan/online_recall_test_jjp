//刺激
//リスト
//A1
const listA1_learning = [
    '自殺 - <span data-ruby ="くび">首</span>つり',
    '自殺 - <span data-ruby ="しんじゅう">心中</span>',
    '自殺 - <span data-ruby ="いしょ">遺書</span>',
    '悪魔 - <span data-ruby ="あくにん">悪人</span>',
    '悪魔 - <span data-ruby ="みにく">醜</span>い',
    '悪魔 - <span data-ruby ="わる">悪</span>い',
    '圧迫 - せまる',
    '圧迫 - つぶれる',
    '圧迫 - <span data-ruby ="あつりょく">圧力</span>'
];

const listA1_fragment = [
    '自殺 - くび□り',
    '自殺 - し□じゅ□',
    '自殺 - い□ょ',
    '悪魔 - あく□ん',
    '悪魔 - みに□い',
    '悪魔 - わ□い',
    '圧迫 - せ□る',
    '圧迫 - つぶ□る',
    '圧迫 - あ□りょ□'
];

const listA1_stemCue = [
    '自殺 - く＿＿?',
    '自殺 - し＿＿?',
    '自殺 - い＿＿?',
    '悪魔 - あ＿＿?',
    '悪魔 - み＿＿?',
    '悪魔 - わ＿＿?',
    '圧迫 - せ＿＿?',
    '圧迫 - つ＿＿?',
    '圧迫 - あ＿＿?'
];


//A2
const listA2_learning = [
    '苦痛 - <span data-ruby ="ふくつう">腹痛</span>',
    '苦痛 - <span data-ruby ="た">耐</span>える',
    '苦痛 - <span data-ruby ="げきつう">激痛</span>',
    '借金 - <span data-ruby ="か">借</span>りる',
    '借金 - <span data-ruby ="さいむ">債務</span>',
    '借金 - <span data-ruby ="とうさん">倒産</span>',
    '戦争 - <span data-ruby ="せんしゃ">戦車</span>',
    '戦争 - <span data-ruby ="かくへいき">核兵器</span>',
    '戦争 - <span data-ruby ="じゅう">銃</span>'
];

const listA2_fragment = [
    '苦痛 - ふく□う',
    '苦痛 - たえ□',
    '苦痛 - げき□う',
    '借金 - か□る',
    '借金 - さ□む',
    '借金 - とう□ん',
    '戦争 - せ□しゃ',
    '戦争 - かく□い□',
    '戦争 - じゅ□'
];

const listA2_stemCue = [
    '苦痛 - ふ＿＿?',
    '苦痛 - た＿＿?',
    '苦痛 - げ＿＿?',
    '借金 - か＿＿?',
    '借金 - さ＿＿?',
    '借金 - と＿＿?',
    '戦争 - せ＿＿?',
    '戦争 - か＿＿?',
    '戦争 - じ＿＿?'
];


//B1
const listB1_learning = [
    '自殺 - <span data-ruby ="さつじん">殺人</span>',
    '自殺 - <span data-ruby ="じがい">自害</span>',
    '自殺 - <span data-ruby ="みすい">未遂</span>',
    '悪魔 - <span data-ruby ="こわ">怖</span>い',
    '悪魔 - <span data-ruby ="おそ">恐</span>ろしい',
    '悪魔 - サタン',
    '圧迫 - <span data-ruby ="おも">重</span>い',
    '圧迫 - <span data-ruby ="いきぐる">息苦</span>しい',
    '圧迫 - <span data-ruby ="きょうせい">強制</span>'
];

const listB1_fragment = [
    '自殺 - さつ□ん',
    '自殺 - じが□',
    '自殺 - み□い',
    '悪魔 - こ□い',
    '悪魔 - おそ□し□',
    '悪魔 - さ□ん',
    '圧迫 - お□い',
    '圧迫 - い□ぐるし□',
    '圧迫 - きょ□せ□'
];

const listB1_stemCue = [
    '自殺 - さ＿＿?',
    '自殺 - じ＿＿?',
    '自殺 - み＿＿?',
    '悪魔 - こ＿＿?',
    '悪魔 - お＿＿?',
    '悪魔 - さ＿＿?',
    '圧迫 - お＿＿?',
    '圧迫 - い＿＿?',
    '圧迫 - き＿＿?'
];

//B2
const listB2_learning = [
    '苦痛 - <span data-ruby ="びょうき">病気</span>',
    '苦痛 - けが',
    '苦痛 - <span data-ruby ="なや">悩</span>み',
    '借金 - <span data-ruby ="こうりが">高利貸</span>し',
    '借金 - <span data-ruby ="よに">夜逃</span>げ',
    '借金 - <span data-ruby ="へんさい">返済</span>',
    '戦争 - <span data-ruby ="あらそ">争</span>い',
    '戦争 - <span data-ruby ="ばくだん">爆弾</span>',
    '戦争 - <span data-ruby ="ほうき">放棄</span>'
];

const listB2_fragment = [
    '苦痛 - びょ□き',
    '苦痛 - け□',
    '苦痛 - な□み',
    '借金 - こう□が□',
    '借金 - よ□げ',
    '借金 - へん□い',
    '戦争 - あら□い',
    '戦争 - ばく□ん',
    '戦争 - ほ□き'
];

const listB2_stemCue = [
    '苦痛 - び＿＿?',
    '苦痛 - け＿＿?',
    '苦痛 - な＿＿?',
    '借金 - こ＿＿?',
    '借金 - よ＿＿?',
    '借金 - へ＿＿?',
    '戦争 - あ＿＿?',
    '戦争 - ば＿＿?',
    '戦争 - ほ＿＿?'
];

const subjectID = Math.floor(Math.random() * 100000);
const set = subjectID % 4;

let learningNrpItemList;
let learningRpMinusItemList;
let rpItemList;
let testNrpItemList;
let testRpMinusItemList;

switch (set) {
    case 0:
        //学習
        learningNrpItemList = {
            item: listA1_learning,
            itemType: ['Learning_Nrp']
        }

        learningRpMinusItemList = {
            item: listA2_learning,
            itemType: ['Learning_RpMinus']
        }

        //検索練習
        rpItemList = {
            item: listB2_fragment,
            itemType: ['RP_RpPlus']
        }

        //テスト
        testNrpItemList = {
            item: listA1_stemCue,
            itemType: ['Test_Nrp']
        }


        testRpMinusItemList = {
            item: listA2_stemCue,
            itemType: ['Test_RpMinus']
        }
        break;

    case 1:
        //学習
        learningNrpItemList = {
            item: listA2_learning,
            itemType: ['Learning_Nrp']
        }

        learningRpMinusItemList = {
            item: listA1_learning,
            itemType: ['Learning_RpMinus']
        }

        //検索練習
        rpItemList = {
            item: listB1_fragment,
            itemType: ['RP_RpPlus']
        }

        //テスト
        testNrpItemList = {
            item: listA2_stemCue,
            itemType: ['Test_Nrp']
        }


        testRpMinusItemList = {
            item: listA1_stemCue,
            itemType: ['Test_RpMinus']
        }
        break;

    case 2:
        //学習
        learningNrpItemList = {
            item: listB1_learning,
            itemType: ['Learning_Nrp']
        }

        learningRpMinusItemList = {
            item: listB2_learning,
            itemType: ['Learning_RpMinus']
        }

        //検索練習
        rpItemList = {
            item: listA2_fragment,
            itemType: ['RP_RpPlus']
        }

        //テスト
        testNrpItemList = {
            item: listB1_stemCue,
            itemType: ['Test_Nrp']
        }


        testRpMinusItemList = {
            item: listB2_stemCue,
            itemType: ['Test_RpMinus']
        }
        break;

    case 3:
        //学習
        learningNrpItemList = {
            item: listB2_learning,
            itemType: ['Learning_Nrp']
        }

        learningRpMinusItemList = {
            item: listB1_learning,
            itemType: ['Learning_RpMinus']
        }

        //検索練習
        rpItemList = {
            item: listA1_fragment,
            itemType: ['RP_RpPlus']
        }

        //テスト
        testNrpItemList = {
            item: listB2_stemCue,
            itemType: ['Test_Nrp']
        }


        testRpMinusItemList = {
            item: listB1_stemCue,
            itemType: ['Test_RpMinus']
        }
        break;

}

learningRpMinusItemList = jsPsych.randomization.factorial(learningRpMinusItemList, 1);
learningNrpItemList = jsPsych.randomization.factorial(learningNrpItemList, 1);

let ratingNrpItemList = [];

for (i in learningNrpItemList) {
    ratingNrpItemList[i] = {
        item: learningNrpItemList[i]["item"].substr(5),
        itemType: 'Rating_Nrp'
    }
}

let ratingRpMinusItemList = [];

for (i in learningRpMinusItemList) {
    ratingRpMinusItemList[i] = {
        item: learningRpMinusItemList[i]["item"].substr(5),
        itemType: 'Rating_RpMinus'
    }
}

ratingItemList = ratingNrpItemList.concat(ratingRpMinusItemList);
ratingItemList = jsPsych.randomization.shuffle(ratingItemList);

let learningItemList = learningNrpItemList.concat(learningRpMinusItemList);
learningItemList = jsPsych.randomization.shuffle(learningItemList);

let temp1_rpItemList = jsPsych.randomization.factorial(rpItemList, 1);
let temp2_rpItemList = jsPsych.randomization.factorial(rpItemList, 1);
let temp3_rpItemList = jsPsych.randomization.factorial(rpItemList, 1);

temp1_rpItemList = temp1_rpItemList.concat(temp2_rpItemList);
temp1_rpItemList = temp1_rpItemList.concat(temp3_rpItemList);
rpItemList = temp1_rpItemList;

testRpMinusItemList = jsPsych.randomization.factorial(testRpMinusItemList, 1);
testNrpItemList = jsPsych.randomization.factorial(testNrpItemList, 1);

let testItemList = testNrpItemList.concat(testRpMinusItemList);
testItemList = jsPsych.randomization.shuffle(testItemList);

//フィラー
let fillerItemList = [
    '命令 - <span data-ruby ="ふくじゅう">服従</span>',
    '命令 - <span data-ruby ="したが">従</span>う',
    '命令 - <span data-ruby ="い">言</span>いつけ',
    '大臣 - <span data-ruby ="おしょく">汚職</span>',
    '大臣 - <span data-ruby ="うそ">嘘</span>つき',
    '大臣 - <span data-ruby ="せいじか">政治家</span>'
];

fillerItemList = jsPsych.randomization.shuffle(fillerItemList);

let fillerFirstItemList = [];
let fillerSecondItemList = [];

for (i = 0; i < 3; i++) {
    fillerFirstItemList[i] = fillerItemList[i];
    fillerSecondItemList[i] = fillerItemList[i + 3];
}

fillerFirstItemList = {
    item: fillerFirstItemList,
    itemType: ['Learning_FillerFirstItem']
}
fillerSecondItemList = {
    item: fillerSecondItemList,
    itemType: ['Learning_FillerSecondItem']
}

fillerFirstItemList = jsPsych.randomization.factorial(fillerFirstItemList, 1)
fillerSecondItemList = jsPsych.randomization.factorial(fillerSecondItemList, 1)

//練習
let learningPreItemList = {
    item: ['選挙 - <span data-ruby ="ふせい">不正</span>', '選挙 - うるさい'],
    itemType: ['Learning_PreItem']
}

learningPreItemList = jsPsych.randomization.factorial(learningPreItemList, 1);
learningPreItemList = jsPsych.randomization.shuffle(learningPreItemList);

let rpPreItemList = {
    item: ['選挙 - ら□せん', '選挙 - い□ん'],
    itemType: ['RP_PreItem']
}

rpPreItemList = jsPsych.randomization.factorial(rpPreItemList, 1);
rpPreItemList = jsPsych.randomization.shuffle(rpPreItemList);

let testPreItemList = {
    item: ['選挙 - ふ□い', '選挙 - う□さい'],
    itemType: ['Test_PreItem']
}

testPreItemList = jsPsych.randomization.factorial(testPreItemList, 1);
testPreItemList = jsPsych.randomization.shuffle(testPreItemList);