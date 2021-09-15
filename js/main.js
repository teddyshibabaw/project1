function onButtonClick(max_number) {
  return Math.round(Math.random() * max_number);
}

//select the element to interact with
const button = document.querySelector('button');
let answer = document.querySelector('#answer');

//add a click event to the button
button.addEventListener('click', function () {
    const randomNumner = onButtonClick(6);
    //alert(randomNumner)

    //let answerText = '';

    if (randomNumner == 0) {
        answerText = 'Yes defenitely';
    }
    else if (randomNumner == 1) {
        answerText = 'No certainly not!'

    }
    else if (randomNumner == 2) {
        answerText='ask again leter'
    }
    else if (randomNumner == 3) {
        answerText = 'Your lucky number is?'
    }
    else if (randomNumner == 4) {
        answerText = 'Well done!'
    }
    else if (randomNumner == 5) {
        answerText = 'Bitwise group are awsome'
    }
        
    else {
        answerText='I really dont care'
    }
    answer.innerHTML = answerText;
})