'use strict';

describe('array enumerator', function () {

	var ArrayEnumerator = require('../src/enumerators/array');
	var expect = require('chai').expect;

	it('cannot move next for empty enumerator', function () {

		var testObject = new ArrayEnumerator([]);
		expect(testObject.moveNext()).to.eql(false);

	});

	it('can move next when enumerator contains a single item', function () {

		var testObject = new ArrayEnumerator([1]);
		expect(testObject.moveNext()).to.eql(true);
	});

	it('move next returns false at end', function () {

		var testObject = new ArrayEnumerator([1]);
		testObject.moveNext();
		expect(testObject.moveNext()).to.eql(false);
	});

	it('can extract current value', function () {

		var testObject = new ArrayEnumerator([1]);
		testObject.moveNext();
		expect(testObject.getCurrent()).to.eql(1);
	});
});