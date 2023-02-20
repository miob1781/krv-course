import { EventHandler, SetStateAction } from "react"

export interface SubSectionData {
    title: string
    lessonId: string
    pageNumbers: string
}

export interface SectionData {
    title: string
    lessonId: string
    description: string
    subSections: SubSectionData[]
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

export interface LessonNotes {
    lessonId: string
    notes: NoteObject[]
}

export interface AuthContextTypes {
    isLoggedIn: boolean
    isLoading: boolean
    userId: string
    username: string
    lessonIds: string[]
    setLessonIds: Dispatch<SetStateAction<string>>
    notes: LessonNotes[]
    setNotes: Dispatch<SetStateAction<LessonNotes>>
    storeToken: Function
    authenticateUser: Function
    logOutUser: EventHandler
    loadNotes: (lessonId: string) => void
}