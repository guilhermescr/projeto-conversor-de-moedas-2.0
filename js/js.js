//definindo os valores
let valueEUR = 5.44;
let valueTemp;
//selecionando
let boxBotao = document.querySelector(".botao")
let btnConverter = document.querySelector(".botao1")
let btnReset = document.querySelector(".botao2")
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
        console.log(`Its value in reais is: ${valueTemp}`)
        boxBotao.style.margin = '40px -5px 0px -5px'
        erro.style.display = 'none';

    } else if (valueSelect1.value  == "EUR" && valueSelect2.value  == "BRL"){
        valueTemp = Number(valueTyped.value) * valueEUR
        console.log(`Its value in euros is: ${valueTemp}`)
        boxBotao.style.margin = '40px -5px 0px -5px'
        erro.style.display = 'none';

    }else{
        valueTemp = "Selecione opções diferentes"
        boxBotao.style.margin = '40px -5px 0px -5px'
        erro.style.display = 'block'
        erro.innerText = "ERRO: Selecione opções diferentes"
    } 

    valueResult.value = valueTemp.toFixed(2)
})

btnReset.addEventListener('click', function(event){
    event.preventDefault();

    valueSelect1.value = 'BRL';
    valueSelect2.value = 'EUR';
    valueTyped.value = '';
    valueResult.value = '';

    erro.style.display = 'none';
})