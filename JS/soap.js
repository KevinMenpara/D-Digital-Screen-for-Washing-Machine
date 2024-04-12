document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("back").addEventListener("click", function() {
        window.location.href = "clothes.html";
    });

    document.getElementById("next").addEventListener("click", function() {
        window.location.href = "mode.html";
    });

    document.getElementById("cancel").addEventListener("click", function() {
        var confirmCancel = confirm("go back to start?");
        if (confirmCancel) {
            window.location.href = "index.html";
        }
    });
});
