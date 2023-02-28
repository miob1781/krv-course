import { Dispatch, ReactElement, SetStateAction, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import NoteForm from "./NoteForm";
import "../../style/Note.css"

interface Props {
    plusIcon: ReactElement
    paragraphId: string
    gridRow: string
    note: string
    setNote: Dispatch<SetStateAction<string>>
    noteInputOpened: boolean
    setNoteInputOpened: Dispatch<SetStateAction<boolean>>
}

/** length of snippet */
const snippetLength: number = 10

/** note of paragraph */
export default function Note({ paragraphId, gridRow, plusIcon, note, setNote, noteInputOpened, setNoteInputOpened }: Props) {
    const [displaySnippet, setDisplaySnippet] = useState(false)

    /** icon to edit note */
    const editIcon = (
        <FontAwesomeIcon
            icon={faEdit}
            title="Notiz ändern"
            className="edit-note-icon"
            onClick={() => setNoteInputOpened(true)}
        />
    )

    /** icon to open note when only a snippet is displayed */
    const openIcon = (
        <FontAwesomeIcon
            icon={faAngleDown}
            title="Notiz ausklappen"
            className="open-note-icon"
            onClick={() => setDisplaySnippet(false)}
        />
    )

    /** icon to close note and display snippet instead */
    const closeIcon = (
        <FontAwesomeIcon
            icon={faAngleUp}
            title="Notiz minimieren"
            className="close-note-icon"
            onClick={() => setDisplaySnippet(true)}
        />
    )

    /** snippet which abbreviates note */
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

    /** introductory span for inline notes on small screens */
    const noteIntro: ReactElement = <span className="small-note-intro">Notiz:</span>

    /** renders content of note container dependent on state */
    function renderNoteContainerContent() {
        if (!noteInputOpened) {
            if (displaySnippet && snippet.length > 0) {
                return <p className="snippet">{noteIntro}{snippet}{openIcon}</p>
            }
            if (note) {
                return <p className="note-text">{noteIntro}{note} {editIcon} {snippet && closeIcon}</p>
            }
            return plusIcon
        }
        return (
            <NoteForm
                paragraphId={paragraphId}
                note={note}
                setNote={setNote}
                setDisplaySnippet={setDisplaySnippet}
                setNoteInputOpened={setNoteInputOpened}
            />
        )
    }

    return (
        <div className="Note" style={{ gridRow: gridRow }}>
            {renderNoteContainerContent()}
        </div>
    )
}