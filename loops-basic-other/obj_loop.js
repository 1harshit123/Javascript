const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for(const key in myobj){
    console.log(key) //It will print only keys of object
    console.log(myobj[key])//to access values
}
// If we apply this for loop in array it will also give keys(index) of array 

// Map cannot be iterable through this loop

