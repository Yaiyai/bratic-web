import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import FeatureCard from '../ui/FeatureCard/FeatureCard';


const QuienesSomos = () => {
	let quienesSomosImage = 'https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/quienes-somos-squares_ddsxyl.png'
	let features = [
		'Experiencia',
		'Innovación',
		'Liderazgo',
		'Resultados'
	]
	return (
		<>
			<section id='quienes-somos' >
				<div className="bratic-container">
					<article className='left'>
						<h2>
							Quiénes Somos
						<img src={ quienesSomosImage } alt='' />
						</h2>
					</article>
					<article className='right'>
						<p className='introduction'>
							Nuestra misión es <span className="red">acompañar a las empresas</span> en los retos de la <span className="orange">cuarta Revolución Industrial</span>; dar soluciones innovadoras a problemas reales.
					</p>
						<p>
							Somos consultores con una doble experiencia en dos sectores que ahora se unen más que nunca: <span className='red'>INDUSTRIAL</span> y <span className='orange'>DIGITAL</span>, especializados en proyectos de Transformación Digital e implementación de tecnologías habilitadoras.
					</p>
					</article>
				</div>
			</section>
			<section id="somos-features">
				<h2>¿Por qué bratic? / ¿Qué nos diferencia?</h2>
				<div className="features bratic-container">

					<FeatureCard
						title={ 'Equipo' }
						image="https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/draw-team_uda23m.svg"
						text={ 'Somos un equipo venido del mundo empresarial, con experiencia real sobre el terreno, y conocimientos técnicos *****.' }
					/>
					<FeatureCard
						title={ 'Experiencia' }
						image="https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/draw-experience_at9hrn.svg"
						text={ 'La experiencia de siempre, formando la industria del futuro:' }
						list={ features }
					/>
					<FeatureCard
						title={ 'Camino' }
						image="https://res.cloudinary.com/bratic-app/image/upload/v1617278455/web/draw-camino_whodr7.svg"
						text={ 'Además, recorreremos junto a ti todo el camino, desde que se origina la necesidad hasta cerrar el ciclo con la puesta en marcha.' }
					/>
				</div>
			</section>
		</>
	)
}

export default QuienesSomos
