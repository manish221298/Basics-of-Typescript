
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunctionTest<T, U >(valOne: T, valTwo: U): object {
    return {
      valOne,
      valTwo,
    };
  }
  
  anotherFunctionTest("3", true)

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction("3", {connection: "dbcareer-finder", username: "manish123", password: "test123"})



interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}


function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}


