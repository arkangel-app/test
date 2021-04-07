const n = 15;
const f = "fiz";
const b = "buz";
const fb = f + "-" + b;
var index;

for (index = 1; index <= n; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log(fb);
  } else if (index % 3 === 0) {
    console.log(f);
  } else if (index % 5 === 0) {
    console.log(b);
  } else {
    console.log(index);
  }
}
