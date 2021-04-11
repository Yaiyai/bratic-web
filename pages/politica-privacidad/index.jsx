import React from 'react'
import { getCompany } from '../../api/company'
import { getSection } from '../../api/sections'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import BraticLayout from '../../layout/BraticLayout'


const PoliticaPrivacidadPage = ({ privacidad }) => {
    return (
        <BraticLayout>
            <PageHeader title={ privacidad.title } bkg={ privacidad.uniqueImage } />

            <div className="bratic-container legal-page" dangerouslySetInnerHTML={ privacidad.parsedText }></div>
        </BraticLayout>
    )
}
export const getServerSideProps = async () => {
    const [companyFetched, privacidad] = await Promise.all([getCompany(), getSection('6072d53684e6fd0015c1ba90')])

    return { props: { companyFetched, privacidad } }
}

export default PoliticaPrivacidadPage
