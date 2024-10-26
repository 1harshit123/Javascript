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
