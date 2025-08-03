import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { UC, LC, NC, SC } from './Data/PassChar';

function App() {

  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passwordLength, setPasswordlength] = useState(10);
  let [fPass, setfPass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setfPass(finalPass)
    }
    else {
      alert("Please select one of the below checkbox");
    }
  }

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  }

  return (
    <div className="App">
      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className='passwordBoxIn'>
          <input readOnly type='text' value={fPass}/>
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' onChange={(event) => setPasswordlength(event.target.value)} value={passwordLength} max={20} min={10} />
        </div>
        <div className='passLength'>
          <label>Include UPPERCASE Letters</label>
          <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>
        <div className='passLength'>
          <label>Include lowercase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>
        <div className='passLength'>
          <label>Include Numbers </label>
          <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>
        <div className='passLength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>
        <button onClick={createPassword} className='passBtn'>
          Create Password
        </button>
      </div>
    </div>
  );
}

export default App;
