  const  produtos = [{
        modelo: "Oakley Winfold",
        imagem:"M_Oakley_100.jpg",
        genero:"Masculino",
        preco: "R$ 855,00",
    },
    {
        modelo: "Persol",
        imagem:"M_Persol_100.jpg",
        genero:"Masculino",
        preco: "R$ 1377,00",
    },
    {
        modelo: "Ray-ban Round",
        imagem:"M_Ray-ban_100.jpg",
        genero:"Masculino",
        preco: "R$ 666,00",
    },
    {
        modelo: "Kipling",
        imagem:"F_Kipling_100.jpg",
        genero:"Feminino",
        preco: "R$ 423,00",
    },
    {
        modelo: "Michael Kors",
        imagem:"F_MichaelKors_100.jpg",
        genero:"Feminino",
        preco: "R$ 684,00",  
    }]

function associaProduto() {
      nomeOculos = document.querySelectorAll(".tabOculos-td")
        nomeOculos.forEach((element) => {
            element.addEventListener('click', (event) => {
             const modelo =   element.innerText
               if(produtos[0].modelo === modelo){
                setaProduto(0)
                }
                if(produtos[1].modelo === modelo){
                    setaProduto(1)
                }
                if(produtos[2].modelo === modelo){
                    setaProduto(2)
                }
                if(produtos[3].modelo === modelo){
                    setaProduto(3)
                }
                if(produtos[4].modelo === modelo){
                    setaProduto(4)
                }


            })
            
        });
};

function setaProduto(indiceProduto){
    document.getElementById('titDes').innerHTML = produtos[indiceProduto].modelo
    document.getElementById('imgDes').setAttribute('src',produtos[indiceProduto].imagem)
    document.querySelectorAll('#prcDes')[0].innerHTML = produtos[indiceProduto].genero
    document.querySelectorAll('#prcDes')[1].innerHTML = produtos[indiceProduto].preco
}

function addProduct(){


   const indexProduto = document.getElementById("selProduto").selectedIndex 
    addNaLista(indexProduto)
    if(indexProduto == 0){
        alert("Nenhum produto Selecionado")
    }else {
    const precoTotal = document.getElementById("precoTotal")
    precoTotal.innerText  = alteraPreço(indexProduto)
    setaPrecoParcela(parseFloat(precoTotal.innerText))
  }}

function addNaLista(indiceProduto){
    const selecao = document.getElementById("selProduto")
    const listaDeCompras = document.querySelector('.listaCompras');
    listaDeCompras.innerHTML += selecao[indiceProduto].innerText + '\n'
}

function alteraPreço(indiceProduto){
    const precoTotal = document.getElementById("precoTotal")
    valorAtual = precoTotal.innerText
    console.log(valorAtual)
    if(valorAtual == "" ){
    valorAtual = 0};
    valorAtual = parseFloat(valorAtual)
    var valorAcrescido;
    switch (indiceProduto){
        case 1:
            valorAcrescido = 100.00;
            break
        case 2:
            valorAcrescido = 180.00
            break
        case 3:
            valorAcrescido = 220.00
            break
        case 4: 
            valorAcrescido = 170.00
            break
        case 5:
            valorAcrescido = 855.00
            break
        case 6:
            valorAcrescido = 1377.00
            break
        case 7:
            valorAcrescido = 666.00
            break
        case 8:
            valorAcrescido = 423.00
            break
        case 9:
            valorAcrescido = 684.00
            break
        
        } 
    valorAtual += valorAcrescido;
    return valorAtual   
}

function setaPrecoParcela (precoTotal){
    parcelas = setnumParcela()
    var valorParcela = document.getElementById('precoParcelado')
    valorParcela.innerText = Math.ceil(precoTotal/parcelas)

}
function setnumParcela (){
    const parcelas = document.getElementById('numParcelas').value
    var parcelamento = document.getElementById('compraParcelas')
    parcelamento.innerText = parseInt(parcelas)
    return parcelas
}

