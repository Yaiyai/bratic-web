import React from 'react'
import ServicesCard from '../../ui/ServicesCard/ServicesCard'

const Services = () => {
	let consultoriaFeatures = [
		'Diagnóstico del Nivel de Madurez',
		'Plan de Transformación Digital.',
		'Digitalización de procesos administrativos y productivos',
		'Búsqueda y tramitación de Financiación y Ayudas.',
	]
	let industriaFeatures = [
		'Diagnósticos 4.0',
		'Selección de tecnologías habilitadoras.',
		'Implantación de soluciones habilitadoras.',
		'Sistemas de gestión operativos: producción, logística y almacenes.',
		'Sensorización en planta - IoT.',
		'Almacenamiento, tratamiento y analítica de datos.',
		'Optimización de procesos industriales y logísticos.',
	]
	let ciberseguridadFeatures = ['Infraestructuras.', 'Plan Director de Seguridad: SGSI ISO 27001 ENS', 'Problemática asociada al teletrabajo.']
	let formacionFeatures = ['Herramientas digitales de administración empresarial.', 'Seguridad de la Información.', 'Formación a medida.']
	return (
		<section id='services-page-section' className='bratic-container'>
			<ServicesCard
				especialClass='consultoria'
				bkg='https://res.cloudinary.com/bratic-app/image/upload/v1614447762/illustration-digital.svg'
				title='Consultoría Digital'
				features={consultoriaFeatures}
			/>
			<ServicesCard especialClass='industria' bkg='/' title='Industria 4.0' features={industriaFeatures} />
			<ServicesCard especialClass='ciberseguridad' bkg='/' title='Ciberseguridad' features={ciberseguridadFeatures} />
			<ServicesCard especialClass='formacion' bkg='/' title='Formación' features={formacionFeatures} />
		</section>
	)
}

export default Services
