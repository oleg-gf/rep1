const CountingSort = (a, k) => {
  let result = [];
  let c = [];
  for (let i = 0; i <= k; c[i++] = 0); 
  for (let j = 0; j < a.length; j++) {
     c[a[j]] = c[a[j]] + 1;
  }
   for (let i = 1; i <= k; i++) {
    c[i] = c[i] + c[i-1];
  }
  console.log(c);
    for (let j = 0; j < a.length; j++) {
        result[c[a[j]]] = a[j];
     c[a[j]] = c[a[j]] - 1;
     console.log(result, c[a[j]]);
  }
  result = result.filter(x => x);
  return result;
};

CountingSort([5,3,4,1,3,3,4,2], 5);
