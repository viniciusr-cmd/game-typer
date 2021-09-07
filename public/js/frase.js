$('#botao-frase').click(fraseAleatoria)
$('#botao-frase-id').click(buscaFrase)

function fraseAleatoria() {
    console.log('Chamou AJAX')
    $('#spinner').show()

    $.get('http://localhost:3000/frases', trocaFraseAleatoria)
    .fail(() => {
        $('#erro').show()
        setTimeout(() => {
            $('#erro').toggle()
        }, 2500);
    })
    .always(() => {
        $('#spinner').toggle()
    })
}

function trocaFraseAleatoria(data) {
    let frase = $('.frase')
    let numeroAleatorio = Math.floor(Math.random() * data.length)
    console.log(numeroAleatorio)
    frase.text(data[numeroAleatorio].texto)
    atualizaTamanhoFrase()
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}

function buscaFrase(){
    $('#spinner').toggle()
    let fraseId = $('#frase-id').val()
    console.log('id da minha frase:' + fraseId);
    let dados = {id: fraseId}
    $.get('http://localhost:3000/frases', dados, trocaFrase)
    .fail(() => {
        $('#erro').toggle()
        setTimeout(() => {
            $('#erro').toggle()
        }, 2500);
    })
    .always(() => {
        $('#spinner').toggle()
    })

}

function trocaFrase(data){
    let frase = $('.frase')
    frase.text(data.texto)
    atualizaTamanhoFrase()
    atualizaTempoInicial(data.tempo)
}