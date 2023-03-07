import { EventHandler, SetStateAction } from "react"

/** metadata of lesson */
export interface LessonData {
    /** lesson title */
    title: string
    /** lesson id */
    lessonId: string
    /** page numbers od lesson */
    pages: string
}

/** metadata of section */
export interface SectionData {
    /** section title */
    title: string
    /** section id */
    lessonId: string
    /** short description of section */
    description: string
    /** metadata of lessons contained in section */
    lessons: LessonData[]
}

/** props of sections */
export interface SectionProps {
    /** metadata of section */
    sectionData: SectionData
}

/** props of lessons */
export interface LessonProps {
    /** metadata of lesson */
    lessonData: LessonData
    quiz: QuizPart[]
}

/** quiz answer */
export interface Answer {
    /** suggested answer */
    suggestion: JSX.Element
    /** explanation of why the answer is correct or not */
    solution: JSX.Element
    /** true if selected answer is correct */
    correct: boolean
}

/** question and answer of quiz */
export interface QuizPart {
    /** quiz question */
    question: JSX.Element
    /** answers belonging to quiz question */
    answers: Answer[]
    /** number of quiz question */
    numberOfQuestion?: number
}

/** object with text and paragraph id of note */
export interface NoteObject {
    /** note text */
    text: string
    /** paragraph id of note */
    paragraphId: string
}

/** object with notes and id of lesson */
export interface LessonNotes {
    /** lesson id */
    lessonId: string
    /** notes of lesson */
    notes: NoteObject[]
}

/** exported values of AuthContext */
export interface AuthContextTypes {
    /** true if user is logged in */
    isLoggedIn: boolean
    /** true if user data are being loaded */
    isLoading: boolean
    /** user id */
    userId: string
    /** username */
    username: string
    /** ids of completed lessons */
    lessonIds: string[]
    /** function to set state of lesson ids */
    setLessonIds: Dispatch<SetStateAction<string>>
    /** array with all notes */
    notes: LessonNotes[]
    /** sets the array with all notes */
    setNotes: Dispatch<SetStateAction<LessonNotes>>
    /** function to store authentication token */
    storeToken: Function
    /** function to authenticate user */
    authenticateUser: Function
    /** function to log out user */
    logOutUser: EventHandler
    /** function to load the notes of a lesson */
    loadNotes: (lessonId: string) => void
}