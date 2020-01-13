

var parolaUtente = prompt('Inserisci una parola');

var parolaNuova = rovesciaParola(parolaUtente);



 if (parolaNuova== parolaUtente){
  console.log('Palindroma');
 }else{
  console.log('Non è palindroma');
 }

function rovesciaParola (parola){
  var parolaReverse = [''];
  for (var i = parola.length-1; i >= 0; i--) {
   parolaReverse += parola[i];
  }
  return parolaReverse;
}
