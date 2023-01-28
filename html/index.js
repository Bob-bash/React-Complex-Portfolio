// let count='0:21'
// let last=Number.parseInt(count.split(':')[1]),first=Number.parseInt(count.split(':')[0])
// setInterval(() => {
//     if(last==0){
//         last=60
//         first--
//     }else{
//         last--
//     }
//     if(last.toString().split('').length==1){
//         if(first.toString().split('').length==2){
//             document.querySelector(".count").textContent=`${first}:0${last}`
//         }
//         if(first.toString().split('').length==1){
//             document.querySelector(".count").textContent=`0${first}:0${last}`
//         }
//     }
//     if(last.toString().split('').length==2){
//         if(first.toString().split('').length==2){
//             document.querySelector(".count").textContent=`${first}:${last}`
//         }
//         if(first.toString().split('').length==1){
//             document.querySelector(".count").textContent=`0${first}:${last}`
//         }
//     }
// }, 1000);


// fetch('https://geolocation-db.com/json/8d382830-904e-11ed-97d5-0de223189653')
// .then(res=>{
//     res.json()
// }).then(data=>{console.log(data)})
// async function getdata(){
//     const res=await fetch('https://geolocation-db.com/json/8d382830-904e-11ed-97d5-0de223189653')
//     const data=await res.json()
// }
// getdata()
// Object.assign({},{hell:'wang'})
// console.log(Object.assign({},{hell:'wang'}));

// new Array(3).fill('2')
// console.log(new Array(3));
// [1,23,4].slice(1,2)
// console.log([1,23,4].slice(1,2));
let arr1=[
    {name:'Tom',price:123},    
    {name:'Tom1',price:100},    
    {name:'Tom2',price:20},    
    {name:'Tom3',price:50}    


]
console.log(arr1.reduce((pre,cur)=>{ return pre+cur.price},0));
let shoppingCart = [
    {
      product: 'phone',
      qty: 1,
      price: 500,
    },
    {
      product: 'Screen Protector',
      qty: 1,
      price: 10,
    },
    {
      product: 'Memory Card',
      qty: 2,
      price: 20,
    },
  ];
  let total = shoppingCart.reduce(function (pre, cur) {
    return pre + cur.price;
  }, 0);
  


  console.log([...new Set([{name:'bob'},{name:'bob'}])]);
