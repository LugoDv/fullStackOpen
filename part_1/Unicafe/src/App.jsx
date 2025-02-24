import { useState } from "react";

//desconstrain props
const Statistics = ({good, neutral, bad}) => {
  

  const sumAll = good + neutral + bad

  const avg = (good*1+neutral*0-bad*1)/sumAll;

  const positive = neutral+bad ==0? 0: (good/sumAll)*100
  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sumAll}</p>
      <p>average {avg}</p>
      <p>positive {positive}%</p>
    </>
  )
}

const Button = ({ handleClick, nameButton }) => {
  return <button onClick={handleClick}>{nameButton}</button>;
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => {
    console.log(good, "aumenta un good");
    setGood(good + 1);
  };

  const setToneutral = () => {
    console.log(neutral, "aumenta neutral");
    setNeutral(neutral + 1);
  };

  const setToBad = () => {
    console.log(bad, "aumenta bad");
    setBad(bad + 1);
  };

  

  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={() => setToGood()} nameButton="good" />
      <Button handleClick={() => setToneutral()} nameButton="neutral"></Button>
      <Button handleClick={() => setToBad()} nameButton="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  );
};

export default App;
