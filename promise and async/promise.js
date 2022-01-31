const startTime = Date.now();
const timeSpent = () => "       |   Time: " + String(Date.now() - startTime);

const boil = (base, time, rej) => {
  return new Promise((resolve, reject) => {
    console.log("boil ", base, timeSpent());
    setTimeout(() => {
      console.log(base + " is complete", timeSpent());
      if (rej) {
        reject("error " + base); //return statement
      }
      resolve(base);
    }, time);
  });
};

const add_ingredients = (base) => {
  return new Promise((resolve, reject) => {
    console.log("add ingredients to ", base, timeSpent());
    setTimeout(() => {
      resolve(base);
    }, 1000);
  });
};

const Pour = (base) => {
  setTimeout(() => {
    console.log("Poured ", base, timeSpent());
  }, 1000);
};

boil("water", 5000, false)
  .then((base) => {
    add_ingredients(base);
  })
  .then(console.log)
  .catch((e) => {
    console.log(e);
  });

// boil("milk", 3000);
