import { getCompany } from '../api/company'
import BraticLayout from '../layout/BraticLayout'

const Home = () => {
	return <BraticLayout></BraticLayout>
}

export const getServerSideProps = async () => {
	const companyFetched = await getCompany()

	return { props: { companyFetched } }
}

export default Home
