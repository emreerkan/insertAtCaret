# jQuery insertAtCaret

A jQuery plugin which inserts text to a text input, a textarea or a tag with 
`contenteditable="true"` at the caret's position.

Base code from: http://stackoverflow.com/a/1064139/84042

## Usage

If your text field contains 'Foo Bar' with the cursor positioned after 'Foo' 
then the following code would result in 'FooBar Bar':

```
$('textarea').insertAtCaret('Bar');
```

## Changelog

[1.2.1] - 2023-06-18

* Fix: If the contentEditable element does not have focus it was adding the text
  to the active element. `.focus()` added to prevent that.

[1.2.0] - 2023-06-18

* Now it supports elements with `contenteditable="true"`

[1.1.5] - 2017-06-05

* If any text is selected, plugin overrides that selected part of the text with new text

[1.1.4] - 2015-09-22

* Corrected the name of the browser detection variable

[1.1.3] - 2015-08-08

* Changed naming of the core files.

[1.1.2] - 2015-08-06

* Added manifest file for jQuery Plugin Registry

[1.1.1] - 2015-08-05

* Added to [npm](https://www.npmjs.com/package/insert-at-caret) and jQuery Plugin Registry

[1.1] - 2015-08-05

* 1.9+ jQuery support
* More minification
* ReadMe updated
* License updated

[1.0] - 2013-01-07

* Initial commit

## License

Copyright (c) 2023 [Emre Erkan](http://www.karalamalar.net/)  
Licensed under GPLv2 or later.

Contributors:

- [@kittsville](https://github.com/kittsville)
- [@Nils-Berghs](https://github.com/Nils-Berghs)