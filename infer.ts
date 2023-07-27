// here i need to declare its time because if i not declared
// then bydefault it inferred the type any that is not the good practice

// Variable 'name' implicitly has an 'any' type, but a better type may be inferred from usage.
// let name; any type

let name: string;

function getName() {
  return "manish";
}

name = getName();

export {};
