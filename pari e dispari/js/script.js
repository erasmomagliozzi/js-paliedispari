// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).
var evenOdd = prompt('Scegli Pari o Dispari');
console.log(evenOdd);

do {
  var numero = parseInt(prompt('Scegli un numero da 1 a 5'))
  console.log(numero);
} while(numero > 5 || numero == 0)

var random = Math.floor(Math.random() * (5 - 1) ) + 1;
console.log(random);

var somma = 0;
somma = numero + random;
console.log(somma);
if(somma % 2 == 0 && evenOdd == pari){
  alert("L'utente ha vinto");
}else {
  alert("L'utente ha perso");
}
