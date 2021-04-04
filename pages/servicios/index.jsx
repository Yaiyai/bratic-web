import React from 'react'
import { getCompany } from '../../api/company'
import { getSection } from '../../api/sections'
import ComoTrabajamos from '../../components/ComoTrabajamos/ComoTrabajamos'
import Contact from '../../components/Contact/Contact'
import GestionAyudas from '../../components/GestionAyudas/GestionAyudas'
import Metodologia from '../../components/Metodologia/Metodologia'
import Services from '../../components/Services/ServicesPage/Services'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import BraticLayout from '../../layout/BraticLayout'

const ServiciosPage = ({ companyFetched, header, contacto, servicios }) => {
	return (
		<BraticLayout>
			<PageHeader bkg={ header.uniqueImage } title={ header.title } />
			<section id='servicios-container'>
				<Services servicios={ servicios } />
				<Metodologia />
				<ComoTrabajamos />
				<GestionAyudas />
				<Contact contacto={ contacto } company={ companyFetched } />
			</section>
		</BraticLayout>
	)
}

export const getServerSideProps = async () => {
	const [companyFetched, header, contacto, servicios] = await Promise.all([getCompany(), getSection('6069d5237844ac00158eedc3'), getSection('6069d3f47844ac00158eedc2'), getSection('6069dfe9165c6f00159f27f0')])
	console.log(servicios);

	return { props: { companyFetched, header, contacto, servicios } }
}

export default ServiciosPage
