import React, { useEffect, useRef, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Animated } from 'react-animated-css'
import { isInViewport } from '../../../helpers/isInViewport.helper'

const FeatureCard = ({ image, title, text, list = false, delay }) => {
    const animatedFeature = useRef()
    const [featureIsInView, setFeatureIsInView] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            isInViewport(animatedFeature) && setFeatureIsInView(true)
        })
    }, [isInViewport])


    return (
        <article className="each-feature">
            <Animated animationIn="fadeInDown" isVisible={ featureIsInView } animationInDelay={ delay } className="image-container">
                <img ref={ animatedFeature } src={ image } alt="" />
            </Animated>
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
