import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ToCSection from "../components/ToCSection";
import { SectionData } from "../types";

interface Props {
    children: ReactNode
    sectionData: SectionData
}

export default function Introduction({ children, sectionData }: Props) {
    return (
        <>
            <header>
                <h2>{sectionData.title}</h2>
            </header>
            <main>
                <div>{children}</div>
                <h3>Lektionen</h3>
                <div className="ToC">
                    <ToCSection sectionData={sectionData} includeDescription={false} />
                </div>
            </main>
        </>
    )
}