var emailInserita = prompt("inserisci un email verificata");
var emailDatabase = ["d.patane98@gmail.com", "dariomozzilla@gmail.com", "giuseppemozz@gmail.com"];

for (var i = 0; i < emailDatabase.length; i++) {
  var thisMail = emailDatabase[i];

  if (thisMail == emailInserita)
    {
        console.log("Accesso garantito");
    }
  else if (thisMail != emailInserita ) {
        console.log("Accesso negato")
  }
}
