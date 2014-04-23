$(function() {
  // set up the ace editor
  var editor = ace.edit('ace');
  editor.setTheme("ace/theme/dreamweaver");
  editor.getSession().setMode("ace/mode/markdown");
  editor.getSession().setUseWrapMode(true);
  editor.setShowPrintMargin(false);
  editor.renderer.setShowGutter(false);
  editor.setFontSize('14px');

  var preview = $('#preview'),
      markLink = $('#downloadMarkdown'),
      htmlLink = $('#downloadHTML');

  var markFile = null,
      makeMarkFile = function(text) {
        var data = new Blob([text],{type:'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (markFile !== null) {
          window.URL.revokeObjectURL(markFile);
        }

        markLink.attr('href', window.URL.createObjectURL(data));
      };

  var htmlFile = null,
      makeHTMLFile = function(text) {
        var data = new Blob([text],{type:'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (htmlFile !== null) {
          window.URL.revokeObjectURL(htmlFile);
        }

        htmlLink.attr('href', window.URL.createObjectURL(data));
      };

  var refresh = function() {
    var markdown = editor.getValue();
    preview.html(marked(markdown));
    $.jStorage.set('markdown', markdown);
    makeMarkFile(markdown);
    makeHTMLFile(preview.html());
  };

  // bind some events
  editor.getSession().on('change', refresh);

  marked.setOptions({
    highlight: function (code, lang) {
      if(typeof lang === 'string' && lang.length > 0) {
        return hljs.highlight(lang, code).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });

  var cache = $.jStorage.get('markdown');
  if(typeof cache === 'string' && cache.length > 0) {
    editor.setValue(cache, -1);
  }
});
