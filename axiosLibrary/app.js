//With axios, the promise comes back complete and parsed.
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')

const getBitPrice = async () => {
    try{
        const data = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        const bitCoinePrice = data.data.ticker.price
        alert(bitCoinePrice); 
    }
    catch(e){
        console.log(e);
    }
}
getBitPrice();