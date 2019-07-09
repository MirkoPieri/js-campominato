// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var number = [], indovinati = 0, numeriInseriti;

function generated(max, min) {
  for (var i = 0; i < 16; i++) {
    var numeroGenerato = Math.floor(Math.random() * (max)) + min;
    number.push(numeroGenerato);
  }
}

generated(100, 1);

console.log(number);

  var h = 0;

  for (var i = 0; i < 84; i++) {
    h++;
  numeriInseriti = parseInt(prompt("Inserisci un numero"));

  for (var j = 0; j < number.length; j++) {

    if (numeriInseriti == number[j]) {
        console.log("Hai perso");
        i = 84;
    }
  }
  console.log("NUMERI INDOVINATI  " + h);



  }
