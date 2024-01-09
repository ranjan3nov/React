import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 5;
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    // counter += 1;
    if (!(counter >= 20))
      setCounter(++counter);
    else
      alert('You have reached Max limit')
    console.log(`Value added ${counter}`);
  }

  const decreaseValue = () => {
    if (!counter <= 0)
      setCounter(--counter)
    else
      alert('You have reached Min limit')
    // counter -= 1;
    console.log(`Value Decreased ${counter}`);
  }

  return (
    <>
      <h1>Counter Project </h1>
      <h1>Min:0  Max: 20</h1>
      <h2>Counter Value: {counter} </h2>

      <button
        onClick={increaseValue}
      >Increase Value</button>
      <br />

      <button
        onClick={decreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
