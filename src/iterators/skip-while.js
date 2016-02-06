'use strict';

var assert = require('chai').assert;
var validateIterator = require('./validate');

//
// Iterator that skips elements while the predicate returns true.
//
var SkipWhileIterator = function (iterator, predicate) {

	validateIterator(iterator);
	assert.isFunction(predicate);

	var skipped = false;
	return {
		moveNext: function () {
			for (;;) {
				if (!iterator.moveNext()) {
					return false;
				}

				if (skipped) {
					// Already skipped.
					return true;
				}

				// Skipping until predict returns false.
				if (!predicate(iterator.getCurrent())) {
					skipped = true;
					return true;
				}
			}
		},

		getCurrent: function () {
			return iterator.getCurrent();
		},
	};
};

module.exports = SkipWhileIterator;