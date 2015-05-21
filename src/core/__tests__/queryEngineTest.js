/**
 * Query Engine tests
 * @author Vincent Lecrubier <vincent.lecrubier@gmail.com>
 * @since  2015-04-19
 */

jest
  .dontMock('../queryEngine.js')
  .dontMock('../queryApi.js');

describe('Query Engine', function() {
  it('fact(the(x),b,c)', function() {
    var api = require('../queryApi.js');
    var engine = require('../queryEngine.js');
    var hexastore = require('../../modules/hexastore.js');

    hexastore.mockImplementation(function() {
      return {
        queryXXX:function(e){return [["a","b","c"]];},
        queryXXO:function(e){return [["a","b","c"]];},
        queryXPX:function(e){return [["a","b","c"]];},
        queryXPO:function(e){return [["a","b","c"]];},
        querySXX:function(e){return [["a","b","c"]];},
        querySXO:function(e){return [["a","b","c"]];},
        querySPX:function(e){return [["a","b","c"]];},
        querySPO:function(e){return [["a","b","c"]];}
      };
    });

    var store = new engine(new hexastore());

    expect(store.query(api.fact(api.the("x"),"b","c"))).toEqual([{"x":"a"}]);
  });



  it('fact(the(x),the(b),the(c))', function() {
    var api = require('../queryApi.js');
    var engine = require('../queryEngine.js');
    var hexastore = require('../../modules/hexastore.js');

    hexastore.mockImplementation(function() {
      return {
        queryXXX:function(e){return [["a","b","c"]];},
        queryXXO:function(e){return [["a","b","c"]];},
        queryXPX:function(e){return [["a","b","c"]];},
        queryXPO:function(e){return [["a","b","c"]];},
        querySXX:function(e){return [["a","b","c"]];},
        querySXO:function(e){return [["a","b","c"]];},
        querySPX:function(e){return [["a","b","c"]];},
        querySPO:function(e){return [["a","b","c"]];}
      };
    });

    var store = new hexastore();
    var eng = new engine(store);

    expect(eng.query(api.fact(api.the("x"),api.the("y"),api.the("z")))).toEqual([{"x":"a","y":"b","z":"c"}]);
    // console.log(hexastore.mock.instances[0].queryXXX._protoImpl);
    // console.log(hexastore.mock.instances[0].queryXXX);
    // console.log(store);
  });



});
