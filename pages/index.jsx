import { getCompany } from '../api/company'
import Clientes from '../components/Clientes/Clientes'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Metodologia from '../components/Metodologia/Metodologia'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Services from '../components/Services/Services'
import BraticLayout from '../layout/BraticLayout'

const Home = ({ companyFetched }) => {
	return (
		<BraticLayout>
			<a id='inicio'></a>
			<Header company={ companyFetched } />
			<a id='quienes-somos'></a>
			<QuienesSomos />
			<Services />
			<a id='contacto'></a>
			<Contact company={ companyFetched } />
		</BraticLayout>
	)
}

export const getServerSideProps = async () => {
	const companyFetched = await getCompany()

	return { props: { companyFetched } }
}

export default Home
