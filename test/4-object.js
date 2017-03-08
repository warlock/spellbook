/*eslint no-unused-vars: 0*/
/*global describe it*/

var chai = require('chai');
var sb = require('../spellbook');
var object = {
	"a": 1,
	"b": 2
};

describe('Object', function () {
	describe('sb.assing()', function () {
		var objCopy = sb.assign(object);
		it('Return object', function () {
			chai.assert.isObject(objCopy);
		});

		it('The same object', function () {
			chai.assert.notEqual(objCopy, object);
		});

		it('The same data', function () {
			chai.assert.notStrictEqual(objCopy, object, "The same values");
		});
	});

	describe('sb.clone()', function () {
		var objCopy = sb.clone(object);
		it('Return object', function () {
			chai.assert.isObject(objCopy);
		});

		it('The same object', function () {
			chai.assert.notEqual(objCopy, object);
		});

		it('The same data', function () {
			chai.assert.notStrictEqual(objCopy, object, "The same values");
		});
	});

	describe('sb.get()', function () {
		var a = {"a": {"b": ["c", "d"]}};
		it('Check get a string', function () {
			var res = sb.get(a, "a.b.0");
			chai.assert.isString(res);
		});

		it('Check get "c" string', function () {
			var res = sb.get(a, "a.b.0");
			chai.assert.equal(res, "c");
		});

		it('Check get a array', function () {
			var res = sb.get(a, "a.b");
			chai.assert.isArray(res);
		});

		it('Check get a object', function () {
			var res = sb.get(a, "a");
			chai.assert.isObject(res);
		});
	});

	describe('sb.extend()', function () {
		var obj = {"a": 1};
		var obj2 = {"b": 2};
		var objtest = {
			"a": 1,
			"b": 2
		};

		var res = sb.extend(obj, obj2);
		it('Returns object', function () {
			chai.assert.isObject(res);
		});

		it('Object is a fusion', function () {
			chai.assert.notStrictEqual(res, objtest);
		});

		it('Attribute \'a\' is equal', function () {
			chai.assert.equal(res.a, objtest.a);
		});

		it('Attribute \'b\' is equal', function () {
			chai.assert.equal(res.b, objtest.b);
		});
	});

	describe('sb.keys()', function () {
		var obj = {
			"a": 1,
			"b": 2,
			"c": 3,
			"d": 4
		};
		//chai.assert.strictEqual(sb.keys(obj), Object.keys(obj), 'Correct result')
		chai.assert.isArray(sb.keys(obj), 'is Array');
		chai.assert.lengthOf(sb.keys(obj), 4, 'Same length');
	});

	describe('sb.getKeys()', function () {
		var obj = {
			"a": 1,
			"b": 2,
			"c": 3,
			"d": 4
		};
		var res = sb.getKeys(obj, 'a');
		var res2 = sb.getKeys(obj, ['b','d']);

		it('Returns object', function () {
			chai.assert.isObject(res);
		});

		it('Object length', function () {
			chai.assert.lengthOf(Object.keys(res), 1);
		});

		it('Validate value', function () {
			chai.assert.equal(res.a, 1);
		});

		it('Returns object', function () {
			chai.assert.isObject(res2);
		});

		it('Object length', function () {
			chai.assert.lengthOf(Object.keys(res2), 2);
		});

		it('Validate values', function () {
			chai.assert.equal(res2.b, 2);
			chai.assert.equal(res2.d, 4);
		});
	});
});