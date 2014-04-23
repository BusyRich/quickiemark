Quickie Mark is a markdown editor site that aims to be simple but has the basic features you need. Quick list of current features:

* Markdown is syntax highlighted
* Code blocks are syntax highlighted in the preview pane
* Uses [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage) to keep your current document, and loads this cache when you come back

## Libraries Used
Quickie Mark is pretty simple, but some cool features required some "frankenstein-ing" of a few libraries. It also uses Zepto, cause that's what cool kids use instead of jQuery.

Here is a list of all the libraries use, for reference and props.

* [Ace Editor](http://ace.c9.io/)
* [Marked](https://github.com/chjj/marked) (markdown parser)
* [highlight.js](http://highlightjs.org/) (code block highlighter)
* [jStorage](https://github.com/andris9/jStorage) with [JSON2](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) (for DOM storage)
* [Zepto](http://zeptojs.com/)
* [Base](http://purecss.io/base/) (CSS base/reset)

You are free to fork the site, change it up, add features, stuff it in your own projects, whatever.
