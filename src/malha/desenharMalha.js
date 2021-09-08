function desenharMalha( ctx, coordenadas ) {
    //console.log( 'A malha está sendo desenhada...' )

    let c = ctx
    let octave = coordenadas.octave
    let malha  = coordenadas.malha

    //desenharPontosS( c, octave, 30, 'white' )
    //desenharPontosS( c, malha, 10, 'white' )
    //desenharPontosF( c, malha, 3, 'white' )

    //console.log( '... A malha foi desenhada.' )
}

function desenharPontosS( c, coordenadas, raio, color ) {
    for ( let x = 0; x <= coordenadas.unidades.x; x ++ ) {
        for ( let y = 0; y <= coordenadas.unidades.y; y ++ ) {
            let xi = x * coordenadas.intervalo.x
            let yi = y * coordenadas.intervalo.y
            c.beginPath()
            c.strokeStyle = color
            c.arc( xi, yi, raio, 0, Math.PI * 2, true )
            c.lineWidth = .5
            c.stroke()
        }
    }
}
function desenharPontosF( c, coordenadas, raio, color ) {
    for ( let x = 0; x <= coordenadas.unidades.x; x ++ ) {
        for ( let y = 0; y <= coordenadas.unidades.y; y ++ ) {
            let xi = x * coordenadas.intervalo.x
            let yi = y * coordenadas.intervalo.y
            c.beginPath()
            c.fillStyle = color
            c.arc( xi, yi, raio, 0, Math.PI * 2, true )
            c.fill()
        }
    }
}

export default desenharMalha