let numero = document.querySelector("#numero"); // onde sera exibido o resultado de cada sorteio

let botao = document.querySelector("#btnSorteio"); // botão de sorteio
let voltar = document.querySelector("#voltar")
let quantidadeInput = document.querySelector("#quantidade");// quntidade de números sorteados

let modoDeJogo = document.querySelector("#modoDeJogo")

let tituloSorteio = document.querySelector("#tituloSorteio")
let tituloQuantidade = document.querySelector("#tituloQuantidade")
let quantidadeNumerosParagrafo = document.querySelector("#quantidadeNumerosParagrafo")

let add = document.querySelector("#add") // botão que adiciona o valor do input quantidade







let valores = [] // array dos valores que vem do (for) com base na quantidade digitada pelo usuario

let listaNumeros = []; // números sorteados serão adicionandos a este array para ser verificado 

let resultado // sera adicionando os valores sorteados na função ()



//função do sorteio
const sorteio = (valor) => {


    const numeroSorteado = Math.floor(Math.random() * valor.length);



    return valor[numeroSorteado]
};








botao.addEventListener("click", () => {

    botao.disabled = true
    numero.innerHTML = "⏳"

    setTimeout(() => {
        numero.innerHTML = "⌛"
    }, 500);

    setTimeout(() => {


        botao.disabled = false;


        /* resultado = sorteio(valores) */
        
        
        
        if (listaNumeros.length >= valores.length) {
            /* valores = []
            listaNumeros = [] */
            numero.innerHTML = "Fim"
            quantidadeInput.value = ""
            botao.classList.toggle("esconder");
            tituloQuantidade.classList.toggle("esconder")
            
            console.log("fim")
            console.log("dentrodo if: valores = " + valores)
            console.log("dentrodo if: listaNumeros = " + listaNumeros)
            return
        }



        do {
            console.log("repitil")
            resultado = sorteio(valores)
            
        } while (listaNumeros.indexOf(resultado) !== -1 && listaNumeros.length < valores.length);
        
        /* else if (listaNumeros.indexOf(resultado) !== -1 && listaNumeros.length < valores.length) { */
        
        /* botao.click() */
        
        /* } */
        
        if (listaNumeros.indexOf(resultado) === -1) {
            listaNumeros.push(resultado)

            if (resultado == undefined) {
                numero.innerHTML = "Invalido"
                listaNumeros.pop()
                console.log("invalido")
                botao.classList.remove("esconder");
            } else {


                numero.innerHTML = resultado
            }
        }



        /* o do while é para caso venho um número repitido ele sorteia e depois testa assim sendo mais rapido */


        console.log("resultado: "+resultado)
        console.log(listaNumeros)
    }

        , 1000);

    console.log("apertou")

});

add.addEventListener("click", () => {
    valores = []
    listaNumeros = []
    numero.innerHTML ="🎲"
    
    if (quantidadeInput.value == "") {
        modoDeJogo.classList.remove("esconder")
        botao.classList.add("esconder");
        voltar.classList.add("esconder")
        tituloQuantidade.classList.add("esconder")
        /* tituloSorteio.classList.remove("esconder") */
    } else {
        botao.classList.remove("esconder");
        voltar.classList.remove("esconder")
        tituloQuantidade.classList.remove("esconder")
        /* tituloSorteio.classList.add("esconder") */
        modoDeJogo.classList.add("esconder")
    }

    let quantidade = quantidadeInput.value
    quantidadeNumerosParagrafo.innerHTML ="Séra sorteado "+quantidade+" números"

    console.log(quantidade)
    for (let i = 1; i <= quantidade; i++) {
        valores.push(i)
        console.log(valores)
    }

});


voltar.addEventListener("click",()=>{
     numero.innerHTML ="🎲"
     botao.classList.add("esconder");
     voltar.classList.add("esconder")
      modoDeJogo.classList.toggle("esconder")
});



