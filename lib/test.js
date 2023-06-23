// npx mocha lib/test.js 
// npm install mocha chai --save-dev

const { assert } = require('chai');

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.strictEqual(`${Math.pow(2, 3)}`.toString(), '8');
  });
});