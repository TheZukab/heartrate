import {useState} from 'react';

function App() {

  const [age, setAge] = useState(0)
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

function calculate() {
  const upper1 = (220 - age)*0.85;
  setUpper(upper1)
  const lower2 = (220 - age)*0.65;
  setLower(lower2)
  /* const result = upper + "-" + lower;
  setCal(result) */
}

  return (
    <div id="container">
      <h1>Heart rate limits calculator</h1>
      <form>
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
      </form>
      <div>
          <label>Heart rate limits</label>
          <output> {upper} - {lower}</output>
        </div>
      <button type="button" onClick={calculate}>Calculate</button>
    </div>
  );
}

export default App;
