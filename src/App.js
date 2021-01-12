import React, { useState, useEffect } from 'react'
import FlashCardList from './FlashCardList';
import './app.css'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer)
            const options = [...questionItem.incorrect_answers.map(a => decodeString(a)),
              answer]
            return {
              id: `${index}-$(Data.now)`,
              question: decodeString(questionItem.question),
              answer: questionItem.correct_answer,
              options: options.sort(() => Math.random() - .5)
            }
          })
        )
      })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <div className="container">
      <FlashCardList flashcards={flashcards} />
    </div>
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