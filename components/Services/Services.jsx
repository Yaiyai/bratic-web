import React, { useEffect, useState } from 'react'
import useWindowResize from '../../hook/useWindowResize'
import Card from '../ui/Card/Card'

const Services = ({ servicios }) => {
	const size = useWindowResize()
	const [cleanServicios, setCleanServicios] = useState([])

	useEffect(() => {
		let allServices = servicios.text.split('((SERVICIO))')
		let auxServices = []
		let time = 0

		allServices.forEach((elm) => {
			auxServices.push({ title: elm.split('((TITLE))')[0], description: elm.split('((TITLE))')[1], delay: time })
			if (size[0] > 768) {
				time += 250
			}
		})
		setCleanServicios(auxServices)

	}, [size]);


	return (
		<section id='services-section'>

			<div className="bratic-container">
				<h2>¿Qué podemos hacer por tu empresa?</h2>
			</div>

			<div className='bratic-container'>
				<div className="all-cards">
					{ cleanServicios.length > 0 && cleanServicios.map(service => (<Card delay={ service.delay } title={ service.title } text={ service.description } link='/servicios' />)) }
				</div>
			</div>
		</section>
	)
}

export default Services
