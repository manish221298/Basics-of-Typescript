const fruits : string[] = []
fruits.push("manish")

// const num : number[] = []
const num : Array<number> = []
num.push(98)


type User = {
    name: string;
    phone: number;
    email?: string;   // optional with ? symbol
}

// const myUser : User[] = []
const myUser : Array<User> = [] // also do like this

myUser.push({name: "manish", phone: 876565})


export {}