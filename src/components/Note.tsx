import { ChangeEvent, CSSProperties, FormEvent, PropsWithChildren, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function Note({}) {
    const [note, setNote] = useState("")
    const [noteInput, setNoteInput] = useState("")
    const [noteInputOpened, setNoteInputOpened] = useState(false)

    const iconStyle: CSSProperties = {
        marginLeft: "70px",
        marginTop: "30px",
        color: "purple",
        cursor: "pointer",
    }

    const plusIcon = (
        <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            title="Notizen hinzufügen"
            style={iconStyle}
            onClick={handleOpenTextArea}
        />
    )

    const noteP = <p className="note" onClick={handleOpenTextArea}>{note}</p>

    function handleOpenTextArea() {
        setNoteInputOpened(true)
    }

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

    function renderNoteContainerContent() {
        if (!noteInputOpened) {
            return note ? noteP : plusIcon
        } else {
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
    }

    return (
        <div className="note-cont">
            {renderNoteContainerContent()}
        </div>
    )
}