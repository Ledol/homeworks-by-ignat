import React from 'react'
import s from './Message.module.css'

type HW1PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: HW1PropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/> {/*{props.avatar},*/}
            <div className={s.titleMessage}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
