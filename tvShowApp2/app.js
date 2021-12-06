const form = document.querySelector('#searchForm');
const searchBtn = document.querySelector('#submitBtn');
const showList = document.querySelector('#show-names');

const searchShow = async (keyWord) => {
    const config = { params: { q: keyWord }}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    return res.data
}

//On form submit
form.addEventListener('submit', async (e)  => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const response = await searchShow(searchTerm);
    console.log(response);
    createImages(response);
    form.elements.query.value = '';
})

const createImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium
            showList.append(img)
        }
    }
}