import React from 'react'
import Card from '../ui/Card/Card'

const Services = () => {
	return (
		<section id='services-section'>
			<div className='container'>
				<Card title='Consultoría digital' text='Diagnóstico y asesoramiento experto para transformar tu empresa a través de la tecnología, con soluciones adaptadas a tus necesidades.' link='/' />
				<Card title='Industria 4.0' text='Análisis, definición e implantación de soluciones específicas que optimicen los procesos de empresas industriales y logísticas.' link='/' />
				<Card title='Ciberseguridad' text='Analizamos y proponemos las herramientas y procesos que aseguren a tu empresa ante posibles ataques externos.' link='/' />
				<Card title='Formación' text='Formación específica para asegurar las competencias necesarias que conviertan a las personas en impulsoras del cambio.' link='/' />
			</div>
		</section>
	)
}

export default Services
