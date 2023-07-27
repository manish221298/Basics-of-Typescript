// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   phone: number;
//   isValid: boolean;
// };

// let myUser: User = {
//   _id: "123456",
//   name: "manish",
//   email: "man@gmail.com",
//   phone: 123456,
//   isValid: true,
// };

// myUser.email = "mn@gmail.com"
// console.log("uhjfbv", myUser.email)


// Combine multiple types in single type

type CardNumber = {
    cardNumber: string
}

type CardDate = {
    cardDate: string
}

type CardDetails = CardNumber & CardDate & {
    cvv: number
}




export {};
