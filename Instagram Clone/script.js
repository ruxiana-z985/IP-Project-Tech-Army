//FRONT PAGE LOADER
if (!sessionStorage.getItem('visited')) {
    // If it's the first time, redirect to load.html
    sessionStorage.setItem('visited', 'true');
    window.location.href = 'loading_page/load.html';
  }

//HEART 
const hearts = document.querySelectorAll(".heart-icon");

hearts.forEach(heart => {
    heart.addEventListener("click", function () {
        const path = heart.querySelector("path"); // Select the path inside the svg
        const currentFill = path.getAttribute("fill");
        
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


//CREATE POST FUNCTIONALITY


const dialog=document.getElementById("dialog");
const create=document.querySelectorAll(".create");
const dialog_cancel=document.querySelector(".dialog-cancel");
const dialogFlex = document.querySelector('.dialog-flex');

create.forEach(element => {
    element.addEventListener("click",function(){
    dialog.showModal();
});
});


//event is an object passed to function and contains details about what was clicked
dialog.addEventListener('click', (event) => {
    // Check if the click is outside `.dialog-flex`
    if (!dialogFlex.contains(event.target)) {
      dialog.close(); // Close the dialog
    }
  });
dialog_cancel.addEventListener("click", function(){
    dialog.close();
});

//REMOVE SUGGESTED PROFILES
const fyp=document.querySelector(".suggestionsFYP");

fyp.addEventListener("click", function(event){
    // Check if the clicked element has the class "cancel"
    if (event.target.classList.contains("cancel")) {
        // Find the closest parent div with the class "suggestion-item" and remove it
        const parentDiv = event.target.closest('.suggest');
        if (parentDiv) {
            parentDiv.remove();
        }
    }
 });
