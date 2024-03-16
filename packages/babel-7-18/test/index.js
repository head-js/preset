console.log('test.js');

(function () {
  const c = Object.create({ title: 'C' });
  console.log(c);
}());

(function () {
  function Parent(title) {
    this.title = title;
    this.colors = [ 'red', 'orange', 'green' ];
  };
  Parent.prototype.skill = 'run';

  function Child() {
    Parent.call(this, 'Child');
    this.say = 'Hi!';
  };
  Child.prototype = Object.create(Parent.prototype);
  const c = new Child();
  console.log(c);
  console.log(c.skill);
  console.log(Child.prototype.constructor);
}());

// es2015, es6
(function () {
  function multiply(a, b = 1) {
    return a * b;
  }
  const res = multiply(3);
  console.log(res);
}());

(function () {
  class Parent {
    name = 'Parent';

    constructor(name) {
      this.name = name;
    }
  }

  const p = new Parent('Instance of Parent');
  console.log(p);

  class Child extends Parent {
    constructor(name) {
      super(name);
    }

    speak() {
      console.log(`This is ${this.name}.`);
    }
  }

  const c = new Child('Instance of Child');
  console.log(c.speak());
}());

(function () {
  const m = new Map();
  m.set('k1', 'v1');
  m.set('k2', 'v2');
  console.log(m.entries());

  const s = new Set();
  s.add(1);
  s.add(2);
  s.add(2);
  console.log(s.entries());
}());

// es2016, es6.1
(function () {
  const arr = [1, 2, 3];
  const res = arr.includes(4);
  console.log(res);
}());

(function () {
  const a = 2;
  const b = 3;
  const res = a ** b;
  console.log(res);
}());

// es2017, es6+
(function () {
  const a = '3';
  const res = a.padStart(8, 0);
  console.log(res);
}())

(function () {
  function f(a, b, c,) {
    console.log(a, b, c);
  }
}());

// misc
(function () {
  const encoded = btoa('Hello World');
  const decoded = atob(encoded);
}());

(function () {
  const controller = new AbortController();
  const signal = controller.signal;
  console.log(signal.aborted);
  controller.abort('Hello World');
  console.log(signal.aborted);
  console.log(signal.reason);
}());
