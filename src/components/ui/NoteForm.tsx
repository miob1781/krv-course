import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"

interface Props {
    note: string
    setNote: Dispatch<SetStateAction<string>>
    setDisplaySnippet: Dispatch<SetStateAction<boolean>>
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

export default function NoteForm({note, setNote, setDisplaySnippet, setNoteInputOpened}: Props) {
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
        <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
            <textarea
                defaultValue={note}
                rows={5}
                cols={30}
                onChange={(e: ChangeEvent) => handleTextAreaChange(e)}
            />
            <button type="button" onClick={() => setNoteInputOpened(false)}>Schließen</button>
            <button type="submit">Senden</button>
        </form>
    )
}