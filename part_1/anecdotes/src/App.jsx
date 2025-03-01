import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.nameButton}</button>;
};

const App = () => {
  let indice= 0;
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [max,setMax] = useState(0);
  
  
 
  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    console.log(random);
    setSelected(random);
    
  };

  
  const countVotes = () => {
    console.log(votes, "votos")
    votes[selected] +=1;
  
    setVotes(votes);

  
    let  maxNumber =votes[0];
  
    for (let i = 0; i < anecdotes.length; i++) {
  
      
      if(maxNumber<votes[i]){
        maxNumber =votes[i];
        indice=i;
  
  
      }
      
    }

    setMax(indice);
    


  };

 

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>vote {votes[selected]}</p>
      <Button handleClick={() => nextAnecdote()} nameButton={"next anecdote"}></Button>
      <Button handleClick = {() => countVotes()} nameButton={"vote"}></Button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[max]}
        has {votes[max]} votes
      </p>

    </div>
  );
};

export default App;
