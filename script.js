let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')
var classy = document.getElementById('class')
var saibamais = document.getElementById('saibamais')
var explanation = document.getElementById('explanation')
var num1;
var num2;


calcular.addEventListener('click', function(){

    
    //condições

    if(altura.value > 100){

    var num2 = altura.value/100


    }

    else{

    var num2 = altura.value



    }

    if(peso.value >1000){

        num1 = peso.value/100


    }

    else{

        num1 = peso.value
    


    }

    let imc_calc =  (num1 / (num2 * num2 ))
    let rounded = imc_calc.toFixed(2)
    
    resultado.innerHTML = rounded;
 
    if (rounded < 18){

        classy.innerHTML= 'Magreza'
       

    }

    else if ( rounded <= 24.90){

        classy.innerHTML='Peso Ideal'
       


    }

    else{

        classy.innerHTML='Acima do peso'
       

    }

    if (rounded > 29.90){

        classy.innerHTML='Obesidade Grau 1'
        
    }

     if(rounded > 34.90 ){

        classy.innerHTML='Obesidade Severa Grau 2'
    }

    if (rounded > 40.00){

        classy.innerHTML='Obesidade Mórbida Grau 3'


    }


 })

altura.addEventListener('input', function(){

    if(altura.value > 100){

        var num2 = altura.value/100
        altura.value = num2.toFixed(2)
    
        }
    
        else{
    
        var num2 = altura.value
            
        altura.value = num2
    
    
        }





})

peso.addEventListener('input', function(){


    if(peso.value >= 1000){

        num1 = peso.value/100
        peso.value = num1.toFixed(2)

    }
   

    else{

        num1 = peso.value
        peso.value = num1



    }


  



})
saibamais.setAttribute('onclick', 'openexplanation()')

function openexplanation(){

    explanation.style.display ='block'

    saibamais.setAttribute('onclick', 'closeexplanation()')

    saibamais.innerHTML='Fechar'
}

function closeexplanation(){

    saibamais.innerHTML='Saiba Mais'
    explanation.style.display='none'
    saibamais.setAttribute('onclick', 'openexplanation()')

  

}

function brilhocalc(){

    let calc = document.getElementById('calcular');
    calc.style.filter = 'brightness(1.2)'

}

function brilhosb(){

    let calc = document.getElementById('saibamais');
    calc.style.filter = 'brightness(1.2)'
}

function dark(){

    let sb = document.getElementById('saibamais');
    sb.style.filter = 'none'

    let calc = document.getElementById('calcular');
    calc.style.filter = 'none'
}

