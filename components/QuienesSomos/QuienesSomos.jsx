import React from 'react'

const QuienesSomos = () => {
	let quienesSomosImage = 'https://res.cloudinary.com/bratic-app/image/upload/v1614428249/quienes-somos.png'
	return (
		<section id='quienes-somos' className='bratic-container'>
			<article className='left'>
				<h2>
					Quiénes Somos
					<img src={quienesSomosImage} alt='' />
				</h2>
			</article>
			<article className='right'>
				<p>
					BRATIC Consultoría Digital nace en un momento clave en que las empresas y sus miembros deben dar el paso hacia la Transformación Digital, en un mundo cada vez más conectado. Nacida de una
					doble experiencia en dos sectores que ahora se unen más que nunca: <span className='red'>INDUSTRIAL</span> y <span className='orange'>DIGITAL</span>.
				</p>
				<p>
					Somos un equipo multidisciplinar de profesionales con amplia experiencia en ambos mundos, en continua formación para ayudar a las empresas a dar el salto hacia la digitalización. Y además
					contamos con socios tecnológicos de referencia.
				</p>
				<p>BRATIC surge de empresas industriales para empresas industriales, de pymes para pymes, de personas para personas.</p>
				<p>La experiencia de siempre, con la innovación tecnológica, formando la industria de mañana.</p>
				<h3 className='red'>¿A dónde vamos?</h3>
				<p>Nuestra misión es acompañar a las empresas en los retos de la cuarta Revolución Industrial. Dar soluciones innovadoras a problemas reales.</p>
				<p className='orange'>En BRATIC somos expertos en las últimas tecnologías...</p>
				<p>Las nuevas tecnologías permiten la optimización de procesos productivos con un aumento significativo de la eficiencia a través de numerosas tecnologías habilitadoras.</p>
				<p className='orange'>...y hablamos tu idioma, entendemos tus problemas.</p>
				<p>Porque venimos de tu mundo, de las Empresas Industriales.</p>
			</article>
		</section>
	)
}

export default QuienesSomos
