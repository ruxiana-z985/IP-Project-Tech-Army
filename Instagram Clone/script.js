const hearts = document.querySelectorAll(".heart-icon");

hearts.forEach(heart => {
    heart.addEventListener("click", function () {
        const path = heart.querySelector("path"); // Select the path inside the svg
        const currentFill = path.getAttribute("fill");
        const currentStroke=path.getAttribute("stroke");

        // Toggle the fill attribute between "red" and "none"
        if (currentFill === "red") {
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "white");
        } else {
            path.setAttribute("fill", "red");
            path.setAttribute("stroke","none");
        }
    });
});
