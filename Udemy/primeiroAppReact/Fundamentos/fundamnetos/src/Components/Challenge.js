const Challenge = () => {

    const somar = () => {

        const a = 10
        const b = 20
        const result = a+b
        console.log("Valores a serem somados -> "+a, b);
        console.log(result)

    };
    const dividir = () => {

        const a=90
        const b=5
        const result = a/b
        console.log("Valores a serem divididos -> "+a, b)
        console.log(result)
    }

    return(
        <div>
            <div>
                <button onClick={somar}>Somar</button>
            </div>
            <div>
                <button onClick={dividir}>Dividir</button>
            </div>
        </div>
    )

}

export default Challenge;