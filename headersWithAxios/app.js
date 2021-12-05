
//right now my data is in html - need to set headers property to application/json
// const getDadJoke = async () => {
//     const joke = axios.get('https://icanhazdadjoke.com/');
//     console.log(joke);
// }
// getDadJoke();

const jokeUl = document.querySelector('#joke-holder');
const btn = document.querySelector('button');

const getDadJoke = async () => {
    try{
        const config = { headers: {Accept: 'application/json'} } //set our header - can add more here too
        const jokeData = await axios.get('https://icanhazdadjoke.com/', config);
        return jokeData.data.joke;
    } catch(e){
        alert("No Jokes At This Time");
        console.log(e);
    }
}

//
const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokeUl.append(newLi);
}

btn.addEventListener('click', () => {
    getDadJoke();
    addNewJoke();
})
