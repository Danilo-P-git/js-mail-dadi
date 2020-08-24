


var numeroRandomPlayer = Math.floor(Math.random() * 6) + 1;
var numeroRandomPc = Math.floor(Math.random() * 6) + 1;

if (numeroRandomPlayer > numeroRandomPc ) {
  console.log("Vince il giocatore")
}
else if (numeroRandomPlayer == numeroRandomPc) {
  console.log("Parità");
}
else {
  console.log("vince il computer");
}
var genera = document.getElementById("genera");
genera.addEventListener("click",
function() {
  document.getElementById('numero_player').innerHTML = numeroRandomPlayer;
  document.getElementById('numero_pc').innerHTML = numeroRandomPc;

}
)
