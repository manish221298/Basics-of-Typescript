interface User {
    name: string
    email: string
    phone: number
    isPaid: boolean
}

interface User {  // we can say re-opening of the interface
    gitId: string
}

// const manish: User = {
//     name: "manish",
//     email: "man@gmail.com",
//     phone: 123456,
//     isPaid: true,
//     gitId: "hbgj458"
// }



// inheritance of interface
interface Admin extends User {
    isActive: boolean
}


const manish: Admin = {
    name: "manish",
    email: "man@gmail.com",
    phone: 123456,
    isPaid: true,
    gitId: "hbgj458",
    isActive: true
}