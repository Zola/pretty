/**
 * Pretty HTML.
 */

module.exports = function(html) {
  // remove too many white space
  html = html.replace(/&nbsp;/g, ' ');

  // transfer *** to <hr>
  html = html.replace(/\*{3,}/g, '<hr>');

  // transfer --- to <hr>
  html = html.replace(/\-{3,}/g, '<hr>');

  // transfer <br> to <p>
  var snippets = html.split(/(?:<br\s*\/?>[\s|\n]*){2,}/);
  html = '';
  for (var i = 0; i < snippets.length; i++) {
    html += '<p>' + snippets[i] + '</p>';
  }
  return html;
};
