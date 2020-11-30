//デバッグ用
const displayTime = 1000;

//注視点
const fixation = {
    type: 'html-keyboard-response',
    stimulus: '<span style = "font-size:5vh;">+</span>',
    trial_duration: 0.4 * displayTime,
    choices: jsPsych.NO_KEYS
};


//studyPhase
const learningTrial = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('item'),
    trial_duration: 7 * displayTime,
    choices: jsPsych.NO_KEYS,
    data: {
        itemType: jsPsych.timelineVariable('itemType')
    },
    post_trial_gap: 0.4 * displayTime
}

const learningPhase = {
    timeline: [fixation, learningTrial],
    timeline_variables: learningItemList,
    data: {
        phase: 'Learning'
    }
}

//studyPhasePre
const learningPreTrial = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('item'),
    trial_duration: 7 * displayTime,
    choices: jsPsych.NO_KEYS,
    data: {
        itemType: jsPsych.timelineVariable('itemType')
    },
    post_trial_gap: 0.4 * displayTime
}

const learningPhasePre = {
    timeline: [fixation, learningPreTrial],
    timeline_variables: learningPreItemList,
    data: {
        phase: 'LearningPre'
    }
}

//retrivalPracticePhase
//制限時間
const rpTrialDuration = 10 * displayTime;

const rpTrial = {
    type: 'html-keyboard-hiragana',
    prompt: '<p>以下にあてはまる単語を<span style ="text-decoration: underline">考え</span>，入力してください。' + '<br>' + String(rpTrialDuration / 1000) + '秒経過すると自動的に次に進みます。</p>' +
        '<p>同じ問題には同じ回答でかまいません。</p>',
    stimulus: jsPsych.timelineVariable('item'),
    trial_duration: rpTrialDuration,
    data: {
        itemType: jsPsych.timelineVariable('itemType')
    },
    post_trial_gap: 0.4 * displayTime
}

const rpPhase = {
    timeline: [fixation, rpTrial],
    timeline_variables: rpItemList,
    data: {
        phase: 'RP'
    }
}

//retrivalPracticePhasePre
const rpPreTrial = {
    type: 'html-keyboard-hiragana',
    prompt: '<p>以下にあてはまる単語を<span style ="text-decoration: underline">考え</span>，入力してください。' + '<br>' + String(rpTrialDuration / 1000) + '秒経過すると自動的に次に進みます。</p>' +
        '<p>同じ問題には同じ回答でかまいません。</p>',
    stimulus: jsPsych.timelineVariable('item'),
    trial_duration: rpTrialDuration,
    data: {
        itemType: jsPsych.timelineVariable('itemType')
    },
    post_trial_gap: 0.4 * displayTime
}

const rpPhasePre = {
    timeline: [fixation, rpPreTrial],
    timeline_variables: rpPreItemList,
    data: {
        phase: 'RPPre'
    }
}

//testPhase
//制限時間
const testTrialDuration = 10 * displayTime;

const testTrial = {
    type: 'html-keyboard-hiragana',
    prompt: '<p>以下にあてはまる単語を<span style ="text-decoration: underline">思い出し</span>，入力してください。' + '<br>' + String(testTrialDuration / 1000) + '秒経過すると自動的に次に進みます。</p>',
    stimulus: jsPsych.timelineVariable('item'),
    trial_duration: testTrialDuration,
    data: {
        itemType: jsPsych.timelineVariable('itemType')
    },
    post_trial_gap: 0.4 * displayTime
}

const testPhase = {
    timeline: [fixation, testTrial],
    timeline_variables: testItemList,
    data: {
        phase: 'CuedRecall'
    }
}

//testPhasePre
const testPreTrial = {
    type: 'html-keyboard-hiragana',
    prompt: '<p>以下にあてはまる単語を<span style ="text-decoration: underline">思い出し</span>，入力してください。' + '<br>' + String(testTrialDuration / 1000) + '秒経過すると自動的に次に進みます。</p>',
    stimulus: jsPsych.timelineVariable('item'),
    trial_duration: testTrialDuration,
    data: {
        itemType: jsPsych.timelineVariable('itemType')
    },
    post_trial_gap: 0.4 * displayTime
}

const testPhasePre = {
    timeline: [fixation, testPreTrial],
    timeline_variables: testPreItemList,
    data: {
        phase: 'CuedRecallPre'
    }
}

//教示や実験準備画面
const showTextReadyPracticeLearning = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>それではこれから練習を開始します。</p>' +
        '<p>これから表示される右側の単語を覚えてください。</p>' +
        '<p>準備ができたら，スペースキーを押してください。練習を開始します。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

const showTextReadyTaskLearning = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>続いて，本番を開始します。</p>' +
        '<p>これから表示される右側の単語を覚えてください。</p>' +
        '<p>準備ができたら，スペースキーを押してください。本番を開始します。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

const showTextReadyPracticeRP = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>それではこれから練習を開始します。</p>' +
        '<p>ヒントを元に右側の単語を<span style="text-decoration: underline">考えてください。</span></p>' +
        '<p>準備ができたら，スペースキーを押してください。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

const showTextReadyTaskRP = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>それではこれから本番を開始します。</p>' +
        '<p>ヒントを元に右側の単語を<span style="text-decoration: underline">考えてください。</span></p>' +
        '<p>準備ができたら，スペースキーを押してください。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

