import React from 'react'

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type QuestionType = {
    question: string,
    answer: string
    options: string[]
}

export type QuestionPropsType = {
    question: string,
    options: string[],
    callback: (e: React.FormEvent<EventTarget>, answer: string) => void
}

export type PlaypropTypes = {
    score: number
    handlePlay: (e: React.FormEvent<EventTarget>) => void
}