import { getCompany } from '../api/company'
import { getSection } from '../api/sections'
import Clientes from '../components/Clientes/Clientes'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Metodologia from '../components/Metodologia/Metodologia'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Services from '../components/Services/Services'
import BraticLayout from '../layout/BraticLayout'

const Home = ({ companyFetched, header, somos }) => {
	return (
		<BraticLayout>
			<a id='inicio'></a>
			<Header company={ companyFetched } header={ header } />
			<a id='quienes-somos'></a>
			<QuienesSomos somos={ somos } />
			<Services />
			<a id='contacto'></a>
			<Contact company={ companyFetched } />
		</BraticLayout>
	)
}

export const getServerSideProps = async () => {
	const [companyFetched, header, somos] = await Promise.all([getCompany(), getSection('6069bd8c7844ac00158eedbf'), getSection('6069c8097844ac00158eedc0')])
	return { props: { companyFetched, header, somos } }
}

export default Home

