function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumbers(number){
    console.log('number', number);

}

function handleSymbols(symbol){
    console.log('symbol', symbol);
}

function innit() {
    console.log('init');
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    });
}