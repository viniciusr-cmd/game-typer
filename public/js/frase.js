$('#botao-frase').click(fraseAleatoria)

function fraseAleatoria() {
    console.log('Chamou AJAX')
    $('#spinner').show()

    $.get('http://localhost:3000/frases', trocaFraseAleatoria)
    .fail(() => {
        $('#erro').show()
        setTimeout(() => {
            $('#erro').toggle()
        }, 3500);
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