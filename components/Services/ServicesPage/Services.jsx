import React, { useEffect, useState } from 'react'
import useWindowResize from '../../../hook/useWindowResize'
import ServicesCard from '../../ui/ServicesCard/ServicesCard'

const Services = ({ servicios }) => {
	const size = useWindowResize()
	const [cleanServicios, setCleanServicios] = useState([])
	useEffect(() => {
		let allServices = servicios.parsedText.__html.split('((SERVICE))')
		let auxServices = []
		let time = 0
		let cleanElm = ''

		allServices.forEach((elm) => {
			if (size[0] > 768) {
				time += 250
			} else {
				time = 0
			}
			if (elm.includes('</p>') && elm.includes('<p>')) {
				cleanElm = elm.split('</p>')[1].split('<p>')[0]
				auxServices.push({ description: cleanElm, delay: time })
			} else if (elm.includes('</p>') && !elm.includes('<p>')) {
				cleanElm = elm.split('</p>')[1]
				auxServices.push({ description: cleanElm, delay: time })
			} else if (elm.includes('</p>') && !elm.includes('<p>')) {
				cleanElm = elm.split('<p>')[0]
				auxServices.push({ description: cleanElm, delay: time })
			} else {
				auxServices.push({ description: elm, delay: time })

			}
		})
		setCleanServicios(auxServices)

	}, [size]);


	return (
		<section id='services-page-section'>
			<div className='bratic-container'>
				{ cleanServicios.length > 0 &&
					<>
						<ServicesCard delay={ cleanServicios[0].delay }
							bkg='https://res.cloudinary.com/bratic-app/image/upload/v1614447762/illustration-digital.svg'
							specialClass='consultoria'
							title={ servicios.features[0] }
							features={ cleanServicios[0].description }
						/>
						<ServicesCard delay={ cleanServicios[1].delay }
							bkg='https://res.cloudinary.com/bratic-app/image/upload/v1614508328/illustration-industry.svg'
							specialClass='industria'
							title={ servicios.features[1] }
							features={ cleanServicios[1].description } />
						<ServicesCard delay={ cleanServicios[2].delay }
							bkg='https://res.cloudinary.com/bratic-app/image/upload/v1614508510/illustration-cibersecurity.svg'
							specialClass='ciberseguridad'
							title={ servicios.features[2] }
							features={ cleanServicios[2].description }
						/>
						<ServicesCard delay={ cleanServicios[3].delay }
							bkg='https://res.cloudinary.com/bratic-app/image/upload/v1614508328/illustration-formation.svg'
							specialClass='formacion'
							title={ servicios.features[3] }
							features={ cleanServicios[3].description } />
					</>
				}
			</div>
		</section>
	)
}

export default Services
