var emailInserita = prompt("inserisci un email verificata");
var emailDatabase = ["d.patane98@gmail.com", "dariomozzilla@gmail.com", "giuseppemozz@gmail.com"];

var mailTrovata = false;

for (var i = 0; i < emailDatabase.length; i++) {
  var thisMail = emailDatabase[i];

  if (thisMail == emailInserita)
    {
        mailTrovata = true;
    }
}

if (mailTrovata === true) {
  console.log("accesso consentito");
}
else if (mailTrovata === false) {
  console.log("accesson negato");
}
