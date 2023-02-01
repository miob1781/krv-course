import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faEdit, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import NoteForm from "./NoteForm";
import "../../style/Note.css"

interface Props {
    paragraphId: string
}

const snippetLength: number = 10

export default function Note({ paragraphId }: Props) {
    const [note, setNote] = useState("")
    const [displaySnippet, setDisplaySnippet] = useState(false)
    const [noteInputOpened, setNoteInputOpened] = useState(false)

    // TO DO: Use context and paragraphId to get notes from DB.

    const plusIcon = (
        <FontAwesomeIcon
            icon={faCirclePlus}
            title="Notiz hinzufügen"
            className="plus-icon"
            onClick={handleOpenTextArea}
        />
    )

    const editIcon = (
        <FontAwesomeIcon
            icon={faEdit}
            title="Notiz ändern"
            className="edit-icon"
            onClick={handleOpenTextArea}
        />
    )

    const openIcon = (
        <FontAwesomeIcon
            icon={faAngleDown}
            title="Notiz ausklappen"
            className="open-icon"
            onClick={() => setDisplaySnippet(false)}
        />
    )

    const closeIcon = (
        <FontAwesomeIcon
            icon={faAngleUp}
            title="Notiz minimieren"
            className="close-icon"
            onClick={() => setDisplaySnippet(true)}
        />
    )

    const snippet: string = useMemo(() => {
        const separatorRegex: RegExp = / |,|\.|;|:|\?|!/
        const splittedNote: string[] = note.split(" ")
        if (splittedNote.length < snippetLength) {
            setDisplaySnippet(false)
            return ""
        } else {
            const beginning: string = splittedNote.slice(0, snippetLength).join(" ")
            const shouldDelete: boolean = separatorRegex.test(beginning[beginning.length - 1])
            const snippet: string = shouldDelete
                ? beginning.slice(0, beginning.length - 1) + "..."
                : beginning + "..."
            setDisplaySnippet(true)
            return snippet
        }
    }, [note])

    function handleOpenTextArea() {
        setNoteInputOpened(true)
    }

    function renderNoteContainerContent() {
        if (!noteInputOpened) {
            if (displaySnippet) {
                return (
                    <p className="snippet">{snippet}
                        {openIcon}
                    </p>
                )
            }
            if (note) {
                return <p className="note-text">{note} {editIcon} { snippet && closeIcon}</p>
            }
            return plusIcon
        }
        return (
            <NoteForm
                note={note}
                setNote={setNote}
                setDisplaySnippet={setDisplaySnippet}
                setNoteInputOpened={setNoteInputOpened}
            />
        )
    }

    return (
        <div className="Note">
            {renderNoteContainerContent()}
        </div>
    )
}