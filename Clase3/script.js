window.onload=function(){
    var carga = document.getElementById("carga");
    var inter = document.getElementById("inter");
    var real = document.getElementById("real");
    var boton = document.getElementById("boton");
    real.style.display="none";
    inter.style.display="none";
    setTimeout(() => {
        carga.style.display="none";
        inter.style.display="block";
    }, 1000);
    boton.addEventListener('click',function(){
        inter.style.display="none";
        real.style.display="block";
    });
}
