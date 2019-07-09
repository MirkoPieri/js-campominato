// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var number = [], indovinati = 0, numeriInseriti, elemento = document.getElementById('mio_id'), elemento1 = document.getElementById('mio_id1');

function generated(max, min) {
  for (var i = 0; i < 16; i++) {
    var numeroGenerato = Math.floor(Math.random() * (max)) + min;
    number.push(numeroGenerato);
  }
}

generated(100, 1);

console.log(number);

var j = 1;
while (j <= 84) {
    numeriInseriti = parseInt(prompt("Inserisci un numero"));
    for (var i = 0; i < number.length; i++) {
      if (number[i] == numeriInseriti) {
        j = 85;
        elemento.innerHTML = "Hai perso";
        elemento1.innerHTML = indovinati;
      }
    }

    indovinati += 1;
}
