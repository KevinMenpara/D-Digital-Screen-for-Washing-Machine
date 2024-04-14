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

        document.getElementById("washMinus").disabled = (washValue.textContent == 0) ? true : false;
        document.getElementById("washPlus").disabled = (washValue.textContent == 45) ? true : false;
        document.getElementById("tempMinus").disabled = (tempValue.textContent == 0) ? true : false;
        document.getElementById("tempPlus").disabled = (tempValue.textContent == 45) ? true : false;
        document.getElementById("dryMinus").disabled = (dryValue.textContent == 0) ? true : false;
        document.getElementById("dryPlus").disabled = (dryValue.textContent == 45) ? true : false;
    }

    function changeValue(element, delta) {
        let value = parseInt(element.textContent);
        value += delta;
        if (value >= 0) {
            updateValue(element, value);
        }
    }

    document.getElementById("washPlus").addEventListener("click", function() {
        changeValue(washValue, 5);
    });

    document.getElementById("washMinus").addEventListener("click", function() {
        changeValue(washValue, -5);
    });

    document.getElementById("tempPlus").addEventListener("click", function() {
        changeValue(tempValue, 5);
    });

    document.getElementById("tempMinus").addEventListener("click", function() {
        changeValue(tempValue, -5);
    });

    document.getElementById("dryPlus").addEventListener("click", function() {
        changeValue(dryValue, 5);
    });

    document.getElementById("dryMinus").addEventListener("click", function() {
        changeValue(dryValue, -5);
    });

    // Cancel button
    document.getElementById("cancel").addEventListener("click", function() {
        var confirmCancel = confirm("go back to start?");
        if (confirmCancel) {
            window.location.href = "index.html";
        }
    });
});
