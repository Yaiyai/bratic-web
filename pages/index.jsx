import Head from 'next/head'
import { getCompany } from '../api/company'
import { getMorePublications } from '../api/publications'
import { getSection } from '../api/sections'
import Clientes from '../components/Clientes/Clientes'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import LatestPubs from '../components/LatestPubs/LatestPubs'
import Metodologia from '../components/Metodologia/Metodologia'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Services from '../components/Services/Services'

const Home = ({ companyFetched, header, somos, servicios, contacto, publicaciones }) => {
	return (
		<>
			<Head>
				<meta name='description' content='bratic es una consultoría tecnológica que acompaña a las organizaciones en su transformación digital mediante tecnología, servicios de consultoría y optimización de procesos.' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property="og:title" content="bratic || Consultoría Digital" />
				<meta property="og:url" content=" http://www.bratic.es/" />
				<meta property="og:type" content="web" />
				<meta property="og:description" content="bratic es una consultoría tecnológica que acompaña a las organizaciones en su transformación digital mediante tecnología, servicios de consultoría y optimización de procesos." />
				<link rel="canonical" href="http://www.bratic.es/"></link>

			</Head>

			<a id='inicio'></a>
			<Header company={ companyFetched } header={ header } />
			<a id='quienes-somos'></a>
			<QuienesSomos somos={ somos } />
			<Services servicios={ servicios } />
			<LatestPubs pubs={ publicaciones } />
			<a id='contacto'></a>
			<Contact contacto={ contacto } company={ companyFetched } />
		</>
	)
}

export const getServerSideProps = async () => {
	const [
		companyFetched,
		header,
		somos,
		servicios,
		contacto,
		publicaciones
	] = await Promise.all([
		getCompany(),
		getSection('6069bd8c7844ac00158eedbf'),
		getSection('6069c8097844ac00158eedc0'),
		getSection('6069cfec7844ac00158eedc1'),
		getSection('6069d3f47844ac00158eedc2'),
		getMorePublications()
	])
	return { props: { companyFetched, header, somos, servicios, contacto, publicaciones } }
}

export default Home

