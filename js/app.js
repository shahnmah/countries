const loadCountries = () =>{
    const countrySearchText = document.getElementById('country-search-text').value;
    const url = `https://restcountries.com/v3.1/name/${countrySearchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountry(data))
}
const displayCountry = (countries) =>{
    const countryContainer = document.getElementById('country-container');
    for(const country of countries){
        const countryDetails = document.createElement('div')
        countryDetails.innerHTML = ` 
      
            <div class="card my-4" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common}">
                <div class="card-body">
                    <h3 class="card-title">${country.name.common}</h3>
                <h4>Capital: ${country.capital}</h4>
                <h5>Region: ${country.region}</h5>
                <h5>Area: ${country.area}</h5>
                <h5>Population: ${country.population}</h5>
                </div>
            </div> `
    countryContainer.appendChild(countryDetails)
    }
    

}