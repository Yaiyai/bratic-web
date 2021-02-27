import React from 'react'
import Link from 'next/link'

const Button = ({ link, type, text }) => {
	return (
		<>
			{type === 'primary' && (
				<Link href={link}>
					<a className='my-btn'>{text}</a>
				</Link>
			)}
			{type === 'secondary' && (
				<Link href={link}>
					<a className='my-btn secondary'>{text}</a>
				</Link>
			)}
			{type === 'more' && (
				<Link href={link}>
					<a className='my-btn-more'>Saber más</a>
				</Link>
			)}
		</>
	)
}

export default Button
