const temperatureInput = document.getElementById('temperature');
        const conversionTypeSelect = document.getElementById('conversionType');
        const resultOutput = document.getElementById('result');
        const convertBtn = document.getElementById('convertBtn');

        
        function convertTemperature() {
            const temperature = parseFloat(temperatureInput.value);
            const conversionType = conversionTypeSelect.value;

            if (!isNaN(temperature)) {
                let result;

                if (conversionType === 'celsiusToFahrenheit') {
                    result = (temperature * 9/5) + 32;
                    resultOutput.textContent = `${temperature} °C is ${result.toFixed(2)} °F`;
                } else if (conversionType === 'fahrenheitToCelsius') {
                    result = (temperature - 32) * 5/9;
                    resultOutput.textContent = `${temperature} °F is ${result.toFixed(2)} °C`;
                }
            } else {
                resultOutput.textContent = '--'; 
            }
        }

        
        convertBtn.addEventListener('click', convertTemperature);