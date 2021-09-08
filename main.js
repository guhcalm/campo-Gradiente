import criarMalha         from './src/malha/criarMalha.js'
import desenharMalha      from './src/malha/desenharMalha.js';
import criarCampo         from './src/campo/criarCampo.js'
import inserirVetores     from './src/campo/inserirVetores.js'
import desenharVetores    from './src/campo/desenharVetores.js';
import criarParticulas    from './src/particulas/criarParticulas.js'
import desenharParticulas from './src/particulas/desenharParticulas.js';

let canvas  = document.querySelector( `canvas` )
let ctx     = canvas.getContext( `2d` )
let largura = ( canvas.width  = window.innerWidth )
let altura  = ( canvas.height = window.innerHeight )
let tempo   = 0

// definir as dimensões da malha
let tela   = { largura, altura }
let octave = { x: 2, y: 2 }
let malha  = { x: 7, y: 7 }


// parametrizar coordenadas | retornará - { malha, octave }
let coordenadas = criarMalha( tela, octave, malha )
// iniciar o campo | retornará - campo[x][y][tempo]
let campo = criarCampo( coordenadas )
// iniciar particulas | retornará - particulas{ pos: {x, y, z} }
let particulas = criarParticulas( coordenadas, 1000 )




function desenharBackGround() {
    ctx.beginPath()
    ctx.fillStyle = 'rgba( 0, 0, 0, .01 )'
    ctx.fillRect( 0, 0, coordenadas.tela.x, coordenadas.tela.y )
    ctx.fill()
}

function frame() {
    requestAnimationFrame(frame)
    desenharBackGround()
    // injetar vetores ao campo[x][y][tempo]
    let vetores = inserirVetores( tempo, coordenadas, campo )
    // movimentar particulas{ pos: {x, y, z} }  pelos vetores, e desenha-las
    desenharParticulas( ctx, coordenadas, vetores, particulas )
    // desenhar malha
    desenharMalha( ctx, coordenadas )
    // desenhar vetores da tela
    desenharVetores( ctx, coordenadas, vetores )
    tempo += 0.005
}frame()