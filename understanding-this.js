"use strict";
const cl = console.log;
function lt(...x) {
  if (x) cl(...x, this, 0);
  else cl(this, 1);
}

cl("outer console.log", this);

lt("outer lt without explicit context");

this.lt("outer lt with explicit context as this");

let a = { x: 5, lt };
a.lt("lt with explicit context as a");

let b = { u: 5, lt };
b.lt("lt with explicit context as b");

let c = { jj: "chorna" };

// call bind apply
// these methods have super powers to change the context

//.call(context)
//.call(thisArgs)
b.lt();
b.lt.call();
b.lt.call(a);
b.lt.call(c);
// we can pass other parameters in the same order a a normal call just after mentioning the context
b.lt.call(c, "xyz");

// f(a,b,c,d) => f.call(thisArgs,a,b,c,d)
// apply is exactly the same just the list of args is passed as array

//bind

//bind returns a funtion
// funtion returned by bind is bound to a given context/thisArg
// bind has an upper hand over call and apply i.e. call and apply will have no effect over a bound function
// new opreator has an upper hand over bind as by the virtue of how new opreator works

let boundlt = lt.bind();
boundlt("empty bind");

boundlt = lt.bind(a);
boundlt("bounded to a");

boundlt = a.lt.bind(c);
boundlt("bounded to c");

var alt = a.lt;

alt();
this.alt();

var balt = a.lt.bind(a);

balt();
balt.call(b);
balt.call(c);

// how default agrs are bound using bind

balt = a.lt.bind(a, 1, 2, 3);
balt();

balt(4, 5, 6);

balt.call(null, 6, 7, 8);

// new opreator

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  return this;
}
let Pointbind = Point.bind(b);
const pointa = { x: 5, y: 7 }; // statement 1
const pointb = Point.call({}, 5); // statement 2
cl("here is point b", pointb);
// we can leverage this type of function to create objects that has a pre defined blue print
// this is why these type of functions are called constructor functions
// we can always use this way (statement 2) of calling constructors but
// 1. it is not very convenient
// 2. it is prone to some errors
// Now if we want to pass an empty object as context every time to a constructor function
// ideally we should have some easier syntax to it
const pointc = new Point(5, 7);
cl("this is point c", pointc);
// so we see here is some thing easy that we can do to achieve the same result as above
// what new keyword do is it creates an empty object and calls the funtion next to it
// with the empty object as the context

const pointd = Pointbind.call({}, 5); // will give undesired object as point bind is bound to context b
const pointe = new Pointbind(6, 7); // this will work the way we wanted
cl("this is point d", pointd);
cl("this is point e", pointe);

// lets try to orverride bind with a bind and see what happens

const pointf = Pointbind.bind({})(5, 6);
cl("this is point f", pointf); // bind also can not over ride the older bind here object b is printed

// one more thing to add constructor functions need not return the "this" object when used with new opreator
function Cordinate(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
const cordinatea = Cordinate.call({}, 5);
cl("this is cordinate a", cordinatea);
const cordinateb = new Cordinate(5, 7);
cl("this is cordinate b", cordinateb);
// so the neqw opreator itself returns the newly created object and we are not dependent
//on the function to return it;

// what if the funtion is not returning the "this" object but a different value
const CordinateTest = function (x = 0, y = 0) {
  this.x = x;
  this.y = y;
  return 0;
};
const cordinatec = new CordinateTest(5, 7);
cl("this is cordinate c", cordinatec);
// so new is stripping the return value fro the function and implicitly returning the newly created object
// one more thing we can not call new keyword over an arrow function

// lets now look at ()=>{} arrow funtions
// Although ()=>{} can wind us into long discussions we can limit to its relationship with "this" key word now
// arrow funtions are bound to the context they are defined in  alternatively
// Arrow functions establish "this" based on the scope the Arrow function is defined within.(from mdn)
// we can think it like ()=>{} is somewhat equivalent to writing (function(){}).bind(this)
//(please note I have used the keyword somewhat) as bind is not as strict as ()=>{}
// as we see new opretor can override the effect of bind but it gives error if we try to use ()=>{}
//with new opreator.
const f = (x, y) => {
  this.x = x;
  this.y = y;
  return this;
};

let fcall = f.call(a, 4, 5);
cl("here is the fcall", fcall);

let fapply = f.apply(a, [4, 5]);
cl("here is the fapply", fapply);

let fbind = f.bind(a)(4, 5);
cl("here is the fbind", fbind);

try {
  let ferr = new f(4, 5);
} catch (e) {
  cl(e); // TypeError: f is not a constructor
}

// can read about new.target here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
