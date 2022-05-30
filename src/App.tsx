import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import Alphabet from './Alphabet';
import WordInput from './WordInput';

export function App() {
  const [word, setWord] = useState([]);

  const handleInput = (word : string) => {
    setWord([...word]);
  }

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Help Emilia spell</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <WordInput handleInput={handleInput}/>
        <Alphabet word={word}/>
      </Container>
    </>
  );
}
