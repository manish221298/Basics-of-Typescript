// generics are basically use when we are working with multiple data types (string, number, boolean, ...etc) and re-use the component


const score: Array<number> = []
const fruits: Array<string> = []

function identityOne(val: string | number | boolean): string | number | boolean {
    return val
}

function identityTwo(val: any) : any{
    return val
}


// Generics type in type-script

function identityThree<Type>(val: Type): Type{
    return val
}

identityThree({name: "manish", phone: 921548547, isSelected: true})

//This syntax and above syntax both are same
function identityFour<T>(val: T) : T {
    return val
}

interface Bootle {
    brand: string,
    size: number
}

identityFour<Bootle>({brand: "milton", size: 25})


function getSearchProduct<T>(products: T[]): T{
    return products[5]
}  

// generics syntax with arrow functions

const getMoreSearchProducts = <T,>(products: T[]) : T => {
    return products[2]
}