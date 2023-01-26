import { ReactElement } from "react"
import { SectionData } from "../types"
import ToCListEl from "./ToCListEl"

interface Props {
    section: SectionData,
    index: number
}

export default function ToCSection({ section, index }: Props) {
    function renderToCSubEntries(data: SectionData[]): ReactElement[] {
        return data.map((section: SectionData) => (
            <ToCListEl
                key={section.path}
                path={section.path}
                sectionTitle={section.title}
            />
        ))
    }

    return (
        <ToCListEl
            key={section.path}
            path={section.path}
            sectionTitle={section.title}
            description={section.description}
            numberOfSection={index + 1}
        >{section.subSections && renderToCSubEntries(section.subSections)}</ToCListEl>
    )
}