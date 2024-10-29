const database = {
    username : "Harshit",
    Email : "harshitkumar100436@gmail.com",
    getData : function(){
        console.log(`username : ${this.username}`) //It will give error if we not use this in this example
    }
}

database.getData()

//Example about the problem of overwrite
function user(name, number, num){
    this.name = name;
    this.number = number;
    this.num = num;
    // return this //It is implicitaly predefine
}
// const user1 = user('harshit', 8297323442, 26)
// const user2 = user('Ujjwal', 844563249 ,90)
const user1 = new user('harshit', 8297323442, 26)
const user2 = new user('Ujjwal', 844563249 ,90)

console.log(user1); //here value is overwritten by the user2

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof constructor);
  // Expected output: true

    
