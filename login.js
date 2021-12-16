let stateSelectorElement = document.querySelector('#validationDefault04');

let submitBtn = document.querySelector('#submit-btn');
//states array
let stateArray = [];


submitBtn.addEventListener('click', (e) => {
    let tosCheckbox = document.querySelector('#invalidCheck2');

    if (tosCheckbox.checked === true){
        e.preventDefault();
        let firstName = document.querySelector('#validationDefault01').value;
        window.location.href = "mailto:" +
            " tylerdukedev@gmail.com?subject=Contact%20Me&body=%20Hello,%20"+firstName+"!%20Want%20to%20hire%20me?%20%20Send%20your%20comments,%20questions,%20and%20concerns%20here!";
        window.location.href = '../html/success.html';

    }
});

(async function() {
    const response = await fetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json');
    const data = await response.json();

    for (let state in data){
        stateArray.push(state);
    }

    for (let i of stateArray){
        let newEl = document.createElement('option');
        stateSelectorElement.appendChild(newEl);
        newEl.append(i);
    }

})()