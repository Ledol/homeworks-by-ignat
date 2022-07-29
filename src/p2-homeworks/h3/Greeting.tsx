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
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onKeyDownHandler}
            />
            <button className={s.btn}
                    onClick={addUser}
            >add</button>
            <span className={s.total}>{totalUsers}</span>
            <div className={s.errorDiv}>{error && <div style={{color: 'red'}}>Field is required</div>}</div>
        </div>
    )
}

export default Greeting
