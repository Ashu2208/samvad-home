import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../util/Constants"
import axios from "axios";
const initialState = {
    value: 0,
}
const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: ({
    })
})

export const authUser = (id, password) => async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        const status = response.status || undefined
        const data = await response.data || undefined
        if (status === 200) {
            if (password === data.password) {
                localStorage.setItem("userStatus", true)
                return "Login Success"
            }
            return "Id or Password Wrong"
        }
    } catch (error) {
        return error.message
    }
}

export default UserSlice.reducer