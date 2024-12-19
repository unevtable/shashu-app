const navBtn = document.getElementById('navBtn');
const hideBtn = document.getElementById('hideBtn');
const navbar = document.getElementById('navbar');

navBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

hideBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});

document.onclick = function(e) {
    !navbar.contains(e.target) ? navbar.classList.remove('active') : ''
}
