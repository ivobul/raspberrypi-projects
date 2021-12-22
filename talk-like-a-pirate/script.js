const normal = document.getElementById("normal");


normal.addEventListener("keyup", changeText);

function changeText() {
  const pirate = document.getElementById("pirate");

  let words = normal.value;
  words = words.replace(/hello/gi, "ahoy").replace(/you/gi, "yer").replace(/stop/gi, "avast");

  pirate.value = words;
}