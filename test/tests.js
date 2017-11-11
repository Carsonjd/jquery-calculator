const expect = chai.expect


describe('evaluate', function(){
  it('is a function', function(){
    expect(evaluate).to.be.a('function')
  });
  it('divides numbers', function(){
    expect(evaluate([9,3],'÷')).to.equal(3)
  });
  it('mulitplies numbers', function(){
    expect(evaluate([9,3],'x')).to.equal(27)
  });
  it('adds numbers', function(){
    expect(evaluate([9,3],'+')).to.equal(12)
  });
  it('subtracts numbers', function(){
    expect(evaluate([9,3],'-')).to.equal(6)
  });
});
