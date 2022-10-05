import './App.css';
import FirstCompnent from './Components/FirstCompnent';
import MyComponent from './Components/MyComponent';
import TemplateExpressions from './Components/TemplateExpressions';
import Events from './Components/Events';
import Challenge from './Components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstCompnent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
