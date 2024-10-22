        const minView = document.querySelector('#minutes');
        const secView = document.querySelector('#seconds');
        const resetButton = document.getElementById('reset');
        const toggleButton = document.getElementById('toggle');
        
        let seconds = 59;
        let minutes = 15;
        let interval;
        
        const updateDisplay = () => {
            secView.innerText = String(seconds).padStart(2, '0');
            minView.innerText = String(minutes).padStart(2, '0');
        };
        const startTimer = () => {
            interval = setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    clearInterval(interval);
                    return;
                }
                updateDisplay();
            }, 1000);
        };
        

        // кнопки
        toggleButton.addEventListener('click', () => {
                if (toggleButton.textContent === 'Старт') {
                    startTimer();
                    toggleButton.textContent = 'Пауза';
                    toggleButton.style.backgroundColor = '#ffc107';
                } else {
                    clearInterval(interval);
                    toggleButton.textContent = 'Старт';
                    toggleButton.style.backgroundColor = '#28a745'; 
                }
            });
    
            resetButton.addEventListener('click', () => {
                clearInterval(interval);
                seconds = 59; 
                minutes = 15;
                updateDisplay();
                toggleButton.textContent = 'Старт';
                toggleButton.style.backgroundColor = '#28a745'; 
            });

        
