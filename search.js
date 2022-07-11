const conteudosList = document.getElementById("conteudosList");
const searchBar = document.getElementById("searchBar")
let percConteudos = [];

//Lista JSON com os nomes e os nomes técnicos dos conteúdos e utilizados na busca.
conteudosBusca = [{
    "nome": "Engasgo Lactante",
    "tecnico": "OVACE Lactante",
    "pagina": "page-conteudo-engasgolactente.html",
    "icone": "iconBaby"
  },
  {
    "nome": "Engasgo Criança",
    "tecnico": "OVACE Criança",
    "pagina": "page-faq.html",
    "icone": "iconChild"
  },
  {
    "nome": "Suporte básico à vida Lactente",
    "tecnico": "BLS Lactente",
    "pagina": "page-faq.html",
    "icone": "iconBaby"
  },
  {
    "nome": "Suporte básico à vida Criança",
    "tecnico": "BLS Criança",
    "pagina": "page-faq.html",
    "icone": "iconChild"
  }
  ];

  //Código que compara o que foi digitado até o momento com o array JSON
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredConteudos = percConteudos.filter( conteudo => {
        return (
        conteudo.nome.toLowerCase().includes(searchString) || 
        conteudo.tecnico.toLowerCase().includes(searchString)
        );
    })
    mostrarConteudos(filteredConteudos);
})


const loadConteudos = async () => {
    try {
        const res = conteudosBusca;
        percConteudos = await res;
        mostrarConteudos(percConteudos);
    } catch (err) {
        console.error(err);
    }
};

//Mostra os conteúdos pesquisados no HTML
const mostrarConteudos = (conteudos) => {
    const htmlString = conteudos
        .map((conteudo) => {
            IsNull();
            return `
            <li class="conteudo border-bottom"" id=${conteudo.icone} >
                <a href=${conteudo.pagina}>
                <h2>${conteudo.nome}</h2>
            </li>
        `;
        })
        .join('');
    conteudosList.innerHTML = htmlString;
};

function IsNull(){
    if($('#searchBar').val() == "") {
        $('#conteudosList').hide();}
    else {
        $('#conteudosList').show();}
}

loadConteudos();