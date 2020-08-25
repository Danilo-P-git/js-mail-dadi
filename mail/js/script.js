// cheido l'email e inserisco il database dove devo verificare la sua esistenza
var emailInserita = prompt("inserisci un email verificata");
var emailDatabase = ["d.patane98@gmail.com", "dariomozzilla@gmail.com", "giuseppemozz@gmail.com"];
// imposto una variabile boleana
var mailTrovata = false;
// inizio il ciclo
for (var i = 0; i < emailDatabase.length; i++) {
  var thisMail = emailDatabase[i];
// se è uguale la variabile boleana diventa true
  if (thisMail == emailInserita)
    {
        mailTrovata = true;
    }
}
// faccio un if se è vero stampo una cosa se falso un altra
if (mailTrovata == true) {
  console.log("accesso consentito");
}
else {
  console.log("accesson negato");
}
