const nome = 'fernando'
const idade = 60
const sexo = 'M'
const contribuicao = 35

const soma = idade + contribuicao

if(sexo == 'F' && contribuicao == 30 || sexo == 'M' && contribuicao == 35){
    if(sexo == 'F' && soma == 85 || sexo == 'M' && soma == 95){
        console.log(`${nome} , Você pode se aposentar`)
    } else {
        console.log(`${nome} , Voce ainda não pode se aposentar`)
    }
} else {
    console.log(`${nome} , Voce ainda não pode se aposentar`)
}