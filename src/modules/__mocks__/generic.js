/**
 * A generic Factis module mock up
 * @author Vincent Lecrubier <vincent.lecrubier@gmail.com>
 * @since  2015-04-19
 */

/**
 * A generic Factis module that represents the following set of triples :
 *
 *   -
 *
 * @return {type}  description
 */
function Generic() {

}

/**
 * Query the store for all facts with nothing specific (all facts)
 */
Generic.prototype.queryXXX = function(element) {

};

/**
 * Query the store for all facts with specific subject
 */
Generic.prototype.querySXX = function(element) {

};

// Query the store for all facts with specific predicate
Generic.prototype.queryXPX = function(element) {

};

// Query the store for all facts with specific object
Generic.prototype.queryXXO = function(element) {

};

// Query the store for all facts with specific subject and predicate
Generic.prototype.querySPX = function(element) {

};

// Query the store for all facts with specific predicate and object
Generic.prototype.queryXPO = function(element) {

};

// Query the store for all facts with specific subject and object
Generic.prototype.querySXO = function(element) {

};

// Query the store for all facts with specific subject predicate and object (get values of this fact)
Generic.prototype.querySPO = function(element) {

};

// When you export a module, just make sure it has "query" functions working.
module.exports = Hexastore;
