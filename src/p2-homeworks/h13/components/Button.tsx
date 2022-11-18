import React from 'react';
import {requestsAPI} from "../api/requestsAPI";


type ButtonPropsType = {
    setData: (value: string) => void
    checked: boolean
}

export const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {

        requestsAPI.postRequest(props.checked)
            .then((res) => {
                props.setData(res.data.errorText)
            })
            .catch((error) => {
                if (error.response) {
                    props.setData(error.response.data.errorText)
                } else {
                    props.setData(error.message)
                }
            })
    }

    return (
        <div>
            <button onClick={onClickHandler}>BTN to send checkbox</button>
        </div>
    );
};

