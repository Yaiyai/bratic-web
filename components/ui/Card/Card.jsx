import React from 'react'
import Button from '../Button/Button'

const Card = ({ title, text, link }) => {
	return (
		<article className='each-card'>
			<div className='fix'>
				<p className='title'>{title}</p>
				<p className='text'>{text}</p>
			</div>
			<Button link={link} text='Saber más' type='more' />
		</article>
	)
}

export default Card
