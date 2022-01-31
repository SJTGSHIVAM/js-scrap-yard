const startTime = Date.now();
const timeSpent = () => "       |   Time: " + String(Date.now() - startTime);

const boil = (base) =>
  new Promise((resolve, reject) => {
    console.log("boil ", base, timeSpent());
    setTimeout(() => {
      console.log(base + " is complete", timeSpent());
      resolve(base);
    }, 8000);
  });

const add_ingredients = (base) => {
  console.log("add ingredients to ", base, timeSpent());
};

(async () => {
  let base = boil("water");
  boil("milk");
  add_ingredients(await base);
})();
