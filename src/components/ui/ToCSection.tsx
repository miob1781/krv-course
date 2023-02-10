import { ReactElement, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SectionData, ToCType } from "../../types"
import ToCListEl from "./ToCListEl"
import "../../style/ToCListEl.css"

interface Props {
    sectionData: SectionData
    tocType: ToCType
    numberOfSection?: number
}

export default function ToCSection({ sectionData, numberOfSection, tocType }: Props) {
    const [expand, setExpand] = useState(false)

    const icon: ReactElement = expand
        ? <FontAwesomeIcon icon={faAngleUp} />
        : <FontAwesomeIcon icon={faAngleDown} />


    function renderToCSubEntries(data: SectionData[]): ReactElement {
        return (
            <>
                {data.map((subSectionData: SectionData) => (
                    <ToCListEl
                        key={subSectionData.path}
                        sectionData={subSectionData}
                    />
                ))}
            </>
        )
    }

    return (
        <div className="toc-list-outer-cont">
            {tocType === "welcome" && (
                <p
                    className="toc-list-title-cont"
                    title={expand ? "Details verbergen" : "Details zeigen"}
                    onClick={() => setExpand(prevExpand => !prevExpand)}
                >
                    {icon}<span className="toc-list-title">{numberOfSection}. {sectionData.title}</span>
                </p>
            )}
            {tocType !== "intro" && <div>
                {tocType === "sidebar" && <ToCListEl
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
            </div>}
            {tocType === "intro" && renderToCSubEntries(sectionData.subSections!)}
        </div>
    )
}