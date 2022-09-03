const MAX_CANT_INTENTOS=3
//usuario y contraseña default para probar el simulador
// si apenas te consulta ponés que si, tenés que usar estas constantes, sino lo que vos cargués
const USUARIO_DEFAULT = 'user'
const PASS_DEFAULT = 'pass'

//auxiliares 
let usuarioAux = USUARIO_DEFAULT
let passAux = PASS_DEFAULT

tieneUsuario()

//constructor de objeto USUARIO
function Usuario(nombre, apellido, mail, usuario, pass){
    this.nombre = nombre
    this.apellido = apellido
    this.mail = mail
    this.usuario = usuario
    this.pass = pass
}

//crea usuario
function creaUsuario(){
    nombre = prompt('Ingrese su nombre')
    apellido = prompt('Ingrese su apellido')
    mail = prompt('Ingrese su mail')
    usuario = prompt('Ingrese el usuario')
    pass = prompt('Ingrese su contraseña')

    const USUARIO = new Usuario(nombre, apellido, mail, usuario, pass)
    return USUARIO
}


//funcion de login
function login(usuarioGuardado, passGuardada){

    let usuarioIngresado=''
    let passIngresada=''
    let retAux = -1
    for(let intentos=1;intentos<=MAX_CANT_INTENTOS+1;intentos++){
        if(intentos == MAX_CANT_INTENTOS+1){
            retAux = 99   //contraseña bloqueada
            break
        }
        else{
            usuarioIngresado = prompt('Ingrese su usuario: ')
            if(usuarioIngresado == null ){
                retAux = 0    //esc
                break
            }
            passIngresada = prompt('Ingrese su contraseña: ')
            if(passIngresada == null){
                retAux = 0    //esc
                break

            }
            if(usuarioIngresado == usuarioGuardado && passIngresada == passGuardada){
                retAux = 1    //login exitoso
                break
            }
            else{
                if(intentos != MAX_CANT_INTENTOS){ 
                   alert('Usuario o contraseña incorrectos. Le quedan ' + (MAX_CANT_INTENTOS-intentos) +' intentos. Ingrese sus datos nuevamente: ')
                }        
            }
        }
    }
    return retAux
}

//función inicial que consulta si tiene un usuario. si tiene, logueás, sino, te creás uno y luego logueás
function tieneUsuario(){
    
    if(confirm('¿Tiene usuario en la página? ')){
        let retLogin = login(usuarioAux, passAux)

        switch(retLogin){
            case -1:
                console.log('No se hizo nada. ERROR')
                break
            case 0:
                console.log('ESC producido')
                break
            case 1:
                console.log('Login exitoso!')
                alert('Login exitoso!')
                break
            case 99:
                console.log('ATENCIÓN. Ha ingresado mal la contraseña '+ MAX_CANT_INTENTOS + ' veces. Su contraseña ha sido bloqueada. Comuníquese con el administrador')
                alert('ATENCIÓN. Ha ingresado mal la contraseña '+ MAX_CANT_INTENTOS + ' veces. Su contraseña ha sido bloqueada. Comuníquese con el administrador')
                break
        }
    }
    else{
        alert('Debe crear un usuario')
        usuarioCreado = creaUsuario()
        usuarioAux = usuarioCreado.usuario
        passAux = usuarioCreado.pass
        console.log('El usuario creado es ' + usuarioCreado.usuario + ' y su contraseña es ' + usuarioCreado.pass)
        tieneUsuario()
    }
}


