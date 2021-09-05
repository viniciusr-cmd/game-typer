//ALL ABOUT POINTS
$('#botao-placar').click(mostraPlacar)

//Add points
function inserePlacar() {
    console.log('Inseriu placar')
    let corpoTabela = $('.placar').find('tbody')
    let numPalavras = $('#contador-palavras').text()
    let usuario = 'You'

    let linha = novaLinha(usuario, numPalavras)
    linha.find(".botao-remover").click(removeLinha)

    corpoTabela.append(linha)
    $('.placar').slideDown(500)
    scrollPlacar()
}

function scrollPlacar(){
    let posicaoPlacar = $('.placar').offset().top
    console.log(posicaoPlacar)
    $('body').animate({
        scrollTop: `${posicaoPlacar}px`
    }, 300)
}
//Create new lines
function novaLinha(usuario, palavras) {
    let linha = $('<tr>')
    let colunaUsuario = $('<td>').text(usuario)
    let colunaPalavras = $('<td>').text(palavras)
    let colunaRemover = $('<td>')
    let link = $('<a>').addClass('botao-remover').attr('href', '#')
    let icone = $('<i>').addClass('small').addClass('material-icons').text('delete')
    link.append(icone)

    colunaRemover.append(link)
    linha.append(colunaUsuario)
    linha.append(colunaPalavras)
    linha.append(colunaRemover)

    return linha
}

//Remove lines
function removeLinha() {
    console.log('removi')
    event.preventDefault()
    let btnRemove = $('.botao-remover').parent().parent().fadeOut()
    setTimeout(() => {
        btnRemove.remove()
    }, 300)
}

//Show points with animation
function mostraPlacar() {
    console.log('Mostrou placar')
    $('.placar').stop().slideToggle(300)
}