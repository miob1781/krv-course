import { Dispatch, ReactElement, SetStateAction, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import NoteForm from "./NoteForm";
import "../../style/Note.css"

interface Props {
    plusIcon: ReactElement
    paragraphId: string
    note: string
    setNote: Dispatch<SetStateAction<string>>
    noteInputOpened: boolean
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

const snippetLength: number = 10

export default function Note({ paragraphId, plusIcon, note, setNote, noteInputOpened, setNoteInputOpened }: Props) {
    const [displaySnippet, setDisplaySnippet] = useState(false)

    // TO DO: Use context and paragraphId to get notes from DB.

    const editIcon = (
        <FontAwesomeIcon
            icon={faEdit}
            title="Notiz ändern"
            className="edit-note-icon"
            onClick={() => setNoteInputOpened(true)}
        />
    )

    const openIcon = (
        <FontAwesomeIcon
            icon={faAngleDown}
            title="Notiz ausklappen"
            className="open-note-icon"
            onClick={() => setDisplaySnippet(false)}
        />
    )

    const closeIcon = (
        <FontAwesomeIcon
            icon={faAngleUp}
            title="Notiz minimieren"
            className="close-note-icon"
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

    const noteIntro: ReactElement = <span className="small-note-intro">Notiz:</span>

    function renderNoteContainerContent() {
        if (!noteInputOpened) {
            if (displaySnippet && snippet.length > 0) {
                return <p className="snippet">{noteIntro}{snippet}{openIcon}</p>
            }
            if (note) {
                return <p className="note-text">{noteIntro}{note} {editIcon} { snippet && closeIcon}</p>
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