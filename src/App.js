import React, { useState } from 'react'
import FlashCardList from './FlashCardList';
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashCardList flashcards={flashcards} />
  );
}

export default App;

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Question 1',
    answer: 'Option A',
    options: [
      'A',
      'B',
      'C',
      'D'
    ]
  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Option E',
    options: [
      'E',
      'F',
      'G',
      'H'
    ]
  },
  {
    id: 3,
    question: 'Question 3',
    answer: 'Option I',
    options: [
      'I',
      'L',
      'M',
      'N'
    ]
  }
]