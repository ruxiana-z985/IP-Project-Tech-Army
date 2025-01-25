const btn = document.querySelector('.login-btn');
const input = document.querySelector("input[type='text']");
const password = document.querySelector("input[type='password']");

btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (input.value.trim() && password.value.trim()) {
        window.location.href = "../index.html";
    } else {
        alert("You need to enter information!");
        
        if (!input.value.trim()) {
            input.style.border = "1px solid red";
        } else {
            input.style.border = ""; // Reset border if filled
        }

        if (!password.value.trim()) {
            password.style.border = "1px solid red";
        } else {
            password.style.border = ""; // Reset border if filled
        }
    }
});
