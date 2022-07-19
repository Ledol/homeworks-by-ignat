import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandler} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onKeyDownHandler}
            />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span>{error && <div style={{color: 'red'}}>Field is required</div>}</span>
        </div>
    )
}

export default Greeting
