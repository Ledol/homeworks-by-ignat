import {UserType} from "../HW8";

type ActionType = sortNameUpACType | sortNameDownACType | checkAge18ACType


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'SORT-NAME-UP': {
            return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        }
        case 'SORT-NAME-DOWN': {
            return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            }
        case 'CHECK-AGE-18':{
            return state.filter(el => el.age > action.payload.age)
        }
            // need to fix
        default: return state
    }
}

export type sortNameUpACType = ReturnType<typeof sortNameUpAC>
export const sortNameUpAC = (sortUp: string) => {
    return{
        type: 'SORT-NAME-UP',
        payload: {sortUp}
    }as const
}

export type sortNameDownACType = ReturnType<typeof sortNameDownAC>
export const sortNameDownAC = (sortDown: string) => {
    return{
        type: 'SORT-NAME-DOWN',
        payload: {sortDown}
    }as const
}

export type checkAge18ACType = ReturnType<typeof checkAge18AC>
export const checkAge18AC = (age: number) => {
    return{
        type: 'CHECK-AGE-18',
        payload: {age}
    }as const
}
