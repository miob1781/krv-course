import { ChangeEvent, CSSProperties, FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faEdit } from '@fortawesome/free-solid-svg-icons'

interface Props {
    paragraphIndex: number
}

const snippetLength: number = 10

export default function Note({ paragraphIndex }: Props) {
    const [note, setNote] = useState("")
    const [noteInput, setNoteInput] = useState("")
    const [snippet, setSnippet] = useState("")
    const [noteInputOpened, setNoteInputOpened] = useState(false)

    const plusIconStyle: CSSProperties = {
        marginLeft: "70px",
        marginTop: "30px",
        color: "purple",
        cursor: "pointer",
    }

    const editIconStyle: CSSProperties = {
        // marginRight: "20px",
        // marginBottom: "20px",
        color: "purple",
        cursor: "pointer",
    }

    const plusIcon = (
        <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            title="Notizen hinzufügen"
            style={plusIconStyle}
            onClick={handleOpenTextArea}
        />
    )

    const editIcon = (
        <FontAwesomeIcon
            icon={faEdit}
            size="2x"
            title="Notizen ändern"
            style={editIconStyle}
            onClick={handleOpenTextArea}
        />
    )

    const noteP: JSX.Element = <p className="note" onClick={handleOpenTextArea}>{note}</p>

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
        // getSnippet(noteInput)
    }

    function renderNoteContainerContent() {
        if (!noteInputOpened) {
            if (snippet) {
                return <p>{snippet} <em onClick={() => setSnippet("")}>Mehr</em></p>
            }
            if (note) {
                return (
                    <>
                        {noteP}
                        {editIcon}
                    </>
                )
            }
            return plusIcon
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

    useEffect(() => {
        const separatorRegex: RegExp = / |,|\.|;|:|\?|!/
        const splittedNote: string[] = note.split(" ")
        if (splittedNote.length < snippetLength) {
            setSnippet("")
        } else {
            const beginning: string = splittedNote.slice(0, snippetLength).join(" ")
            const shouldDelete: boolean = separatorRegex.test(beginning[beginning.length - 1])
            const snippet: string = shouldDelete
                ? beginning.slice(0, beginning.length - 1) + "..."
                : beginning + "..."
            setSnippet(snippet)
        }
    }, [note])

    return (
        <div className="note-cont">
            {renderNoteContainerContent()}
        </div>
    )
}