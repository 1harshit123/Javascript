const obj = {
    name : "Baba ka dhaba",
    price : 1200,
    isAvailable : true
}


for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
    
}
const desvriptor = Object.getOwnPropertyDescriptor(obj, "name")
Object.defineProperty(obj, "name", {
    writable : false,
    enumerable : false
})
console.log(desvriptor);

