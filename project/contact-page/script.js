function samaka() {
    const navMenu = document.querySelector('.navbar ul');
    navMenu.classList.toggle('active');
}
window.onload = function () {
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1500);
};
function submitForm(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return; 
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("confirmation-message").style.display = "block";
    setTimeout(function() {
        document.getElementById("confirmation-message").style.display = "none";
    }, 5000);
}
document.getElementById("submit-button").addEventListener("click", submitForm);




