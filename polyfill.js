//Array.map.filter.foreach.reduce
Array.prototype.smap = function (work, context) {
  let ret = [];

  for (let [e, i] of this.entries()) {
    ret.push(work.call(context, e, i, [...this]));
  }
  return ret;
};

[1, 2, 3].smap((i) => i * 2);

Array.prototype.smap = function (work) {
  let ret = [];
  for (let [e, i] of this.entries()) {
    ret.push(work(e, i));
  }
  return ret;
};

let obj1 = {
  a: 7,
  m: function () {
    console.log(this.a);
  },
};
let obj2 = { a: 6 };
obj1.m(); //  7
obj1.m.call(obj2); // 6
obj1.m.apply(obj2, [x, y]); // 6

let fun = ob1.m.bind(obj2);
