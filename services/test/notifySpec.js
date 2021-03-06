describe('service function', function () {
  var mock, notify;
  beforeEach(module('myApp'));
  beforeEach(function () {
    mock = {alert: jasmine.createSpy()};
    
    module(function ($provide) {
      $provide.value('$window', mock);
    });
    
    inject(function($injector) {
      notify = $injector.get('notify');
    })
  });
  
  it('should not alert first two notifications', function() {
    notify('one');
    notify('two');
    
    expect(mock.alert).not.toHaveBeenCalled();
  });
  
  
});