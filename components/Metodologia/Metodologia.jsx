import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../ui/Button/Button'

const Metodologia = () => {
	return (
		<section className='metodologia bratic-container'>
			<h2>Metodología BRATIC</h2>
			<article className='time-line'>
				<div className='number'>
					<p>1</p>
				</div>
				<div className='number'>
					<p>2</p>
				</div>
				<div className='number'>
					<p>3</p>
				</div>
			</article>
			<article className='descriptions'>
				<div className='each'>
					<h3>Diagnóstico</h3>
					<ul>
						<li>
							<FontAwesomeIcon icon={faCheckCircle} />
							Visita a tu empresa y diagnóstico de la situación actual.
						</li>
						<li>
							<FontAwesomeIcon icon={faCheckCircle} />
							Retos & Oportunidades.
						</li>
						<li>
							<FontAwesomeIcon icon={faCheckCircle} />
							Workshop colaborativo contigo y los tuyos.
						</li>
					</ul>
				</div>
				<div className='each'>
					<h3>Plan</h3>
					<ul>
						<li>
							<FontAwesomeIcon icon={faCheckCircle} />
							Elaboración del Plan de Transformación Digital.
						</li>
					</ul>
				</div>
				<div className='each'>
					<h3>Partner Digital</h3>
					<p>
						<span>¿Te interesa algún proyecto?</span> <br /> ¡Te acompañamos en todo el proceso de puesta en marcha!
					</p>
				</div>
			</article>
			<Button type='primary' text='Saber más' link='/servicios#metodologia' />
		</section>
	)
}

export default Metodologia
