function getData(val: number | string) {
  if (typeof val === "string") {
    val.toUpperCase();
    return val;
  }

  return val + 5;
}

function provideId(val: string | null) {
  if (!val) {
    console.log("please provide id");
    return;
  }

  return val.toLowerCase();
}

// in operator in ts for narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Admin | User) {
  // use here in operator to confirm isAdmin exist in Admin or not
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// instanceof narrowing in typescript

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  }else{
    console.log(x.toUpperCase())
  }
}
