console.log('principi.js loaded');

let numbers = document.querySelector('#numbers');

for(let i = 1; i<=100; i++){
   if(i % 3 == 0 && i % 5 == 0){
      let div1 = document.createElement('div')
      div1.innerText = 'FizzBuzz';
      document.getElementById('numbers').append(div1);
      div1.classList.add("fizzbuzz");
   }
   else if(i % 3 == 0){
      let div1 = document.createElement('div')
      div1.innerText = 'Fizz';
      document.getElementById('numbers').append(div1);
      div1.classList.add("fizz");
   }
   else if (i % 5 == 0){
      let div1 = document.createElement('div')
      div1.innerText = 'Buzz';
      document.getElementById('numbers').append(div1);
      div1.classList.add("buzz");
   }
   else{
      let div1 = document.createElement('div')
      div1.innerText = i;
      document.getElementById('numbers').append(div1);
      div1.classList.add("number");
   }
}

