let container = document.getElementById("container");
let searchInput = document.getElementById("searchInput");

let Uzbek = [
    { id: 1, title: "The Whole Neighborhood is Talking", genre: "Comedy", year: 1960, director: "Yuldosh Azamov", poster_url: "https://upload.wikimedia.org/wikipedia/ru/3/36/Mahallada_duv-duv_gap.jpg" },
    { id: 2, title: "Days Gone By", genre: "Historical Drama", year: 1969, director: "Yuldosh Azamov", poster_url: "https://upload.wikimedia.org/wikipedia/uz/5/52/O%CA%BBtgan_kunlar_%28film%29.jpg" },
    { id: 3, title: "Abdullajon", genre: "Sci-Fi Comedy", year: 1991, director: "Zulfikar Musakov", poster_url: "https://m.media-amazon.com/images/M/MV5BMjA3NTY3MTYtMjE1My00YzAwLWE1OGEtNjdhYTI5Mjg0NWE5XkEyXkFqcGdeQXVyNjI4NjE5NjQ@._V1_.jpg" },
    { id: 4, title: "Boys in the Sky", genre: "Drama", year: 2002, director: "Zulfikar Musakov", poster_url: "https://m.media-amazon.com/images/M/MV5BNzQ0MDM1OTYtN2ZlYy00MTdkLWJlNzUtMDc2NzA3NWE1MDY4XkEyXkFqcGdeQXVyNjM3NTY5MTA@._V1_.jpg" },
    { id: 5, title: "Motherland", genre: "War Drama", year: 2006, director: "Zulfikar Musakov", poster_url: "https://m.media-amazon.com/images/M/MV5BMjIxMjY2MzAtOWY3OC00YTk3LWFkNDEtYmFmYjZlMjhmNWRiXkEyXkFqcGdeQXVyNjM3NTY5MTA@._V1_.jpg" },
    { id: 6, title: "Parizod", genre: "Drama", year: 2012, director: "Ayub Shakhobiddinov", poster_url: "https://m.media-amazon.com/images/M/MV5BZDU3MTk1YmUtZGY0My00MzgyLWExN2MtMjcwMjQ0Yjg2NWMxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg" },
    { id: 7, title: "Ilhaq", genre: "Historical Drama", year: 2020, director: "Jakhongir Akhmedov", poster_url: "https://m.media-amazon.com/images/M/MV5BMjA1OTY0NTEtYjY4Mi00NjRmLWE5ODAtMzI4ZWFmN2Y3Yjk0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg" },
    { id: 8, title: "2000 Songs of Farida", genre: "Drama", year: 2020, director: "Yalkin Tuychiev", poster_url: "https://m.media-amazon.com/images/M/MV5BYWIzZDU1MGQtNjllMS00MzFmLWJlM2ItZWEwMDYxYTdlNjg5XkEyXkFqcGdeQXVyNjUyNDY2OTU@._V1_.jpg" },
    { id: 9, title: "Bahodir Yalangtush", genre: "Historical", year: 2024, director: "Jakhongir Akhmedov", poster_url: "https://m.media-amazon.com/images/M/MV5BZGU0NTA0OGEtMjY4My00YjA3LTk3NDAtNWIyMWI5Yzg3NjM4XkEyXkFqcGdeQXVyMTcwOTQzOTYz._V1_.jpg" },
    { id: 10, title: "The Wandering Wind", genre: "Cyber-thriller", year: 2025, director: "Sanjar Matkarimov", poster_url: "https://m.media-amazon.com/images/M/MV5BMmU1ODVjOTQtNjYyZi00YmU4LWIxNTktYzhlMzViYmFhMDJkXkEyXkFqcGdeQXVyNjM3NTY5MTA@._V1_.jpg" }
];

let Hind = [
    { id: 11, title: "Sholay", genre: "Action", year: 1975, director: "Ramesh Sippy", poster_url: "https://image.tmdb.org/t/p/w500/v9Qp6NqZ58K9Iq3zGZ9B0F9LpYn.jpg" },
    { id: 12, title: "Dilwale Dulhania Le Jayenge", genre: "Romance", year: 1995, director: "Aditya Chopra", poster_url: "https://image.tmdb.org/t/p/w500/2Ym3AtpL2Lid3m1kQ6E4NTo6L1K.jpg" },
    { id: 13, title: "3 Idiots", genre: "Comedy", year: 2009, director: "Rajkumar Hirani", poster_url: "https://image.tmdb.org/t/p/w500/667999824694403173-3idiots.jpg" },
    { id: 14, title: "Dangal", genre: "Sports", year: 2016, director: "Nitesh Tiwari", poster_url: "https://image.tmdb.org/t/p/w500/60vVnU1ZpUfL9rM8Y2I4kU6L8X4.jpg" },
    { id: 15, title: "RRR", genre: "Action", year: 2022, director: "S.S. Rajamouli", poster_url: "https://image.tmdb.org/t/p/w500/nEu1sh67LpU7iCcid8pL6N4p9R6.jpg" },
    { id: 16, title: "Baahubali: The Conclusion", genre: "Fantasy", year: 2017, director: "S.S. Rajamouli", poster_url: "https://image.tmdb.org/t/p/w500/969062402179831932.jpg" },
    { id: 17, title: "Jawan", genre: "Thriller", year: 2023, director: "Atlee", poster_url: "https://image.tmdb.org/t/p/w500/jY9mUAnp98uV7p1vC0uG7S5zHqM.jpg" },
    { id: 18, title: "12th Fail", genre: "Drama", year: 2023, director: "Vidhu Vinod Chopra", poster_url: "https://image.tmdb.org/t/p/w500/657436214902143.jpg" },
    { id: 19, title: "Lagaan", genre: "Musical/Sports", year: 2001, director: "Ashutosh Gowariker", poster_url: "https://image.tmdb.org/t/p/w500/8X6wHkU12zP4sE6b7384w754G2M.jpg" },
    { id: 20, title: "Pushpa 2", genre: "Action", year: 2024, director: "Sukumar", poster_url: "https://image.tmdb.org/t/p/w500/p40Mpsn8Tf6VjM0F5R9W6zG9Y7E.jpg" }
];

