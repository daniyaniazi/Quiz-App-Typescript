import React from 'react'
import { PlaypropTypes } from '../Types/quiz_Types'
const PlayAgain: React.FC<PlaypropTypes> = ({ score, handlePlay }) => {
    return (

        <div className="App">

            <div className='scoreCard'>
                <h3>
                    YOUR FINAL SCORE <br /> <span className={score < 5 ? `red` : `green`} >{score}</span>
                </h3>
            </div>
            <button onClick={handlePlay} className='btn-submit'>
                PlayAgain
        </button>
        </div>
    )
}

export default PlayAgain
