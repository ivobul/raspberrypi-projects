const heading = document.getElementById('colourValue');
const buttons = document.querySelectorAll('.colourButton');
const answerMessage = document.getElementById('answer');
const resetButton = document.getElementById('resetButton');
const body = document.querySelector('body');

resetButton.addEventListener('click', startGame);

function setButtonColour(button, red, green, blue) {
  button.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');');
}

function makeColourValue() {
  return Math.round(Math.random()*255);
}



function startGame() {
  const answerButton = Math.round(Math.random() * (buttons.length - 1));

  buttons.forEach((btn, index, arr) => {
    const red = makeColourValue();
    const green = makeColourValue();
    const blue = makeColourValue();

    setButtonColour(arr[index], red, green, blue);

    if (index === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }

    btn.addEventListener('click', (event) => {
      if (event.currentTarget === buttons[answerButton]) {
        answerMessage.innerHTML = "Correct!";
        body.style.backgroundColor = buttons[answerButton].style.backgroundColor;
      } 
      else {
        answerMessage.innerHTML = "Wrong answer! Guess again!";
        body.style.backgroundColor = '#fff';
      }
    });
  });

  answerMessage.innerHTML = "";
  body.style.backgroundColor = '';
}

startGame();