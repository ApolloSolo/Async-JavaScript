

const changeColor = (delay, color, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext();
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