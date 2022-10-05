const Events = () =>{

    const handleMyEvents = (e) =>{
        console.log(e);

        console.log("Evento ativado");
    };

    const RenderizarAlgo = (x) => {

        if(x){
            return <h1>Renderizando caso seja verdadeiro</h1>
        }else{
            return <h1>Renderizando caso seja falso</h1>
        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique aqui</button>
            </div>

            <div>
                <button onClick={()=> console.log("Parabéns")}>Clique aqui também!</button>
            </div>
            {RenderizarAlgo(true)}
            {RenderizarAlgo(false)}
        </div>
    )

}

export default Events;