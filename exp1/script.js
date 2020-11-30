// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "false-memory",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "false memory",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
let participantID;

//JATOS以外の場合は参加者番号をランダム生成する
if (typeof jatos == 'undefined') {
  participantID = this.random.range(10000, 100000);
}
//JATOS利用時は参加者番号にJATOSのWorker IDを置き換える
else{
  participantID = await new Promise((resolve) => {
    jatos.onLoad(() => resolve(jatos.workerId))
  })
}

//作成した(または読み込んだ)参加者番号をlab.jsに読み込む
this.options.templateParameters.push({participantID: participantID})
}
      },
      "title": "exp",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実施します。準備ができたら，下のボタンを押してください。",
          "hint": "\u003Cbutton\u003Eフルスクリーンを許可する\u003C\u002Fbutton\u003E",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "expFlow",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "input",
                "label": "年齢",
                "attributes": {
                  "type": "number",
                  "min": "18",
                  "max": "99"
                },
                "help": "年齢を半角数字で入力してください",
                "name": "age"
              },
              {
                "required": true,
                "type": "input",
                "label": "性別",
                "help": "性別を入力してください",
                "name": "sex"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Demographic"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "実験にご参加ありがとうございます。",
                "content": "本実験では，みなさんに様々に単語を覚えていただき，その後，覚えた単語を思い出していただきます。下記のような「単語を覚える」→「計算課題」→「記憶テスト」という流れを1ブロックとし，全部で5ブロックを行っていただきます。"
              },
              {
                "required": true,
                "type": "image",
                "width": "",
                "height": "",
                "src": "${ this.files[\"inst.001.png\"] }",
                "name": ""
              },
              {
                "required": true,
                "type": "text",
                "content": "説明をよく読んでいただいた方は「次へ」を押して，実験を開始してください。"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {
              "inst.001.png": "embedded\u002F3c3debfd0f862e2cd8b74bd5429a56760959056bfb6ba3c435ae0e1cc2442603.png"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "instruction"
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "listno": "0"
              },
              {
                "listno": "1"
              },
              {
                "listno": "2"
              },
              {
                "listno": "3"
              },
              {
                "listno": "4"
              }
            ],
            "sample": {
              "mode": "draw-shuffle"
            },
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "blocks",
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "\\",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "これから15単語が各単語1秒ずつ表示されます。単語を覚えてください。後ほど，記憶テストを行いますので，できるだけ努力して覚えてください！",
                      "title": "これから学習段階をはじめます"
                    },
                    {
                      "required": true,
                      "type": "text",
                      "content": "準備ができたら「次へ」を押してください。単語学習を開始します。"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "learningInst",
                  "timeout": "10000"
                },
                {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 199.49,
                      "height": 54.24,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "tomato",
                      "text": "START！",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "48",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "start",
                  "timeout": "1000"
                },
                {
                  "type": "lab.flow.Loop",
                  "templateParameters": [],
                  "sample": {
                    "mode": "draw-shuffle"
                  },
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
const list = [];

list[0] = [
    '候補者',
    '投票',
    '落選',
    '立候補',
    '演説',
    '当選',
    '参議院',
    '再選',
    'うるさい',
    'ポスター',
    '選ぶ',
    '不正',
    '違反',
    '買収',
    '車'
]

list[1] = [
    '時間',
    '時刻',
    '目覚まし',
    '時',
    '秒針',
    '刻む',
    '腕',
    '針',
    'スイス',
    '正確',
    '便利',
    'バンド',
    '柱',
    '動く',
    '音'
]

list[2] = [
    'ポイント',
    'チェック',
    '肝心',
    '重点',
    '文化財',
    '大事',
    '試験',
    '大切',
    '学問',
    '書類',
    '必要',
    '主要',
    '問題',
    '事項',
    '勉強'
]

list[3] = [
    'ワクチン',
    '接種',
    '注射',
    'うがい',
    'インフルエンザ',
    '防ぐ',
    '伝染病',
    '風邪',
    '虫歯',
    '結核',
    '防止',
    '防災',
    '防除',
    '治療',
    '検査'
]

list[4]  = [
    'おじぎ',
    'わきまえる',
    '作法',
    '目上',
    '行儀',
    '丁寧',
    '礼',
    '茶道',
    '儀礼',
    '道徳',
    '不作法',
    '守る',
    '正しさ',
    '礼節',
    '折り目'
]

let assignedList = this.parameters.listno;

for(i = 0; i < 15; i++)
{
    this.options.templateParameters.push({listItem: list[assignedList][i]});
}

this.options.sample.mode = 'sequential';

}
                  },
                  "title": "learningBlock",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "learningTrial",
                    "content": [
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -2,
                            "angle": 0,
                            "width": 23.1,
                            "height": 36.16,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "+",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "fixation",
                        "timeout": "500"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 424.51,
                            "height": 36.16,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "${this.parameters.listItem}",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "32",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "listItem",
                        "timeout": "1000"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "blank",
                        "timeout": "500"
                      }
                    ]
                  }
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "mathPhase",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "これから計算課題に取り組んでいただきます。画面表示された計算式が正しいかどうかを判断し，ボタンを押して回答してください。10秒経つと自動的に開始します。"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mathInst",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 199.49,
                          "height": 54.24,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "tomato",
                          "text": "START！",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "48",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "start",
                      "timeout": "1000"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "correctResponse": false
                        },
                        {
                          "correctResponse": true
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle",
                        "n": "100"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "mathBlock",
                      "timeout": "30000",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "mathTrial",
                        "content": [
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "circle",
                                "left": -225,
                                "top": 200,
                                "angle": 0,
                                "width": 178.01,
                                "height": 178.01,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "skyblue"
                              },
                              {
                                "type": "aoi",
                                "left": -225,
                                "top": 200,
                                "angle": 0,
                                "width": 180.86,
                                "height": 180.78,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "rgba(0, 0, 0, 0.2)",
                                "label": "falseBtn"
                              },
                              {
                                "type": "circle",
                                "left": 225,
                                "top": 200,
                                "angle": 0,
                                "width": 178.01,
                                "height": 178.01,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "gold"
                              },
                              {
                                "type": "i-text",
                                "left": 225,
                                "top": 200,
                                "angle": 0,
                                "width": 126,
                                "height": 47.46,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#ffffff",
                                "text": "正しい",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "42",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "aoi",
                                "left": 225,
                                "top": 200.25,
                                "angle": 0,
                                "width": 179.29,
                                "height": 175.98,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "rgba(0, 0, 0, 0.2)",
                                "label": "trueBtn"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": 0,
                                "angle": 0,
                                "width": 641.14,
                                "height": 54.24,
                                "stroke": "",
                                "strokeWidth": 0,
                                "fill": "black",
                                "text": "${this.parameters.mathText }",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "48",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -150,
                                "angle": 0,
                                "width": 300,
                                "height": 48.82,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#000000",
                                "text": "計算結果が正しいかを判断し，\nボタンを押して回答してください",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "20",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": -225,
                                "top": 200,
                                "angle": 0,
                                "width": 84,
                                "height": 47.46,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#ffffff",
                                "text": "誤り",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "42",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              }
                            ],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {
                              "click @falseBtn": "false",
                              "click @trueBtn": "true"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
let mathArray = [];
let mathAnswer = 0;

//1〜9の範囲からランダムに3つの数字を生成
//合計をmathAnswerに入れておく
for (i = 0; i < 3; i++)
{
  mathArray[i] = Math.floor(Math.random()*10) + 1
  mathAnswer += mathArray[i]
}

//誤った回答を出す場合は乱数を答えに加える
if(this.parameters.correctResponse == false)
{ 
  mathAnswer　+= this.random.choice([-2,-1,1,2])
}

//数式をテキストとしてまとめる
const mathText = String(mathArray[0]) + ' + ' + String(mathArray[1]) + ' + ' + String(mathArray[2]) + ' = ' + String(mathAnswer) + ' ?';
this.parameters.mathText = mathText;
}
                            },
                            "title": "math",
                            "correctResponse": "${this.parameters.correctResponse}"
                          },
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": 0,
                                "angle": 0,
                                "width": 738.36,
                                "height": 67.8,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "tomato",
                                "text": "${state.correct? '○' : '×'}",
                                "fontStyle": "normal",
                                "fontWeight": "bold",
                                "fontSize": "60",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              }
                            ],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "feedback",
                            "timeout": "500",
                            "tardy": true
                          },
                          {
                            "type": "lab.canvas.Screen",
                            "content": [],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "blank",
                            "timeout": "500"
                          }
                        ]
                      }
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "これから記憶テストに取り組んでいただきます。先ほど覚えた単語を思い出し，入力欄にキーボードでひらがなで入力してください。10秒経つと自動的に開始します。"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "testInst",
                      "timeout": "10000"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "trial": "textInput",
                          "": ""
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle",
                        "n": "50"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {
                        "convertType": "hiragana",
                        "phaseDuration": "120000",
                        "trialDuration": "Never",
                        "prompt": "キーボードを押すと文字が入力されます。 回答の入力を終えたら，「Enter」を押すか，「次ヘ」ボタンを押してください。 新しい入力欄が表示されます。",
                        "showButton": true,
                        "enterEndsTrial": true
                      },
                      "messageHandlers": {},
                      "title": "testPhase",
                      "timeout": "${this.parameters.phaseDuration}",
                      "notes": "半角入力字にひらがなまたはカタカナを画面に表示するテンプレートです。\n\n・convertType：入力された文字の変換先の指定\n　　hiragana→ひらがな入力\n   　 katakana→カタカナ入力\n・phaseDuration：文字入力段階の制限時間\n・trialDuration：個々の試行の制限時間\n・showButton：次へのボタン表示するかどうか*\n・prompt: 教示**\n\n*「次へ」ボタンを表示させる場合は，制限時間まで新しい入力が可能\n**手がかり再生などのpromptを変化させたい場合は「template」のチェックを外し,Templateパラメータのpromptを削除し，contentにpromptという名前で変数を追加したり，不要なパラメータを削除してください。\n\ne.g.30秒の自由再生\nphaseDuration = 30000\nshowButton = true\ntrialDuration = Never\n\ne.g. 6試行で各試行5秒の制限時間の手がかり再生（手がかりは別途parametersとして設定する必要あり。）\nphaseDuration = 30000\nshowButton = false\ntrialDuration = 5000\n\n*****************************************\nJapanseTextInput.json\nCopyright(c) 2020 Masanori Kobayashi\nReleased under the MIT license\n\nInclude WanaKana.js \nhttps:\u002F\u002Fwanakana.com\u002F\nCopyright (c) 2013 WaniKani Community Github\nReleased under the MIT license\n*****************************************",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "先ほど覚えた単語を思い出し，ひらがなで入力してください（制限時間：120秒）。",
                            "content": "${this.parameters.prompt}"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv class=\"w-m alert content-horizontal-center\"\u003E\u003Cspan style = \"animation: blink 0.5s linear infinite alternate;\" id=\"inputWindow\"\u003E|\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          },
                          {
                            "required": true,
                            "type": "divider"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "${this.parameters.showButton? '\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E' : ''}",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "次へ",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
let inputArray =[]
let text;

//初期カーソルの点滅用のCSSを追加
const css = document.createElement('style')
css.media = 'screen'
css.type = 'text/css'

const cssKeyframes ='@keyframes blink{ 0% {opacity: 0} 100% {opacity: 1.0}}';
const rules = document.createTextNode(cssKeyframes)
css.appendChild(rules)

document.getElementsByTagName('head')[0].appendChild(css);

//キー入力時
this.options.events['keydown'] = function(e) {
  //点滅をやめる
  if(inputArray.length <= 0)
  {
    document.getElementById('inputWindow').style = ' ';
  }
  //削除時
  if(e.key == 'Backspace' || e.key == 'Delete'){
      //1文字のみの時はカーソルを表示
      if(inputArray.length == 1)
      {
        inputArray =['|']
        document.getElementById('inputWindow').style = 'animation: blink 0.5s linear infinite alternate;';
      }
      else{
        inputArray.pop();
      }
  }

  //押されたキーが1文字の時
  else if(e.key.length == 1){
    //最後まで消していた場合
    if(inputArray[0] == '|')
    {
      inputArray.pop()
      document.getElementById('inputWindow').style = ' ';
    }
    inputArray.push(e.key);
  }

  //Enterの場合は終了
  else if(this.parameters.enterEndsTrial == true && e.key == 'Enter')
  {
    this.end();
  }
  //配列を1つにまとめる
  convertText = inputArray.join('');

  //アルファベットをひらがな/カタカナに変換
  if(this.parameters.convertType == 'katakana')
  {
    convertText = wanakana.toKatakana(convertText, {customKanaMapping: { n: 'n', nn: 'ン'}});
  }
  else if(this.parameters.convertType == 'hiragana')
  {
    convertText = wanakana.toHiragana(convertText, {customKanaMapping: { n: 'n', nn: 'ん'}});
  }
  //変換したテキストを表示
  document.getElementById('inputWindow').textContent = convertText;
  //変換したテキストを反応として保存
  this.data.response = convertText;
}
}
                        },
                        "title": "testTrial",
                        "timeout": "${this.parameters.trialDuration}"
                      }
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "実験お疲れさまでした。",
                "content": "最後に実験に関する質問にご回答ください。どのような回答でもペナルティなどは”まったく”ありませんので，以下の質問には，正直にご回答ください。"
              },
              {
                "required": true,
                "type": "radio",
                "options": [
                  {
                    "label": "実験の実施に支障のある大きな問題が生じた",
                    "coding": "big"
                  },
                  {
                    "coding": "small",
                    "label": "実験の実施に支障のない程度の問題が生じた"
                  },
                  {
                    "label": "実験の実施に問題はなかった",
                    "coding": "none"
                  }
                ],
                "label": "実験を実施する上でなにか問題はありませんでしたか？",
                "name": "problemReport",
                "help": "例えば，プログラムの誤動作，来客や電話などの妨害，説明がわからなかったなども「問題」としてお教えください。"
              },
              {
                "required": false,
                "type": "textarea",
                "label": "問題の内容",
                "help": "「実験の実施に支障のある大きな問題が生じた」または「実験の実施に支障のない程度の問題が生じた」を選択していただいた方は，その内容を以下の記入してください。",
                "name": "problemContent"
              },
              {
                "required": true,
                "type": "radio",
                "options": [
                  {
                    "label": "はい，データを除外してください",
                    "coding": "1"
                  },
                  {
                    "coding": "0",
                    "label": "いいえ，データを除外する必要はありません"
                  }
                ],
                "label": "データの除外を希望しますか？",
                "help": "今回の行って頂いたデータを研究発表などの学術利用に活用したいと考えています。何らかの理由（同意を撤回したい，問題があったので除外してほしいなど）でデータの除外を希望される方はお教えください。",
                "name": "elimination"
              },
              {
                "required": true,
                "type": "radio",
                "options": [
                  {
                    "label": "はい，あります",
                    "coding": "1"
                  },
                  {
                    "label": "いいえ，ありません",
                    "coding": "0"
                  }
                ],
                "label": "過去に同一の内容の実験に参加したことはありますか？",
                "name": "previousParticipartion"
              },
              {
                "required": true,
                "type": "radio",
                "options": [
                  {
                    "label": "はい，利用しました",
                    "coding": "1"
                  },
                  {
                    "label": "いいえ，利用していません",
                    "coding": "0"
                  }
                ],
                "label": "単語を覚えるためにメモを取るなどの補助を利用しましたか？",
                "name": "notetaking"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "finalQuestions"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()