let score : number | string | boolean = 99

score= 4
score = "98"
score= true


////////////////////////////////////////////

type User = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number
}

let manish : User | Admin = {name: "manish", id: 234}

manish = {userName: "man@gmail.com", id: 234}

//////////////////////////////////////////////////////////

const arr : number[] | string[] = [2,5,7,9] //wrong it takes only string or number not both
const arr1 : (number | string)[] = [2,5,7,8, "hjt"]


export {}