const showTextReadyPracticeTest = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>それではこれから練習を開始します。</p>' +
        '<p>ヒントを元に右側の単語を<span style="text-decoration: underline">思い出してください。</span></p>' +
        '<p>準備ができたら，スペースキーを押してください。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

const showTextReadyTaskTest = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>それではこれから本番を開始します。</p>' +
        '<p>ヒントを元に右側の単語を<span style="text-decoration: underline">思い出してください。</span></p>' +
        '<p>準備ができたら，スペースキーを押してください。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

const showTextReadyTaskRating = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh"><p>これから本番を開始します。</p>' +
        '<p>これから表示される単語を評定してください。</p>' +
        '<p>準備ができたら，スペースキーを押してください。本番を開始します。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 500,
    data: {
        trialType: 'inst'
    }
};

//教示文
const instructionText_1 = [
    '<div style = "font-size: 2.25vh; text-align: left; line-height: 1.3; position: absolute;top: 0px"><p>これから課題を行っていただきます。' +
    '<br>これからの課題では単語を覚えていただき，その後，記憶テストを行っていただきます。' +
    '<br>これから以下のような単語ペアが7秒間ずつ表示されます。' +
    '<br>左側の単語と関連づけながら，<span style = "text-decoration: underline;">右側の単語を覚えてください。</span>' +
    '<br><br>はじめに練習を行った後に本番を行っていただきます。</div>'
];
const instruction_1 = {
    type: 'image-button-response',
    stimulus: 'inst/inst.001.png',
    stimulus_height: 60,
    maintain_aspect_ratio: true,
    prompt: instructionText_1,
    choices: ['次へ'],
    button_html: '<button class = "jspsych-btn", style = "position: absolute; bottom: 4vh; ">%choice%</button>',
    data: {
        trialType: 'inst'
    }
};

const instructionText_2 = [
    '<div style = "font-size: 2.25vh; text-align: left; line-height: 1.3; position: absolute;top: 0px"><p>続いて，クイズに取り組んでいただきます。' +
    '<br>これから以下のようなヒントが10秒間ずつ表示されます。' +
    '<br>ヒントを元に右側の単語を考えて，キーボードで入力してください。' +
    '<br>同じ問題には同じ回答で構いません。<br><br>＊先ほど覚えていただいた単語を思い出す課題ではありません。</div>'
];
const instruction_2 = {
    type: 'image-button-response',
    stimulus: 'inst/inst.002.png',
    stimulus_height: 60,
    maintain_aspect_ratio: true,
    prompt: instructionText_2,
    choices: ['次へ'],
    button_html: '<button class = "jspsych-btn", style = "position: absolute; bottom: 4vh; ">%choice%</button>',
    data: {
        trialType: 'inst'
    }
};

const instructionText_3 = [
    '<div style = "font-size: 2.25vh; text-align: left; line-height: 1.3; position: absolute;top: 0px"><p>次に記憶テストを行います。' +
    '<br>これから以下のようなヒントが10秒間ずつ表示されます。' +
    '<br>ヒントを元に，最初に覚えた右側の単語を思い出し，キーボードで入力してください。' +
    '<br><br>＊先ほど覚えていただいた単語を思い出す課題です。</div>'
];
const instruction_3 = {
    type: 'image-button-response',
    stimulus: 'inst/inst.003.png',
    stimulus_height: 60,
    maintain_aspect_ratio: true,
    prompt: instructionText_3,
    choices: ['次へ'],
    button_html: '<button class = "jspsych-btn", style = "position: absolute; bottom: 4vh; ">%choice%</button>',
    data: {
        trialType: 'inst'
    }
};

//スマートフォンでの終了画面
const smartPhonePage = {
    type: 'html-keyboard-response',
    stimulus: '申し訳ありません。スマートフォンでは実施できません。パソコンにて実施してください。',
    trial_duration: 5000,
    choices: jsPsych.NO_KEYS,
    on_finish: function (data) {
        jsPsych.endExperiment('');
    }
}

//構成
let timeline = [];

//OSを取得（platform.jsを利用）
const osName = platform.os.toString().toLowerCase();

//スマートフォン（adnroidまたはiOSの場合）
if (osName.indexOf('android') !== -1 | osName.indexOf('ios') !== -1) {
    timeline.push(smartPhonePage);
    jsPsych.init({
        timeline: timeline
    })
}
//スマートフォン以外
else {
    timeline.push({
        type: 'fullscreen',
        fullscreen_mode: true
    });
    timeline.push(instruction_1);
    timeline.push(showTextReadyPracticeLearning);
    timeline.push(learningPhasePre);
    timeline.push(showTextReadyTaskLearning);
    timeline.push(learningPhase);
    timeline.push(instruction_2);
    timeline.push(showTextReadyPracticeRP);
    timeline.push(rpPhasePre);
    timeline.push(showTextReadyTaskRP);
    timeline.push(rpPhase);
    timeline.push(instruction_3);
    timeline.push(showTextReadyPracticeTest);
    timeline.push(testPhasePre);
    timeline.push(showTextReadyTaskTest);
    timeline.push(testPhase);
    timeline.push({
        type: 'fullscreen',
        fullscreen_mode: false
    });

    jsPsych.init({
        timeline: timeline,
        on_finish: function () {
            jsPsych.data.get().localSave('csv', 'data.csv');
        }
    });
}