
const programador =  {
        nome: 'Fulano',
        idade: 25,
        tecnologia:[
            { nome: 'c#', especialidade: 'Desktop' },
            { nome: 'Python', especialidade: 'Data Science' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }      
           
        ]  
    
    }

    console.log(`O Usuario ${programador.nome}, tem ${programador.idade} anos e usa as tecnologias
    ${programador.tecnologia[0].nome}, com especialidades em ${programador.tecnologia[0].especialidade}`)