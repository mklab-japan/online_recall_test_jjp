//刺激
//リスト
//A1
const listA1_learning = [
    '悪魔 - <span data-ruby ="あくにん">悪人</span>',
    '悪魔 - <span data-ruby ="みにく">醜</span>い',
    '悪魔 - <span data-ruby ="わる">悪</span>い',
];

const listA1_fragment = [
    '悪魔 - あく□ん',
    '悪魔 - みに□い',
    '悪魔 - わ□い',
];

const listA1_stemCue = [
    '悪魔 - あ＿＿?',
    '悪魔 - み＿＿?',
    '悪魔 - わ＿＿?',
];


//A2
const listA2_learning = [
    '借金 - <span data-ruby ="か">借</span>りる',
    '借金 - <span data-ruby ="さいむ">債務</span>',
    '借金 - <span data-ruby ="とうさん">倒産</span>',
];

const listA2_fragment = [
    '借金 - か□る',
    '借金 - さ□む',
    '借金 - とう□ん',
];

const listA2_stemCue = [
    '借金 - か＿＿?',
    '借金 - さ＿＿?',
    '借金 - と＿＿?',
];


//B1
const listB1_learning = [
    '悪魔 - <span data-ruby ="こわ">怖</span>い',
    '悪魔 - <span data-ruby ="おそ">恐</span>ろしい',
    '悪魔 - サタン',
];

const listB1_fragment = [
    '悪魔 - こ□い',
    '悪魔 - おそ□し□',
    '悪魔 - さ□ん',
];

const listB1_stemCue = [
    '悪魔 - こ＿＿?',
    '悪魔 - お＿＿?',
    '悪魔 - さ＿＿?',
];

//B2
const listB2_learning = [
    '借金 - <span data-ruby ="こうりが">高利貸</span>し',
    '借金 - <span data-ruby ="よに">夜逃</span>げ',
    '借金 - <span data-ruby ="へんさい">返済</span>',
];

const listB2_fragment = [
    '借金 - こう□が□',
    '借金 - よ□げ',
    '借金 - へん□い',
];

const listB2_stemCue = [
    '借金 - こ＿＿?',
    '借金 - よ＿＿?',
    '借金 - へ＿＿?',
];

const subjectID = Math.floor(Math.random() * 100000);
const set = subjectID % 4;

let learningNrpItemList;
let learningRpMinusItemList;
let rpItemList;
let testNrpItemList;
let testRpMinusItemList;



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
  
learningRpMinusItemList = jsPsych.randomization.factorial(learningRpMinusItemList, 1);
learningNrpItemList = jsPsych.randomization.factorial(learningNrpItemList, 1);

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