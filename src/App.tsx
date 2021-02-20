import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service'
import { QuestionType, Quiz } from "./Types/quiz_Types";
import PlayAgain from "./components/playAgain";
//Components
import QuestionCard from "../src/components/QuestionCard";

function App() {

  const [quiz, setquiz] = useState<QuestionType[]>([]);
  let [currentStep, setcurrentStep] = useState(0);
  let [score, setscore] = useState(0);
  const [finish, setfinish] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(10, 'easy');
      //console.log(questions)
      setquiz(questions)
    }
    fetchData();
  }, []);
  const handelSubmit = (e: React.FormEvent<EventTarget>, userAnswer: string) => {
    e.preventDefault();
    const currentQuest = quiz[currentStep]
    if (userAnswer === currentQuest.answer) {
      setscore(++score)
    }
    if (currentStep !== quiz.length - 1) {

      setcurrentStep(++currentStep);
    }
    else {
      setfinish(true)
    }


  }
  const handlePlay = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setfinish(false)
    setscore(0)
    setcurrentStep(0)
  }

  if (!quiz.length) {
    return <h3>Loading...</h3>
  }

  if (finish) {

    return (
      <PlayAgain score={score} handlePlay={handlePlay} />
    )

  }
  return (
    <div className="App">
      <div className='Heading'>
        QUIZ TIME !
      </div>
      <QuestionCard
        options={quiz[currentStep].options}
        question={quiz[currentStep].question}
        callback={handelSubmit}
      />
    </div>
  );
}

export default App;
