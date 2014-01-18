
describe('pretty', function() {
  var pretty = require('pretty');

  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  it('should remove useless spaces', function() {
    var text = 'foo &nbsp; &nbsp bar';
    assert(pretty(text), '<p>foo     bar</p>');
  });

  it('should transform --- to hr', function() {
    var text = 'foo ---';
    assert(pretty(text), '<p>foo ---</p>');

    var expect = '<p>foo\n<hr></p>';
    text = 'foo\n ---';
    assert(pretty(text), expect);

    text = 'foo\n - - -';
    assert(pretty(text), expect);
  });

  it('should transform *** to hr', function() {
    var text = 'foo ***';
    assert(pretty(text), '<p>foo ***</p>');

    var expect = '<p>foo\n<hr></p>';
    text = 'foo\n ***';
    assert(pretty(text), expect);

    text = 'foo\n * * *';
    assert(pretty(text), expect);
  });

  it('should transfer minus to dash', function() {
    var text = 'foo -- bar';
    assert(pretty(text), '<p>foo —— bar</p>');
  });

  it('should remove too many br', function() {
    var text = 'foo<br><br>bar';
    assert(pretty(text), '<p>foo</p><p>bar</p>');
  });
});
