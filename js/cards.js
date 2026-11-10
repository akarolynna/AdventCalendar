


const gradeCalendario = document.querySelector(".grade-calendario"); 

fetch("./dados/cards.json").then(resposta =>resposta.json()).then(dados =>{
    criarCards(dados);
})

function criarCards(dados){
    let html = "";
    dados.forEach((dado, indice)=>{
        html += `
         <div class="card-dia ${dado.cor}">
            <span class="numero-dia">${dado.dia}</span>
            <img src="./assets/imagens/icones-calendario/${dado.imagem}" alt="${dado.imagem}"> 
         </div>
        `;

    });
    gradeCalendario.innerHTML = html;
}