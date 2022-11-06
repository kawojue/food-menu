import { useContext } from 'react'
import Context from './Context'

const Button = () => {
    const btns = ['all', 'breakfast', 'lunch', 'shakes']
    const { filtered } = useContext(Context)

    return (
        <section>
            {btns.map((btn, index) => (
                <button key={index} onClick={() => filtered(btn)}>
                    {btn}
                </button>
            ))}
        </section>
    )
}

export default Button