/*!
 * jQuery insertAtCaret 1.1.5
 * http://www.karalamalar.net/
 *
 * Copyright (c) 2013 İzzet Emre Erkan
 * Licensed under GPLv2 or later.
 * http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * Contributors:
 * [@kittsville](https://github.com/kittsville)
 * [@Nils-Berghs](https://github.com/Nils-Berghs)
 *
 */
(function ($, document, window, undefined) {
    $.fn.insertAtCaret = function (text) {
        return this.each(function () {
            var input = this, scrollPos, strPosStart = 0, strPosEnd = 0, isModernBrowser = ("selectionStart" in input && "selectionEnd" in input), before, after, range, selection;

            if (!((input.tagName && input.tagName.toLowerCase() === "textarea") || (input.tagName && input.tagName.toLowerCase() === "input" && input.type.toLowerCase() === "text"))) {
                return;
            }

            scrollPos = input.scrollTop;

            if (isModernBrowser) {
                strPosStart = input.selectionStart;
                strPosEnd = input.selectionEnd;
            } else {
                input.focus();
                range = document.selection.createRange();
                range.moveStart('character', -input.value.length);
                strPosStart = range.text.length;
            }

            if (strPosEnd < strPosStart)
                strPosEnd = strPosStart;

            before = (input.value).substring(0, strPosStart);
            after = (input.value).substring(strPosEnd, input.value.length);
            input.value = before + text + after;
            strPosStart = strPosStart + text.length;

            if (isModernBrowser) {
                input.selectionStart = strPosStart;
                input.selectionEnd = strPosStart;
            } else {
                range = document.selection.createRange();
                range.moveStart('character', strPosStart);
                range.moveEnd('character', 0);
                range.select();
            }

            input.scrollTop = scrollPos;
        });
    };
})(jQuery, document, window);
