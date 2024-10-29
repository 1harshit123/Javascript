// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrypPassword(){
//         return `${this.password}`
//     }
// }

// const chai = new user('cahi', "chai@gmail.com", '1213')
// console.log(chai.encrypPassword());

//behind the scene
function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encrypPassword = function(){
    return `${this.username}`
}
const chai = new user('cahi', "chai@gmail.com", '1213')
console.log(chai.encrypPassword());
