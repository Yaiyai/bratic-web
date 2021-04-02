import React, { useState, useCallback, useRef, useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import FeatureCard from '../ui/FeatureCard/FeatureCard'

import { Animated } from 'react-animated-css'
import { isInViewport } from '../../helpers/isInViewport.helper'

const QuienesSomos = () => {
	let quienesSomosImage = 'https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/quienes-somos-squares_ddsxyl.png'
	let features = ['Experiencia', 'Innovación', 'Liderazgo', 'Resultados']
	const animatedImage = useRef()
	const [imageIsInView, setImageIsInView] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			isInViewport(animatedImage) && setImageIsInView(true)
		})
	}, [isInViewport])



	return (
		<>
			<section id='quienes-somos-section'>
				<div className='bratic-container'>
					<article className='left'>
						<Animated animationIn={ 'fadeInLeft' } isVisible={ imageIsInView }>
							<h2 ref={ animatedImage }>
								Quiénes Somos
								<img src={ quienesSomosImage } alt='' />
							</h2>
						</Animated>
					</article>
					<article className='right'>
						<p className='introduction'>
							Nuestra misión es <span className='red'>acompañar a las empresas</span> en los retos de la <span className='orange'>cuarta Revolución Industrial</span>; dar soluciones innovadoras a
							problemas reales.
						</p>
						<p>
							Somos consultores con una doble experiencia en dos sectores que ahora se unen más que nunca: <span className='red'>INDUSTRIAL</span> y <span className='orange'>DIGITAL</span>,
							especializados en proyectos de Transformación Digital e implementación de tecnologías habilitadoras.
						</p>
					</article>
				</div>
			</section>
			<section id='somos-features'>
				<div className="bratic-container">
					<h2>¿Por qué bratic? / ¿Qué nos diferencia?</h2>
					<div className='features bratic-container'>
						<FeatureCard
							delay={ 0 }
							title={ 'Equipo' }
							image='https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/draw-team_uda23m.svg'
							text={ 'Somos un equipo venido del mundo empresarial, con experiencia real sobre el terreno, y conocimientos técnicos *****.' }
						/>
						<FeatureCard
							delay={ 500 }
							title={ 'Experiencia' }
							image='https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/draw-experience_at9hrn.svg'
							text={ 'La experiencia de siempre, formando la industria del futuro:' }
							list={ features }
						/>
						<FeatureCard
							delay={ 1000 }
							title={ 'Camino' }
							image='https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/draw-camino_whodr7.svg'
							text={ 'Además, recorreremos junto a ti todo el camino, desde que se origina la necesidad hasta cerrar el ciclo con la puesta en marcha.' }
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default QuienesSomos
