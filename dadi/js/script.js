var numeroRandomPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numeroRandomPlayer);
var numeroRandomPc = Math.floor(Math.random() * 6) + 1;
console.log(numeroRandomPc);

if (numeroRandomPlayer > numeroRandomPc ) {
  console.log("Vince il giocatore")
}
else if (numeroRandomPlayer == numeroRandomPc) {
  console.log("Parità");
}
else {
  console.log("vince il computer");
}
