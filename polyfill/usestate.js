// note this is an abstract idea no where close to actual polyfill
let val;
// let lock = false;
const useState = (init) => {
  init = typeof init === "function" ? init() : init;
  if (val !== init) {
    val = init;
    render();
  }
  return [
    val,
    (newVal) => {
      val = newVal;
    },
    // () => {
    //   console.log(val);
    // },
  ];
};

const render = () => {
  const [myState, setState] = useState(() => 44);
  //   const [myState, setState, printState] = useState(() => 44);
  console.log("===================");
  console.log(myState);
  //   printState();
  setState(22);
  //   printState();
  console.log(myState);
};
render();
