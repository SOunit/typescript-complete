import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [name, setName] = useState<string | null>('Jack');

  return (
    <div className="App">
      <Hello message={`I am ${name}!`} />
    </div>
  );
}

export default App;
