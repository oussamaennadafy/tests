let array1 = [1, 8, 4, 8, 6, 30];
let array2 = [1, 5, 1, 4, 8, 4];


const dup = (arr1, arr2) =>
{
 const duplicates = []
 arr1.forEach(num =>
 {
  if (arr2.includes(num)) {
   duplicates.push(num)
  }
 })
 return [...new Set(duplicates)]
}

console.log(dup(array1, array2));