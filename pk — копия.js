let modalWindowRegister = document.querySelector('.Registration');
let buttonModals = document.querySelectorAll('.modal_button');
let buttonRegHeader = document.querySelector('.header__button')
let modalClose = document.querySelectorAll('.modal_close');
let body = document.querySelector('body');
let userProfile = document.querySelector('.userProfileHeader')
let buttonleave = document.querySelector('.leaveAccount')
let AutorizationText = document.querySelector('.LinkAuth')
let AuthModal = document.querySelector('.Authorization')
let RegistrationText = document.querySelector('.LinkReg')
let profilePhotos = document.querySelector('.profilePhoto')
let ModalPhoto = document.querySelector('.ChooseProfilePhoto')
let PhotoChoose = document.querySelectorAll('.PhotoProfileChoose')
let authButtonModal = document.querySelector('.autorizationButton')


let buttonRegistr2 = document.querySelector('.main-display_button');
let login = document.querySelector('.modal_input_login');
let numberTelefon = document.querySelector('.modal_input_number');
let password = document.querySelector('.modal_input_password');
let retry_password = document.querySelector('.modal_input_retry_password');
let email = document.querySelector('.modal_input_Email')





buttonModals.forEach((item) =>{
    item.addEventListener('click', () =>{
        modalWindowRegister.style.display = 'flex';
        body.classList.add('noscroll');
    });
});

modalClose.forEach((item) =>{
    item.addEventListener('click', () =>{
        modalWindowRegister.style.display = 'none';
        AuthModal.style.display = 'none'
        ModalPhoto.style.display = 'none';
        body.classList.remove('noscroll');
    
    });
});







buttonRegistr2.addEventListener('click', () => {
    let warning = document.querySelector('.WarningRegister')
    loginValue = login.value
    numberTelefonValue = numberTelefon.value
    passwordValue = password.value
    retry_passwordValue = retry_password.value
    emailValue = email.value
    if(loginValue == '' || numberTelefonValue == '' || passwordValue == '' || retry_passwordValue == '' || emailValue == ''){
        warning.textContent = "Вы должны заполнить все поля"
    }else{
        if(numberTelefonValue.length != 12){
            warning.textContent = 'Неверный формат номера или начните с +7-'
        }else{
            if(loginValue.length <= 6){
                warning.textContent = 'Длина логина должна быть больше 6 символов'
            }else{
                if(passwordValue.length < 8){
                    warning.textContent = 'Длина пароля должна быть больше 8'
                }else{
                    if(passwordValue != retry_passwordValue){
                        warning.textContent = 'Пароли должны совпадать'
                    }else{
                        if(numberTelefonValue[0] != '+'){
                            warning.textContent = 'Неверный формат номера'
                        }else{
                            modalWindowRegister.style.display = 'none';
                            localStorage.setItem('conditionRegistration', 1)
                            buttonRegHeader.style.display = 'none'
                            body.classList.remove('noscroll');
                            warning.textContent = ''
                            AccountCheck()
                        }
                    }
                }
            }
        }
    }
})





function AccountCheck() {
    let checkRegistration = localStorage.getItem('conditionRegistration')
    if(checkRegistration == 1){
        userProfile.style.display = ''
        buttonRegHeader.style.display = 'none'

    }else{
        userProfile.style.display = 'none'
        buttonRegHeader.style.display = ''
    }

}
AccountCheck()


buttonleave.addEventListener('click', () => {
    localStorage.setItem('conditionRegistration', 0)
    AccountCheck()
})





AutorizationText.addEventListener('click', () => {
    modalWindowRegister.style.display = 'none';
    AuthModal.style.display = 'flex';
})

RegistrationText.addEventListener('click', () => {
    AuthModal.style.display = 'none';
    modalWindowRegister.style.display = 'flex';
}

)


profilePhotos.addEventListener('click', () =>{
    ModalPhoto.style.display = 'flex';
    body.classList.add('noscroll');
})


function photoProfileSet() {
    // localStorage.setItem('NumberPhotoTime', NumberPhoto)
    NumberPhoto = localStorage.getItem('NumberPhotoTime')
    let src = document.querySelector('.profilePhoto')
    src.innerHTML = `
        <img class="ProfileIcon" src="img/ProfilePhoto/ava${NumberPhoto}.jpg" alt="">
    `
}
photoProfileSet()


PhotoChoose.forEach((item) =>{
    item.addEventListener('click', (event) =>{
        let id = event.target.id
        localStorage.setItem('NumberPhotoTime', id)
        photoProfileSet()
        ModalPhoto.style.display = 'none';
        body.classList.remove('noscroll');
    });
});


authButtonModal.addEventListener('click', () => {
    let warning = document.querySelector('.WarningAuto')
    let InputLogin = document.querySelector('.modal_input_login_auth')
    let InputPassword = document.querySelector('.modal_input_password_auth')
    let loginValue = InputLogin.value
    let passwordValue = InputPassword.value
    if(loginValue == '' || passwordValue == ''){
        warning.textContent = "Вы должны заполнить все поля"
    }else{
        if(loginValue.length < 6){
            warning.textContent = 'Длина логина должна быть больше 6 символов'
        }else{
            if(passwordValue.length < 8){
                warning.textContent = 'Длина пароля должна быть больше 8'
            }else{
                AuthModal.style.display = 'none'
                body.classList.remove('noscroll');
                warning.textContent = ''
            }
        }  
    }
})