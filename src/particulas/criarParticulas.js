function Particulas( x, y ) {
    let pos = { x, y }
    let size = 5 * Math.random() + 2
    let life = (20 * Math.random() + 5)
    let color = `rgba(${ 255 }, ${ 100 * Math.random()  + 20}, ${ 30 }, ${ 1 * Math.random()})`
    return { pos, size, life, color }
}

function criarParticulas( coordenadas, quantidade ) {
    console.log( 'As particulas estão sendo criadas...' )

    let tela = coordenadas.tela
    let unidades = coordenadas.malha.unidades
    let intervalo = coordenadas.malha.intervalo
    let particulas = []
/*
    for ( let x = 0; x <= unidades.x; x++ ) {
        for ( let y = 0; y <= unidades.y; y++ ) {
            let xi = x * intervalo.x
            let yi = y * intervalo.y
            particulas.push( Particulas( xi, yi ) )
            console.log( `A particula x:${xi} y: ${yi} acabou de ser criada` )
        }
    }
*/
    for ( let i = 0; i <= quantidade; i++) {
        let xi = Math.random() * tela.x
        let yi = Math.random() * tela.y
        particulas.push( Particulas( xi, yi ) )
        //console.log( `A particula x:${xi} y: ${yi} acabou de ser criada` )
    }

    //console.log( particulas )
    console.log( '... As particulas foram criadas' )

    return particulas
}
export default criarParticulas