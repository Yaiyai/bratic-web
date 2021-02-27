import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const ServicesCard = ({ bkg, features, title, especialClass }) => {
	let imageCard = {
		backgroundImage: `url(${bkg})`,
	}
	return (
		<article style={imageCard} className={'servicios-card ' + especialClass}>
			<h3>{title}</h3>
			<ul>
				{features?.map((ft, idx) => (
					<li key={idx}>
						<FontAwesomeIcon icon={faCheckCircle} />
						{ft}
					</li>
				))}
			</ul>
		</article>
	)
}

export default ServicesCard
