import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
import "../../style/NoteForm.css"

interface Props {
    note: string
    setNote: Dispatch<SetStateAction<string>>
    setDisplaySnippet: Dispatch<SetStateAction<boolean>>
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

export default function NoteForm({ note, setNote, setDisplaySnippet, setNoteInputOpened }: Props) {
    const [noteInput, setNoteInput] = useState(note)

    function handleTextAreaChange(e: ChangeEvent) {
        const target = e.target as HTMLTextAreaElement
        setNoteInput(target.value)
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // TO DO: axios.post()
        setNote(noteInput)
        setDisplaySnippet(true)
        setNoteInputOpened(false)
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