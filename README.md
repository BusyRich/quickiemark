Quickie Mark is a markdown editor site that aims to be simple but has the basic features you need. Quick list of current features:

* (semi) responsive design, no guarentees but it should be OK on any reasonable desktop resolution
* Markdown is syntax highlighted
* Code blocks are syntax highlighted in the preview pane
* Uses [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage) to keep your current document, and loads this cache when you come back
* Downloading of markdown and HTML (not sure of the browser support)

## Libraries Used
Quickie Mark is pretty simple, but some cool features required some "frankenstein-ing" of a few libraries. It also uses Zepto, cause that's what cool kids use instead of jQuery.

Here is a list of all the libraries used, for reference and props.

* [Ace Editor](http://ace.c9.io/) (text editor)
* [Marked](https://github.com/chjj/marked) (markdown parser)
* [highlight.js](http://highlightjs.org/) (code block highlighter)
* [jStorage](https://github.com/andris9/jStorage) with [JSON2](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) (for DOM storage)
* [Zepto](http://zeptojs.com/) (cool kid's jQuery)
* [Base](http://purecss.io/base/) (CSS base/reset)
* [Typicons](http://typicons.com/)

Pretty much everything (minus Base, highlight.js, and Typicons) is loaded from [CDNJS](http://www.cdnjs.com/), which is just an awesome CDN service.

You are free to fork, change it up, add features, stuff it in your own projects, whatever.
