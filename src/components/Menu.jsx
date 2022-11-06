import { useContext } from 'react'
import Context from './Context'

const Menu = () => {
    const { menu } = useContext(Context)

    return (
        <section className="menu lg:px-16">
            <article className="lg:grid-cols-2">
                {menu.map(item => (
                    <div key={item.id} className="sub-menu">
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
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Menu