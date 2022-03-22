//definindo os valores
let valueBRL = 1.00;
let valueEUR = 5.44;
let valueTemp;
//selecionando
let btnConverter = document.querySelector(".botao")
let valueSelect1 = document.querySelector(".Valor1") 
let valueSelect2 = document.querySelector(".Valor2")
let valueTyped = document.querySelector(".Valor3")
let valueResult = document.querySelector(".Result")
let erro = document.getElementById('fraseDeErro')

//manipulando
btnConverter.addEventListener('click', function(event){
    event.preventDefault();
    
    if(valueSelect1.value == "BRL" && valueSelect2.value == "EUR"){
        valueTemp = Number(valueTyped.value)/valueEUR; 
        console.log(valueTemp)
    } else if (valueSelect1.value  == "EUR" && valueSelect2.value  == "BRL"){
        valueTemp = Number(valueTyped.value)/valueBRL
        console.log(valueTemp)
    }else{
        valueTemp = "Selecione opções diferentes"
        erro.innerText = "ERRO: Selecione opções diferentes"
    } 

    valueResult.value = valueTemp.toFixed(2)
})