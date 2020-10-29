const usdBuy = document.getElementsByClassName('buy')[0];
const usdSale = document.getElementsByClassName('sale')[0];
const eurBuy = document.getElementsByClassName('buy')[1];
const eurSale = document.getElementsByClassName('sale')[1];
const rubBuy = document.getElementsByClassName('buy')[2];
const rubSale = document.getElementsByClassName('sale')[2];
let usdB = 28.20;
let usdS = 28.49;
let eurB = 33.15;
let eurS = 33.67;
let rubB = 0.36;
let rubS = 0.40;
usdBuy.innerText = usdB;
usdSale.innerText = usdS;
eurBuy.innerText = eurB;
eurSale.innerText = eurS;
rubBuy.innerText = rubB;
rubSale.innerText = rubS;

btnBuy.onclick = () => {
    const numberCurrency = document.getElementById('currencySelection').options.selectedIndex;
    const amount = document.getElementById('inputAmount').value;
    setResultSale(numberCurrency, amount)
}
setResultSale = (numberCurrency, amount) => {
    let result;
    switch (numberCurrency) {
        case 0:
            result = amount * usdS;
            break;
        case 1:
            result = amount * eurS;
            break;
        case 2:
            result = amount * rubS;
            break;
    }
    document.getElementById('outputResult').innerHTML = `Вам нужно ${result} гривен!`;
}

btnSale.onclick = () => {
    const numberCurrency = document.getElementById('currencySelection').options.selectedIndex;
    const amount = document.getElementById('inputAmount').value;
    setResultBuy(numberCurrency, amount)
}
setResultBuy = (numberCurrency, amount) => {
    let result;
    switch (numberCurrency) {
        case 0:
            result = amount * usdB;
            break;
        case 1:
            result = amount * eurB;
            break;
        case 2:
            result = amount * rubB;
            break;
    }
    document.getElementById('outputResult').innerHTML = `Вы получите ${result} гривен!`;
}