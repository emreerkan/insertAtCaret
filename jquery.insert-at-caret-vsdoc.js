/*!
 * jQuery insertAtCaret 1.2.3
 * http://www.karalamalar.net/
 *
 * Copyright (c) 2023 Emre Erkan
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
        ///	<summary>
        ///		A jQuery plugin which inserts text to a text input, textarea
        ///     or contentEditable element at caret position.
        ///	</summary>
        ///	<returns type="jQuery" />
        return this.each(function () {
            var input = this, scrollPos, strPosStart = 0, strPosEnd = 0, isModernBrowser = ("selectionStart" in input && "selectionEnd" in input), before, after, range, selection;

            if (!((input.tagName && input.tagName.toLowerCase() === "textarea") || (input.tagName && input.tagName.toLowerCase() === "input" && input.type.toLowerCase() === "text"))) {
                if (input.contentEditable) {
                    input.focus();
                    selection = document.getSelection();
                    if (selection.getRangeAt && selection.rangeCount) {
                        range = selection.getRangeAt(0);
                        range.deleteContents();
                        range.insertNode(document.createTextNode(text));
                        selection.collapseToEnd();
                    }
                }
                return;
            }

            scrollPos = input.scrollTop;
            input.focus();

            if (isModernBrowser) {
                strPosStart = input.selectionStart;
                strPosEnd = input.selectionEnd;
            } else {
                range = input.createTextRange();
                range.moveStart('character', -input.value.length);
                strPosStart = range.text.length;
            }

            if (strPosEnd < strPosStart) {
                strPosEnd = strPosStart;
            }

            before = (input.value).substring(0, strPosStart);
            after = (input.value).substring(strPosEnd, input.value.length);
            input.value = before + text + after;
            strPosStart = strPosStart + text.length;

            if (isModernBrowser) {
                input.setSelectionRange(strPosStart, strPosStart);
            } else {
                range = input.createTextRange();
                range.move('character', strPosStart);
                range.select();
            }

            input.scrollTop = scrollPos;
            input.blur();
        });
    };
})(jQuery, document, window);
