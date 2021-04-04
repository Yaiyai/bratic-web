import React, { useEffect, useState } from 'react'
import useWindowResize from '../../hook/useWindowResize'
import TrabajoCard from '../ui/TrabajoCard/TrabajoCard'

const ComoTrabajamos = ({ comoTrabajamos }) => {
	const size = useWindowResize()
	const [cleanServicios, setCleanServicios] = useState([])
	useEffect(() => {
		let allServices = comoTrabajamos.parsedText.__html.split('((TRABAJO))')
		console.log(allServices);
		let auxServices = []
		let time = 0
		let cleanElm = ''

		allServices.forEach((elm) => {
			if (size[0] > 768) {
				time += 250
			} else {
				time = 0
			}
			auxServices.push({ description: elm, delay: time })

		})
		setCleanServicios(auxServices)

	}, [size]);


	return (
		<section id='como-trabajamos' >
			<div className='bratic-container'>
				<h2>{ comoTrabajamos.title }</h2>
			</div>
			{cleanServicios.length > 0 &&
				<article className='trabajos bratic-container'>
					<TrabajoCard
						delay={ cleanServicios[0].delay }
						title={ comoTrabajamos.features[0] }
						trabajo={ cleanServicios[0].description }
						icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512145/illustration-entender_zyis0q.svg'
						specialClass='entender'
					/>
					<TrabajoCard
						delay={ cleanServicios[1].delay }
						title={ comoTrabajamos.features[1] }
						trabajo={ cleanServicios[1].description }
						icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-analize_ohgpno.svg'
						specialClass='analizar'
					/>
					<TrabajoCard
						delay={ cleanServicios[2].delay }
						title={ comoTrabajamos.features[2] }
						trabajo={ cleanServicios[2].description }
						icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-propose_saumf7.svg'
						specialClass='proponer'
					/>
					<TrabajoCard
						delay={ cleanServicios[3].delay }
						title={ comoTrabajamos.features[3] }
						trabajo={ cleanServicios[3].description }
						icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-validate_bjlnjy.svg'
						specialClass='validar'
					/>
				</article>
			}
		</section>
	)
}

export default ComoTrabajamos
