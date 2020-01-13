// Scrivi una funzione per capire se la parola è palindroma
var i = 0;
var palindroma = false;
var n = parseInt(prompt('Quante parole vuoi inserire?'));
console.log(n);

while(i < n){
 var parola = prompt('Inserisci una parola');
 console.log(parola);

 if((parola[0] && parola[1] && parola[2] == parola[3] && parola[4] && parola[5]) || (parola[0] && parola[1] == parola[2] && parola[3]) || (parola[0] && parola[1] == parola[3] && parola[4])){
   var palindroma = true;
   console.log('Questa parola è palindroma');
 }else{
   console.log('Questa parola non è palindroma');
 }

 i++;
}
