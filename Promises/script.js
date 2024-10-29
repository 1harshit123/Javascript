// const promiseOne = new Promise(function(resolve, reject){
//     //Do not synce task
//     // DB alls, cryptography, networks
//     setTimeout(function(){
//             console.log('Asynce task is complete')
//             resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('Async 2 resolved')
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setInterval(function () {
//         resolve({ username: "Harshit malviya", email: "Harshit@1234" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user)
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     let check = false
//     setInterval(function () {
//         if (!check) {
//             resolve({ username: "Harshit", password: "283" });
//         } else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)

// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);

// }).catch((error) => {
//     console.log(error);
// }).finally(()=>{console.log('promise is either resolved or rejected');
// })

// const promiseFive = new Promise(function (resolve, reject) {
//     let check = true
//     setInterval(function () {
//         if (!check) {
//             resolve({ username: "Javascript", password: "283" });
//         } else {
//             reject('ERROR: script went wrong')
//         }
//     }, 1000)

// })

// async function consumepromisefive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     } 
// };
// consumepromisefive();

// async function getUserFromAPI(){
//     try {
//         const response = await fetch('https://api.github.com/users')
//         const printResponse = await response.json()
//         console.log(printResponse);
        
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }
// getUserFromAPI()




// const usingThenMethord = new Promise(function(resolve, reject){
//     const data = fetch('https://api.github.com/users')
//     setInterval(function(){
//         if(data){
//             resolve(data);
//         } else{
//             reject();
//         }
//     }, 1000)
// })
// usingThenMethord.then((apiData)=>{
//     return apiData.json()
// }).then((data2)=>{
//     console.log(data2);
// }).catch((eroorr)=>{
//     console.log(eroorr);   
// })
//Another very simple syntax 
fetch('https://api.github.com/users').then(function (resonse) {

    return resonse.json();
}).then((responseInJson)=>{
    console.log(responseInJson);
    
}).catch( (params) => {
    console.log(params);
    
});

