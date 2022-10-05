import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com css</h1>

      {/* CSS de componente */}
      <MyComponent/>
      <p>Parágrafo do app.js</p>
    </div>
  );
}

export default App;
