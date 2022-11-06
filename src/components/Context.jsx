import data from '../data'
import { createContext, useState } from 'react'


const Context = createContext({})

export const DataContext = ({ children }) => {
    const [menu, setMenu] = useState(data)
    const btns = ['all', 'breakfast', 'lunch', 'shakes']

    const filtered = (category) => {
        const newMenu = data.filter(item => {
            if (category === 'all') {
                return item
            } else {
                return item.category === category
            }
        })

        setMenu(newMenu)
    }

    return (
        <Context.Provider value={{
            menu, filtered, btns
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context