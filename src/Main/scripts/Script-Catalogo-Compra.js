const Plan_1_example = document.getElementById('Plan-1-example'),
    Plan_2_example = document.getElementById('Plan-2-example'),
    Plan_3_example = document.getElementById('Plan-3-example'),
    Plan_4_example = document.getElementById('Plan-4-example'),
    Plan_5_example = document.getElementById('Plan-5-example'),
    Plan_6_example = document.getElementById('Plan-6-example'),
    Plan_7_example = document.getElementById('Plan-7-example'),
    Plan_8_example = document.getElementById('Plan-8-example'),
    Plan_9_example = document.getElementById('Plan-9-example'),
    Plan_10_example = document.getElementById('Plan-10-example'),
    Penultima_flecha_1 = document.getElementById('Penultima_flecha-1'),
    Penultima_flecha_2 = document.getElementById('Penultima_flecha-2')


    let Pixeles =  document.documentElement.clientWidth

    if (Pixeles < 1044) {

        Penultima_flecha_1.style.display="none"
        Penultima_flecha_2.style.display="none"
        Plan_1_example.style.display="none"
        Plan_2_example.style.display="none"
        Plan_3_example.style.display="none"
        Plan_4_example.style.display="none"
        Plan_5_example.style.display="none"
        Plan_6_example.style.display="none"
        Plan_7_example.style.display="none"
        Plan_8_example.style.display="none"
        Plan_9_example.style.display="none"
        Plan_10_example.style.display="none"


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










