function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// while (contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;
    
//     tecla.onclick = ()=>{
//         tocaSom(idAudio);
//     };

//     contador++;
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = () =>{
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if(evento.code == 'Enter' || evento.code == ''){
            tecla.classList.add('active');  
        }
    }

    tecla.onkeyup = () =>{
        tecla.classList.remove('active');
    }

    
}


