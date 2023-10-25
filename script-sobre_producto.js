const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.grande')

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click' ,()=>{

        let posicion = i
        let operation = posicion * -50

        grande.style.transform = 'translateX(${ operacion }%)'

    })


})