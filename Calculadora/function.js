function insertar(valor){
    document.querySelector('.pantalla').innerHTML+=valor;
}

function resultado(){
    p=document.querySelector('.pantalla'); //Gaurdar en la variable p todo el elemento llamado pantalla.
    console.log(p);
    r=p.innerHTML; //variable r se guarde lo que hay dentro de su innerHTML "00" dentro de p
    res=eval(r); //Variable res evaluo lo que hay en r "2+2" = 4
    p.innerHTML=res; //dive de la pantalla escribe lo que hay en res
}

function borrar(){
    document.querySelector('.pantalla').innerHTML="";
}

function borrauno(){
    //variable p <div class="pantalla"></div>
    p=document.querySelector('.pantalla');

    valores=p.innerHTML;
    console.log(valores);
    t=valores.length; //Tamaño de valores //t=14
    borrar(); //Ejecutamos la funcion borrar

    for(i=0; i<t-1; i++){
        p.innerHTML+=valores[i];
    }
}



