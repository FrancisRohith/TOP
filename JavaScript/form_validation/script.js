const email = document.getElementById('email')
const emailError = document.querySelector('#email+.error')
email.addEventListener('input',(event)=>{
    if(!email.validity.valid){
        emailError.textContent = 'Enter a valid email address'
        emailError.className = 'error active'
    }else{
        emailError.textContent = ''
        emailError.className = 'error'
    }
})
const zip = document.getElementById('zipcode')
const zipError = document.querySelector('#zipcode+.error')
const zipRegex = /^\d{6}$/
zip.addEventListener('input',()=>{
    let zipInput = zip.value
    if(!zipRegex.test(zipInput)){
        zip.setCustomValidity('invalid')
        zipError.textContent = 'Enter a valid zip code (6 digits)'
        zipError.className = 'error active'
    }else{
        zipError.textContent = ''
        zipError.className = 'error'
    }
})
const country = document.getElementById('#country')
const countryError = document.querySelector('#country+.error')

const password = document.getElementById('password')
const passwordError = document.querySelector('#password+.error')
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
password.addEventListener('input',()=>{
    const passwordInput = password.value
    if(!passwordRegex.test(passwordInput)){
        password.setCustomValidity('invalid')
        passwordError.textContent = 'Enter a password which contains8 characters.\nAt least 1 uppercase letter. \nAt least 1 lowercase letter.\nAt least 1 number:'
        passwordError.className = 'error active'
    }else{
        password.setCustomValidity('')
        passwordError.textContent = ''
        passwordError.className = 'error'
    }
})
const confirmPassword = document.getElementById('confirm_password')
const confirmPasswordError = document.querySelector('#confirm_password+.error')
confirmPassword.addEventListener('input',()=>{
    const passwordInput = password.value
    const confirmPasswordInput = confirmPassword.value
    if(passwordInput !== confirmPasswordInput){
        confirmPassword.setCustomValidity('invalid')
        confirmPasswordError.textContent = 'Password not match with confirm password'
        confirmPasswordError.className = 'error active'
    }else{
        confirmPassword.setCustomValidity('')
        confirmPasswordError.textContent = ''
        confirmPasswordError.className = 'error'
    }
})