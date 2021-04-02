import React, { useEffect, useState } from 'react'
import useWindowResize from '../../hook/useWindowResize'
import Card from '../ui/Card/Card'

const Services = () => {
	const size = useWindowResize()
	const [delays, setDelays] = useState({ first: 0, second: 250, third: 500, fourth: 750 })

	useEffect(() => {
		if (size[0] <= 767) {
			setDelays({ first: 0, second: 0, third: 0, fourth: 0 })
		} else {
			setDelays({ first: 0, second: 250, third: 500, fourth: 750 })
		}
	}, [size])

	return (
		<section id='services-section'>

			<div className="bratic-container">
				<h2>¿Qué podemos hacer por tu empresa?</h2>
			</div>

			<div className='bratic-container'>
				<div className="all-cards">
					<Card delay={ delays.first }
						title='Consultoría digital'
						text='Diagnóstico y asesoramiento experto para transformar tu empresa a través de la tecnología, con soluciones adaptadas a tus necesidades.'
						link='/servicios'
					/>
					<Card delay={ delays.second } title='Industria 4.0' text='Análisis, definición e implantación de soluciones específicas que optimicen los procesos de empresas industriales y logísticas.' link='/servicios' />
					<Card delay={ delays.third } title='Ciberseguridad' text='Analizamos y proponemos las herramientas y procesos que aseguren a tu empresa ante posibles ataques externos.' link='/servicios' />
					<Card delay={ delays.fourth } title='Formación' text='Formación específica para asegurar las competencias necesarias que conviertan a las personas en impulsoras del cambio.' link='/servicios' />
				</div>
			</div>
		</section>
	)
}

export default Services
