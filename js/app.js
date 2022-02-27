const loadCountries = () =>{
    const countrySearchText = document.getElementById('country-search-text').value;
    const url = `https://restcountries.com/v3.1/name/${countrySearchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountry(data))
}
const displayCountry = (country) =>{
    
}