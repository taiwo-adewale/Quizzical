import React, {useState, useEffect} from 'react'
import arrayShuffle from 'array-shuffle';
import QuestionGroup from './QuestionGroup'
import blobTwo from '../assets/blob-2.png'

const Main = () => {
  const [questions, setQuestions] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [toggleReset, setToggleReset] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions?categories=science,music,sport_and_leisure,society_and_culture,general_knowledge,food_and_drink,film_and_tv&limit=10&region=NG&difficulty=easy")
      .then(res => res.json())
      .then(data => {

        let results = data.map(result => {
          return {
            ...result,
            answers: [
              result.correctAnswer,
              ...result.incorrectAnswers
            ]
          }
        })

        let resultsShuffledAnswers = results.map(result => {
          return {
            ...result,
            answers: arrayShuffle(result.answers)
          }
        })

        let correctAns = data.map(result => {
          return {
            id: result.id,
            correctAnswer: result.correctAnswer,
          }
        })

        let selectedAns = data.map(result => {
          return {
            id: result.id,
            answer: ""
          }
        })

        setIsCompleted(false)
        setQuestions(resultsShuffledAnswers)
        setSelectedAnswers(selectedAns)
        setCorrectAnswers(correctAns)
        setCorrectAnswersCount(0)
        setIsLoading(false)

        window.scrollTo(0, 0)
      })
  }, [toggleReset])

  function handleCheck() {
    let count = 0

    selectedAnswers.map((ans, index) => {
      if(ans.answer === correctAnswers[index].correctAnswer) {
        count++
      }
    })

    setCorrectAnswersCount(count)
    setIsCompleted(true)
  }

  function handleReset() {
    setIsLoading(true)
    setToggleReset(prevState => !prevState)
  }

  return (
    
    <div className='bgContainerInner w-full min-h-screen' style={{ backgroundImage: `url(${blobTwo})` }} >
      <div className='w-fit max-w-[90%] px-4 py-10 mx-auto flex flex-col gap-y-6'>

        {questions && questions.map((question, index) => {
          return <QuestionGroup
            key={question.id}
            id={question.id}
            question={question.question}
            answers={question.answers}
            selectedAnswer={selectedAnswers[index].answer}
            setSelectedAnswers={setSelectedAnswers}
            finalData={isCompleted ? correctAnswers[index] : null}  />
        })}

        <div className='text-center mt-2'>
          {isCompleted ?
            <div className='flex justify-center items-center gap-x-6 gap-y-2 flex-wrap'>
              <span className='text-primary font-bold'>You scored {correctAnswersCount}/{questions.length} correct answers</span>
              <button onClick={handleReset} className='bg-btnPrimary text-sm text-btnText rounded-2xl px-10 py-2.5'>{isLoading ? 'Loading...' : 'Play again'}</button>
            </div>

            :

            <button onClick={handleCheck} className='bg-btnPrimary text-sm text-btnText rounded-2xl px-12 py-3'>Check answers</button>
          }
        </div>
      </div>

    </div>
  )
}

export default Main