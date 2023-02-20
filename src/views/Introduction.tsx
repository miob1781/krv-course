import { ReactElement, ReactNode } from "react";
import IntroTocEl from "../components/ui/IntroTocEl";
import { SectionData, SubSectionData } from "../types";
import "../style/Introduction.css"

interface Props {
    children: ReactNode
    sectionData: SectionData
}

export default function Introduction({ children, sectionData }: Props) {
    function renderLessonTitles(): ReactElement {
        return (
            <>
                {sectionData.subSections.map((subSectionData: SubSectionData, index: number) => (
                    <IntroTocEl
                        key={subSectionData.lessonId}
                        lessonId={subSectionData.lessonId}
                        numberOfSection={index + 1}
                        title={subSectionData.title}
                    />
                ))}
            </>
        )
    }

    return (
        <div className="Intro">
            <header>
                <h2>{sectionData.title}</h2>
            </header>
            <main>
                <div className="intro-text">{children}</div>
                <h3>Lektionen</h3>
                {renderLessonTitles()}
            </main>
        </div>
    )
}