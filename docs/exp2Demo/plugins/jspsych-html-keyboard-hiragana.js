/**
 * jspsych-html-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["html-keyboard-hiragana"] = (function () {

    var plugin = {};

    plugin.info = {
        name: 'html-keyboard-hiragana',
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
                description: 'Inbut box showing hiragana.'
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
        //ローマ字からひらがなへの変換
        //変換リスト
        let roman2hiragana = {
            'a': 'あ',
            'i': 'い',
            'u': 'う',
            'e': 'え',
            'o': 'お',
            'ka': 'か',
            'ki': 'き',
            'ku': 'く',
            'ke': 'け',
            'ko': 'こ',
            'sa': 'さ',
            'si': 'し',
            'su': 'す',
            'se': 'せ',
            'so': 'そ',
            'ta': 'た',
            'ti': 'ち',
            'tu': 'つ',
            'te': 'て',
            'to': 'と',
            'chi': 'ち',
            'tsu': 'つ',
            'na': 'な',
            'ni': 'に',
            'nu': 'ぬ',
            'ne': 'ね',
            'no': 'の',
            'ha': 'は',
            'hi': 'ひ',
            'hu': 'ふ',
            'he': 'へ',
            'ho': 'ほ',
            'fu': 'ふ',
            'ma': 'ま',
            'mi': 'み',
            'mu': 'む',
            'me': 'め',
            'mo': 'も',
            'ya': 'や',
            'yi': 'い',
            'yu': 'ゆ',
            'ye': 'いぇ',
            'yo': 'よ',
            'ra': 'ら',
            'ri': 'り',
            'ru': 'る',
            're': 'れ',
            'ro': 'ろ',
            'wa': 'わ',
            'wyi': 'ゐ',
            'wu': 'う',
            'wye': 'ゑ',
            'wo': 'を',
            'nn': 'ん',
            'ga': 'が',
            'gi': 'ぎ',
            'gu': 'ぐ',
            'ge': 'げ',
            'go': 'ご',
            'za': 'ざ',
            'zi': 'じ',
            'zu': 'ず',
            'ze': 'ぜ',
            'zo': 'ぞ',
            'ji': 'じ',
            'da': 'だ',
            'di': 'ぢ',
            'du': 'づ',
            'de': 'で',
            'do': 'ど',
            'ba': 'ば',
            'bi': 'び',
            'bu': 'ぶ',
            'be': 'べ',
            'bo': 'ぼ',
            'pa': 'ぱ',
            'pi': 'ぴ',
            'pu': 'ぷ',
            'pe': 'ぺ',
            'po': 'ぽ',
            'kya': 'きゃ',
            'kyu': 'きゅ',
            'kyo': 'きょ',
            'sya': 'しゃ',
            'syu': 'しゅ',
            'syo': 'しょ',
            'sho': 'しょ',
            'sha': 'しゃ',
            'shu': 'しゅ',
            'she': 'しぇ',
            'shi': 'し',
            'tya': 'ちゃ',
            'tyi': 'ちぃ',
            'tyu': 'ちゅ',
            'tye': 'ちぇ',
            'tyo': 'ちょ',
            'cha': 'ちゃ',
            'chu': 'ちゅ',
            'che': 'ちぇ',
            'cho': 'ちょ',
            'nya': 'にゃ',
            'nyi': 'にぃ',
            'nyu': 'にゅ',
            'nye': 'にぇ',
            'nyo': 'にょ',
            'hya': 'ひゃ',
            'hyi': 'ひぃ',
            'hyu': 'ひゅ',
            'hye': 'ひぇ',
            'hyo': 'ひょ',
            'mya': 'みゃ',
            'myi': 'みぃ',
            'myu': 'みゅ',
            'mye': 'みぇ',
            'myo': 'みょ',
            'rya': 'りゃ',
            'ryi': 'りぃ',
            'ryu': 'りゅ',
            'rye': 'りぇ',
            'ryo': 'りょ',
            'gya': 'ぎゃ',
            'gyi': 'ぎぃ',
            'gyu': 'ぎゅ',
            'gye': 'ぎぇ',
            'gyo': 'ぎょ',
            'zya': 'じゃ',
            'zyi': 'じぃ',
            'zyu': 'じゅ',
            'zye': 'じぇ',
            'zyo': 'じょ',
            'ja': 'じゃ',
            'ju': 'じゅ',
            'je': 'じぇ',
            'jo': 'じょ',
            'jya': 'じゃ',
            'jyi': 'じぃ',
            'jyu': 'じゅ',
            'jye': 'じぇ',
            'jyo': 'じょ',
            'dya': 'ぢゃ',
            'dyi': 'ぢぃ',
            'dyu': 'ぢゅ',
            'dye': 'ぢぇ',
            'dyo': 'ぢょ',
            'bya': 'びゃ',
            'byi': 'びぃ',
            'byu': 'びゅ',
            'bye': 'びぇ',
            'byo': 'びょ',
            'pya': 'ぴゃ',
            'pyi': 'ぴぃ',
            'pyu': 'ぴゅ',
            'pye': 'ぴぇ',
            'pyo': 'ぴょ',
            'fa': 'ふぁ',
            'fi': 'ふぃ',
            'fe': 'ふぇ',
            'fo': 'ふぉ',
            'fya': 'ふゃ',
            'fyu': 'ふゅ',
            'fyo': 'ふょ',
            'xa': 'ぁ',
            'xi': 'ぃ',
            'xu': 'ぅ',
            'xe': 'ぇ',
            'xo': 'ぉ',
            'la': 'ぁ',
            'li': 'ぃ',
            'lu': 'ぅ',
            'le': 'ぇ',
            'lo': 'ぉ',
            'lyu': 'ゅ',
            'lya': 'ゃ',
            'lyo': 'ょ',
            'la': 'ぁ',
            'li': 'ぃ',
            'lu': 'ぅ',
            'le': 'ぇ',
            'lo': 'ぉ',
            'xya': 'ゃ',
            'xyu': 'ゅ',
            'xyo': 'ょ',
            'xtu': 'っ',
            'xtsu': 'っ',
            'wi': 'うぃ',
            'we': 'うぇ',
            'va': 'ヴぁ',
            'vi': 'ヴぃ',
            'vu': 'ヴ',
            've': 'ヴぇ',
            'vo': 'ヴぉ'
        };

        /*
         * roman -> hiragana
         *
         * @param (String) roman:
         * @return (String): hiragana
         */
        function romanToHiranaga(roman) {
            let i, iz, match, regex,
                hiragana = '',
                table = roman2hiragana;

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
                        hiragana += 'ん';
                    } else if (/^([^n])\1$/.test(match[0])) {
                        hiragana += 'っ';
                        --i;
                    } else {
                        hiragana += table[match[0]];
                    }
                    i += match[0].length - 1;
                } else {
                    hiragana += roman[i];
                }
            }
            return hiragana;
        }

        //initialze vars
        var romanResponse = '';

        var new_html = '<div id="jspsych-html-keyboard-hiragana-stimulus">' + trial.stimulus + '</div>';

        // add prompt
        if (trial.prompt !== null) {
            new_html += '<div id="jspsych-html-keyboard-hiragana-prompt">' + trial.prompt + '</div>';
        }

        // add inputBox
        new_html += '<div id="jspsych-html-keyboard-hiragana-inputBox">' + trial.inputBox + '</div>'

        // draw
        display_element.innerHTML = new_html;

        // store response
        var response = {
            rt: null,
            key: null
        };

        var update_trial = function () {

            var update_html = '<div id="jspsych-html-keyboard-hiragana-stimulus">' + trial.stimulus + '</div>'

            if (trial.prompt != null) {
                update_html += '<div id="jspsych-html-keyboard-hiragana-prompt">' + trial.prompt + '</div>'
            }
            update_html += '<div id="jspsych-html-keyboard-hiragana-inputBox">' + trial.inputBox + '</div>'

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
                "hiraganaResponse": trial.inputBox
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
                trial.inputBox = romanToHiranaga(romanResponse);
            } else if (response.key == 8 | response.key == 46) {
                romanResponse = romanResponse.slice(0, -1);
                trial.inputBox = romanToHiranaga(romanResponse);
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
                display_element.querySelector('#jspsych-html-keyboard-hiragana-stimulus').style.visibility = 'hidden';
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
