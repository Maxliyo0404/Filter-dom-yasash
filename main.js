let container = document.getElementById("container");
let searchInput = document.getElementById("searchInput");

 let Uzbek = [
    {
    "id": 1,
    "title": "The Whole Neighborhood is Talking",
    "genre": "Comedy",
    "year": 1960,
    "director": "Yuldosh Azamov"
  },
  {
    "id": 2,
    "title": "Days Gone By",
    "genre": "Historical Drama",
    "year": 1969,
    "director": "Yuldosh Azamov"
  },
  {
    "id": 3,
    "title": "Abdullajon",
    "genre": "Sci-Fi Comedy",
    "year": 1991,
    "director": "Zulfikar Musakov"
  },
  {
    "id": 4,
    "title": "Boys in the Sky",
    "genre": "Drama/Coming-of-age",
    "year": 2002,
    "director": "Zulfikar Musakov"
  },
  {
    "id": 5,
    "title": "Motherland",
    "genre": "War Drama",
    "year": 2006,
    "director": "Zulfikar Musakov"
  },
  {
    "id": 6,
    "title": "Parizod (Heavenly Blessing)",
    "genre": "Drama",
    "year": 2012,
    "director": "Ayub Shakhobiddinov"
  },
  {
    "id": 7,
    "title": "Ilhaq (Waiting)",
    "genre": "Historical Drama",
    "year": 2020,
    "director": "Jakhongir Akhmedov"
  },
  {
    "id": 8,
    "title": "2000 Songs of Farida",
    "genre": "Drama",
    "year": 2020,
    "director": "Yalkin Tuychiev"
  },
  {
    "id": 9,
    "title": "Bahodir Yalangtush",
    "genre": "Historical/Biographical",
    "year": 2024,
    "director": "Jakhongir Akhmedov"
  },
  {
    "id": 10,
    "title": "The Wandering Wind",
    "genre": "Cyber-thriller",
    "year": 2025,
    "director": "Sanjar Matkarimov"
  }
    
 ]
 let Hind = [
   {
    "id": 1,
    "title": "Sholay",
    "genre": "Action/Adventure",
    "year": 1975,
    "director": "Ramesh Sippy",
    "main_cast": ["Amitabh Bachchan", "Dharmendra", "Hema Malini"]
  },
  {
    "id": 2,
    "title": "Dilwale Dulhania Le Jayenge",
    "genre": "Romance/Musical",
    "year": 1995,
    "director": "Aditya Chopra",
    "main_cast": ["Shah Rukh Khan", "Kajol"]
  },
  {
    "id": 3,
    "title": "3 Idiots",
    "genre": "Comedy/Drama",
    "year": 2009,
    "director": "Rajkumar Hirani",
    "main_cast": ["Aamir Khan", "R. Madhavan", "Sharman Joshi"]
  },
  {
    "id": 4,
    "title": "Dangal",
    "genre": "Biographical/Sports",
    "year": 2016,
    "director": "Nitesh Tiwari",
    "main_cast": ["Aamir Khan", "Sakshi Tanwar"]
  },
  {
    "id": 5,
    "title": "RRR",
    "genre": "Action/Drama",
    "year": 2022,
    "director": "S.S. Rajamouli",
    "main_cast": ["N.T. Rama Rao Jr.", "Ram Charan"]
  },
  {
    "id": 6,
    "title": "Baahubali: The Conclusion",
    "genre": "Action/Fantasy",
    "year": 2017,
    "director": "S.S. Rajamouli",
    "main_cast": ["Prabhas", "Rana Daggubati"]
  },
  {
    "id": 7,
    "title": "Jawan",
    "genre": "Action/Thriller",
    "year": 2023,
    "director": "Atlee",
    "main_cast": ["Shah Rukh Khan", "Nayanthara"]
  },
  {
    "id": 8,
    "title": "12th Fail",
    "genre": "Biographical Drama",
    "year": 2023,
    "director": "Vidhu Vinod Chopra",
    "main_cast": ["Vikrant Massey", "Medha Shankr"]
  },
  {
    "id": 9,
    "title": "Pushpa 2: The Rule",
    "genre": "Action/Drama",
    "year": 2024,
    "director": "Sukumar",
    "main_cast": ["Allu Arjun", "Rashmika Mandanna"]
  },
  {
    "id": 10,
    "title": "Dhurandhar",
    "genre": "Action/Thriller",
    "year": 2025,
    "director": "Ranveer Singh (Project)",
    "main_cast": ["Ranveer Singh", "Sanjay Dutt"]
  }
 ]
  let Koreys = [
    {
    "id": 1,
    "title": "Parasite",
    "genre": "Dark Comedy/Thriller",
    "year": 2019,
    "director": "Bong Joon-ho",
    "main_cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
  },
  {
    "id": 2,
    "title": "The King's Warden",
    "genre": "Historical Drama",
    "year": 2026,
    "director": "Jang Hang-jun",
    "main_cast": ["Yoo Hae-jin", "Park Ji-hoon", "Yoo Ji-tae"]
  },
  {
    "id": 3,
    "title": "Oldboy",
    "genre": "Action/Neo-noir",
    "year": 2003,
    "director": "Park Chan-wook",
    "main_cast": ["Choi Min-sik", "Yoo Ji-tae"]
  },
  {
    "id": 4,
    "title": "No Other Choice",
    "genre": "Drama/Comedy",
    "year": 2025,
    "director": "Park Chan-wook",
    "main_cast": ["Lee Byung-hun", "Son Ye-jin"]
  },
  {
    "id": 5,
    "title": "Train to Busan",
    "genre": "Action/Horror",
    "year": 2016,
    "director": "Yeon Sang-ho",
    "main_cast": ["Gong Yoo", "Ma Dong-seok"]
  },
  {
    "id": 6,
    "title": "Humint",
    "genre": "Spy/Action",
    "year": 2026,
    "director": "Ryoo Seung-wan",
    "main_cast": ["Zo In-sung", "Park Jeong-min", "Shin Se-kyung"]
  },
  {
    "id": 7,
    "title": "Exhuma",
    "genre": "Occult/Mystery",
    "year": 2024,
    "director": "Jang Jae-hyun",
    "main_cast": ["Choi Min-sik", "Kim Go-eun", "Lee Do-hyun"]
  },
  {
    "id": 8,
    "title": "Mickey 17",
    "genre": "Sci-Fi/Adventure",
    "year": 2025,
    "director": "Bong Joon-ho",
    "main_cast": ["Robert Pattinson", "Steven Yeun"]
  },
  {
    "id": 9,
    "title": "Hope",
    "genre": "Sci-Fi/Thriller",
    "year": 2026,
    "director": "Na Hong-jin",
    "main_cast": ["Hwang Jung-min", "Zo In-sung", "Hoyeon"]
  },
  {
    "id": 10,
    "title": "A Taxi Driver",
    "genre": "Historical Drama",
    "year": 2017,
    "director": "Jang Hoon",
    "main_cast": ["Song Kang-ho", "Thomas Kretschmann"]
  }
  ]
 function kino(kinos){
    container.innerHTML = kinos.map((item => `
        
        `))
 }