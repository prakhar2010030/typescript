"use strict";
// variables
let a = 10;
// console.log(typeof a);
const d = "prakhar";
let c;
// a = "sdkfj"  // will give error as string is being assigned to number type
let b; // default type "any"
// union varible
let surname;
surname = "rawat";
surname = 3;
// surname = true; gives an error because its boolean isn't its type.
// //return type :void
// const funct = (n:number, m:number) => {};
// //return type :number
const funct = (n, m) => {
    return n * m;
};
const funct1 = (s, t) => {
    return s * t;
};
// Array
let ar;
const arr = [2, 354];
const arr2 = [2, "sdfsdf"];
// using generics
let arr3;
const arr4 = ["dfssdf", 234];
const arr5 = ["dfssdf", 234];
//tuple
const arr6 = [2, 3];
// const arr6: [number, number] = [2, 3,6]; will give an error as input value exceeds 2 value
// objects
const obj = {
    height: 34,
    weight: 54,
};
const obj1 = {
    height1: 34,
    weight1: 42,
};
const obj2 = {
    height: 34,
    weight: 43,
};
const obj3 = {
    height: 34,
    weight: 43,
    gender: false,
};
const aman = {
    height: 200,
    weight: 75,
    scholarShip: false,
};
const funct2 = (...n) => {
    return n;
};
// console.log(funct2(2, 3, 46, 66));
//default parameter
const funct3 = (n, m, l = 20) => {
    return n * m * l;
};
const funct4 = (n, m, l = 20) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
// console.log(funct4(5, 4));
//with function keyword
function funct6(n) {
    return n;
}
const getData = (product) => {
    product.name = "laptop";
    // product.id = "sdfjklsdfj"   won't allow because id is read only
    console.log(product);
};
const productOne = {
    name: "phone",
    stock: 45,
    price: 45454,
    id: "sdkfsldkfjsdl",
};
getData(productOne);
