function calcular(){
    let qtdm = parseInt(document.getElementById('qtdmulher').value) || 0;
    let qtdh = parseInt(document.getElementById('qtdhomem').value) || 0;
    let qtdc = parseInt(document.getElementById('qtdcrianca').value) || 0;
    if (qtdh < 0 || qtdm < 0 || qtdc < 0) {
        alert("Favor insira valores válidos (não negativos)");
        return false;
    }
    if (qtdh === 0 && qtdm === 0 && qtdc === 0){
        alert("Não a quantidade de pessoas para calcular.")
        return false
    }

    /*
    Carne bovina H:500g M:300g C:200g
    Frango H:200 M:200 C:100
    Linguiça H:200 M:200 C:200
    Refrigerante H:300ml M:400ml C:200ml
    Cerveja H:800ml M:500ml C:0ml
    */

    const ingredientes = [
        { nome: 'Carne Bovina', homem: 0.5, mulher: 0.3, crianca: 0.2, unidade: 'kg' },
        { nome: 'Frango', homem: 0.2, mulher: 0.2, crianca: 0.1, unidade: 'kg' },
        { nome: 'Linguiça', homem: 0.2, mulher: 0.2, crianca: 0.2, unidade: 'kg' },
        { nome: 'Refrigerante', homem: 0.3, mulher: 0.4, crianca: 0.2, unidade: 'L' },
        { nome: 'Cerveja', homem: 0.8, mulher: 0.5, crianca: 0, unidade: 'L' }
    ];

    let qtdtotalingredientes = {};

    for (let i = 0; i < ingredientes.length; i++) {
        let ingrediente = ingredientes[i];
        let quantidadeTotal = (qtdh * ingrediente.homem) + (qtdm * ingrediente.mulher) + (qtdc * ingrediente.crianca);
        if (ingrediente.unidade === 'kg' || 'L'){
            quantidadeTotal = quantidadeTotal.toFixed(1);
        }
        qtdtotalingredientes[ingrediente.nome] = `${quantidadeTotal}${ingrediente.unidade}`;
        
            
    }

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p class="estilo_p_qtd">Qtd. de itens a serem comprados:</p> ${Object.keys(qtdtotalingredientes).map(nome => `<p>${nome}: ${qtdtotalingredientes[nome]}</p>`).join('')}`;
    resultadoDiv.classList.add('estilo_box_resultado');

}

function limpar(){
    document.getElementById('qtdmulher').value = '';
    document.getElementById('qtdhomem').value = '';
    document.getElementById('qtdcrianca').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('resultado').className= '';
}
