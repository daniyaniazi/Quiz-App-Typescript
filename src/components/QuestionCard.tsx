import React, { useState } from 'react';
import { IndexKind } from 'typescript';
import { QuestionPropsType } from "../Types/quiz_Types";
const QuestionCard: React.FC<QuestionPropsType> = ({ question, options, callback }) => {

    //console.log(question, options,)
    let [selectedAns, setSelectedAns] = useState("");

    const handleSelectionEvent = (ev: any) => {
        //console.log(ev.target.value)
        setSelectedAns(ev.target.value)
    }
    return (
        <div className='question-container'>
            <div className='question'>
                {question}
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                {options.map((option: string, index: number) => (
                    <div className='option' key={index}>
                        <label >
                            <input
                                required
                                checked={selectedAns === option}
                                type="radio" name="option" value={option} key={index}
                                onChange={handleSelectionEvent}
                            />
                            {option}
                        </label>
                    </div>
                ))}

                <input type="submit" value="submit" className='btn-submit' />
            </form>
        </div>
    )
}

export default QuestionCard;