import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "./common/c4-SuperEditableSpan/SuperEditableSpan.module.css"

function HW6() {
    const [value, setValue] = useState<string>('')

    const KEY = 'editable-span-value';
    const save = () => {
        saveState<string>(KEY, value)
    }
    const restore = () => {
       /* setValue(restoreState<string>('last-value', value))*/
        const oldValue = restoreState(KEY, value)
            setValue(oldValue)
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 6</h3>

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value
                            ? undefined
                            : <span><img className={s.imgStyle} src="https://icon-library.com/images/free-pen-icon/free-pen-icon-6.jpg" alt="sds"/>
                                <span>enter text...</span></span>}}
                />
            </div>
            <div className={s.btnStyle}>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
