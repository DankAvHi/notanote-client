import { User, UserPayload } from "../types"

export const getUser = async (userPayload: UserPayload) => {
    try {
        const response = await fetch(`https://localhost:8000/user/${userPayload.id}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const user: User = await response.json()
        return user
    } catch (e) {
        console.error(e)
        return null
    }
}