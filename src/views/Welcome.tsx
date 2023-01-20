import ToCListEl from "../components/ToCListEl"

export default function Welcome() {
    const link = "/link"

    return (
        <div>
            <h1>Study Kant's <em>Critique of Pure Reason</em>!</h1>
            <p>Study Immanuel Kant's most famous work on your own pace.</p>
            <ul>
                <ToCListEl link={link}>Introduction</ToCListEl>
            </ul>
        </div>
    )
}