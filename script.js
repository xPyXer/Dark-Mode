let btnDarkMode = document.querySelector('#btn-dark-mode'); //
let html = document.querySelector('html');

btnDarkMode.addEventListener('click',function(){ 
    btnDarkMode.classList.toggle('active-dark');
    html.classList.toggle('active');
});