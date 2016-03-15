class Foo {
  constructor (firstName) {
    this.firstName = firstName;
  }

}

var bar = new Foo (`bar`);

console.log(bar.firstName);

// console.log (`Is bar a Foo?`) bar instanceof foo;
