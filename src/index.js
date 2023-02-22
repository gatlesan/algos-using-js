// all possible combinations

function pushf(ds, e) {
  let a = [];
  if (ds) {
    ds.forEach((element) => {
      a.push(element);
    });
    a.push(e);
  }
  return a;
}

function popf(ds, e) {
  let a = [];
  if (ds) {
    ds.forEach((element) => {
      if (element !== e) a.push(element);
    });
  }
  return a;
}

const a = [3, 2];
const len = a.length;
let ds = [];
function combinations(ind, ds) {
  if (ind >= len) {
    console.log(ds);
    return;
  }

  combinations(ind + 1, pushf(ds, a[ind]));
  combinations(ind + 1, popf(ds, a[ind]));
}

combinations(0, []);
