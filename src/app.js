import axios from "axios";

const localCurrency = (currencies) => {
    let local = "";
    for (let i = 0; i < currencies.length; i++) {
        if (i>0) {
            local += ' and ' + currencies[i].name + 's.';
        }
        else {
            local= currencies[i].name;
        }
    }
    console.log(local);
    return local;
}

async function fetchCountryInformation() {
    const BASE = "https://restcountries.com/";
    const EndPoint = "v2/name/";
    const searchBar = document.getElementById("search-bar");
    const searchBarValue = searchBar.value;
    searchBar.value = '';
    // console.log('Printing the URL: ' + BASE + EndPoint + searchBarValue);
    try {
        const response = await axios.get(BASE + EndPoint + searchBarValue);
        // console.log(response);
        let countries = response.data;
        // console.log(countries);
        const listOFCountries = document.getElementById("listOfCountries")
                countries
            .map((country) =>
                listOFCountries.innerHTML = `<li class="lister">
                <div class="land-flag">
                   <h3 class="country-names">${country.name}</h3>
                   <img src="${country.flags.png}" alt="${country.flag}" class="img-size"/>                 
                </div>
                    <h6 class="h-font">${country.name} is situated in ${country.region}. It has population of ${country.population} </h6>
                    <h6 class="h-font"> The capital city is ${country.capital} and you can pay with ${localCurrency(country.currencies)}  </h6>
                    </li>`
            )
    } catch
        (err) {
        console.error(err)
    }
}
const searchButton =document.getElementById("search-button");
searchButton.addEventListener("click",fetchCountryInformation )


