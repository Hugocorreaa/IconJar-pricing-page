function inputUp(){
    //Pegando a checkbox
    var checkbox = document.getElementById('checkbox')
    //Pegando o formulario oculto
    var id = document.getElementById('id')

    //Condição, se estiver check mostrar
    if (checkbox.check == true){
        id.style.display ='block'
    } else {
        id.style.display ='none'
    }

}