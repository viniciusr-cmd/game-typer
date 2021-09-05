//----------------------------VARIABLES DECLARATIONS----------------------------
let campo = $('.campo-digitacao') //GLOBAL VIARIABLE
let tempoInicial = $('#tempo-digitacao').text() //GLOBAL VARIABLE

//EXECUTE FUNCTIONS ONLY IF DOCUMENT IS READY AND LOADED
$(() => {
	atualizaTamanhoFrase()
	inicializaContadores()
	inicializaCronometro()
	inicializaMarcadores()
	$('#botao-reiniciar').click(reiniciaJogo)
	console.log('Página Carregada')
})

//----------------------------EVENTS----------------------------
//Update the phrase length
function atualizaTamanhoFrase() {
	console.log('Atualizou tamanho da frase')
	let frase = $('.frase').text()
	let numPalavras = frase.split(' ').length
	let tamanhoFrase = $('#tamanho-frase')

	tamanhoFrase.text(numPalavras)
}

function atualizaTempoInicial(tempo){
	tempoInicial = tempo
	$('#tempo-digitacao').text(tempo)
}

//Initialize document counter
function inicializaContadores() {
	console.log('Inicializou contadores')
	campo.on('input', () => {
		let conteudo = campo.val()
		let qtdPalavras = conteudo.split(/\S+/).length - 1
		$('#contador-palavras').text(qtdPalavras)

		let qtdCaracteres = conteudo.length
		$('#contador-caracteres').text(qtdCaracteres)
	})
}

//Initialize document stopwatch
function inicializaCronometro() {
	console.log('Inicializou cronometros')
	campo.one('focus', () => {
		let tempoRestante = $('#tempo-digitacao').text()
		let cronometroID = setInterval(() => {
			tempoRestante--

			$('#tempo-digitacao').text(tempoRestante)
			if (tempoRestante < 1) {
				clearInterval(cronometroID)
				finalizaJogo()
			}
		}, 1000)
	})
}

//End the game
function finalizaJogo() {
	console.log('Finalizou o jogo')
	$('#botao-reiniciar').attr('disabled', false)
	campo.attr('disabled', true)
	campo.toggleClass('campo-desativado')
	inserePlacar()
}

//Initialize marks
function inicializaMarcadores() {
	console.log('Inicializou Marcadores')
	campo.on('input', () => {
		let frase = $('.frase').text()
		let digitado = campo.val()
		let comparavel = frase.substr(0, digitado.length)

		if (digitado == comparavel) {
			campo.addClass('borda-verde')
			campo.removeClass('borda-vermelha')
		} else {
			campo.addClass('borda-vermelha')
			campo.removeClass('borda-verde')
		}
	})
}

//Resets the game counter and text phrases
function reiniciaJogo() {
	console.log('Reiniciou o jogo pelo botão')
	campo.attr('disabled', false)
	campo.val("")
	$('#contador-palavras').text('0')
	$('#contador-caracteres').text('0')
	$('#tempo-digitacao').text(tempoInicial)
	inicializaCronometro()
	campo.toggleClass('campo-desativado')
	campo.removeClass('borda-vermelha')
	campo.removeClass('borda-verde')
}