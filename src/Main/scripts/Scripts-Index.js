const open = document.getElementById( 'open'); 
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


const Background_1 = document.getElementById('Backgr-1'),
    Background_2 = document.getElementById('Backgr-2'),
    Background_3 = document.getElementById('Backgr-3'),
    Background_4 = document.getElementById('Backgr-4'),
    Ball_ind_1 = document.getElementById('Ball-ind-1'),
    Ball_ind_2 = document.getElementById('Ball-ind-2'),
    Ball_ind_3 = document.getElementById('Ball-ind-3'),
    Ball_ind_4 = document.getElementById('Ball-ind-4')

/* Acomodo de la información en el slider */


const Text_BG_1=document.getElementById('Text-BG-1'),
    Text_BG_2=document.getElementById('Text-BG-2'),
    Text_BG_3=document.getElementById('Text-BG-3'),
    Text_Atribuciones=document.getElementById('Atribuciones'),
    Editor_Atribuciones=document.getElementById('Editor-Atribuciones'),
    Img_Marca= document.getElementById('Img-1-Bg')



const Backgr_init= () => { setInterval (Change_BG, 3000) } 
let intval = 0


const Step_Up = document.getElementById('step-up'),
    Step_Down = document.getElementById('step-down')
    
Step_Up.addEventListener('click', () => {
    Change_BG()
})
    
Step_Down.addEventListener('click', () => {
    Change_BG()
})
    
function Change_BG () {

    if (intval===0) {
        Background_4.style.transition="all 0.8s"
        Background_4.style.opacity="0"
        Background_1.style.opacity="1"

         /* Acomodo del BG blanco que indica el numero de la imgen del slider  */
        Ball_ind_4.classList.remove('Color-balls-ind')
        Ball_ind_1.classList.add('Color-balls-ind')


        /* Quito los eventos de los enlaces por posibles sobreposiciones */

        Text_Atribuciones.style.pointerEvents="none"
        Editor_Atribuciones.style.pointerEvents="none"


        /* Estilizado info */
        Text_BG_3.style.opacity="0"
        Text_Atribuciones.style.opacity="0"
        Editor_Atribuciones.style.opacity="0"
        Img_Marca.style.transition="all 0.2s"
        Img_Marca.style.opacity="1"


        intval++
    } else  if (intval===1) {
        Background_1.style.transition="all 0.8s"
        Background_1.style.opacity="0"
        Background_2.style.opacity="1"

         /* Acomodo del BG blanco que indica el numero de la imgen del slider  */
        Ball_ind_1.classList.remove('Color-balls-ind')
        Ball_ind_2.classList.add('Color-balls-ind')

        /* Estilizado info */
        Img_Marca.style.opacity="0"
        Text_BG_1.style.transition="all 0.2s"
        Text_BG_1.style.opacity="1"

        intval++
    } else  if (intval===2) {
        Background_2.style.transition="all 0.8s"
        Background_2.style.opacity="0"
        Background_3.style.opacity="1"

         /* Acomodo del BG blanco que indica el numero de la imgen del slider  */
        Ball_ind_2.classList.remove('Color-balls-ind')
        Ball_ind_3.classList.add('Color-balls-ind')

        /* Estilizado info */
        Text_BG_1.style.opacity="0"
        Text_BG_2.style.transition="all 0.2s"
        Text_BG_2.style.opacity="1"

        intval++
    } else  if (intval===3) {
        Background_3.style.transition="all 0.8s"
        Background_3.style.opacity="0"
        Background_4.style.opacity="1"

        /* Acomodo del BG blanco que indica el numero de la imgen del slider  */
        Ball_ind_3.classList.remove('Color-balls-ind')
        Ball_ind_4.classList.add('Color-balls-ind')


        /* Estilizado info */
        Text_BG_2.style.opacity="0"

        /* Transiciones */
        Text_BG_3.style.transition="all 0.2s"
        Text_Atribuciones.style.transition="all 0.2s"
        Editor_Atribuciones.style.transition="all 0.2s"
        
        Text_Atribuciones.style.pointerEvents="all"
        Editor_Atribuciones.style.pointerEvents="all"

        Text_BG_3.style.opacity="1"
        Text_Atribuciones.style.opacity="1"
        Editor_Atribuciones.style.opacity="1"

        intval=0
    }

}

Backgr_init()



/* Mostrar menu emergente */

const Menu_emergente_Open = document.getElementById('Menu-emergente-image'),
    Menu_emergente = document.getElementById('Menu-emergente'),
    Body_scroll = document.getElementById('Body-scroll')

Menu_emergente_Open.addEventListener('click', () => {

        Body_scroll.classList.toggle('body-scroll')
        Menu_emergente.style.display ="inline"
        Menu_emergente.classList.toggle('Look-menu-emergente')

})






