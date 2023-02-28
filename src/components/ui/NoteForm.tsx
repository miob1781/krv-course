import axios from "axios"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import { AuthContextTypes, LessonNotes, NoteObject } from "../../types"
import "../../style/NoteForm.css"

interface Props {
    paragraphId: string
    note: string
    setNote: Dispatch<SetStateAction<string>>
    setDisplaySnippet: Dispatch<SetStateAction<boolean>>
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

/** form to add or edit note */
export default function NoteForm({ paragraphId, note, setNote, setDisplaySnippet, setNoteInputOpened }: Props) {
    const { userId, setNotes } = useContext(AuthContext) as AuthContextTypes

    const [noteInput, setNoteInput] = useState(note)

    /** handles user input for text area element */
    function handleTextAreaChange(e: ChangeEvent) {
        const target = e.target as HTMLTextAreaElement
        setNoteInput(target.value)
    }

    /** sends note to server and stores note in state */
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const noteObject: NoteObject = { paragraphId, text: noteInput }
        const authToken: string | null = localStorage.getItem("authToken")
        setNote(noteInput)
        setDisplaySnippet(true)
        setNoteInputOpened(false)
        if (!authToken) return
        axios.post(
            `${import.meta.env.VITE_BASE_URL}/notes`,
            { userId, note: noteObject },
            { headers: { Authorization: `Bearer ${authToken}` } }
        ).then(response => {
            setNotes((prevNotes: LessonNotes[]) => {
                let copy: LessonNotes[] = [...prevNotes]
                const lessonId: string = paragraphId.split("-").slice(0, 2).join("-")
                copy = copy.filter((lessonNotes: LessonNotes) => lessonNotes.lessonId !== lessonId)
                copy.push(response.data.lessonNotes)
                return copy
            })
        }).catch(err => console.log(err))
    }

    return (
        <form className="NoteForm" onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <textarea
                    defaultValue={note}
                    rows={5}
                    cols={25}
                    onChange={(e: ChangeEvent) => handleTextAreaChange(e)}
                />
            <div>
                <button
                    type="button"
                    title="Fenster schließen"
                    onClick={() => setNoteInputOpened(false)}
                >Schließen</button>
                <button
                    type="submit"
                    title="Notiz speichern"
                >Speichern</button>
            </div>
        </form>
    )
}