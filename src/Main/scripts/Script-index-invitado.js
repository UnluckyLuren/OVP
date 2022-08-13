const Promotion = document.getElementById('Promotion'),
    Promotion_alt = document.getElementById('Promotion-alt'),
    Crear_Ahora = document.getElementById('Crear-Ahora'),
    Final_promotion =document.getElementById('Final-promotion'),
    Init_menu = document.getElementById('Init-menu')


let Alt_promotion = Promotion_alt.offsetTop,
    Final_scroll_promotion = Final_promotion.offsetTop,
    Pixeles= document.documentElement.clientWidth


window.addEventListener('scroll', () => {

    if (Pixeles>1440) {
        if ( window.scrollY >= Alt_promotion+1000 && window.scrollY < Final_scroll_promotion ) {
            
            Crear_Ahora.style.position="static"
            Promotion.classList.add('Fix-Promotion')
    
        } else if ( window.scrollY > Final_scroll_promotion ) {
    
            Crear_Ahora.style.position="absolute"
            Promotion.classList.remove('Fix-Promotion')    
    
        } else {
            Crear_Ahora.style.position="absolute"
            Promotion.classList.remove('Fix-Promotion')
        }
    
    }
    
})


let alt_init_menu = Init_menu.offsetTop


window.addEventListener('scroll', () => { 
    
        if ( window.scrollY > alt_init_menu ) { 

            Init_menu.classList.add('Fix-init-menu')
            Init_menu.classList.remove('Pabs-init-menu')

        } else {

            Init_menu.classList.remove('Fix-init-menu')
            Init_menu.classList.add('Pabs-init-menu')
        }

})


/* Mostrar menu emergente */

const Menu_emergente_Open = document.getElementById('Menu-emergente-image'),
    Menu_emergente = document.getElementById('Menu-emergente'),
    Body_scroll = document.getElementById('Body-scroll')

Menu_emergente_Open.addEventListener('click', () => {

        Body_scroll.classList.toggle('body-scroll')
        Menu_emergente.style.display ="inline"
        Menu_emergente.classList.toggle('Look-menu-emergente')

})









