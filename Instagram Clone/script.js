const hearts = document.querySelectorAll(".heart-icon");

hearts.forEach(heart => {
    heart.addEventListener("click", function () {
        const path = heart.querySelector("path"); // Select the path inside the svg
        const currentFill = path.getAttribute("fill");

        // Toggle the fill attribute between "red" and "none"
        if (currentFill === "red") {
            path.setAttribute("fill", "none");
        } else {
            path.setAttribute("fill", "red");
        }
    });
});
