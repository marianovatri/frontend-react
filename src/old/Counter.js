import {useState, defaultProps} from 'react'
// se puede hacer con clases y con hooks

//HOOKS
function Counter (props) {
 // me devuelve algo como un getter (datos) y un setter(metodo)
let [count, setCount] = useState(props.initial || 0)
let step = props.step || 1
let negative = props.negative || true

//props.initial significa que si le definenen cuando lo llaman primero tiene prioridad eso || 0
//count lo uso para lectura, y setCount para escritura

function increment() {
    setCount(count+props.step)
  
}

function reset() {
    setCount(0)
  
}

function decrement() {

    let x = count-step


    if (props.negative == false && x < 0) return
     
        setCount(x)  
    
    
  
}

    return (
        <div>
            <p>{ count}</p>

            <button onClick={increment}>Incrementar</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={decrement}>Decrementar</button>
            
        </div>
    )
}

Counter.defaultProps = {

    step : 1
}


export default Counter