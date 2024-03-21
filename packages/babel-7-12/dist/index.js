"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url.js");

(function () {
  const p = new URLSearchParams({
    k1: 'v1'
  });
  console.log(p);
})();

(function () {
  const c = Object.create({
    title: 'C'
  });
  console.log(c);
})();

(function () {
  function Parent(title) {
    this.title = title;
    this.colors = ['red', 'orange', 'green'];
  }

  ;
  Parent.prototype.skill = 'run';

  function Child() {
    Parent.call(this, 'Child');
    this.say = 'Hi!';
  }

  ;
  Child.prototype = Object.create(Parent.prototype);
  const c = new Child();
  console.log(c);
  console.log(c.skill);
  console.log(Child.prototype.constructor);
})();

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
      console.log("This is ".concat(this.name, "."));
    }

  }

  const c = new Child('Instance of Child');
  console.log(c.speak());
})();