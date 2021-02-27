import React from 'react'

const PageHeader = ({ title, bkg }) => {
	let headerStyle = {
		backgroundImage: `url(${bkg})`,
		filter: `grayscale(100%)`,
	}
	return (
		<>
			<header style={headerStyle} className='page-header'>
				<div className='bratic-container'>
					<h2>{title}</h2>
				</div>
			</header>
		</>
	)
}

export default PageHeader
