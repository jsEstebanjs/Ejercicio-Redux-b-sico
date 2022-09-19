import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
      <Button children='Sumar 2' type='sumar'/>
      <Button children='Restar 2' type='restar'/>
      <Button children='Multiplicar por 2' type='multiplicar'/>
      <Button children='Dividir por 2' type='dividir'/>

    </div>
  );
}

export default App;
