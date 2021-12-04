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

