import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"

interface Props {
    note: string
    setNote: Dispatch<SetStateAction<string>>
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

export default function NoteForm({note, setNote, setNoteInputOpened}: Props) {
    const [noteInput, setNoteInput] = useState("")

    function handleTextAreaChange(e: ChangeEvent) {
        const target = e.target as HTMLTextAreaElement
        setNoteInput(target.value)
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // TO DO: axios.post()
        setNote(noteInput)
        setNoteInputOpened(false)
    }

    return (
        <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
            <textarea
                name="note"
                defaultValue={note}
                onChange={(e: ChangeEvent) => handleTextAreaChange(e)}
            />
            <button type="button" onClick={() => setNoteInputOpened(false)}>Schließen</button>
            <button type="submit">Senden</button>
        </form>
    )
}