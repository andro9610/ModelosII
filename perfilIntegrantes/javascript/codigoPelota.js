function dibujar(){
    /*Variables que definen cual es el canvas a manipular*/
    var canvas = document.getElementById("contenedorPelota");
    var pelota = canvas.getContext("2d");

    /*Parametros de la pelota, segun el canvas*/
    var x = canvas.width/2;
    var y = canvas.height-30;
    var radioPelota = 10;
    var dx = 2;
    var dy = 2;
                    
    /*dibujarPelota: dibuja una pelota verde en la posicion dada*/
    function dibujarPelota(){
        pelota.beginPath();
        pelota.arc(x, y, radioPelota, 0, Math.PI*2);
        pelota.fillStyle = "darkgreen";
        pelota.fill();
        pelota.closePath();                        
    }

    /*validarColision: verifica si la pelota ha tocado algun borde, y de ser el caso cambia su direccion*/
    function validarColision(){
        /*validacion en X*/
        if(x + dx > canvas.width-radioPelota || x + dx < radioPelota) {
            dx = -dx;
        }
        /*Validacion en Y*/
        if(y + dy > canvas.height-radioPelota || y + dy < radioPelota) {
            dy = -dy;
        }
    }

    /*actualizarDibujo: limpia el canvas y dibuja una pelota en los (x,y) dados*/
    function actualizarDibujo() {
        pelota.clearRect(0, 0, canvas.width, canvas.height);
        dibujarPelota();
        validarColision();
        x += dx;
        y += dy;
    }
    /*Ejecuta 'actualizarDibujo' cada 10 ms*/
    setInterval(actualizarDibujo,10);
}
