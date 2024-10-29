// class tew{
//     constructor(password, name, email){
//         this.password = password
//         this.name = name
//         this.email = email
//     }
//     get email(){
//         return //same as below get set
//     }
//     get password(){
//         return this._password.toUpperCase() // we are making here new variable and this varable overwrite the value of original variable
//     }

//     set password(value){
//         this._password = value
//     }

// }

// const hitesh = new tew("joker", "harshit", "harshit@gmail.com")
// console.log(hitesh.password);


// Old syntax 
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this.email = value
        }
    })
}


// Object method
const User2 = {
    _email: "Harshit@yahoo.com",
    _password: 13234234,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const fun = Object.create(User2)
console.log(fun.email);
