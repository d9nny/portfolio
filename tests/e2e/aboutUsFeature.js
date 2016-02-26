describe('About Us', function() {

  var basket = element(by.id('basketIcon'))

  beforeEach(function() {
    browser.get('http://localhost:5000');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('atlantic');
  });
});