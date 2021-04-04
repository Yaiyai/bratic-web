import React, { useState, useCallback, useRef, useEffect } from 'react'
import useWindowResize from '../../hook/useWindowResize'

import { FaAngleRight } from 'react-icons/fa'
import FeatureCard from '../ui/FeatureCard/FeatureCard'

import { Animated } from 'react-animated-css'
import { isInViewport } from '../../helpers/isInViewport.helper'

const QuienesSomos = ({ somos }) => {
	let quienesSomosImage = somos.uniqueImage
	const [somosSection, setSomosSection] = useState({ intro: '', subintro: '', features: [] })

	const animatedImage = useRef()
	const [imageIsInView, setImageIsInView] = useState(false)
	const size = useWindowResize()

	useEffect(() => {
		let primaryText = somos.parsedText.__html
		let firstSplit = primaryText.split('((INTRO))')
		let secondSplit = firstSplit[1].split('((SUBINTRO))')
		let thirdSplit = secondSplit[1].split('((FEATURES))')

		setSomosSection({
			intro: firstSplit[0],
			subintro: secondSplit[0],
			features: thirdSplit
		})
	}, []);


	useEffect(() => {
		isInViewport(animatedImage) && setImageIsInView(true)
		window.addEventListener('scroll', () => {
			isInViewport(animatedImage) && setImageIsInView(true)
		})
	}, [isInViewport])

	const [delays, setDelays] = useState({ first: 0, second: 500, third: 1000 })

	useEffect(() => {
		if (size[0] <= 767) {
			setDelays({ first: 0, second: 0, third: 0 })
		} else {
			setDelays({ first: 0, second: 500, third: 1000 })
		}
	}, [size])



	return (
		<>
			<section id='quienes-somos-section'>
				<div className='bratic-container'>
					<article className='left'>
						<Animated animationIn={ 'fadeInLeft' } isVisible={ imageIsInView }>
							<h2 ref={ animatedImage }>
								{ somos.title }
								<img src={ quienesSomosImage } alt='' />
							</h2>
						</Animated>
					</article>
					<article className='right'>
						<div className='introduction' dangerouslySetInnerHTML={ { __html: somosSection?.intro } }></div>
						<div dangerouslySetInnerHTML={ { __html: somosSection?.subintro } }></div>
					</article>
				</div>
			</section>
			<section id='somos-features'>
				<div className="bratic-container">
					<h2>{ somos.subtitle }</h2>
					<div className='features bratic-container'>
						<FeatureCard
							delay={ delays.first }
							title={ somos.features[0] }
							image={ somos.gallery[2] }
							text={ somosSection?.features[0] }
						/>
						<FeatureCard
							delay={ delays.second }
							title={ somos.features[1] }
							image={ somos.gallery[1] }
							text={ somosSection?.features[1] }
						/>
						<FeatureCard
							delay={ delays.third }
							title={ somos.features[2] }
							image={ somos.gallery[0] }
							text={ somosSection?.features[2] }
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default QuienesSomos
