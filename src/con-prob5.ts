type Weather = 'sunny' | 'rainy' | 'cloudy'

const getWeatherAdvise = (weather:Weather):string => {

    if(weather === 'sunny'){
        return 'Wear Sunscreen cream'
    }else if (weather === 'rainy'){
        return 'Carry an Umbrelal'
    }
    return 'Bring a light Jacket'

}

console.log(getWeatherAdvise('cloudy'));
