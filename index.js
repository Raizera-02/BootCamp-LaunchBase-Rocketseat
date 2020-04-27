const nome = ' Rai '
const peso = 100        
const altura = 1.74

const imc = peso / (altura * altura)

if(imc >= 30 || imc == 29.9 )
{
    console.log(`${nome} , Voce esta acima do peso`)
} else {
    console.log(`${nome} , Voce não esta acima do peso`)
}