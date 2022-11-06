import { useContext } from 'react'
import Context from './Context'

const Button = () => {
    const { filtered, btns } = useContext(Context)

    return (
        <section className="btn-container">
            {btns.map((btn, index) => (
                <button key={index} className="btn"
                    onClick={() => filtered(btn)}>
                    {btn}
                </button>
            ))}
        </section>
    )
}

export default Button