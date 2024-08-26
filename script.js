const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');

// Debugging: Check if elements are correctly selected
console.log('Start Button:', startButton);
console.log('Stop Button:', stopButton);
console.log('Reset Button:', resetButton);
console.log('Display:', display);

const stopwatch = (function() {
    let time = 0;
    let interval;

    function formatTime(seconds) {
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    } 
    function start() {
        // Debugging: Check if start function is called
        console.log('Start function called');
        interval = setInterval(() => {
            time++;
            display.textContent = formatTime(time);
            // Debugging: Check the timer count
            console.log('Timer:', formatTime(time));
        }, 1000);
    }
    function stop() {
        // Debugging: Check if stop function is called
        console.log('Stop function called');
        clearInterval(interval);
        return;
    }
    function reset() {
        // Debugging: Check if reset function is called
        console.log('Reset function called');
        clearInterval(interval);
        display.textContent =  formatTime(0);
        time =0;
        return;
    }
    return {
        start,
        stop,
        reset
    };
})();

startButton.addEventListener('click', () => { 
    console.log('Start button clicked');
    stopwatch.start();
});

stopButton.addEventListener('click', () => {
    console.log('Stop button clicked');
    stopwatch.stop();
});

resetButton.addEventListener('click', () => {
    console.log('Reset button clicked');
    stopwatch.reset();
});