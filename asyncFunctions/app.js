// The “async” keyword is used to declare an asynchronous function.
// If the function returns a value, the promise will be resolved with that value.
// If the function throws an exception, the promise will be rejected. 

//Always returns a promise
async function hello(){
    return 'Hey guy!'
}
hello(); //Promise {<fulfilled>: 'Hey guy!'}

hello().then((data) => {
    console.log("Promise resolved,", data);
})

async function ohNo(){
    throw new Error('oh no!');
}
ohNo(); //Promise {<rejected>: Error: oh no!

const login = async (username, password) => {
    if(!username || !password){
        throw 'Missing Credentials';
    }
    else if(password === "max"){
        return 'Welcome'
    }
    throw 'Invalid Password'
}

login("tex", "max")
.then((msg) => {
    console.log("Logged In");
    console.log(msg);
})
.catch((err) => {
    console.log('Failed Log In');
    console.log(err);
})
