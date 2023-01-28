import { CSSProperties, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import NoteForm from "./NoteForm";

interface Props {
    paragraphId: string
}

const snippetLength: number = 10

export default function Note({ paragraphId }: Props) {
    const [note, setNote] = useState("")
    const [displaySnippet, setDisplaySnippet] = useState(false)
    const [noteInputOpened, setNoteInputOpened] = useState(false)

    // TO DO: Use context and paragraphId to get notes from DB.

    const plusIconStyle: CSSProperties = {
        marginLeft: "70px",
        marginTop: "30px",
        color: "purple",
        cursor: "pointer",
    }

    const editIconStyle: CSSProperties = {
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

    const noteP: JSX.Element = <p className="note" onClick={handleOpenTextArea}>{note}</p>

    function handleOpenTextArea() {
        setNoteInputOpened(true)
    }

    function renderNoteContainerContent() {
        if (!noteInputOpened) {
            if (displaySnippet) {
                return <p>{snippet} <em onClick={() => setDisplaySnippet(false)}>Mehr</em></p>
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
            <NoteForm
                note={note}
                setNote={setNote}
                setNoteInputOpened={setNoteInputOpened}
            />
        )
    }

    return (
        <div className="note-cont">
            {renderNoteContainerContent()}
        </div>
    )
}