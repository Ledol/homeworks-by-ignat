import React from 'react'
import {Slider} from "@mui/material";



type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]

    //, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,

    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    };


    return (
        <>
            <Slider onChange={handleChange}
                    value={value}
                    disableSwap
                    color={'secondary'}
                    style={{width: '300px', backgroundColor: 'white'}}
            />
        </>
    )
}

export default SuperDoubleRange
