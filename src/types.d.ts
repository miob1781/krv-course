export interface SectionData {
    title: string,
    path: string,
    description?: string,
    subSections?: SectionData[]
}

export interface Answer {
    suggestion: string,
    solution: string,
    correct: boolean
}

export interface QuizPart {
    question: string,
    answers: Answer[]
}
