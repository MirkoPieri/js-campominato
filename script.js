// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var number = [], indovinati = 0, numeriInseriti, elemento = document.getElementById('mio_id'), elemento1 = document.getElementById('mio_id1');

function generated(max, min) {
  for (var i = 0; i < 3; i++) {
    var numeroGenerato = Math.floor(Math.random() * (max)) + min;
    number.push(numeroGenerato);
  }
}

generated(100, 1);

console.log(number);

// var j = 1;
// while (j <= 84) {
//     numeriInseriti = parseInt(prompt("Inserisci un numero"));
//     for (var i = 0; i < number.length; i++) {
//       if (number[i] == numeriInseriti) {
//         j = 85;
//
//       }
//     }
//
//     indovinati += 1;
// }


for (var i = 0; i < 84; i++) {
  numeriInseriti = parseInt(prompt("Inserisci un numero"));
  switch (true) {
    case numeriInseriti == number[0]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[1]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[2]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[3]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[4]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[5]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[6]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[7]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[8]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[9]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[10]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[11]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[12]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[13]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[14]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
    case numeriInseriti == number[15]:
      elemento.innerHTML = "Hai perso";
      i = 84;
      break;
  default:
    indovinati += 1;
  }
  if (i == 83) {
    console.log("hai indovinato tutti i numeri");
  }

  elemento1.innerHTML = indovinati;
}
