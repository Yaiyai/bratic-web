import Head from 'next/head'
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

const ServiciosPage = ({ companyFetched, header, contacto, servicios, metodologia, comoTrabajamos, gestionAyudas }) => {
	return (
		<>

			<BraticLayout>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<meta name='description' content='Servicios bratic Consultoría Digital' />
					<meta name='robots' content='index, follow' />
					<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
					<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
					<meta property="og:title" content="bratic || Servicios" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content=" http://www.bratic.es/servicios" />
					<meta property="og:description" content="Servicios bratic Consultoría Digital" />
					<title>bratic || Servicios</title>
				</Head>


				<PageHeader bkg={ header.uniqueImage } title={ header.title } />
				<section id='servicios-container'>
					<Services servicios={ servicios } />
					<Metodologia metodologia={ metodologia } />
					<ComoTrabajamos comoTrabajamos={ comoTrabajamos } />
					<GestionAyudas gestionAyudas={ gestionAyudas } />
					<Contact contacto={ contacto } company={ companyFetched } />
				</section>
			</BraticLayout>
		</>
	)
}

export const getServerSideProps = async () => {
	const [companyFetched, header, contacto, servicios, metodologia, comoTrabajamos, gestionAyudas] = await Promise.all([
		getCompany(),
		getSection('6069d5237844ac00158eedc3'),
		getSection('6069d3f47844ac00158eedc2'),
		getSection('6069dfe9165c6f00159f27f0'),
		getSection('6069e314165c6f00159f27f1'),
		getSection('6069e633165c6f00159f27f2'),
		getSection('6069eb32165c6f00159f27f4')
	])
	return { props: { companyFetched, header, contacto, servicios, metodologia, comoTrabajamos, gestionAyudas } }
}

export default ServiciosPage
