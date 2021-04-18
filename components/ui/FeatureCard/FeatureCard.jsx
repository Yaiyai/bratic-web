import React, { useEffect, useRef, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Animated } from 'react-animated-css'
import { isInViewport } from '../../../helpers/isInViewport.helper'

const FeatureCard = ({ image, title, text, delay }) => {
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
                <img ref={ animatedFeature } src={ image } alt="bratic" />
            </Animated>
            <div className="content">
                <h3 className="title">{ title }</h3>
                <div className='text-editor' dangerouslySetInnerHTML={ { __html: text } }></div>
            </div>
        </article>
    )
}

export default FeatureCard
