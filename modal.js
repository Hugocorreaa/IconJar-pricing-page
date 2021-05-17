function mostrarModal(){
    var x = document.getElementById('modalPop')
    x.classList.add('mostrar')
    
    x.addEventListener('click', (evento) => {
        if(evento.target.classList == "fechar-button" ){
            x.classList.remove('mostrar')
        }
    })
}


