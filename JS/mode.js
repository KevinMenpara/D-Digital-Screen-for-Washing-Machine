document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("next").disabled = true;
    const modeButtons = document.querySelectorAll(".mode-button");
    let selectedButton = null;

    modeButtons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            if (this !== selectedButton) {
                this.style.backgroundColor = "lightblue";
            }
        });

        button.addEventListener("mouseleave", function() {
            if (this !== selectedButton) {
                this.style.backgroundColor = "";
            }
        });

        button.addEventListener("click", function() {
            if (this !== selectedButton) {
                if (selectedButton) {
                    selectedButton.style.backgroundColor = "";
                }
                this.style.backgroundColor = "darkblue";
                selectedButton = this;
                document.getElementById("next").disabled = false;
            }
        });
    });

    document.getElementById("back").addEventListener("click", function() {
        window.location.href = "soap.html";
    });

    document.getElementById("next").addEventListener("click", function() {
        // Set the mode-id variable in local storage
        if (selectedButton) {
            localStorage.setItem("mode-id", selectedButton.textContent);
        }
        window.location.href = "set.html";
    });

    document.getElementById("cancel").addEventListener("click", function() {
        var confirmCancel = confirm("go back to start?");
        if (confirmCancel) {
            window.location.href = "index.html";
        }
    });
});
