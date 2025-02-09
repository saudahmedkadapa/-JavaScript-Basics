function celsius(temp) {
    return (temp - 32) * (5 / 9);
}

function func1() {
    const temperatures = [99, 86, 99, 75, 66, 23];
    const celsiusTemp = temperatures.map(celsius);
    console.log("Original temperatures (Fahrenheit):", temperatures);
    console.log("Converted temperatures (Celsius):", celsiusTemp);
}

func1();
