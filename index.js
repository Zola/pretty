/**
 * Pretty HTML.
 */

module.exports = function(html) {
  // remove too many white space
  html = html.replace(/&nbsp;?/g, ' ');

  // transfer *** to <hr>
  html = html.replace(/^\s*(?:\*\s*){3,}\s*$/gm, '<hr>');

  // transfer --- to <hr>
  html = html.replace(/^\s*(?:\-\s*){3,}\s*$/gm, '<hr>');

  // transfer -- to ——
  html = html.replace(/([^-])(--)([^-])/g, '$1——$3');

  // transfer <br> to <p>
  var snippets = html.split(/(?:<br\s*\/?>[\s|\n]*){2,}/);
  html = '';
  for (var i = 0; i < snippets.length; i++) {
    html += '<p>' + snippets[i] + '</p>';
  }
  return html;
};
