/**
 * jspsych-html-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["html-keyboard-katakana"] = (function () {

    var plugin = {};

    plugin.info = {
        name: 'html-keyboard-katakana',
        description: '',
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Stimulus',
                default: undefined,
                description: 'The HTML string to be displayed'
            },
            inputBox: {
                type: jsPsych.plugins.parameterType.STRING,
                array: true,
                pretty_name: 'inputBox',
                default: '<span class ="textCursor">|</span>',
                description: 'Inbut box showing Katakana.'
            },
            prompt: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Prompt',
                default: null,
                description: 'Any content here will be displayed avobe the stimulus.'
            },
            stimulus_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Stimulus duration',
                default: null,
                description: 'How long to hide the stimulus.'
            },
            trial_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Trial duration',
                default: null,
                description: 'How long to show trial before it ends.'
            },
            enter_ends_trial: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Enter ends trial',
                default: false,
                description: 'If true, trial will end when subject type enter key.'
            },

        }
    }

    plugin.trial = function (display_element, trial) {
        //ローマ字からカタカナへの変換
        let romanKatakanaTable = {
            'a': 'ア',
            'i': 'イ',
            'u': 'ウ',
            'e': 'エ',
            'o': 'オ',
            'ka': 'カ',
            'ki': 'キ',
            'ku': 'ク',
            'ke': 'ケ',
            'ko': 'コ',
            'sa': 'サ',
            'si': 'シ',
            'su': 'ス',
            'se': 'セ',
            'so': 'ソ',
            'ta': 'タ',
            'ti': 'チ',
            'tu': 'ツ',
            'te': 'テ',
            'to': 'ト',
            'chi': 'チ',
            'tsu': 'ツ',
            'na': 'ナ',
            'ni': 'ニ',
            'nu': 'ヌ',
            'ne': 'ネ',
            'no': 'ノ',
            'ha': 'ハ',
            'hi': 'ヒ',
            'hu': 'フ',
            'he': 'ヘ',
            'ho': 'ホ',
            'fu': 'フ',
            'ma': 'マ',
            'mi': 'ミ',
            'mu': 'ム',
            'me': 'メ',
            'mo': 'モ',
            'ya': 'ヤ',
            'yi': 'イ',
            'yu': 'ユ',
            'ye': 'イェ',
            'yo': 'ヨ',
            'ra': 'ラ',
            'ri': 'リ',
            'ru': 'ル',
            're': 'レ',
            'ro': 'ロ',
            'wa': 'ワ',
            'wyi': 'イ',
            'wu': 'ウ',
            'wye': 'エ',
            'wo': 'ヲ',
            'nn': 'ン',
            'ga': 'ガ',
            'gi': 'ギ',
            'gu': 'グ',
            'ge': 'ゲ',
            'go': 'ゴ',
            'za': 'ザ',
            'zi': 'ジ',
            'zu': 'ズ',
            'ze': 'ゼ',
            'zo': 'ゾ',
            'ji': 'ジ',
            'da': 'ダ',
            'di': 'ヂ',
            'du': 'ヅ',
            'de': 'デ',
            'do': 'ド',
            'ba': 'バ',
            'bi': 'ビ',
            'bu': 'ブ',
            'be': 'ベ',
            'bo': 'ボ',
            'pa': 'パ',
            'pi': 'ピ',
            'pu': 'プ',
            'pe': 'ペ',
            'po': 'ポ',
            'kya': 'キャ',
            'kyu': 'キュ',
            'kyo': 'キョ',
            'sya': 'シャ',
            'syu': 'シュ',
            'syo': 'ショ',
            'sho': 'ショ',
            'sha': 'シャ',
            'shu': 'シュ',
            'she': 'シェ',
            'shi': 'シ',
            'tya': 'チャ',
            'tyi': 'チィ',
            'tyu': 'チュ',
            'tye': 'チェ',
            'tyo': 'チョ',
            'cha': 'チャ',
            'chu': 'チュ',
            'che': 'チェ',
            'cho': 'チョ',
            'nya': 'ニャ',
            'nyi': 'ニィ',
            'nyu': 'ニュ',
            'nye': 'ニェ',
            'nyo': 'ニョ',
            'hya': 'ヒャ',
            'hyi': 'ヒィ',
            'hyu': 'ヒュ',
            'hye': 'ヒェ',
            'hyo': 'ヒョ',
            'mya': 'ミャ',
            'myi': 'ミィ',
            'myu': 'ミュ',
            'mye': 'ミェ',
            'myo': 'ミョ',
            'rya': 'リャ',
            'ryi': 'リィ',
            'ryu': 'リュ',
            'rye': 'リェ',
            'ryo': 'リョ',
            'gya': 'ギャ',
            'gyi': 'ギィ',
            'gyu': 'ギュ',
            'gye': 'ギェ',
            'gyo': 'ギョ',
            'zya': 'ジャ',
            'zyi': 'ジィ',
            'zyu': 'ジュ',
            'zye': 'ジェ',
            'zyo': 'ジョ',
            'ja': 'ジャ',
            'ju': 'ジュ',
            'je': 'ジェ',
            'jo': 'ジョ',
            'jya': 'ジャ',
            'jyi': 'ジィ',
            'jyu': 'ジュ',
            'jye': 'ジェ',
            'jyo': 'ジョ',
            'dya': 'ヂャ',
            'dyi': 'ヂィ',
            'dyu': 'ヂュ',
            'dye': 'ヂェ',
            'dyo': 'ヂョ',
            'bya': 'ビャ',
            'byi': 'ビィ',
            'byu': 'ビュ',
            'bye': 'ビェ',
            'byo': 'ビョ',
            'pya': 'ピャ',
            'pyi': 'ピィ',
            'pyu': 'ピュ',
            'pye': 'ピェ',
            'pyo': 'ピョ',
            'fa': 'ファ',
            'fi': 'フィ',
            'fe': 'フェ',
            'fo': 'フォ',
            'fya': 'フャ',
            'fyu': 'フュ',
            'fyo': 'フョ',
            'xa': 'ァ',
            'xi': 'ィ',
            'xu': 'ゥ',
            'xe': 'ェ',
            'xo': 'ォ',
            'lyu': 'ュ',
            'lya': 'ャ',
            'lyo': 'ョ',
            'la': 'ァ',
            'li': 'ィ',
            'lu': 'ゥ',
            'le': 'ェ',
            'lo': 'ォ',
            'xya': 'ャ',
            'xyu': 'ュ',
            'xyo': 'ョ',
            'xtu': 'ッ',
            'xtsu': 'ッ',
            'wi': 'ウィ',
            'we': 'ウェ',
            'va': 'ヴァ',
            'vi': 'ヴィ',
            'vu': 'ヴ',
            've': 'ヴェ',
            'vo': 'ヴォ'
        };

        /*
         * roman -> katakana
         *
         * @param (String) roman:
         * @return (String): katakana
         */
        function romanToKatakana(roman) {
            let i, iz, match, regex,
                katakana = '',
                table = romanKatakanaTable;

            regex = new RegExp((function (table) {
                let key,
                    s = '^(?:';

                for (key in table)
                    if (table.hasOwnProperty(key)) {
                        s += key + '|';
                    }
                return s + '(?:n(?![aiueo]|y[aiueo]|$))|' + '([^aiueon])\\1)';
            })(table));
            for (i = 0, iz = roman.length; i < iz; ++i) {
                if (match = roman.slice(i).match(regex)) {
                    if (match[0] === 'n') {
                        katakana += 'ン';
                    } else if (/^([^n])\1$/.test(match[0])) {
                        katakana += 'ッ';
                        --i;
                    } else {
                        katakana += table[match[0]];
                    }
                    i += match[0].length - 1;
                } else {
                    katakana += roman[i];
                }
            }
            return katakana;
        }

        //initialze vars
        var romanResponse = '';

        var new_html = '<div id="jspsych-html-keyboard-katakana-stimulus">' + trial.stimulus + '</div>';

        // add prompt
        if (trial.prompt !== null) {
            new_html += '<div id="jspsych-html-keyboard-katakana-prompt">' + trial.prompt + '</div>';
        }

        // add inputBox
        new_html += '<div id="jspsych-html-keyboard-katakana-inputBox">' + trial.inputBox + '</div>'

        // draw
        display_element.innerHTML = new_html;

        // store response
        var response = {
            rt: null,
            key: null
        };

        var update_trial = function () {

            var update_html = '<div id="jspsych-html-keyboard-katakana-stimulus">' + trial.stimulus + '</div>'

            if (trial.prompt != null) {
                update_html += '<div id="jspsych-html-keyboard-katakana-prompt">' + trial.prompt + '</div>'
            }
            update_html += '<div id="jspsych-html-keyboard-katakana-inputBox">' + trial.inputBox + '</div>'

            //draw
            display_element.innerHTML = update_html;

            // store response
            var response = {
                rt: null,
                key: null
            };
        }


        // function to end trial when it is time
        var end_trial = function () {

            // kill any remaining setTimeout handlers
            jsPsych.pluginAPI.clearAllTimeouts();

            // kill keyboard listeners
            if (typeof keyboardListener !== 'undefined') {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            }

            // gather the data to store for the trial
            var trial_data = {
                "rt": response.rt,
                "stimulus": trial.stimulus,
                "katakanaResponse": trial.inputBox
            };

            // clear the display
            display_element.innerHTML = '';

            // move on to the next trial
            jsPsych.finishTrial(trial_data);
        };

        // function to handle responses by the subject
        var after_response = function (info) {
            //数字からアルファベットまでの場合
            response = info;
            if (response.key >= 48 & response.key <= 90 | response.key == 189) {
                romanResponse += jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(response.key);
                trial.inputBox = romanToKatakana(romanResponse);
            } else if (response.key == 8 | response.key == 46) {
                romanResponse = romanResponse.slice(0, -1);
                trial.inputBox = romanToKatakana(romanResponse);
            } else if (response.key == 13 && trial.enter_ends_trial == true) {
                end_trial();
            }
            update_trial();
        };

        // start the response listener
        var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: jsPsych.ALL_KEYS,
            rt_method: 'performance',
            persist: true,
            allow_held_key: false
        });

        // hide stimulus if stimulus_duration is set
        if (trial.stimulus_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function () {
                display_element.querySelector('#jspsych-html-keyboard-katakana-stimulus').style.visibility = 'hidden';
            }, trial.stimulus_duration);
        }

        // end trial if trial_duration is set
        if (trial.trial_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function () {
                end_trial();
            }, trial.trial_duration);
        }

    };

    return plugin;
})();
