import { Quiz, QuestionType } from "../Types/quiz_Types";

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQ: number, level: string): Promise<QuestionType[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${totalQ}&difficulty=${level}&type=multiple`)
    console.log('RESPONSE', response)
    let { results } = await response.json()

    const quiz: QuestionType[] = results.map((questionObj: Quiz,) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}