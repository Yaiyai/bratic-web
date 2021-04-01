import React from 'react'
import TrabajoCard from '../ui/TrabajoCard/TrabajoCard'

const ComoTrabajamos = () => {
	return (
		<section id='como-trabajamos' className='bratic-container'>
			<h2>¿Cómo trabajamos?</h2>
			<article className='trabajos'>
				<TrabajoCard
					delay={ 0 }
					title='1. Entender'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512145/illustration-entender_zyis0q.svg'
					problem='Entender las necesidades de la Empresa, su encaje en el plan de transformación global.'
					solution='Comunicación con la empresa y sus miembros.'
					specialClass='entender'
				/>
				<TrabajoCard
					delay={ 250 }
					title='2. Analizar'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-analize_ohgpno.svg'
					problem='Analizar cada necesidad a fin de encontrar una solución innovadora.'
					solution='Análisis de la información obtenida en el contexto de soluciones concretas a implementar.'
					specialClass='analizar'
				/>
				<TrabajoCard
					delay={ 500 }
					title='3. Proponer'
					icon='https://res.cloudinary.com/bratic-app/image/upload/v1614512143/illustration-propose_saumf7.svg'
					problem='Proponer el plan de transformación con soluciones viables.'
					solution='Descripción de las soluciones, y estimación económica de su ejecución.'
					specialClass='proponer'
				/>
				<TrabajoCard
					delay={ 750 }
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
