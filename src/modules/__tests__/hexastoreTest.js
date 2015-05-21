jest.dontMock('../hexastore.js');


var H = require('../hexastore.js');
var hexastore = new H();
var empty = new H();
describe('Hexastore', function() {

  it('adds', function() {
    hexastore.add(['a', 'b', 'c']);
    hexastore.add(['a', 'x', 'y',true]);
    hexastore.add(['b', 'x', 'y',true]);
  });

  it('redundant adds', function() {
    hexastore.add(['a', 'b', 'c',true]);
  });

  it('valid queryXXX', function() {
    var res = hexastore.queryXXX([null,null,null]);
    expect(res.length).toEqual(3);
    expect(res).toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).toContain(['b', 'x', 'y',true]);
  });

  it('valid querySXX', function() {
    var res = hexastore.querySXX(['a',null,null]);
    expect(res.length).toEqual(2);
    expect(res).toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).not.toContain(['b', 'x', 'y',true]);
  });

  it('valid queryXPX', function() {
    var res = hexastore.queryXPX([null,'x',null]);
    expect(res.length).toEqual(2);
    expect(res).not.toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).toContain(['b', 'x', 'y',true]);
  });

  it('valid querySPX', function() {
    var res = hexastore.querySPX(['a','x',null]);
    expect(res.length).toEqual(1);
    expect(res).not.toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).not.toContain(['b', 'x', 'y',true]);
  });

  it('valid queryXXO', function() {
    var res = hexastore.queryXXO([null,null,'y']);
    expect(res.length).toEqual(2);
    expect(res).not.toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).toContain(['b', 'x', 'y',true]);
  });

  it('valid querySXO', function() {
    var res = hexastore.querySXO(['a',null,'y']);
    expect(res.length).toEqual(1);
    expect(res).not.toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).not.toContain(['b', 'x', 'y',true]);
  });

  it('valid queryXPO', function() {
    var res = hexastore.queryXPO([null,'x','y']);
    expect(res.length).toEqual(2);
    expect(res).not.toContain(['a', 'b', 'c',true]);
    expect(res).toContain(['a', 'x', 'y',true]);
    expect(res).toContain(['b', 'x', 'y',true]);
  });

  it('valid querySPO', function() {
    var res = hexastore.querySPO(['b','x','y']);
    expect(res.length).toEqual(1);
    expect(res).not.toContain(['a', 'b', 'c',true]);
    expect(res).not.toContain(['a', 'x', 'y',true]);
    expect(res).toContain(['b', 'x', 'y',true]);
  });

  it('invalid queryXXX', function() {
    expect(empty.queryXXX([null,null,null]).length).toEqual(0);
  });

  it('invalid querySXX', function() {
    expect(hexastore.querySXX(['u',null,null]).length).toEqual(0);
  });

  it('invalid queryXPX', function() {
    expect(hexastore.queryXPX([null,'v',null]).length).toEqual(0);
  });

  it('invalid querySPX', function() {
    expect(hexastore.querySPX(['a','v',null]).length).toEqual(0);
    expect(hexastore.querySPX(['u','b',null]).length).toEqual(0);
    expect(hexastore.querySPX(['u','v',null]).length).toEqual(0);
  });

  it('invalid queryXXO', function() {
    expect(hexastore.queryXXO([null,null,'w']).length).toEqual(0);
  });

  it('invalid querySXO', function() {
    expect(hexastore.querySXO(['a',null,'w']).length).toEqual(0);
    expect(hexastore.querySXO(['u',null,'y']).length).toEqual(0);
    expect(hexastore.querySXO(['u',null,'w']).length).toEqual(0);
  });

  it('invalid queryXPO', function() {
    expect(hexastore.queryXPO([null,'x','w']).length).toEqual(0);
    expect(hexastore.queryXPO([null,'v','y']).length).toEqual(0);
    expect(hexastore.queryXPO([null,'v','w']).length).toEqual(0);
  });

  it('invalid querySPO', function() {
    expect(hexastore.querySPO(['a','b','w']).length).toEqual(0);
    expect(hexastore.querySPO(['a','v','c']).length).toEqual(0);
    expect(hexastore.querySPO(['u','b','c']).length).toEqual(0);
    expect(hexastore.querySPO(['a','v','w']).length).toEqual(0);
    expect(hexastore.querySPO(['u','b','w']).length).toEqual(0);
    expect(hexastore.querySPO(['u','v','c']).length).toEqual(0);
    expect(hexastore.querySPO(['u','v','w']).length).toEqual(0);
  });


  it('remove', function() {
    hexastore.remove(['b','x','y']);
    var res = hexastore.querySPO(['b','x','y']);
    expect(res.length).toEqual(0);
  });


    it('redundants remove', function() {
      hexastore.remove(['b','x','y']);
      var res = hexastore.querySPO(['b','x','y']);
      expect(res.length).toEqual(0);
    });

    it('impossible remove', function() {
      hexastore.remove(['a','b','w']);
      hexastore.remove(['a','v','c']);
      hexastore.remove(['u','b','c']);
      hexastore.remove(['a','v','w']);
      hexastore.remove(['u','b','w']);
      hexastore.remove(['u','v','c']);
      hexastore.remove(['u','v','w']);
    });


});
