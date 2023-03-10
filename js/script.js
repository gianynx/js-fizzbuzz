/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

for (let a = 1; a <= 100; a++) {
    // console.log(a);
    
    let game = document.getElementById('game');

    if (a % 3 === 0 && a % 5 === 0) {
        let fizzbuzz = document.querySelector('.fizzBuzz');
        fizzbuzz.innerHTML += `FizzBuzz`;
    } else if (a % 3 === 0) {
        let fizz = document.querySelector('.fizz');
        fizz.innerHTML += `Fizz`;
    } else if (a % 5 === 0) {
        let buzz = document.querySelector('.buzz');
        buzz.innerHTML += `Buzz`;
    } else {
        game.innerHTML += a;
    }
}