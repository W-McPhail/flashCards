import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Card from './components/card'
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  const goForward = () => {
    if (cardIndex < 4) {
      setCardIndex(cardIndex + 1);
    }
  };

  const goBackward = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  const cards = [
    {
      front: 'Cats have over 20 muscles that control their ears.',
      back: 'True',
    },
    {
      front: 'Cats sleep 70% of their lives.',
      back: 'True',
    },
    {
      front: 'Cats have 230 bones in their body.',
      back: 'True',
    },
    {
      front: 'What is the so called SIC (Standard Issue Cat)',
      back: 'Brown Tabby'
    },
    {
      front: "What is my cat's name?",
      back: "Achilles"
    }
  ];

  return (
    <div className="App">
      <Header />
      {/* <Card className="Card" front="What type of cat is the so called Standard Issue Cat (SIC)" back="Brown Tabby"/> */}
      <Card className="Card" front={cards[cardIndex].front} back={cards[cardIndex].back}/>
      <button onClick={goForward}>Forward</button>
      <button onClick={goBackward}>Back</button>
      <p>Again, work in progress; am tired, will be at office hours on Thursday</p>
    </div>
  )
}

export default App
