import React from 'react'
import { useAlert } from './alert/AlertContext'


export default function Main() {

    const {show} = useAlert()
    return (
        <div>
            <h1>Привет в примере с Context</h1>

            <button onClick={show} className='btn btn-success'>Показать alert</button>
        </div>
    )
}