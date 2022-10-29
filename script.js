'use strict';
const btn = document.querySelector(".btn");
const countriesContainer = document.querySelector('.cards');
const input = document.querySelector('#form-input');

const getCountryData = function(country){
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  console.log(request);
  request.send();
  // console.log(request.responseText);

  request.addEventListener("load", function () {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // const html = `
    // <article class="country">
    // <img class="country__img" src="${data.flag}" /> 
    //           <div class="country__data">
    //         <h3 class="country__name">${data.name}</h3>
    //         <h4 class="country__region">${data.region}</h4>
    //         <p class="country__row"><span>👫</span>${(
    //           +data.population / 1000000
    //         ).toFixed(1)} M</p>
    //         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    //         <p class="country__row"><span>💰</span>${
    //           data.currencies[0].name
    //         }</p>
    //       </div>
    //     </article>`;
    const html = `
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="${data.flag}"></div>
        <div class="card_content">
          <h2 class="card_title">${data.name}</h2>
          <p class="card_text">${data.region}</p>
                  <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>

        </div>
      </div>
    </li>`;

    countriesContainer.insertAdjacentHTML("afterbegin", html);
    countriesContainer.style.opacity = 1;
  });
}


btn.addEventListener('click', function(e){
  getCountryData(input.value);
  input.value= '';
      countriesContainer.style.opacity = 0;
})