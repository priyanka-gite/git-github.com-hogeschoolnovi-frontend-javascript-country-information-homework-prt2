 import axios from "axios";


async function fetchCountryInformation() {
    const BASE = "https://restcountries.com/";
    const EndPoint = "v2/name/Marshall Islands";
    // const name = inputEvent();

        try {
        const response = await axios.get(BASE + EndPoint)
            console.log(response);
               let countries = response.data;
            console.log(countries);
        const listOFCountries = document.getElementById("listOfCountries")

let local = [];
         const localCurrency = (arr)=> {
            for (let i = 0 ; i < arr.length ; i++) {
                 local = arr[i].currencies[i].name
            }
             console.log(local);
         }


        countries
                  .map((country)=>
            listOFCountries.innerHTML += `<li class="lister">
                <div class="land-flag">
                   <h3 class="country-names">${country.name}</h3>
                   <img src="${country.flags.png}" alt="${country.flag}" class="img-size"/>                 
                </div>
                    <h6>${country.name} is situated in ${country.region}. It has population of ${country.population} </h6>
                    <h6> The capital city is ${country.capital} and you can pay with ${country.localCurrency}  </h6>
                     </li>`
        )
    } catch
        (err) {
        console.error(err)
    }
}
    fetchCountryInformation();

// const searchBar = document.getElementById("search-bar").value;
// const inputEvent = function event (e){
//             const inputCountries = e.target.value;
//         console.log(inputCountries);
//     }
// inputEvent();
// searchBar.addEventListener('keyup',event);



// const searchButton =document.getElementById("search-button");
// searchButton.addEventListener("click",fetchCountryInformation )


