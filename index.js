/**
 * Pretty HTML.
 */

module.exports = function(html) {
  // remove too many white space
  html = html.replace(/&nbsp;?/g, ' ');

  // transfer *** --- ——— to <hr>
  html = html.replace(/^\s*(?:(?:\*|\-|—)\s*){3,}\s*$/gm, '<hr>');

  html = html.replace(/<p>(?:(?:\*|\-|—)\s*){3,}</g, '<p><hr><');
  html = html.replace(/<br\s*\/?>(?:(?:\*|\-|—)\s*){3,}</g, '<hr><');

  // transfer -- to ——
  html = html.replace(/([^-])(--)([^-])/g, '$1——$3');

  // transfer <br> to <p>
  var snippets = html.split(/(?:<br\s*\/?>[\s|\n]*){2,}/);
  if (snippets.length > 1) {
    html = '';
    for (var i = 0; i < snippets.length; i++) {
      html += '<p>' + snippets[i] + '</p>';
    }
  }
  return html;
};
