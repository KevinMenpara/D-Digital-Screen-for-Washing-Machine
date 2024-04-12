document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from local storage
    const mode = localStorage.getItem("mode-id");
    const wash = localStorage.getItem("wash");
    const temp = localStorage.getItem("temp");
    const dry = localStorage.getItem("dry");

    // Display fetched data
    document.getElementById("mode-id").textContent = mode;
    document.getElementById("washValue").textContent = wash;
    document.getElementById("tempValue").textContent = temp;
    document.getElementById("dryValue").textContent = dry;

    // Buttons
    document.getElementById("back").addEventListener("click", function() {
        window.location.href = "set.html";
    });

    document.getElementById("next").addEventListener("click", function() {
        window.location.href = "wait.html";
    });

    // Cancel button
    document.getElementById("cancel").addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
