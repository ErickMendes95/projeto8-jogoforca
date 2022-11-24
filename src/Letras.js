const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(){

    let toUpper = alfabeto.map((x) => {
        return (x.toUpperCase())
    })

    console.log(toUpper)
    return (
        <>
            <div className="letras">
                {toUpper.map((t) => (
                    <button>{t}</button>
                ))
                }
            </div>
        </>    
    )
}