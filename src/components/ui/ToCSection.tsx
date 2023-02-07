import { ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SectionData, ToCType } from "../../types"
import ToCListEl from "./ToCListEl"
import "../../style/ToCListEl.css"
import { Link } from "react-router-dom"

interface Props {
    sectionData: SectionData
    tocType: ToCType
    numberOfSection?: number
}

export default function ToCSection({ sectionData, numberOfSection, tocType }: Props) {
    const [expand, setExpand] = useState(false)

    const icon: ReactElement = expand
        ? <FontAwesomeIcon icon={faAngleUp} className="open-toc-content-icon" title="Details verbergen" onClick={() => setExpand(false)} />
        : <FontAwesomeIcon icon={faAngleDown} className="close-toc-content-icon" title="Details zeigen" onClick={() => setExpand(true)} />


    function renderToCSubEntries(data: SectionData[]): ReactElement {
        return (
            <div>
                {data.map((subSectionData: SectionData) => (
                    <ToCListEl
                        key={subSectionData.path}
                        sectionData={subSectionData}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="toc-list-outer-cont">
            {tocType === "welcome" && <div className="toc-list-icon-cont">
                {icon}
            </div>}
            <div>
                {tocType !== "intro" && <ToCListEl
                    key={sectionData.path}
                    sectionData={sectionData}
                    numberOfSection={numberOfSection}
                />}
                {tocType === "welcome" && expand && (
                    <>
                        <p className="toc-description">{sectionData.description}</p>
                        <Link className="toc-intro-link" to={sectionData.path}>
                            <button type="button">Gehe zu den Lektionen</button>
                        </Link>
                    </>
                )}
                {tocType === "intro" && renderToCSubEntries(sectionData.subSections!)}
            </div>
        </div>
    )
}