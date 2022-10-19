

export type initStateType = {
    theme: string
}
const initState = {
    theme: 'dark'
};

export const themeReducer = (state:initStateType = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.payload.newTheme};
        }
        default: return state;
    }
};

export type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (newTheme: string) => {
    return {
        type: "CHANGE_THEME",
        payload: {newTheme}
    }as const
}; // fix any