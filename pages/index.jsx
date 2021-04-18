import { getCompany } from '../api/company'
import { getSection } from '../api/sections'
import Clientes from '../components/Clientes/Clientes'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Metodologia from '../components/Metodologia/Metodologia'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Services from '../components/Services/Services'
import BraticLayout from '../layout/BraticLayout'

const Home = ({ companyFetched, header, somos, servicios, contacto }) => {
	return (
		<BraticLayout>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content='bratic es una consultoría tecnológica que acompaña a las organizaciones en su transformación digital mediante tecnología, servicios de consultoría y optimización de procesos.' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property="og:title" content="bratic || Consultoría Digital" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content=" http://www.bratic.es/" />
				<meta property="og:description" content="bratic es una consultoría tecnológica que acompaña a las organizaciones en su transformación digital mediante tecnología, servicios de consultoría y optimización de procesos." />

				<title>bratic || Consultoría Digital</title>
			</Head>

			<a id='inicio'></a>
			<Header company={ companyFetched } header={ header } />
			<a id='quienes-somos'></a>
			<QuienesSomos somos={ somos } />
			<Services servicios={ servicios } />
			<a id='contacto'></a>
			<Contact contacto={ contacto } company={ companyFetched } />
		</BraticLayout>
	)
}

export const getServerSideProps = async () => {
	const [
		companyFetched,
		header,
		somos,
		servicios,
		contacto
	] = await Promise.all([
		getCompany(),
		getSection('6069bd8c7844ac00158eedbf'),
		getSection('6069c8097844ac00158eedc0'),
		getSection('6069cfec7844ac00158eedc1'),
		getSection('6069d3f47844ac00158eedc2')
	])
	return { props: { companyFetched, header, somos, servicios, contacto } }
}

export default Home

