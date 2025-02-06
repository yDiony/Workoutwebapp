import { useState } from "react"

export const Modaladdworkout = (props:any) => {
    const [diaqueousuarioescolheu, setduaqueousuarioescolheu] = useState("")
    const [treinoqueeleescolheu, settreinoqueeleescolheu] = useState("")
    function adicionartreino(){
        setduaqueousuarioescolheu("Mon")
        settreinoqueeleescolheu("Chest and Bicesps")
    }
    return(
        <div className="absolute z-50 bg-black w-[300px] h-[300px]">
            <button className="" onClick={adicionartreino}>adicionar treino</button>
        </div>
    )
}