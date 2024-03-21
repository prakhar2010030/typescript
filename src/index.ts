// variables
let a = 10;
// console.log(typeof a);
const d: string = "prakhar";
let c: string;

// a = "sdkfj"  // will give error as string is being assigned to number type

let b; // default type "any"

// union varible

let surname: string | number;

surname = "rawat";
surname = 3;
// surname = true; gives an error because its boolean isn't its type.

// //return type :void
// const funct = (n:number, m:number) => {};

// //return type :number
const funct = (n: number, m: number): number => {
  return n * m;
};

// type aliases
type addTwoNumbers = (a: number, b: number) => number;

const funct1: addTwoNumbers = (s, t) => {
  return s * t;
};

// Array
let ar: number[];
const arr: number[] = [2, 354];
const arr2: (string | number)[] = [2, "sdfsdf"];

// using generics
let arr3: Array<string | number>;
const arr4 = ["dfssdf", 234];
const arr5: Array<string | number> = ["dfssdf", 234];

//tuple
const arr6: [number, number] = [2, 3];
// const arr6: [number, number] = [2, 3,6]; will give an error as input value exceeds 2 value

// objects

const obj = {
  height: 34,
  weight: 54,
};

type obj1 = {
  height1: number;
  weight1: number;
};

const obj1: obj1 = {
  height1: 34,
  weight1: 42,
};

//declaring optional parameters
type obj2 = {
  height: number;
  weight: number;
  gender?: boolean;
};

const obj2: obj2 = {
  height: 34,
  weight: 43,
};
const obj3: obj2 = {
  height: 34,
  weight: 43,
  gender: false,
};

// interfaces

interface obj {
  height: number;
  weight: number;
  gender?: boolean;
}

interface newObj extends obj {
  scholarShip: boolean;
}

const aman: newObj = {
  height: 200,
  weight: 75,
  scholarShip: false,
};

// Note :- types can't be extended while interfaces can

// functions
type functType = (...n: number[]) => number[];

const funct2: functType = (...n) => {
  return n;
};

// console.log(funct2(2, 3, 46, 66));

//default parameter
const funct3 = (n: number, m: number, l: number = 20) => {
  return n * m * l;
};

// console.log(funct3(2, 3));

type functType1 = (n: number, m: number, l?: number) => number;

const funct4: functType1 = (n, m, l = 20) => {
  if (typeof l === "undefined") return n * m;

  return n * m * l;
};

// console.log(funct4(5, 4));

//with function keyword
function funct6(n: number): number {
  return n;
}

//functions with objects
interface Product {
  name: string;
  stock: number;
  price: number;
  readonly id: string; // id can't be changed further
}

type productType = (product: Product) => void;

const getData: productType = (product) => {
  product.name = "laptop";
  // product.id = "sdfjklsdfj"   won't allow because id is read only
  console.log(product);
};

const productOne: Product = {
  name: "phone",
  stock: 45,
  price: 45454,
  id: "sdkfsldkfjsdl",
};

getData(productOne);
