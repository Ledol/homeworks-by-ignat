import React, {useState} from 'react'
import {checkAge18AC, homeWorkReducer, sortNameDownAC, sortNameUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'

// export type UserType =
export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот ', age: 3},
    {_id: 1, name: 'Александр ', age: 66},
    {_id: 2, name: 'Коля ', age: 16},
    {_id: 3, name: 'Виктор ', age: 44},
    {_id: 4, name: 'Дмитрий ', age: 40},
    {_id: 5, name: 'Ирина ', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any

    const finalPeople = people.map((p: UserType) => {
        return <div key={p._id}>
            <table className={style.Table}>
                <td className={style.tableName}> {p.name} </td>
                <td className={style.tableAge}> {p.age} </td>
            </table>

            {/*some name, age*/}
        </div>
    })

    const sortUpAction = sortNameUpAC('up')
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAction))

    const sortDownAction = sortNameDownAC('down')
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAction))

    const check18Action = checkAge18AC(18)
    const check18 = () => setPeople(homeWorkReducer(initialPeople, check18Action))


    return (
        <div>
            <hr/>
            <h3>homeworks 8</h3>

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={style.buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
