document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from local storage
    let mode = localStorage.getItem("mode-id");
    document.getElementById("modeTitle").textContent = "Set Parameters of " + mode;

    // Buttons
    document.getElementById("back").addEventListener("click", function() {
        window.location.href = "mode.html";
    });

    document.getElementById("next").addEventListener("click", function() {
        // Store values in local storage
        localStorage.setItem("wash", document.getElementById("washValue").textContent);
        localStorage.setItem("temp", document.getElementById("tempValue").textContent);
        localStorage.setItem("dry", document.getElementById("dryValue").textContent);
        window.location.href = "confirm.html";
    });

    // Settings
    const washValue = document.getElementById("washValue");
    const tempValue = document.getElementById("tempValue");
    const dryValue = document.getElementById("dryValue");

    function updateValue(element, value) {
        element.textContent = value;
    }

    function changeValue(element, delta) {
        let value = parseInt(element.textContent);
        value += delta;
        if (value >= 0) {
            updateValue(element, value);
        }
    }

    document.getElementById("washPlus").addEventListener("click", function() {
        changeValue(washValue, 1);
    });

    document.getElementById("washMinus").addEventListener("click", function() {
        changeValue(washValue, -1);
    });

    document.getElementById("tempPlus").addEventListener("click", function() {
        changeValue(tempValue, 1);
    });

    document.getElementById("tempMinus").addEventListener("click", function() {
        changeValue(tempValue, -1);
    });

    document.getElementById("dryPlus").addEventListener("click", function() {
        changeValue(dryValue, 1);
    });

    document.getElementById("dryMinus").addEventListener("click", function() {
        changeValue(dryValue, -1);
    });

    // Cancel button
    document.getElementById("cancel").addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
