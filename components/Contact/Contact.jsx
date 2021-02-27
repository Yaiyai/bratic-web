import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
const Contact = ({ company }) => {
	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm(process.env.serviceEmail, process.env.templateEmail, e.target, process.env.userEmail)
			.then((result) =>
				Swal.fire({
					title: '¡Gracias!',
					html: 'Tu consulta ha sido enviada',
					confirmButtonText: 'Cerrar',
				})
			)
			.catch((error) => console.log(error.text))
	}

	return (
		<>
			<section className='contact'>
				<div className='bratic-container'>
					<article className='left'>
						<p className='pre-title'>¿Tienes alguna duda o necesitas ayuda?</p>
						<h2>Contáctanos</h2>
						<p>
							Gracias por su interés en <span className='red'>Bratic</span>.
						</p>
						<p>Puedes ponerte en contacto con nuestro equipo de expertos utilizando los siguiente medios:</p>
						<ul>
							<li>
								<FontAwesomeIcon icon={faEnvelope} />
								<span className='red'>Email:</span> {company?.mainEmail}
							</li>
							<li>
								<FontAwesomeIcon icon={faPhone} />
								<span className='red'>Teléfono:</span>
								{company?.phone}
							</li>
							<li>
								<FontAwesomeIcon icon={faMapMarkerAlt} />
								<span className='red'>Oficina:</span> {company?.address}
							</li>
							<li>
								<FontAwesomeIcon icon={faClock} />
								<span className='red'>Horarios:</span> Estamos disponibles de 08:00h a 19:00h
							</li>
						</ul>
					</article>
					<article className='right'>
						<form onSubmit={sendEmail}>
							<input type='text' name='name' />
							<input type='email' name='email' />
							<input type='text' name='company' />
							<input type='phone' name='phone' />
							<input type='text' name='message' />
							<input type='submit' />
						</form>
					</article>
				</div>
			</section>
		</>
	)
}

export default Contact
