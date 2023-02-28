import { ReactElement, ReactNode } from "react";
import IntroTocEl from "../components/ui/IntroTocEl";
import { SectionData, LessonData } from "../types";
import "../style/Introduction.css"

interface Props {
    children: ReactNode
    sectionData: SectionData
}

/** displays introductory text and table of content for sections */
export default function Introduction({ children, sectionData }: Props) {

    /** renders table of content of lessons of the section */
    function renderLessonTitles(): ReactElement {
        return (
            <>
                {sectionData.lessons.map((lesson: LessonData, index: number) => (
                    <IntroTocEl
                        key={lesson.lessonId}
                        lessonId={lesson.lessonId}
                        numberOfSection={index + 1}
                        title={lesson.title}
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