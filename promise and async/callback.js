const startTime = Date.now();
const timeSpent = () => "       |   Time: " + String(Date.now() - startTime);

const boil = (base, time, callback = () => {}) => {
  console.log("boil ", base, timeSpent());
  setTimeout(() => {
    console.log(base + " is complete", timeSpent());
    callback(base);
  }, time);
};

const add_ingredients = (base, callback = () => {}) => {
  setTimeout(() => {
    console.log("add ingredients to ", base, timeSpent());
    callback(base);
  }, 1000);
};

const Pour = (base) => {
  setTimeout(() => {
    console.log("Poured ", base, timeSpent());
  }, 1000);
};

boil("water", 5000, (base) => {
  add_ingredients(base, Pour);
});
boil("milk", 3000, Pour);
