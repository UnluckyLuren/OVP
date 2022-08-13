const btnSignIn = document.querySelector('.sign-in-btn'), 
      btnSignUp = document.querySelector('.sign-up-btn'),
      signUp = document.querySelector('.sign-up'),
      signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === btnSignIn || e.target === btnSignUp) {
        signIn.classList.toggle('active')
        signUp.classList.toggle('active')
    }
})


const Ocult_welcome = document.getElementById('Ocult-welcome'),
    Ocult_welcome_message = document.getElementById('Ocult-welcome-message'),
    Enlace_change_init_regist = document.getElementById('Enlace-change-init-regist'),
    Enlace_change_Regist = document.getElementById('Enlace-change-Regist')

    let Pixeles =  document.documentElement.clientWidth

if (Pixeles<1024) {
    Ocult_welcome.style.display="none"
    Ocult_welcome_message.style.display="none"

    Enlace_change_init_regist.addEventListener('click', () => {

        signIn.classList.toggle('active')
        signUp.classList.toggle('active')

    })

    Enlace_change_Regist.addEventListener('click', () => {

        signIn.classList.toggle('active')
        signUp.classList.toggle('active')

    })

}



/* Mostrar menu emergente */

const Menu_emergente_Open = document.getElementById('Menu-emergente-image'),
    Menu_emergente = document.getElementById('Menu-emergente'),
    Body_scroll = document.getElementById('Body-scroll')

Menu_emergente_Open.addEventListener('click', () => {

        Body_scroll.classList.toggle('body-scroll')
        Menu_emergente.style.display ="inline"
        Menu_emergente.classList.toggle('Look-menu-emergente')

})









