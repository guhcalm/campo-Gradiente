function criarCampo( coordenadas ) {
    console.log( 'O campo está sendo criado...' )

    let malha = coordenadas.malha
    let campo = new Array( malha.unidades.x )

    for ( let x = 0; x <= malha.unidades.x; x++ ) {
        campo[x] = new Array( malha.unidades.y )
    }


    console.log( '... O campo foi criado.' )

    return campo
}
export default criarCampo