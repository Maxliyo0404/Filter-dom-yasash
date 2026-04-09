let container = document.getElementById("container");
let searchInput = document.getElementById("searchInput");

let Uzbek = [
    { id: 1, title: "The Whole Neighborhood is Talking", genre: "Comedy", year: 1960, director: "Yuldosh Azamov" },
    { id: 2, title: "Days Gone By", genre: "Historical Drama", year: 1969, director: "Yuldosh Azamov" },
    { id: 3, title: "Abdullajon", genre: "Sci-Fi Comedy", year: 1991, director: "Zulfikar Musakov" },
    { id: 4, title: "Boys in the Sky", genre: "Drama/Coming-of-age", year: 2002, director: "Zulfikar Musakov" },
    { id: 5, title: "Motherland", genre: "War Drama", year: 2006, director: "Zulfikar Musakov" },
    { id: 6, title: "Parizod (Heavenly Blessing)", genre: "Drama", year: 2012, director: "Ayub Shakhobiddinov" },
    { id: 7, title: "Ilhaq (Waiting)", genre: "Historical Drama", year: 2020, director: "Jakhongir Akhmedov" },
    { id: 8, title: "2000 Songs of Farida", genre: "Drama", year: 2020, director: "Yalkin Tuychiev" },
    { id: 9, title: "Bahodir Yalangtush", genre: "Historical/Biographical", year: 2024, director: "Jakhongir Akhmedov" },
    { id: 10, title: "The Wandering Wind", genre: "Cyber-thriller", year: 2025, director: "Sanjar Matkarimov" }
];

let Hind = [
    { id: 11, title: "Sholay", genre: "Action/Adventure", year: 1975, director: "Ramesh Sippy", main_cast: ["Amitabh Bachchan", "Dharmendra"] },
    { id: 12, title: "Dilwale Dulhania Le Jayenge", genre: "Romance/Musical", year: 1995, director: "Aditya Chopra", main_cast: ["Shah Rukh Khan", "Kajol"] },
    { id: 13, title: "3 Idiots", genre: "Comedy/Drama", year: 2009, director: "Rajkumar Hirani", main_cast: ["Aamir Khan", "R. Madhavan"] },
    { id: 14, title: "Dangal", genre: "Biographical/Sports", year: 2016, director: "Nitesh Tiwari", main_cast: ["Aamir Khan"] },
    { id: 15, title: "RRR", genre: "Action/Drama", year: 2022, director: "S.S. Rajamouli", main_cast: ["Ram Charan", "NTR Jr"] }
];

let Koreys = [
    { id: 21, title: "Parasite", genre: "Dark Comedy/Thriller", year: 2019, director: "Bong Joon-ho", main_cast: ["Song Kang-ho"] },
    { id: 22, title: "Train to Busan", genre: "Action/Horror", year: 2016, director: "Yeon Sang-ho", main_cast: ["Gong Yoo"] },
    { id: 23, title: "Oldboy", genre: "Action/Neo-noir", year: 2003, director: "Park Chan-wook", main_cast: ["Choi Min-sik"] }
];
let allMovies = [...Uzbek, ...Hind, ...Koreys];

function renderKino(kinos) {
    container.innerHTML = kinos.map(item => `
        <div class="cards">
             <img class="rasm" src="https://picsum.photos/200/300?random=${item.id}" alt="rasm" ">
             <h2 class="title">${item.title}</h2>
             <h3 class="genre">${item.genre}</h3>
             <p class="year"> ${item.year}</p>
             <p class="director">${item.director}</p>
             <p class="a">${item.main_cast ? item.main_cast.join(", ") : "Noma'lum"}</p>
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