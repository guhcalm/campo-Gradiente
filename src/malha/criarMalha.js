function criarMalha( tela, octave, malha ) {
    console.log( 'A malha está sendo criada...' )
    
    let dimensoes  = { x: tela.largura, y: tela.altura }
    let inteira    = { x: octave.x,     y: octave.y    }
    let fracionada = { x: malha.x,      y: malha.y     }

    octave = coletarIntervalo( dimensoes, inteira.x, inteira.y )
    malha  = coletarIntervalo( dimensoes, inteira.x * fracionada.x, inteira.y * fracionada.y )

    //console.log( octave, malha )
    console.log( '... A malha foi criada.' )

    return { tela: dimensoes, octave, malha }
}

function coletarIntervalo( tela, unidadeX, unidadeY ) {
    let unidades  = { x: unidadeX,  y: unidadeY  }
    let intervalo = { x: tela.x / unidades.x, y: tela.y / unidades.y }
    return { unidades, intervalo }
}

export default criarMalha