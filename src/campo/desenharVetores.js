function desenharVetores( ctx, coordenadas, vetores ) {
    //console.log( 'Os vetores estão sendo desenhados...' )

    let c = ctx
    let unidades = coordenadas.malha.unidades
    let intervalo = coordenadas.malha.intervalo
    let malha = coordenadas.malha
    
    for ( let x = 0; x <= unidades.x; x++ ) {
        for ( let y = 0; y <= unidades.y; y++ ) {
            let xi = x * intervalo.x
            let yi = y * intervalo.y
            let dx = vetores[x][y].dx
            let dy = vetores[x][y].dy
            let raio = vetores[x][y].comprimento
            
            desenharPontosS( c, xi, yi, raio, 'rgba(255,255,255,1)' )

            c.beginPath()
            c.lineWidth = 3
            c.strokeStyle = 'white'
            c.moveTo( xi, yi )
            c.lineTo( xi + dx, yi + dy )
            c.stroke()
            
        }
    }

    //console.log( '... Os vetores foram desenhados.' )
}

function desenharPontosS( c, xi, yi, raio, color ) {

    c.beginPath()
    c.strokeStyle = color
    c.arc( xi, yi, raio, 0, Math.PI * 2, true )
    c.lineWidth = .5
    c.stroke()

}
export default desenharVetores