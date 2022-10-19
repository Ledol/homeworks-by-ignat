import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, initStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, initStateType>(state => state.theme) // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (newTheme: string) => {
        dispatch(changeThemeC(newTheme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme.theme] }>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
