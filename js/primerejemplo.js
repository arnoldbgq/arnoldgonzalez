console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function triste(){
    document.getElementById('carita').src='images/sad.png';
    alert("Po que ta triste mano");
}
function feliz(){
    document.getElementById('carita').src='images/happy.png';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#eed33aff';

}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo2.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#524604';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
    document.getElementById('titulo3').textContent="CAMBIO DE TEXTO";
}
function fondoAside(){
    document.getElementById('aside').style.background='#f584f5ff';
}
function mostrarMenu(){
    document.getElementById('m0').textContent="Index";
    document.getElementById('m1').innerText="Imagenes";
    document.getElementById('m2').textContent="Listas";
    document.getElementById('m3').textContent="Tablas";
    document.getElementById('m4').textContent="JavaScript";
    document.getElementById('m5').textContent="Formularios";
    document.getElementById('m6').textContent="Bootstrap";
    document.getElementById('mt').textContent="ekoMArket";
    
}