let guess = 0;
let currentStep = 0;

const numbersDiv = document.getElementById('numbers');
const resultDiv = document.getElementById('result');
const controls=document.getElementsByClassName('controls')[0]
const head = document.getElementById('head');
const displayNumbers = (step) => {
    numbersDiv.innerHTML=''
    let numbers = [];
    for (let j = 1; j < 128; j++) {
        if (j & (1 << step)) {
            numbersDiv.innerHTML+=`<div>${j}</div>`
        }
    }
  
};

const yes = () => {
    guess += (1 << currentStep);
    nextStep();
};

const no = () => {
    nextStep();
};

const nextStep = () => {
    currentStep++;
    if (currentStep < 7) {
        displayNumbers(currentStep);
    } else {
        showResult();
    }
};

const showResult = () => {
    numbersDiv.style.display = 'none';
    resultDiv.innerHTML = `The number is ${guess}`;
    head.innerHTML=''
    controls.innerHTML=''
    controls.innerHTML='<button class="start" onclick="replay()">Replay</button>'
};

// Initialize the first step

const start=()=>
{
    numbersDiv.style.display = 'flex';
    guess=0
    currentStep=0
    
    displayNumbers(currentStep);
   
    head.innerHTML='Is the number present here ?'
    controls.innerHTML=``
    controls.innerHTML+= `<button class="pos" onclick="yes()">Yes</button><button class="neg" onclick="no()">No</button>`
}

const replay= ()=>
{resultDiv.innerHTML = ``
    head.innerHTML='Guess a Number between 1 and 127'
    controls.innerHTML=``
    controls.innerHTML= `<button class="start" onclick="start()">Ok</button>`
}