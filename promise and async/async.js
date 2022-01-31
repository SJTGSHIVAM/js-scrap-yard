const startTime = Date.now();
const timeSpent = () => "       |   Time: " + String(Date.now() - startTime);

const boil = async (base) => {
  console.log("boil ", base, timeSpent());
  setTimeout(async () => {
    console.log(base + " is complete", timeSpent());
    return base;
  }, 8000);
};

const add_ingredients = (base) => {
  console.log("add ingredients to ", base, timeSpent());
};

(async () => {
  let base = boil("water");
  boil("milk");
  add_ingredients(await base);
})();
