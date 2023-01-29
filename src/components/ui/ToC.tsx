import { ReactElement } from "react"
import { SectionData } from "../../types"
import ToCSection from "./ToCSection"

interface Props {
    className: string
    sectionsData: SectionData[]
    tocType: string
}

export default function ToC({className, sectionsData, tocType}: Props) {
    function renderToCEntries(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <ToCSection
                key={sectionData.path}
                sectionData={sectionData}
                numberOfSection={index + 1}
                tocType={tocType}
            />
        ))
    }

    return (
        <div className={className}>{renderToCEntries()}</div>
    )
}