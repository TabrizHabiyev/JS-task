
// Find
const a = [45, 4, 9, 16, 25];
function Find(find, element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] == find) {
            return find;
        } else {
            return undefined;
        }
    }
}
let result = Find(45, a);
console.log(result);
// Find son



// Map 
const b = [1, 2, 3, 4, 5];
function Mapp(arr, value) {
    let  NewArr=[];
    for (let i = 0; i < arr.length; i++) 
    {
      NewArr.push(arr[i]+value);
    }
    return NewArr;
}
console.log(Mapp(b,2))
//Map Son




//Filter
const x = [2, 3, 18, 0];
let newArr = [];
 for (let i = 0; i < x.length; i++) {
    if (x[i] >= 3) {
       newArr.push(x[i]);
    }
 }
 console.log(newArr);
//Filter son



//reduce
const p = [2, 3, 18, 0];
 let sum  =0;
  for (let i = 0; i < p.length; i++) {
      sum+=p[i];
  }
  console.log(sum);
//reduce son


//every
const h = [2, 3, 18, 0];
let count=0;
for (let i = 0; i < h.length; i++) 
{
   if (23>h[i]) 
   {
       count++;
   }
    if (i+1 == h.length) {
       if (count==h.length) {
           console.log(true);
       }else
       {
           console.log(false);
       }
    }
}
//every son


//Task 1
let word = "Tabriz Habiyev";
function reverse(s){
  return s.split("").reverse().join("")
}
console.log(reverse(word));
//Task 1 son