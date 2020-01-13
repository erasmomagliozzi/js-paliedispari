
var parolaNuova = [''];
var parola = prompt('Inserisci una parola');
console.log(parola);


for (var i = parola.length-1; i >= 0; i--) {
 parolaNuova[0] = parolaNuova[0] + parola[i];
}

 if (parolaNuova[0] == parola){
  console.log('Palindroma');
 }else{
  console.log('Non è palindroma');
 }
