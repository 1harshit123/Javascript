function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //here use of this keyword is nessacary to get the all values of context of SetUsername function

    //Call will simply transfer all the contect to the global contect of function which is called using call keyword
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);