import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitStateType, loadingAC} from "./bll/loadingReducer";
import preloader from './bll/preloader4.gif'
import style from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW10() {
    // useSelector, useDispatch

    const load = useSelector<AppStoreType, InitStateType>(state => state.loading)
    const dispatch = useDispatch()

    //const loading = false

    const setLoading = () => {
        dispatch(loadingAC(!load.isLoading))
        setTimeout(() => {
            dispatch(loadingAC(load.isLoading))
            console.log('loading...')
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <h3>homeworks 10</h3>

            {/*should work (должно работать)*/}
            {load.isLoading
                ? (
                    <div ><img className={style.img10}  src={preloader} alt='preloader'/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
