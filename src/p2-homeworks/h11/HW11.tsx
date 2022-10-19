import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRangeHandler = ( value: number| number[]) => {
        setValue1(+value)
    }

    const onChangeRangeHandler2 = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }



    return (
        <div>
            <hr/>
            <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div className={style.superRange}>
                <div className={style.value1} >{value1}</div>
                <SuperRange value={value1} onChangeRange={onChangeRangeHandler}


                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={style.superRange}>
                <div className={style.value1}>{value1}</div>
                <SuperDoubleRange value={[value1,value2]}
                                  onChangeRange={onChangeRangeHandler2}

                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={style.value1}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
