import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);
    const [y] = useState(true);

    const[name, setName] = useState("Gabriel")

  return (
    <div>
        <div>
            <h1>Isso será exibido??</h1>
            {!x && <p>Isso é falso</p>}
            <h1>If ternário</h1>  
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
        </div>
        <div>
            {y && <p>Agora é verdadeiro</p>}
        </div>
        <button onClick={() => setName("João")}>Clica para mudar o nome</button>
    </div>
  )
}

export default ConditionalRender