import { EventHandler } from "react"

export type ToCType = "intro" | "sidebar" | "welcome"

export interface SectionData {
    title: string
    sectionNumber: string
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

export interface AuthContextTypes {
    isLoggedIn: boolean
    isLoading: boolean
    username: string
    lessonIds: string[]
    storeToken: Function
    authenticateUser: Function
    logOutUser: EventHandler
}