import { EventHandler, SetStateAction } from "react"

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

export interface NoteObject {
    text: string
    paragraphId: string
}

export interface AuthContextTypes {
    isLoggedIn: boolean
    isLoading: boolean
    userId: string
    username: string
    lessonIds: string[]
    notes: NoteObject[]
    setNotes: Dispatch<SetStateAction<NoteObject>>
    storeToken: Function
    authenticateUser: Function
    logOutUser: EventHandler
    getLessonDone: (sectionNumber: string) => boolean
    getLessonDisabled: (sectionData: SectionData[], sectionNumber: string) => boolean
}