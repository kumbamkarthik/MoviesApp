//c4afad3e1e976ce63885b142181852a8
const API_KEY = "api_key=c4afad3e1e976ce63885b142181852a8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500' 

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const form1 = document.getElementById('form1');
const search1 = document.getElementById('search1');

const searchURL = BASE_URL + '/search/movie?'+API_KEY;
function getMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}
getMovies(API_URL);
function showMovies(data) {
  main.innerHTML='';
  data.forEach((movie) => {
    const {title, poster_path, vote_average, overview} = movie;
    // console.log(movie.title);
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<div class="part1">
       <img src="${IMG_URL+poster_path}" alt="${title}"class="movie_img" />
     </div>
     <div class="part2">
       <div class="sub-part1">
         <h1 class="title">${title}</h1>
       </div>
       <div class="sub-part2">
         <h2 class="rating">Rating : ${vote_average}</h2>
       </div>
       <div class="sub-part3">
         <p>${overview}</p>
       </div>
     </div>`;

     main.appendChild(movieEl);
  });
}

form.addEventListener('submit', (e)=>{
    const searchTerm = search.value;
    search1.value='';
    task1(e,searchTerm);
})
form1.addEventListener('submit', (e)=>{
    const searchTerm = search1.value;
    search.value='';
    task1(e,searchTerm);
})

function task1(e,searchTerm){
    e.preventDefault();
    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm);
    }
    else{
        getMovies(API_URL);
    }
}
// ---------------
function toggle(){
    var cbox = document.querySelector('input[type="checkbox"]');
    if(cbox.checked){
    cbox.checked = !cbox.checked;
    }
}
const home = document.getElementById('home');
home.addEventListener('click', task2);
function task2(){
    getMovies(API_URL);
    toggle();
}

const marvel = document.getElementById('marvel');
marvel.addEventListener('click',task3);
function task3(){
  console.log('Yes marvel');
  getMovies(searchURL+'&query='+'marvel');
  toggle();
}

const dc = document.getElementById('dc');
dc.addEventListener('click',task4);
function task4(){
  console.log('Yes dc');
  getMovies(searchURL+'&query='+'dc');
  toggle();
}

const warner = document.getElementById('warner');
warner.addEventListener('click',task5);
function task5(){
  console.log('Yes warnerbros');
  getMovies(searchURL+'&query='+'warner');
  toggle();
}


const nolan = document.getElementById('nolan');
nolan.addEventListener('click',task6);
function task6(){
  console.log('Yes nolan');
  getMovies(searchURL+'&query='+'nolan');
  toggle();
}