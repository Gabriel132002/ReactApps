const TemplateExpressions = () => {
 
    const name = 'Gabriel'
    const dados = {
        trabalho: 'Programador',
        idade: 20
    }

    return(
        <div>
            <h1>Olá {name}, estou fazendo um teste </h1>
            <p>Você atua como: {dados.trabalho}</p>
        </div>
    )

}

export default TemplateExpressions;