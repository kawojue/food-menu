import { createContext, useState } from 'react'

const Context = createContext({})

export const DataContext = ({ children }) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default Context