describe("fizzBuzz", function() {
  var num_one = 1;
  var num_three = 3;
  var num_fifteen = 15;
  var num_five = 5;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('prints Fizz if the number is divisible by 3', function() {
    expect(fizzBuzz.calculate(num_three)).toEqual('Fizz');
  });

  it('prints Buzz if the number is divisible by 5', function() {
    expect(fizzBuzz.calculate(num_five)).toEqual('Buzz');
  });

  it('prints FizzBuzz if the number is divisible by 3 and 5', function() {
    expect(fizzBuzz.calculate(num_fifteen)).toEqual('FizzBuzz');
  });

  it('prints the number if it is not divisible by 3 or 5', function() {
    expect(fizzBuzz.calculate(num_one)).toEqual('1');
  });
});
