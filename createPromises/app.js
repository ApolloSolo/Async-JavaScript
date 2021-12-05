const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const randNum = Math.random();
        setTimeout(() => {
            if(randNum < 0.6){
                resolve("Your Data Provided");
            }
            else{reject("No PASS - No DATA")}
        }, 1000)
    })
}

fakeRequest('dogs.com')
    .then((data) => {
        console.log("Passed");
        console.log(data);
        return fakeRequest('dogs.com/page-2')
    })
    .then((data) => {
        console.log("Passed Again");
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

    /***Use Promise to change background color***/
    const changeColor = (delay, color) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            },delay);
        })
    }

changeColor(1000, "red")
    .then(() => changeColor(1000, "orange")) //implicit return syntax
    .then(() => changeColor(1000, "yellow"))
    .then(() => changeColor(1000, "green"))
    .then(() => changeColor(1000, "blue"))
    .then(() => changeColor(1000, "indigo"))
    .then(() => changeColor(1000, "violet"))
