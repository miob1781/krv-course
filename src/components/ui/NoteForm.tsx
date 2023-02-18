import axios from "axios"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import "../../style/NoteForm.css"
import { AuthContextTypes, NoteObject } from "../../types"

interface Props {
    paragraphId: string
    note: string
    setNote: Dispatch<SetStateAction<string>>
    setDisplaySnippet: Dispatch<SetStateAction<boolean>>
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

export default function NoteForm({ paragraphId, note, setNote, setDisplaySnippet, setNoteInputOpened }: Props) {
    const { userId, setNotes } = useContext(AuthContext) as AuthContextTypes

    const [noteInput, setNoteInput] = useState(note)

    // changes state when user types input
    function handleTextAreaChange(e: ChangeEvent) {
        const target = e.target as HTMLTextAreaElement
        setNoteInput(target.value)
    }

    // sends note to server and stores note in state
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const noteObject: NoteObject = { paragraphId, text: noteInput }
        const authToken: string | null = localStorage.getItem("authToken")
        setNote(noteInput)
        setDisplaySnippet(true)
        setNoteInputOpened(false)
        if (!authToken) return
        axios.post(
            `${import.meta.env.BASE_URL}/notes`,
            { userId, note: noteObject },
            { headers: { Authorization: `Bearer ${authToken}` } }
        ).then(() => {
            setNotes((prevNotes: NoteObject[]) => {
                let copy: NoteObject[] = [...prevNotes]
                copy = copy.filter((note: NoteObject) => note.paragraphId !== paragraphId)
                if (note) {
                    copy.push({
                        paragraphId,
                        text: note
                    })
                }
                return copy
            })
        }).catch(err => console.log(err))
    }

    return (
        <form className="NoteForm" onSubmit={(e: FormEvent) => handleSubmit(e)}>
            <textarea
                defaultValue={note}
                rows={8}
                cols={40}
                onChange={(e: ChangeEvent) => handleTextAreaChange(e)}
            />
            <div className="small-textarea-cont">
                <textarea
                    className="small"
                    defaultValue={note}
                    rows={5}
                    cols={25}
                    onChange={(e: ChangeEvent) => handleTextAreaChange(e)}
                />
            </div>
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