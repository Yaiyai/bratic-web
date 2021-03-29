import React from 'react'
import { FaAngleRight } from "react-icons/fa";


const QuienesSomos = () => {
	let quienesSomosImage = 'https://res.cloudinary.com/bratic-app/image/upload/v1617037439/web/Image-squares.png'
	return (
		<section id='quienes-somos' className='bratic-container'>
			<article className='left'>
				<h2>
					Quiénes Somos
					<img src={ quienesSomosImage } alt='' />
				</h2>
			</article>
			<article className='right'>
				<p>
					Somos consultores con una doble experiencia en dos sectores que ahora se unen más que nunca: <span className='red'>INDUSTRIAL</span> y <span className='orange'>DIGITAL</span>, especializados en proyectos de Transformación Digital e implementación de tecnologías habilitadoras.
				</p>
				<p>
					Nuestra misión es acompañar a las empresas en los retos de la cuarta Revolución Industrial; Dar soluciones innovadoras a problemas reales.
				</p>
				<h4>¿POR QUÉ bratic? / ¿QUÉ NOS DIFERENCIA?</h4>
				<p>Somos un equipo venido del mundo empresarial, con experiencia real sobre el terreno, y conocimientos técnicos *****.</p>
				<p>La experiencia de siempre, formando la industria del futuro:</p>
				<ul>
					<li><FaAngleRight />Experiencia</li>
					<li><FaAngleRight />Innovación</li>
					<li><FaAngleRight />Liderazgo</li>
					<li><FaAngleRight />Resultados</li>
				</ul>
				<p>Además, recorreremos junto a ti todo el camino, desde que se origina la necesidad hasta cerrar el ciclo con la puesta en marcha.</p>
			</article>
		</section>
	)
}

export default QuienesSomos
