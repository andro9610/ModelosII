var juego = document.getElementById("juego");
var dibujar = juego.getContext("2d");

document.addEventListener("keydown",teclaOprimida,false);
document.addEventListener("keyup",teclaSoltada,false);

//Variables de juego
var promedio = 3;
var gradoDificultad = 1;


//Movimiento Estudiante
var xEstudiante = 200;
var yEstudiante = 200;
var velEstudiante = 10;

//movimiento Enemigos
var xProfeMalo = 300;
var yProfeMalo = 300;
var dxProfeMalo = 5;
var dyProfeMalo = 5;

//movimiento ProfeBuueno
var xProfeBueno = 150;
var yProfeBueno = 100;
var dxProfeBueno = 10;
var dyProfeBueno = 10;

//variables de presion de teclas
var derechaPresionada = false;
var izquierdaPresionada = false;
var arribaPresionado = false;
var abajoPresionado = false;

//Control del estudiante
function teclaOprimida(e){
    if (e.keyCode == 39){
        derechaPresionada = true;
    }else if (e.keyCode == 37){
        izquierdaPresionada = true;
    }else if (e.keyCode == 38){
        arribaPresionado = true;
    }else if(e.keyCode){
        abajoPresionado = true;
    }
}

function teclaSoltada(e){
    if (e.keyCode == 39){
        derechaPresionada = false;
    }else if (e.keyCode == 37){
        izquierdaPresionada = false;
    }else if (e.keyCode == 38){
        arribaPresionado = false;
    }else if(e.keyCode){
        abajoPresionado = false;
    }
}

//Caracteristicas del movimiento del estudiante
function moverEstudiante(){
    if(derechaPresionada){
        xEstudiante += velEstudiante;
    }else if(izquierdaPresionada){
        xEstudiante -= velEstudiante;
    }else if(arribaPresionado){
        yEstudiante -= velEstudiante;
    }else if(abajoPresionado){
        yEstudiante += velEstudiante;
    }
}


function comprobarColisonEstudiante(){
    if(xEstudiante < -50){
        xEstudiante = juego.width;
    }else if(xEstudiante > juego.width+50){
        xEstudiante = 0;
    }else if(yEstudiante < -50){
        yEstudiante = juego.height;
    }else if(yEstudiante > juego.height+50){
        yEstudiante = 0;
    }
}
//Funciones que programan el movimiento del aliado
function comprobarColisionProfeBueno(){
    if(xProfeBueno> juego.width + 120 || xProfeBueno < -120 ){
        dxProfeBueno = -dxProfeBueno;
    }else if(yProfeBueno > juego.height + 120 || yProfeBueno < -120){
        dyProfeBueno = -dyProfeBueno;
    }
}

function moverProfeBueno(){
    xProfeBueno += dxProfeBueno;
    yProfeBueno += dyProfeBueno;
}

//Funciones que programan el movimiento del enemigo
function comprobarColisionProfeMalo(){
    if(xProfeMalo> juego.width + 120 || xProfeMalo < -120 ){
        dxProfeMalo = -dxProfeMalo;
    }else if(yProfeMalo > juego.height + 120 || yProfeMalo < -120){
        dyProfeMalo = -dyProfeMalo;
    }
}

function moverProfeMalo(){
    xProfeMalo += dxProfeMalo;
    yProfeMalo += dyProfeMalo;
}

//Funciones que dibujan al profe bueno
function dibujarProfeBueno(){
    dibujar.beginPath();
    dibujar.arc(xProfeBueno,yProfeBueno,15,0,Math.PI*2,false);
    dibujar.fillStyle = "darkBlue";
    dibujar.fill();
    dibujar.closePath();
}

//Funcion que me dibuja a mi, el estudiante, y mi hermoso promedio de 5.0
function dibujarEstudiante(){
    dibujar.beginPath();
    dibujar.arc(xEstudiante,yEstudiante,15,0,Math.PI*2,false);
    dibujar.fillStyle = "lightgreen";
    dibujar.fill();
    dibujar.closePath();
}
//Funcion que dibuja a losprofes malos
function dibujarProfeMalo(){
    dibujar.beginPath();
    dibujar.arc(xProfeMalo,yProfeMalo,25,0,Math.PI*2,false);
    dibujar.fillStyle = "Red";
    dibujar.fill();
    dibujar.closePath();
}
//Detectores de perdida de puntaje
function actualizarPuntaje(){
    if(xEstudiante == xProfeMalo && yEstudiante == yProfeMalo && gradoDificultad< 0.1){
        promedio -=1*gradoDificultad;
        gradoDificultad -=0.001;
        dxProfeMalo -= dxProfeMalo*gradoDificultad;
        dyProfeMalo -= dyProfeMalo*gradoDificultad;

        dxProfeBueno += dxProfeBueno*gradoDificultad;
        dyProfeBueno += dyProfeBueno*gradoDificultad;
    }else if(xEstudiante == xProfeBueno && yEstudiante == xProfeBueno && gradoDificultad< 0.1){
        promedio +=1*gradoDificultad;
        gradoDificultad +=0.001;
        dxProfeMalo += dxProfeMalo*gradoDificultad;
        dyProfeMalo += dyProfeMalo*gradoDificultad;

        dxProfeBueno -= dxProfeBueno*gradoDificultad;
        dxProfeBueno -= dxProfeBueno*gradoDificultad;
    }
}

//funcion que comprueba si el juego continua
function juegoContinua(){
    if(promedio <= 0){
        alert(" Perdiste, te echaste hasta los huecos!");
    }else if(promedio >= 5){
        alert("Ganaste el semestre, las trasnochadas valieron la pena :v");
    }
}

//main
function ejecutarScript(){
    dibujar.clearRect(0, 0, juego.width, juego.height);
    dibujarEstudiante();
    dibujarProfeBueno();
    dibujarProfeMalo();
    comprobarColisonEstudiante();
    comprobarColisionProfeBueno();
    comprobarColisionProfeMalo();
    moverEstudiante();
    moverProfeBueno();
    moverProfeMalo();
    actualizarPuntaje();
    juegoContinua();
}

setInterval(ejecutarScript,10);