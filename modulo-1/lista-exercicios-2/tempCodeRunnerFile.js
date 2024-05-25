for (let u = 0; u < 8; u++) {
        let number = Math.round(Math.random() * 100); // generates number between 0 and 99
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { // randonly decides if the number will be positive or negative
            number *= -1;
        }
        matrixColums.push(number);
    }