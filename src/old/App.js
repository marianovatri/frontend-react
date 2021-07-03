import logo from './logo.svg';
import './App.css';
import Title from '../Title.js';
import Counter from './Counter'
import CounterClass from './CounterClass'
import Calc from './Calc';

function App() { // una funcion javascript que retorna html
  return (
    <div className="App">


    <Calc/>



    <p>Counter(HOOKS)</p>
      <Counter />
      <Counter initial={5} step={5} negative={true} />
      <Counter initial={2} step={10} negative={false} />


      <p>CounterClass(Clases)</p>
      <CounterClass />

      <Title text= "Clase 1 React" a={5} b={10} />
      <Title text= "Clase 2 React" a={367} b={20} />
      <Title text= "Clase 3 React" a={12} b={20} />
      <Title />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
