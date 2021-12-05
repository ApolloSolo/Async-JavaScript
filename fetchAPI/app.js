//Fetch API: make http requests using JavaScript - differ from XML AJAX http requests
//promise based

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res =>{
    console.log("waiting to parse", res) //at this point, res only has headers because of how the data is sent
    return res.json(); //this returns a promise. Saying: When all of the data is back and has been parsed as jason - is asynconys 
})
.then(data => {
    console.log('data parsed', data) //returns a js object and can use data.ticker.price to get price
})
.catch(e => {
    console.log('ERROR', e)
})

/*
The json() method of the Response interface takes a Response stream and reads it to completion. 
It returns a promise which resolves with the result of parsing the body text as JSON.
-- Note that despite the method being named json(), the result is not JSON but is instead the 
result of taking JSON as input and parsing it to produce a JavaScript object.
*/

/******Use async Function*******/

const fetchBitCoinPrice = async () => {
    try{
        const res = await fetch('https://api.3cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        const bitPrice = data.ticker.price;
        alert(bitPrice);
    } catch(e){
        alert("Error")
        console.log(e);
    }
    
}

fetchBitCoinPrice();