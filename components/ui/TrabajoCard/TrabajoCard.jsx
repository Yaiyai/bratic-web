import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const TrabajoCard = ({ title, icon, problem, solution, specialClass }) => {
	let iconCard = {
		backgroundImage: `url(${icon})`,
	}

	return (
		<article className='each-trabajo'>
			<span style={iconCard} className={specialClass}></span>
			<h3>{title}</h3>
			<p>{problem}</p>
			<FontAwesomeIcon icon={faChevronDown} />
			<p>{solution}</p>
		</article>
	)
}

export default TrabajoCard
