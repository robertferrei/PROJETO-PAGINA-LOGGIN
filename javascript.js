 
const moon = document.querySelector('.moon-outline')
const sunny = document.querySelector('.sunny-outline')
const  form = document.getElementById('login_form')
function toggleMode(){
    moon.classList.toggle('escondido')
    sunny.classList.toggle('escondido')
    form.classList.toggle('dark')
    
}
moon.addEventListener('click',toggleMode)
sunny.addEventListener('click',toggleMode)
form.classList.remove('dark',)
    
    
