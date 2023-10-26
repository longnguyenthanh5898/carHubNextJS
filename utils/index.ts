export const fetchData = async () => {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb74faf849msha28bec6c0ab4f6fp1495d8jsnbddd9a305a06',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };
  
        const response = await fetch(url, options);
        const  result = await response.json();
    return result;    
   
}

export const calCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // base rental price per day
    const mileAgeFactor = 0.1 // additional rare per mile driven
    const ageFactor = 0.05 // additional rate per year of vehicle age

    //cal additional rate based on mileage and age
    const mileAgeRate = city_mpg * mileAgeFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileAgeRate + ageRate;

    return rentalRatePerDay.toFixed(0)

}