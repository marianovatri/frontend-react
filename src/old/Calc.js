import { useState } from "react"
import Counter from "./Counter"



function Calc() {

    let{initial, setInitial} = useState(0)

    function handleChange(e) {
       setInitial(e.target.value)
       
    }


    return (
       <div>
        <form>

            <div>

            <div>
                <label>Valor inicial</label>
                <input type="number" onImput={handleChange} />
                //onImput es exclusivo de React.
            </div>

            <div>
                <label>Salto</label>
                <input type="number" onImput={handleChange}/>
            </div>

            <div>
                <label>Acepta negativo</label>
                <input type="checkbox" onImput={handleChange}/>
            </div>

            </div>

        </form>

        <Counter initial={initial} />

       </div> 
    )
}

export default Calc