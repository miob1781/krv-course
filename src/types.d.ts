export type ToCType = "intro" | "sidebar" | "welcome"

export interface SectionData {
    title: string
    path: string
    fsPath: string
    description?: string
    subSections?: SectionData[]
    pageNumbers?: string
}

export interface SectionProps {
    sectionData: SectionData
}

export interface Answer {
    suggestion: JSX.Element
    solution: JSX.Element
    correct: boolean
}

export interface QuizPart {
    question: JSX.Element
    answers: Answer[]
    numberOfQuestion?: number
}
