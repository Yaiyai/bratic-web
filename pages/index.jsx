import { getCompany } from '../api/company'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import BraticLayout from '../layout/BraticLayout'

const Home = ({ companyFetched }) => {
	return (
		<BraticLayout>
			<Header company={companyFetched} />
			<Services />
		</BraticLayout>
	)
}

export const getServerSideProps = async () => {
	const companyFetched = await getCompany()

	return { props: { companyFetched } }
}

export default Home
