
import {Component} from 'react'


//clases
class CounterClass extends Component {
   
    constructor() {
         super()


        this.state = {
            counter : 0
        }
    }
// arrow funtion soluciona el scope (lee por fuera, en este caso lee el counter)
    increment = () => {
        this.setState((state) => {
            return {
                 counter : state.counter+1
            }
        })
            
    }

    reset = () => {
        this.setState({counter : 0 })
    
        
    }

    decrement = () => {
        this.setState((state) => {
            return {
                 counter : state.counter-1
            }
        })
            
    }


    
    render() {
        return (
            <div>
                <p>{ this.state.counter }</p>
    
                <button onClick={this.increment}>Incrementar</button>
                <button onClick={this.reset}>Resetear</button>
                <button onClick={this.decrement}e>Decrementar</button>
                
            </div>
        )
    }

} 
    
    export default CounterClass