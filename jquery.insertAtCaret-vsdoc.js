/*!
 * jQuery insertAtCaret 1.1.1
 * http://www.karalamalar.net/
 *
 * Copyright (c) 2013 İzzet Emre Erkan
 * Licensed under GPLv2 or later.
 *
 * Contributors:
 * [@kittsville](https://github.com/kittsville)
 *
 */
(function ($, document, window, undefined) {
  $.fn.insertAtCaret = function (text) {
    ///	<summary>
    ///		A jQuery plugin which inserts text to a text input or
    ///   a textarea field at caret's position.
    ///	</summary>
    ///	<returns type="jQuery" />
    return this.each(function () {
      var input = this, scrollPos, strPos = 0, isOldBrowser = ("selectionStart" in input && "selectionEnd" in input), before, after, range;

      if(!((input.tagName && input.tagName.toLowerCase() === "textarea") || (input.tagName && input.tagName.toLowerCase() === "input" && input.type.toLowerCase() === "text"))) {
        return;
      }

      scrollPos = input.scrollTop;

      if (isOldBrowser) {
        strPos = input.selectionStart;
      } else {
        input.focus();
        range = document.selection.createRange();
        range.moveStart('character', -input.value.length);
        strPos = range.text.length;
      }

      before      = (input.value).substring(0, strPos);
      after       = (input.value).substring(strPos, input.value.length);
      input.value = before + text + after;
      strPos      = strPos + text.length;

      if (isOldBrowser) {
        input.selectionStart = strPos;
        input.selectionEnd   = strPos;
      } else {
        range = document.selection.createRange();
        range.moveStart('character', strPos);
        range.moveEnd('character', 0);
        range.select();
      }

      input.scrollTop = scrollPos;
    });
  };
})(jQuery, document, window);
