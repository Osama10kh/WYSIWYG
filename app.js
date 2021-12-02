const navBtn = document.querySelector('.nav-layer');
const navBar = document.querySelector('.nav-bar');
const xBtn = document.querySelector('.x-btn');


function displayNav() {
    navBtn.style.display = "none";
    navBar.style.display = "block";
}

xBtn.addEventListener('click', function (ev) {
    navBtn.style.display = "block";
    navBar.style.display = "none";
});