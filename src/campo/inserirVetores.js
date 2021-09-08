import noise from '../noise/noise.js'

function inserirVetores( tempo, coordenadas, campo ) {
    //console.log( 'Os vetores estão sendo inseridos...' )
    
    let malha = coordenadas.malha
    let intervalo = malha.intervalo
    let vetores = campo

    for ( let x = 0; x <= malha.unidades.x; x++ ) {
        for ( let y = 0; y <= malha.unidades.y; y++ ) {
            let xi = x / malha.unidades.x 
            let yi = y / malha.unidades.y

            let aspect = noise( xi, yi, tempo )
            let angulo = Math.PI * 2 * aspect
            let comprimento = (intervalo.y > intervalo.x? intervalo.x : intervalo.y ) * aspect * .5
            
            let dx = comprimento * Math.cos( angulo )
            let dy = comprimento * Math.sin( angulo ) 
            
            vetores[x][y] = { noise: aspect, angulo, comprimento, dx, dy }
        }
    }

    //console.log( campo )
    //console.log( '... Os vetores foram inseridos' )

    return vetores
}

export default inserirVetores