let Koreys = [
    { id: 21, title: "Parasite", genre: "Thriller", year: 2019, director: "Bong Joon-ho", poster_url: "https://image.tmdb.org/t/p/w500/7IiTTj0ZWG77Z7DFeZa609u9I4O.jpg" },
    { id: 22, title: "Train to Busan", genre: "Horror", year: 2016, director: "Yeon Sang-ho", poster_url: "https://image.tmdb.org/t/p/w500/5R8K758W50kE16uB974N0P5Q79H.jpg" },
    { id: 23, title: "Oldboy", genre: "Action", year: 2003, director: "Park Chan-wook", poster_url: "https://image.tmdb.org/t/p/w500/8X6wHkU12zP4sE6b7384w754G2M.jpg" },
    { id: 24, title: "Exhuma", genre: "Mystery", year: 2024, director: "Jang Jae-hyun", poster_url: "https://image.tmdb.org/t/p/w500/7POfM6G4M4f8J7D1C2z4k6U8F5O.jpg" },
    { id: 25, title: "A Taxi Driver", genre: "History", year: 2017, director: "Jang Hoon", poster_url: "https://image.tmdb.org/t/p/w500/9S2U2f0H3nE8X6zXW2X6G8N4M8Y.jpg" },
    { id: 26, title: "The Wailing", genre: "Horror", year: 2016, director: "Na Hong-jin", poster_url: "https://image.tmdb.org/t/p/w500/1XvFwDAmwzO5NAtk9pXfInhL7wZ.jpg" },
    { id: 27, title: "Decision to Leave", genre: "Romance", year: 2022, director: "Park Chan-wook", poster_url: "https://image.tmdb.org/t/p/w500/7D2S5id8Y7mI6vWvGvSreVUn2H3.jpg" },
    { id: 28, title: "The Handmaiden", genre: "Thriller", year: 2016, director: "Park Chan-wook", poster_url: "https://image.tmdb.org/t/p/w500/74vXfWjG8jCjXwZ9S1G7zYvK6I7.jpg" },
    { id: 29, title: "Memories of Murder", genre: "Crime", year: 2003, director: "Bong Joon-ho", poster_url: "https://image.tmdb.org/t/p/w500/36Yio5u8r8I3p0Sj1D46v2x2V1f.jpg" },
    { id: 30, title: "Concrete Utopia", genre: "Sci-Fi", year: 2023, director: "Um Tae-hwa", poster_url: "https://image.tmdb.org/t/p/w500/1p40Mpsn8Tf6VjM0F5R9W6zG9Y7E.jpg" }
];
let allMovies = [...Uzbek, ...Hind, ...Koreys];

function renderKino(kinos) {
    container.innerHTML = kinos.map(item => `
        <div class="cards">
             <img class="rasm"  src="https://picsum.photos/200/300?random=${item.id} " alt="rasm">
             <h2 class="title">${item.title}</h2>
             <h3 class="genre">${item.genre}</h3>
             <p class="year"> ${item.year}</p>
             <p class="director">${item.director}</p>
             <p class="p">${item.main_cast ? item.main_cast.join(", ") : "Noma'lum"}</p>
        </div>
    `).join("");
}
searchInput.addEventListener("input", function(e) {
    let result = e.target.value.toLowerCase();
    const filteredKino = allMovies.filter(item =>
        item.title.toLowerCase().includes(result) || 
        item.genre.toLowerCase().includes(result)
    );
    renderKino(filteredKino);
});
renderKino(allMovies);








//  function kino(kinos){
//     container.innerHTML = kinos.map(item => `
//         <div class="cards">
//              <img src="https://picsum.photos/200/300?random=1,...random=2 id/${ item.id}  " alt="rasm">
//              <h2>${ item.title}</h2>
//              <h3>${ item.genre}</h3>
//              <p>${ item.year}</p>
//              <p>${ item.director}</p>
//              <a href="#">${item.main_cast}</a>
//        </div>
//         `).join("");
       
//  }
//   searchInput.addEventListener("input", function(e)){
//     let result = e.target.value.toLowerCase();
//     const filterkino = kinos.filter(item =>
//         item.title.toLowerCase().includes(result)
//     );
//     kino(filterkino);
//   }
//    kino(item);