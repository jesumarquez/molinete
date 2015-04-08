var sut = require("../controllers/hello"),
expect = require("expect.js");

describe("Hello World using TDD", function(){
  it("Given nothing then Hello is returned", function(){
    expect(sut.helloer()).to.be.equal("Hello");
  });
  it("Given Mike then Hello Mike is returned", function(){
    expect(sut.helloer("Mike")).to.be.equal("Hello Mike");
  });
});