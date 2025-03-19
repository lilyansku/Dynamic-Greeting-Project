import { useState } from 'react';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';
import './components/custom.css';

const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => setName(newName);

  return (
    <div>
      <h1>Dynamic Greeting</h1>
      <NameInput onNameChange={handleNameChange} />
      <Greeting name={name} />
      <h2>Weekdays:</h2>
      <Weekdays />
    </div>
  );
};

export default App;