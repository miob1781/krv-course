import { ReactElement } from "react"
import { SectionData, ToCType } from "../../types"
import ToCSection from "./ToCSection"
import "../../style/ToC.css"

interface Props {
    sectionsData: SectionData[]
    tocType: ToCType
}

export default function ToC({sectionsData, tocType}: Props) {
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
        <div className="ToC">{renderToCEntries()}</div>
    )
}