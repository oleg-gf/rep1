function counterEffect(hitCount) {
let Array = [], subArray = [];
 for (let j = 0; j < hitCount.length; j++) {
   for (let i = 0; i <= Number(hitCount[j]); i++) {
     subArray.push(i);
   }
   Array.push(subArray);
   subArray = [];
 }
 return Array;
};
