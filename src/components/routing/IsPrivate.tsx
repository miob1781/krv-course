import { PropsWithChildren, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { AuthContextTypes } from "../../types"
import Loading from "./Loading"

interface Props {
    lessonId: string
}

/** component called when user switches to a lesson route */
export default function IsPrivate({ children, lessonId }: PropsWithChildren<Props>) {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as AuthContextTypes

    if (isLoading) return <Loading />
    if (!isLoggedIn) {
        return <Navigate to={`/account/${lessonId}`} />
    } else {
        return children as JSX.Element
    }
}