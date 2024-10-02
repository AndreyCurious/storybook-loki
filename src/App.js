import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <Button backgroundColor={'black'} primary label={'Test'}/>
    </div>
  );
}

export default App;
