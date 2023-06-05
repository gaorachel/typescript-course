const arrNums: Array<number> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "hacked";

const btn = document.querySelector<HTMLButtonElement>("#btn")!;
console.dir(btn);
// btn.

// class Array {
//     length;

//     filter() {

//     }
// }

function identity<T>(item: T): T {
  return item;
}

identity<number>(111);
identity<string>(111); // wrong

// Multiple types
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["xiaoxiang", "xiaotu"] });
console.log(comboObj);

console.log(merge({ name: "this is correct" }, "this is wrong")); // extends type sets up type constraints, so in this case, ths is wrong cannot be a string but must be an object
console.log(merge({ string1: "this is correct" }, { string2: "this is correct as well" }));

// set up default type parameters - same as other default params
function makeEmptyArray1<T>(): T[] {
  return [];
}

function makeEmptyArray2<T = number>(): T[] {
  return [];
}

const arr1 = makeEmptyArray1();
const arr2 = makeEmptyArray2();
const arr3 = makeEmptyArray2<string>();
