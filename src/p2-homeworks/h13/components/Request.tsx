import React, {useState} from 'react';
import {Checkbox} from "./Checkbox";
import {Button} from "./Button";
export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)


    const [data, setData] = useState('')

    return (
        <div>
            <Button setData={setData} checked={checked}/>
            <Checkbox checked={checked} onChangeChecked={setChecked}/>
            <div>{data}</div>
            </div>
    );
};
