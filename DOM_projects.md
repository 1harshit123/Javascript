# Small Javascript projects solution codes

## project link
[link](https://stackblitz.com/edit/stackblitz-starters-4bdtu2?file=index.html,styles.css,script.js)

## Color schema
```Javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});

```
# BMI calculator
```Javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
      results.innerHTML = `<span>${bmi}\nyou are Under Weight </span>`;
    } else if(bmi>24.9){
      results.innerHTML = `<span>${bmi}\nyou are Over Weight </span>`;
    } else{
      results.innerHTML = `<span>${bmi}\nyou are in normal range </span>`;
    }
  }
});


```

# Digital clock
```Javascript
const clock = document.getElementById('clock')

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toTimeString();
}, 1000)
```
# Guess the number 
```Javascript
const guesfield = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('.guesses');
const startover = document.querySelector('.resultParas');
let remaining = document.querySelector('.lastResult');
const info1 = document.querySelector('.lowOrHi');
let randomNumber = parseInt(Math.random() * 10 + 1);
console.log(`Random number is ${randomNumber}`);
console.log(guesfield);
const p = document.createElement('p');
let prevnum = [];
let remainGuess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(guesfield.value);
        console.log(guess);
        validate(guess);
    });
}

function validate(guess) {
    if (isNaN(guess)) {
        alert('Enter a number');
    } else if (guess < 1 || guess > 100) {
        alert('Enter a number in the range of 1 to 100');
    } else if (remainGuess === 11) {
        displayguess(guess);
        displaymessage(`Game over, the random number is ${randomNumber}`);
        endgame();
    } else {
        checkguess(guess);
        displayguess(guess);
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage('Wohhu!! You are the winner');
    } else if (guess < randomNumber) {
        displaymessage('Number is greater');
    } else {
        displaymessage('Number is lesser');
    }
}

function displaymessage(message) {
    info1.innerHTML = message;
}

function displayguess(guess) {
    guesfield.value = '';
    prevnum.push(guess);
    prevGuess.innerHTML += `${guess}, `;
    remainGuess++;
    remaining.innerHTML = `${11 - remainGuess}`;
}

function endgame() {
    guesfield.value = '';
    guesfield.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="ne">start new game</h2>`;
    playgame = false;
    startover.appendChild(p);
    newgame();
}

function newgame() {
    const newbutton = document.querySelector('#ne');
    newbutton.addEventListener('click', (e) => {
        prevGuess.innerHTML = '';
        prevnum = [];
        remainGuess = 1;
        remaining.innerHTML = `${11 - remainGuess}`;
        randomNumber = parseInt(Math.random() * 10 + 1);
        guesfield.removeAttribute('disabled');
        playgame = true;
        startover.removeChild(p);
    });
}

```
# Disco color
```javascript
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
      color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  
  let interval;
  function colorchange(){
    const color = randomColor();
    document.querySelector('body').style.backgroundColor = color;
    
    
    document.querySelectorAll('button').forEach((button) => {
        button.style.backgroundColor = color;
    });

    
  }
  document.querySelector('#start').addEventListener('click', ()=>{
      interval = setInterval(colorchange, 100)
    
    
  })
  
  document.querySelector('#stop').addEventListener('click', ()=>{
    console.log('clear');
    clearInterval(interval);
    interval = null;
   
  })
```
# Keyboard
```javascript
console.log('Project 5');
const insert = document.getElementById('insert');
//insert is here a blank div
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
      <div>
      <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code} </td>
  </tr>
</table>
      </div>
      `;
});

```

