import { ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SectionData } from "../../types"
import ToCListEl from "./ToCListEl"
import "../../style/ToCListEl.css"

interface Props {
    sectionData: SectionData
    numberOfSection?: number
    tocType: string
}

export default function ToCSection({ sectionData, numberOfSection, tocType }: Props) {
    const [expand, setExpand] = useState(tocType === "intro" ? true : false)

    const iconStyle = { cursor: "pointer" }

    const icon: ReactElement = expand
        ? <FontAwesomeIcon icon={faAngleUp} style={iconStyle} title="Details verbergen" onClick={() => setExpand(false)} />
        : <FontAwesomeIcon icon={faAngleDown} style={iconStyle} title="Details zeigen" onClick={() => setExpand(true)} />


    function renderToCSubEntries(data: SectionData[]): ReactElement[] {
        return data.map((subSectionData: SectionData) => (
            <ToCListEl
                key={subSectionData.path}
                sectionData={subSectionData}
                tocType={tocType}
            />
        ))
    }

    return (
        <div className="ToCListCont">
            {tocType !== "intro" && icon}
            {tocType !== "intro" && <ToCListEl
                key={sectionData.path}
                sectionData={sectionData}
                numberOfSection={numberOfSection}
                tocType={tocType}
            />}
            <p style={{ marginLeft: "33px" }}>{tocType === "welcome" && expand && sectionData.description}</p>
            <div style={{ marginLeft: "60px" }}>
                {expand && renderToCSubEntries(sectionData.subSections!)}
            </div>
        </div>
    )
}