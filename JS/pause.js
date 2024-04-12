document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from local storage
    let wash = parseInt(localStorage.getItem("wash"));
    let timerDisplay = document.getElementById("timer");

    // Display initial value of wash
    timerDisplay.textContent = wash;

    // Buttons
    document.getElementById("cancelWash").addEventListener("click", function() {
        // Open confirmation dialog
        const confirmation = confirm("go back to start?");
        if (confirmation) {
            // Stop interval and redirect to index.html if user confirms
            window.location.href = "index.html";
        }
    });

    document.getElementById("continueWash").addEventListener("click", function() {
        // Store current value of wash into local storage
        localStorage.setItem("wash", timerDisplay.textContent);
        // Stop interval and redirect to pause.html
        window.location.href = "wash.html";
    });
});
