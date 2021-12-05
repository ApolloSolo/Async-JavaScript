
/*
const changeColor = (delay, color, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext(); //if callback function is not passed in, will just be undifined
    }, delay) 
}

changeColor(1000, "red", () => {
    changeColor(1000, "orange", () => {
        changeColor(1000, "yellow", () => {
            changeColor(1000, "green", () => {
                changeColor(1000, "blue", () => {
                    changeColor(1000, "purple")
                })
            })
        })
    })
})
*/
alert("hh")

const colorChange = (color, delay) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            document.body.backgroundColor = color;
            resolve();
        }, delay)
    })
}

colorChange('red', 1000)
.then(() => colorChange('orange', 1000))
.then(() => colorChange('yellow', 1000))
.then(() => colorChange('green', 1000))
.then(() => colorChange('blue', 1000))
.then(() => colorChange('indigo', 1000))
.then(() => colorChange('violet', 1000))