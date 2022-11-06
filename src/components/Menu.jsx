import { useContext } from 'react'
import Context from './Context'

const Menu = () => {
    const { menu } = useContext(Context)

    return (
        <section className="menu">
            {menu.map(item => (
                <article key={item.id} className="sub-menu">
                    <div className="img-container">
                        <img src={item.img} />
                    </div>
                    <div className="info">
                        <div className="headings">
                            <h3>{item.title}</h3>
                            <h5>{item.price}</h5>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Menu