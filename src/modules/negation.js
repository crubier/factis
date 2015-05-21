

function Negation() {

}

// null return value means "infinite"

Negation.prototype.queryXXX = function(f,m) {
  return null;
};

Negation.prototype.queryXXO = function(f,m) {
  return null;
};

Negation.prototype.queryXPX = function(f,m) {
  if(f[1]==="equals" || f[1]==="not equals" ) {
    return null;
  } else {
    return [];
  }
};

Negation.prototype.queryXPO = function(f,m) {
  if(f[1]==="equals") {
    return [[f[2], "equals", f[2], true]];
  } else if(f[1]==="not equals") {
    return null;
  } else {
    return [];
  }
};

Negation.prototype.querySXX = function(f,m) {
  return null;
};

Negation.prototype.querySXO = function(f,m) {
  if(f[0]===f[2]){
    return [[f[0],"equals",f[2]]];
  }
  else {
    return [[f[0],"not equals",f[2]]];
  }
};

Negation.prototype.querySPX = function(f,m) {
  if(f[1]==="equals") {
    return [[f[0], "equals", f[0], true]];
  } if(f[1]==="not equals") {
    return null;
  } else {
    return [];
  }
};

Negation.prototype.querySPO = function(f,m) {
  if(f[1]==="equals") {
    if(f[0]===f[2]){
      return [[f[0],f[1],f[2]]];
    } else {
      return [];
    }
  } else if(f[1]==="not equals") {
    if(f[0]!==f[2]){
      return [[f[0],f[1],f[2]]];
    } else {
      return [];
    }
  } else {
    return [];
  }
};


module.exports = Negation;
