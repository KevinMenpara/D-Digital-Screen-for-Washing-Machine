document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from local storage
    let wash = parseInt(localStorage.getItem("wash"));
    let timerDisplay = document.getElementById("timer");

    // Display initial value of wash
    timerDisplay.textContent = wash;

    // Function to decrease wash value by 1 every second
    function decreaseWash() {
        wash--;
        // Check if wash value is zero
        if (wash <= 0) {
            // Stop interval
            clearInterval(intervalId);
            // Redirect to index.html
            window.location.href = "index.html";
        } else {
            timerDisplay.textContent = wash;
            // Update value in local storage
            localStorage.setItem("wash", wash.toString());
        }
    }

    // Set interval to decrease wash value every second
    let intervalId = setInterval(decreaseWash, 1000);

    // Buttons
    document.getElementById("cancelWash").addEventListener("click", function() {
        // Open confirmation dialog
        const confirmation = confirm("go back to start?");
        if (confirmation) {
            // Stop interval and redirect to index.html if user confirms
            clearInterval(intervalId);
            window.location.href = "index.html";
        }
    });

    document.getElementById("pauseWash").addEventListener("click", function() {
        // Store current value of wash into local storage
        localStorage.setItem("wash", timerDisplay.textContent);
        // Stop interval and redirect to pause.html
        clearInterval(intervalId);
        window.location.href = "pause.html";
    });
});
