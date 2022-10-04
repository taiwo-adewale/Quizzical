import React from 'react'
import { nanoid } from 'nanoid'
import Option from './Option'

const QuestionGroup = (props) => {

  function handleSelection(option) {
    props.setSelectedAnswers(prevAnswers => prevAnswers.map(ans => {
        return props.id === ans.id ? {...ans, answer: option} : ans
      })
    )
  }

  function checkAnswer(ans) {
    if(!props.selectedAnswer) {
      return 'greyed-out'
    } else if(props.finalData.correctAnswer === ans) {
      return 'correct'
    } else if (props.finalData.correctAnswer !== props.selectedAnswer && props.selectedAnswer === ans) {
      return 'wrong'
    } else {
      return 'greyed-out'
    }
  }

  return (
    <div className='w-full border-b border-b-[#DBDEF0]'>
      <h3 className='text-primary font-bold text-[18px] mb-3.5'>{props.question}</h3>
      
      <div className='flex flex-wrap gap-x-3 gap-y-2 mb-6'>

        {props.answers.map(ans => {
          return <Option key={nanoid()} option={ans} handleSelection={() => handleSelection(ans)} isSelected={props.selectedAnswer === ans ? true : false} optionState={props.finalData ? checkAnswer(ans) : 'initial'}/>
        })}

      </div>
    </div>
  )
}

export default QuestionGroup