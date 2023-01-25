import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    title: string
}

export default function Lesson({ children, title }: Props) {
    return (
        <>
            <header>
                <h2>{title}</h2>
            </header>
            <main>
                <div>{children}</div>
            </main>
        </>
    )
}