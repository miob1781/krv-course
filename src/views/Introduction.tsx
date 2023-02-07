import { ReactNode } from "react";
import ToCSection from "../components/ui/ToCSection";
import { SectionData } from "../types";
import "../style/Introduction.css"

interface Props {
    children: ReactNode
    sectionData: SectionData
}

export default function Introduction({ children, sectionData }: Props) {
    return (
        <div className="Intro">
            <header>
                <h2>{sectionData.title}</h2>
            </header>
            <main>
                <div>{children}</div>
                <h3>Lektionen</h3>
                <div className="toc">
                    <ToCSection sectionData={sectionData} tocType="intro" />
                </div>
            </main>
        </div>
    )
}