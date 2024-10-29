class user{
    constructor(username){
        this.username = username;
        
    }
    static encrypPassword(){
        return `${this.password}` //Here static keyword prevent the inheritance of following function
    }
}

class user2 extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addName(){
        console.log(`A new name is added here ${this.username}`);
        
    }
}

const chai = new user2('cahi', "chai@gmail.com", '1213')
chai.addName()