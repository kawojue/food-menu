import { createContext, useState } from 'react'
import data from '../data'

const Context = createContext({})

export const DataContext = ({ children }) => {

    const [menu, setMenu] = useState(data)

    const filtered = (category) => {
        const newMenu = data.filter(food => {
            if (category === 'all') {
                return food
            } else {
                return food.category === category
            }
        })

        setMenu(newMenu)
    }

    return (
        <Context.Provider value={{
            menu, filtered
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context