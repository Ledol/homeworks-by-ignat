import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number | number[]) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
         onChangeRange,
     value,

    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue);
    };


    return (
        <>
            <Slider onChange={handleChange}
                    value={value}
                    disableSwap
                    color={'secondary'}
                    style={{width: '300px',  backgroundColor: 'white'}}
            />

        </>
    )
}

export default SuperRange
