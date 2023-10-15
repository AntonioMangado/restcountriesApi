// const cardTemplate = function (data) {
//   return `<div class="card">
//               <img id="flag-image" src=${data[i].flags.png} alt="flag" />
//               <h1 class="center">${data[i].name.common}</h1>
//             </div>`;
// };


//VARIABLES
const countriesNode = document.getElementById("countries");
const form = document.getElementById("continent-filter-form");


form.addEventListener("submit", function (event){
  
  // console.log(event);
  
  event.preventDefault();
  countriesNode.innerHTML = ""; 

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
  });
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


