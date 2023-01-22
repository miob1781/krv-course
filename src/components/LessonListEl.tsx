import { PropsWithChildren, ReactElement, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function ListEl({ children }: PropsWithChildren) {
    const [expand, setExpand] = useState(false)

    function generateSnippet(): string | undefined {
        if (typeof children !== "string") return

        const separatorRegex: RegExp = / |,|\.|;|:|\?|!/
        const snippetLength: number = 5

        const splittedSentence: string[] = children.split(" ")
        const beginning: string = splittedSentence.slice(0, snippetLength).join(" ")
        const shouldDelete: boolean = separatorRegex.test(beginning[beginning.length - 1])
        const snippet = shouldDelete
            ? beginning.slice(0, beginning.length - 1) + "..."
            : beginning + "..."
        return snippet
    }

    const icon: ReactElement = <FontAwesomeIcon icon={faAngleRight} onClick={() => setExpand(true)} />
    const SnippetPlusIcon: ReactElement = <span>{generateSnippet()} {icon}</span>
    const content: ReactNode = expand ? children : SnippetPlusIcon

    return (
        <li>{content}</li>
    )
}