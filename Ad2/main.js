function mostraItemBauch () {
    id = document.getElementById("bauch_lonb")
    Titulo = id.innerText;
    const titulo_nome = document.createElement( "h2");
    titulo_nome.innerText = Titulo
    titulo_nome.style.textAlign = "center"
    const imagem_oculos = document.createElement("img")
    imagem_oculos.src ="/Imagens-AD2/BauchELomb_30D_200.jpg"
    imagem_oculos.style.margin = "0 40%"
    imagem_oculos.style.padding = "0 5%"
    document.body.appendChild(titulo_nome);
    document.body.appendChild(imagem_oculos);
    const fabricante = document.createElement("h3")
    fabricante.innerText = "Fabricante: Bauch & Lonb"
    fabricante.style.textAlign = "center"
    document.body.appendChild(fabricante)
    const periodo = document.createElement("h3")
    periodo.innerText = "Período: 30 dias"
    periodo.style.textAlign = "center"
    document.body.appendChild(periodo);
    const preco = document.createElement("h3")
    preco.innerHTML = "Preço R$ 100,00";
    preco.style.textAlign = "center";
    document.body.appendChild(preco)
    var botaoFechar = document.createElement("button")
    botaoFechar.setAttribute('type','button')
    botaoFechar.appendChild(document.createTextNode('Fechar'))
    botaoFechar.style.margin = "0 50%"
    document.body.appendChild(botaoFechar);
    
}

function mostraItemCoopervision () {
    id = document.getElementById("coopervision")
    Titulo = id.innerText;
    const titulo_nome = document.createElement( "h2");
    titulo_nome.innerText = Titulo
    titulo_nome.style.textAlign = "center"
    const imagem_oculos = document.createElement("img")
    imagem_oculos.src ="/Imagens-AD2/Bioinfinity_30D_200.jpg"
    imagem_oculos.style.margin = "0 40%"
    imagem_oculos.style.padding = "0 5%"
    document.body.appendChild(titulo_nome);
    document.body.appendChild(imagem_oculos);
    const fabricante = document.createElement("h3")
    fabricante.innerText = "Fabricante: Coopervision"
    fabricante.style.textAlign = "center"
    document.body.appendChild(fabricante)
    const periodo = document.createElement("h3")
    periodo.innerText = "Período: 30 dias"
    periodo.style.textAlign = "center"
    document.body.appendChild(periodo);
    const preco = document.createElement("h3")
    preco.innerHTML = "Preço R$ 180,00";
    preco.style.textAlign = "center";
    document.body.appendChild(preco)
    var botaoFechar = document.createElement("button")
    botaoFechar.style.marginLeft = "50%"
    botaoFechar.setAttribute('type','button')
    botaoFechar.appendChild(document.createTextNode('Fechar'))
    document.body.appendChild(botaoFechar);
    
}

function mostraItemAcuvueOasys () {
    id = document.getElementById("acuvue_oasys")
    Titulo = id.innerText;
    const titulo_nome = document.createElement( "h2");
    titulo_nome.innerText = Titulo
    titulo_nome.style.textAlign = "center"
    const imagem_oculos = document.createElement("img")
    imagem_oculos.src ="/Imagens-AD2/Acuvue_15D_200.jpg"
    imagem_oculos.style.margin = "0 40%"
    imagem_oculos.style.padding = "0 5%"
    document.body.appendChild(titulo_nome);
    document.body.appendChild(imagem_oculos);
    const fabricante = document.createElement("h3")
    fabricante.innerText = "Fabricante: Johnson & Johnson"
    fabricante.style.textAlign = "center"
    document.body.appendChild(fabricante)
    const periodo = document.createElement("h3")
    periodo.innerText = "Período: 15 dias"
    periodo.style.textAlign = "center"
    document.body.appendChild(periodo);
    const preco = document.createElement("h3")
    preco.innerHTML = "Preço R$ 220,00";
    preco.style.textAlign = "center";
    document.body.appendChild(preco)
    var botaoFechar = document.createElement("button")
    botaoFechar.style.marginLeft = "50%"
    botaoFechar.setAttribute('type','button')
    botaoFechar.appendChild(document.createTextNode('Fechar'))
    document.body.appendChild(botaoFechar);
    
}

function mostraItemAcuvue2 () {
    id = document.getElementById("acuvue")
    Titulo = id.innerText;
    const titulo_nome = document.createElement( "h2");
    titulo_nome.innerText = Titulo
    titulo_nome.style.textAlign = "center"
    const imagem_oculos = document.createElement("img")
    imagem_oculos.src ="/Imagens-AD2/Acuvue2_15D_200.jpg"
    imagem_oculos.style.margin = "0 40%"
    imagem_oculos.style.padding = "0 5%"
    document.body.appendChild(titulo_nome);
    document.body.appendChild(imagem_oculos);
    const fabricante = document.createElement("h3")
    fabricante.innerText = "Fabricante: Johnson & Johnson"
    fabricante.style.textAlign = "center"
    document.body.appendChild(fabricante)
    const periodo = document.createElement("h3")
    periodo.innerText = "Período: 15 dias"
    periodo.style.textAlign = "center"
    document.body.appendChild(periodo);
    const preco = document.createElement("h3")
    preco.innerHTML = "Preço R$ 170,00";
    preco.style.textAlign = "center";
    document.body.appendChild(preco)
    var botaoFechar = document.createElement("button")
    botaoFechar.style.marginLeft = "50%"
    botaoFechar.setAttribute('type','button')
    botaoFechar.appendChild(document.createTextNode('Fechar'))
    document.body.appendChild(botaoFechar);
    
}

function associaProduto() {
    produtos = [{
        modelo: "Oakley Winfold",
        imagem:"",
        genero:"Masculino",
        preco: "R$ 855,00",
    }]
        
    

}