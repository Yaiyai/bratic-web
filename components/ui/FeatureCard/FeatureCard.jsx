import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const FeatureCard = ({ image, title, text, list = false }) => {
    return (
        <article className="each-feature">
            <figure>
                <img src={ image } alt="" />
            </figure>
            <div className="content">
                <h3 className="title">{ title }</h3>
                <p>{ text }</p>
                { list &&
                    <ul>
                        {
                            list.map(list => (
                                <li key={ list }><FaAngleRight />{ list }</li>
                            ))
                        }
                    </ul>
                }
            </div>
        </article>
    )
}

export default FeatureCard
