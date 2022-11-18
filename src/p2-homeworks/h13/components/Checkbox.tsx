import React, {ChangeEvent, useState} from 'react';


type CheckboxType = {
    checked: boolean
    onChangeChecked:(success: boolean) => void
}

export const Checkbox = (props:CheckboxType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeChecked(e.currentTarget.checked)
    }
    console.log(props.checked)
    return (
        <div>
            <input type="checkbox" name="checkbox" onChange={onChangeHandler}/>
        </div>
    );
};
