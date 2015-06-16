var expect = require('chai').expect,
  checkPoint = require('../check-point-in-rectangle.js');

describe('check point in rectangle', function() {
  it('point is inside rectangle', function() {
    expect(
      checkPoint([5,5],[[0,0], [10,0], [10,10], [0,10]])
    ).to.be.true;
  })
  it('point is not inside rectangle', function() {
    expect(
      checkPoint([50,50],[[0,0], [10,0], [10,10], [0,10]])
    ).to.be.false;
  })
  it('point is inside rectangle (points order reverse)', function() {
    expect(
      checkPoint([5,5],[[0,0], [0,10], [10,10], [10,0]])
    ).to.be.true;
  })
  it('point is not inside rectangle (points order reverse)', function() {
    expect(
      checkPoint([50,50],[[0,0], [0,10], [10,10], [10,0]])
    ).to.be.false;
  })
});
