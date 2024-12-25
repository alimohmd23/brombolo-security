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