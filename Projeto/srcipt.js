let numero = document.querySelector("#numero");
let botao = document.querySelector("#btnSorteio")


const sorteio = (...numeros)=>{


const numeroSorteado1 = Math.floor(Math.random()*numeros.length);

 const numeroSorteado2 = Math.floor(Math.random()*numeros.length); 


    numero.innerHTML = `${numeroSorteado1}${numeroSorteado2}`
};



botao.addEventListener("click",()=>{
    botao.disabled = true
   numero.innerHTML="⏳"

   setTimeout(()=>{
    numero.innerHTML="⌛"
},2000);

   setTimeout(()=>{
    sorteio(0,1,2,3,4,5,6,7,8,9)
    botao.disabled = false;
    
},3000);

console.log("apertou")
});
