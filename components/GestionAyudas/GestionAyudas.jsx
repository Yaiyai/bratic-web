import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const GestionAyudas = () => {
	let quienesSomosImage = 'https://res.cloudinary.com/bratic-app/image/upload/v1614428249/quienes-somos.png'
	let ayudas = [
		'Ayudas a la I+D+i.',
		'ACTIVA Industria 4.0.',
		'Ayudas CDTI.',
		'Ayudas INNOVA COVID.',
		'Ayudas CRECE.',
		'Ayudas Fondo Europeo de Desarrollo Regional (FEDER).',
		'Ayudas a la digitalización fondos europeos Recuperación y la Resiliencia y programa ­React-EU.',
	]
	return (
		<section id='gestion-ayudas' className='bratic-container'>
			<article className='left'>
				<img src={quienesSomosImage} alt='' />
			</article>
			<article className='right'>
				<h2>Gestión de ayudas</h2>
				<p>Ayudamos a las empresas a aprovechar las oportunidades que ofrecerán los fondos europeos de recuperación.</p>
				<p>Contamos con amplia experiencia en la búsqueda y tramitación de Financiación y Ayudas regionales, estatales y europeas:</p>
				<ul>
					{ayudas?.map((ay, idx) => (
						<li key={idx}>
							<FontAwesomeIcon icon={faCheckCircle} />
							{ay}
						</li>
					))}
				</ul>
			</article>
		</section>
	)
}

export default GestionAyudas
