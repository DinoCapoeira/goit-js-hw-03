function slugify(title) {
  const lowCase = title.toLowerCase();
  const splitEm = lowCase.split(" ");
  const reJoinEm = splitEm.join("-");
  return reJoinEm;
}

console.log(slugify("Array for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
