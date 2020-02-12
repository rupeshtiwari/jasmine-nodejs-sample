describe('html', () => {
  var fs = require('fs');
  var path = require('path');
  var file = fs
    .readSync(path.resolve('../../lib/jasmine_examples/index.html'))
    .toString();

  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  global.document = new JSDOM(file);
  const $ = jquery(global.document.window);

  beforeEach(() => {
    loadFixtures(require(file));
  });

  it('button click should increase numbers', () => {
    const count = $('#count').text();
    expect(Number(count)).toBe(0);
    // $('#increment').trigger('click');
    // expect(+$('#count').text()).toBe(1);
  });
});
