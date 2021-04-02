import React, { useEffect, useState } from 'react'
import useWindowResize from '../../hook/useWindowResize'
import TrabajoCard from '../ui/TrabajoCard/TrabajoCard'

const ComoTrabajamos = () => {
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
		<section id='como-trabajamos' >
			<div className='bratic-container'>
				<h2>¿Cómo trabajamos?</h2>
			</div>
			<article className='trabajos bratic-container'>
				<TrabajoCard
					delay={ delays.first }
					title='1. Entender'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512145/illustration-entender_zyis0q.svg'
					problem='Entender las necesidades de la Empresa, su encaje en el plan de transformación global.'
					solution='Comunicación con la empresa y sus miembros.'
					specialClass='entender'
				/>
				<TrabajoCard
					delay={ delays.second }
					title='2. Analizar'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-analize_ohgpno.svg'
					problem='Analizar cada necesidad a fin de encontrar una solución innovadora.'
					solution='Análisis de la información obtenida en el contexto de soluciones concretas a implementar.'
					specialClass='analizar'
				/>
				<TrabajoCard
					delay={ delays.third }
					title='3. Proponer'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-propose_saumf7.svg'
					problem='Proponer el plan de transformación con soluciones viables.'
					solution='Descripción de las soluciones, y estimación económica de su ejecución.'
					specialClass='proponer'
				/>
				<TrabajoCard
					delay={ delays.fourth }
					title='4. Validar'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-validate_bjlnjy.svg'
					problem='Validación del Plan de Transformación Digital y selección de Proyectos.'
					solution=' ¡PUESTA EN MARCHA!'
					specialClass='validar'
				/>
			</article>
		</section>
	)
}

export default ComoTrabajamos
