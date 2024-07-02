import { useState } from "react"

const HOC=(OriginalComponent)=>{

    const Add=()=>{
        const [state,setState]=useState(0)
        const handleClick=()=>{
            setState(state + 1)
        }
        const handleMinus=()=>{
            setState(state - 1)
        }

        return(
            <>
            <OriginalComponent s={state} h={handleClick} m={handleMinus}/>
            </>
        )
    }
    return Add

}

export default HOC