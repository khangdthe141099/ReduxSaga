import { useAppSelector } from "../hooks/useStore"
import { selectUser } from "./user/userSlice"

export const useUser = () => {
    const user = useAppSelector(selectUser)
    return user
}