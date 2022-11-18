import {Dispatch} from "redux";
import {requestsAPI} from "../api/requestsAPI";


export const requestReducer = (state: any, action: SetSuccessType) => {
    switch (action.type){
        case "SET-SUCCESS":
            return {...state, success: action.status}
    }
}


// ACTIONS
type SetSuccessType = ReturnType<typeof setSuccessAC>
export const setSuccessAC = (status: boolean) => {
    return{
        type: "SET-SUCCESS",
        status
    }as const
}

// THUNKS
export const changeStatusTC = (success: boolean) => (dispatch: Dispatch) => {
    requestsAPI.postRequest(success)
        .then((res) => {
            dispatch(setSuccessAC(res.data.yourBody.success))
        })
}