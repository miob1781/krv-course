import { ReactNode } from "react";

interface propsType {
    children: ReactNode,
    title: string
}

export default function Lesson({ children, title }: propsType) {
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