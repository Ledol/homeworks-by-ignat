import React, { MouseEvent, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearInterval(timerId)
        // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
            // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = (e:MouseEvent<HTMLDivElement>) => {
        if (e.type) {
            setShow(!show)
        }
        // show
    }
    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target) {
            setShow(false)
        }
        // close
    }

    const stringTime = date.toLocaleTimeString() || <br/> // fix with date
    const stringDate = date.toLocaleDateString() || <br/>  // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : (
                <br/>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
