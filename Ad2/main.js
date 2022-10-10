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
   lista = document.getElementById("selProduto").
   selecao = lista.options[select.selectedIndex].value
   console.log(selecao)
   
}