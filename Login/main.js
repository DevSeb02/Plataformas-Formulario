$('#navId a').click(e => {
    e.preventDefault();
    $(this).tab('show');
});

function obtenerListaUsuarios(){
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'))

    if(listaUsuarios == null){
        listaUsuarios = [
            ['1', 'Sebas', 'Lopez', 'secalop1038@gmail.com', '123a','2001-09-06','1']
        ]
    }
    return listaUsuarios
}
function validarCredenciales(pCorreo, pContraseña){
    let listaUsuarios = obtenerListaUsuarios()
    let bAcceso = false
    
    for(let i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContraseña == listaUsuarios [i][4]){
            bAcceso = true
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]+' '+listaUsuarios[i][2])
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6])
        }

        else{
            alert('Verique sus datos')
        }
    }

    return bAcceso
}
document.querySelector('#login').addEventListener('click', iniciarSesion)

function iniciarSesion(){

    let sCorreo = ''
    let sContraseña = ''
    let bAcceso = false

    sCorreo = document.querySelector('#email').value
    sContraseña = document.querySelector('#password').value

    bAcceso = validarCredenciales(sCorreo, sContraseña)
    
    if(bAcceso == true){
        ingresar()
    }
}
function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo')
    switch(rol){
        case '1': 
            window.location.href="../Compras/index.html"
        break;
        default:
            window.location.href="index.html"
        break;
    }
}