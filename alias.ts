
// type alias in ts

type User = {
  name: string;
  email:string;
  phone:number;
}

function CreateUser(user: User):User{
  return {name: "manish", email: "man@gmail.com", phone:1245374}
}

CreateUser({name: "manish", email: "man@gmail.com", phone:1245374})

export {}