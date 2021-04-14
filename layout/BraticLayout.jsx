import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { CompanyContext } from '../context/CompanyContext'
import { useContext } from 'react'

const BraticLayout = (props) => {
	const { children } = props
	const companyFetched = useContext(CompanyContext)
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content='Consultoría Digital. Tu PARTNER DIGITAL' />
				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<title>bratic || Consultoría Digital</title>
			</Head>
			<NavBar company={ companyFetched } />
			<main>{ children }</main>
			<Footer company={ companyFetched } />
		</>
	)
}

export default BraticLayout
