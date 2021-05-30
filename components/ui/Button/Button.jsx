import React from 'react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const Button = ({ link = false, type, text }) => {
	return (
		<>
			{type === 'primary' && (
				link ? (
					<Link href={ link }>
						<a className='my-btn'>{ text } <FaChevronRight /></a>
					</Link>
				) : (
					<button className='my-btn'>{ text } <FaChevronRight /></button>

				)
			) }
			{type === 'secondary' && (
				link ? (<Link href={ link }>
					<a className='my-btn secondary'>{ text } <FaChevronRight /></a>
				</Link>) : (
					<button className='my-btn secondary'>{ text } <FaChevronRight /></button>

				)
			) }
			{type === 'more' && (
				link ? (
					<Link href={ link }>
						<a className='my-btn-more'>Saber más <FaChevronRight /></a>
					</Link>
				) : (
					<button className='my-btn-more'>Saber más <FaChevronRight /></button>

				)
			) }
		</>
	)
}

export default Button
