const scoreResults = document.querySelector('#score__results');
const tallyBtn = document.querySelector('#tallyBtn');
const resetBtn = document.querySelector('#resetBtn');

const questions = {
    first: document.querySelector('#first-q'),
    second: document.querySelector('#second-q'),
    third: document.querySelector('#third-q'),
    fourth: document.querySelector('#fourth-q'),
    fifth: document.querySelector('#fifth-q'),
    sixth: document.querySelector('#sixth-q'),
    seventh: document.querySelector('#seventh-q'),
    eighth: document.querySelector('#eighth-q'),
    ninth: document.querySelector('#ninth-q'),
    tenth: document.querySelector('#tenth-q')
}

function updateHtml(classResult){
    scoreResults.innerHTML = `<h1>${classResult}</h1>`
}


tallyBtn.addEventListener('click', () => {
    let min = 10;
    let max = 30;
    vals = [];

    for (let key in questions) {
        vals.push(parseInt(questions[key].value));
    }

    const reducer = (a, b) => a + b;
    pts = vals.reduce(reducer);

    if (pts === min) {
        updateHtml('Warrior!');
    } else if (pts === max) {
        updateHtml('Priestess!')
    } else if (pts >= 10 && pts <= 15) {
        updateHtml('Wizard!')
    } else if (pts >= 16 && pts <= 28) {
        updateHtml('Rogue!');
    } else {
        updateHtml('!error! check values')
    }
})

resetBtn.addEventListener('click', () => {
    let el = document.querySelector('#result__container');
    scoreResults.innerHTML = '';
})