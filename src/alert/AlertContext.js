import React, { useContext, useReducer } from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = 'SHOW_ALERT'
const HIDE_ALERT = 'HIDE_ALERT'

const reducer = (state, action) => {

    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                visible: true,
                text: action.text
            }
        case HIDE_ALERT:
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }

}

export const AlertProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = () => {
        const text = prompt('Введите текст предупреждения')
        dispatch({type: SHOW_ALERT, text: text})
    }

    const hide = () => {
        dispatch({type: HIDE_ALERT})
    }
    console.log(state);
    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            show: show,
            hide: hide,
            text: state.text
        }}>
            { children }
        </AlertContext.Provider>
    )
}