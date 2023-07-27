"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData(_a) {
    var name = _a.name, email = _a.email;
    console.log("name is name", name);
    return { name: name };
}
getData({ name: "manish", email: "mansh@gmail.com" });
