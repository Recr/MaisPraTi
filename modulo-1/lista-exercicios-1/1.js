const input = require('prompt-sync')()

const celsiusTemperature = input("Type the temperature (°C): ");
let fahrenheitTemperature = (celsiusTemperature / 5) * 9 + 32;
console.log(`The temperature is ${fahrenheitTemperature} °F`);
