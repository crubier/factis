/**
 * Implementation of the JS DSL for queries, very simple !
 * x means "operator"
 * a means "argument"
 * s means "subject"
 * p means "predicate"
 * o means "object"
 * v means "value"
 * @author Vincent Lecrubier <vincent.lecrubier@gmail.com>
 * @since  2015-04-19
 */



/**
 * Describe a fact, pretty much a triple, but with the possibility of variables.
 * @param  {element} s Subject
 * @param  {element} p Predicate
 * @param  {element} o Object
 * @param  {any} v description
 * @return {term} term
 */
function fact(s, p, o, v) {
  return {
    x: "fact",
    a: [s, p, o, v === undefined ? true : v]
  };
}


/**
 * A variable
 * @param {string} a name
 * @return {element} element
 */
function the(a) {
  return {
    x: "var",
    a: [a]
  };
}


/**
 * Conjunction
 * @param {term} terms of the conjonction
 * @return {term} term
 */
function and() {
  return {
      x: "and",
      a: Array.prototype.slice.call(arguments)
  };
}

/**
 * Disjunction
 * @param {term} terms of the disjunction
 * @return {term} term
 */
function or() {
  return {
      x: "or",
      a: Array.prototype.slice.call(arguments)
  };
}

/**
 * Negation
 * @param {term} term to negate
 * @return {term} term
 */
function not(a) {
  return {
    x: "not",
    a: [a]
  };
}


/**
 * Implication
 * @param  {term} a
 * @param  {term} b
 * @return {term}
 */
function implies(a, b) {
  return or(not(a), b);
}

/**
 * Equivalence
 * @param  {term} a
 * @param  {term} b
 * @return {term}
 */
function equivalent(a, b) {
  return and(implies(a, b), implies(b, a));
}

module.exports.fact = fact;
module.exports.the = the;
module.exports.and = and;
module.exports.or = or;
module.exports.not = not;
module.exports.implies = implies;
module.exports.equivalent = equivalent;
