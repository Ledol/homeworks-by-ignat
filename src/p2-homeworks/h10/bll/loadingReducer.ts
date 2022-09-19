
export type InitStateType = typeof initState
const initState = {
     isLoading: false
}


export const loadingReducer = (state:InitStateType = initState, action: loadingACType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return{
        type: 'CHANGE-LOADING',
        isLoading: isLoading
    }as const
} // fix any