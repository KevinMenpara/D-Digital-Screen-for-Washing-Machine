document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("back").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("next").addEventListener("click", function() {
        window.location.href = "soap.html";
    });

    document.getElementById("cancel").addEventListener("click", function() {
        var confirmCancel = confirm("go back to start?");
        if (confirmCancel) {
            window.location.href = "index.html";
        }
    });
});
