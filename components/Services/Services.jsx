import React from 'react'
import Card from '../ui/Card/Card'

const Services = () => {
	return (
		<section id='services-section' className='bratic-container'>
			<h2>¿Qué podemos hacer por tu empresa?</h2>

			<div>
				<Card delay={ 0 }
					title='Consultoría digital'
					text='Diagnóstico y asesoramiento experto para transformar tu empresa a través de la tecnología, con soluciones adaptadas a tus necesidades.'
					link='/servicios'
				/>
				<Card delay={ 250 } title='Industria 4.0' text='Análisis, definición e implantación de soluciones específicas que optimicen los procesos de empresas industriales y logísticas.' link='/servicios' />
				<Card delay={ 500 } title='Ciberseguridad' text='Analizamos y proponemos las herramientas y procesos que aseguren a tu empresa ante posibles ataques externos.' link='/servicios' />
				<Card delay={ 750 } title='Formación' text='Formación específica para asegurar las competencias necesarias que conviertan a las personas en impulsoras del cambio.' link='/servicios' />
			</div>
		</section>
	)
}

export default Services
