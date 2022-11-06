import { useContext } from 'react'
import Context from './Context'

const Button = () => {
    const { filtered, btns } = useContext(Context)

    return (
        <section className="btn-container">
            <article className="md:gap-5">
                {btns.map((btn, index) => (
                    <button key={index} className="btn"
                        onClick={() => filtered(btn)}>
                        {btn}
                    </button>
                ))}
            </article>
        </section>
    )
}

export default Button