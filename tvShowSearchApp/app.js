const searchWord = document.querySelector('#search-box');
const searchBtn = document.querySelector('button');
const showList = document.querySelector('#show-names');

//Pull show data with API and async function - our keyword is the search word
const searchShow = async (keyWord) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${keyWord}`)
    return res.data //returns an array of show data that match our search/keyWord
}

//On form submit
searchBtn.addEventListener('click', async (e) => {
    //prevent form action
    e.preventDefault();

    //First, if there are lis in the show list, remove them with display: none class (.removeLI)
    if(showList.childElementCount > 0){
        const lis = document.querySelectorAll('.li');
        for(li of lis){
            li.classList.toggle('li')
            li.classList.add('removeLI')
        }
    }

    //save searchShow async function to an array
    let showArray = await searchShow(searchWord.value);
    //create an array of show names from above array objects
    let showNames = showArray.map((name) => {
        return name.show.name;
    })

    //for each show name, we create and append a new li, to our list, with the name text
    for(show of showNames){
        const newLi = document.createElement('li');
        newLi.append(show);
        newLi.classList.add('li');
        showList.append(newLi);
    }
})