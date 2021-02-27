import React from 'react'
import { getCompany } from '../../api/company'
import Contact from '../../components/Contact/Contact'
import Metodologia from '../../components/Metodologia/Metodologia'
import Services from '../../components/Services/ServicesPage/Services'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import BraticLayout from '../../layout/BraticLayout'

const ServiciosPage = ({ companyFetched }) => {
	return (
		<BraticLayout>
			<PageHeader bkg='https://res.cloudinary.com/bratic-app/image/upload/v1614445265/header-servicios.jpg' title='Servicios' />
			<section id='servicios-container'>
				<Services />
				<a id='metodologia' />
				<Metodologia />
				<Contact company={companyFetched} />
			</section>
		</BraticLayout>
	)
}

export const getServerSideProps = async () => {
	const companyFetched = await getCompany()

	return { props: { companyFetched } }
}

export default ServiciosPage
