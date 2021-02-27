import React from 'react'
import Link from 'next/link'

const Card = ({ title, text, link }) => {
	return (
		<article className='each-card'>
			<div>
				<p className='title'>{title}</p>
				<p className='text'>{text}</p>
			</div>
			<Link href={link}>
				<a className='my-btn-more'>Saber más</a>
			</Link>
		</article>
	)
}

export default Card
