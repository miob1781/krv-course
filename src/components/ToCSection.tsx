import { ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SectionData } from "../types"
import ToCListEl from "./ToCListEl"
import "../style/ToCListEl.css"

interface Props {
    sectionData: SectionData
    numberOfSection?: number
    includeDescription: boolean
}

export default function ToCSection({ sectionData, numberOfSection, includeDescription }: Props) {
    const [expand, setExpand] = useState(includeDescription ? false : true)

    const iconStyle = { cursor: "pointer" }

    const icon: ReactElement = expand
        ? <FontAwesomeIcon icon={faAngleUp} style={iconStyle} title="Details verbergen" onClick={() => setExpand(false)} />
        : <FontAwesomeIcon icon={faAngleDown} style={iconStyle} title="Details zeigen" onClick={() => setExpand(true)} />


    function renderToCSubEntries(data: SectionData[]): ReactElement[] {
        return data.map((subSectionData: SectionData) => (
            <ToCListEl
                key={subSectionData.path}
                sectionData={subSectionData}
            />
        ))
    }

    return (
        <div className="ToCListCont">
            {includeDescription && icon}
            {includeDescription && <ToCListEl
                key={sectionData.path}
                sectionData={sectionData}
                numberOfSection={numberOfSection}
            />}
            <p style={{ marginLeft: "33px" }}>{includeDescription && expand && sectionData.description}</p>
            <div style={{ marginLeft: "60px" }}>
                {expand && renderToCSubEntries(sectionData.subSections!)}
            </div>
        </div>
    )
}