// const cardTemplate = function (data) {
//   return `<div class="card">
//               <img id="flag-image" src=${data[i].flags.png} alt="flag" />
//               <h1 class="center">${data[i].name.common}</h1>
//             </div>`;
// };


//VARIABLES
const countriesNode = document.getElementById("countries");
const form = document.getElementById("continent-filter-form");
const continents = ["Oceania", "Americas", "Africa", "Europe", "Asia", "Antarctic", "North America", "South America"]

//PROMISES
//Show all countries



fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {

    let card = `<div class="card">
                  <img id="flag-image" src="${data[i].flags.png}" alt="flag" />
                  <h1 class="center">${data[i].name.common}</h1>
                </div>`

    countriesNode.innerHTML += card;           
    }
  })

//Filter by continent
form.addEventListener("submit", function (event){
  event.preventDefault();
  countriesNode.innerHTML = "";
  
  if (!continents.includes(event.target[0].value)) {
    countriesNode.innerHTML = `<h1>Sorry, we couldn't find the term you are looking for. Try one of these</h1>
                                    <ul class="warning-ul">
                                      <li>Europe</li>
                                      <li>Americas (North and South)</li>
                                      <li>Africa</li>
                                      <li>Asia</li>
                                      <li>Oceania</li>
                                      <li>Anctartic</li>
                                    </ul>`;
    countriesNode.style.flexDirection = "Column";

  } else {
    countriesNode.style.flexDirection = "Row";
  fetch(`https://restcountries.com/v3.1/region/${event.target[0].value}`)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {

    let card = `<div class="card">
                  <img id="flag-image" src="${data[i].flags.png}" alt="flag" />
                  <h1 class="center">${data[i].name.common}</h1>
                </div>`

    countriesNode.innerHTML += card;           
    }
  })};
})


// fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then(data => {
//     for (let i = 0; i < data.length; i++) {

//     let card = `<div class="card">
//                   <img id="flag-image" src="${data[i].flags.png}" alt="flag" />
//                   <h1 class="center">${data[i].name.common}</h1>
//                 </div>`

//     countriesNode.innerHTML += card;           
//     }
//   });


