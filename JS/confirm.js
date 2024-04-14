document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from local storage
    const mode = localStorage.getItem("mode-id");
    const wash = localStorage.getItem("wash");
    const temp = localStorage.getItem("temp");
    const dry = localStorage.getItem("dry");

    // Display fetched data
    document.getElementById("mode-id").textContent = mode;
    document.getElementById("washValue").textContent = wash + " mins";
    document.getElementById("tempValue").textContent = temp + " °C";
    document.getElementById("dryValue").textContent = dry + " mins";

    // Buttons
    document.getElementById("back").addEventListener("click", function() {
        window.location.href = "set.html";
    });

    document.getElementById("next").addEventListener("click", function() {
        localStorage.setItem("wash", document.getElementById("washValue").textContent);
        window.location.href = "wash.html";
    });

    // Cancel button
    document.getElementById("cancel").addEventListener("click", function() {
        var confirmCancel = confirm("go back to start?");
        if (confirmCancel) {
            window.location.href = "index.html";
        }
    });
});
