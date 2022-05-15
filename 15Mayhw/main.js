//EVERY()

// class MyCollection{
//     constructor(){
//         this.elements = arguments;
//     }
//     everyC = function (callback) {
//         for (let i = 0; i < this.elements.length; i++) {
//             if (callback(this.elements[i])) {
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         }
//     }
// }
// let myC = new MyCollection(1,2,3,4,5,6,7,8);
// let res = myC.everyC(x=>{
//     return x > 0;
// })
// console.log(res);

// indexOf()

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let indexOfC = function (value) 
// {
//     for (let i = 0; i < fruits.length; i++) 
//     {
//         if (fruits[i] == value) 
//         {
//             return i;    
//         }
//     }
// }
// let res = fruits.indexOf("Orange");
// console.log(res);

//lastIndexOf

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let indexOfC = function (value) 
// {
//     for (let i = fruits.length-1; i >= 0; i--) 
//     {
//         if (fruits[i] == value) 
//         {
//             return i;    
//         }
//     }
// }
// let res = fruits.indexOf("Apple");
// console.log(res);

//Find()

// class MyCollection
// {
//     constructor()
//     {
//         this.elements = arguments;
//     }
//     findC = function (callback) 
//     {
//         for (let i = 0; i < this.elements.length; i++) 
//         {
//             if (callback(this.elements[i])) 
//             {
//                 return this.elements[i];
//             }
//         }
//     }
// }
// let collection = new MyCollection(1,2,3,4,5,6);
// let res = collection.findC(x => {
//     return x > 2;
// })
// console.log(res);

//includes()

// class MyCollection{
//     constructor(){
//         this.elements = arguments;
//     }
//     includesC = function (value) 
// {
//     for (let i = 0; i < fruits.length; i++) 
//     {
//         if (fruits[i] == value) 
//         {
//             return true;    
//         }
//         else
//         {
//             return false;
//         }
//     }
// }
// }
// let myC = new MyCollection("Banana", "Orange", "Apple", "Mango");
// let res = myC.includesC("Banana");
// console.log(res);





