console.log('principi.js loaded');

let numbers = document.querySelector('#numbers');

for(let i = 1; i<=100; i++){
   if(i % 3 == 0 && i % 5 == 0){
      let p1 = document.createElement('p')
      p1.innerText = 'FizzBuzz';
      document.getElementById('numbers').append(p1);
   }
   else if(i % 3 == 0){
      let p1 = document.createElement('p')
      p1.innerText = 'Fizz';
      document.getElementById('numbers').append(p1);
   }
   else if (i % 5 == 0){
      let p1 = document.createElement('p')
      p1.innerText = 'Buzz';
      document.getElementById('numbers').append(p1);
   }
   else{
      let p1 = document.createElement('p')
      p1.innerText = i;
      document.getElementById('numbers').append(p1);
   }
}

