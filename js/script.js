/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

for (let a = 1; a <= 100; a++) {
    // console.log(a);
    
    let game = document.getElementById('game');

    if ((a % 3 === 0) && (a % 5 === 0)) {
        game.innerHTML += `
        <div id="fizzbuzz" class="square">
        <div class="position">FizzBuzz</div>
        </div>
        `;
    } else if (a % 3 === 0) {
        game.innerHTML += `
        <div id="fizz" class="square">
        <div class="position">Fizz</div>
        </div>
        `;
    } else if (a % 5 === 0) {
        game.innerHTML += `
        <div id="buzz" class="square">
        <div class="position">Buzz</div>
        </div>
        `;
    } else {
        game.innerHTML += `
        <div id="a_variable" class="square">
        <div class="position">${a}</div>
        </div>
        `;
    }
}