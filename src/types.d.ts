import { ReactHTMLElement } from "react"

export interface SectionData {
    title: string,
    path: string,
    fsPath: string,
    description?: string,
    subSections?: SectionData[]
}

export interface SectionProps {
    sectionData: SectionData
}

export interface Answer {
    suggestion: JSX.Element,
    solution: JSX.Element,
    correct: boolean
}

export interface QuizPart {
    question: JSX.Element,
    answers: Answer[],
    numberOfQuestion?: number
}
