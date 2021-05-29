import Head from 'next/head'
import React from 'react'
import { getCompany } from '../../api/company'
import { getSection } from '../../api/sections'
import PageHeader from '../../components/ui/PageHeader/PageHeader'


const PoliticaPrivacidadPage = ({ privacidad }) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Política de Privacidad Bratic' />
                <meta name='robots' content='noindex, nofollow' />
                <meta name='googlebot' content='noindex, nofollow' />
                <meta name='bingbot' content='noindex, nofollow' />
                <title>bratic || Política de Privacidad</title>
            </Head>

            <PageHeader title={ privacidad.title } bkg={ privacidad.uniqueImage } />

            <div className="bratic-container legal-page" dangerouslySetInnerHTML={ privacidad.parsedText }></div>
        </>
    )
}
export const getServerSideProps = async () => {
    const [companyFetched, privacidad] = await Promise.all([getCompany(), getSection('6072d53684e6fd0015c1ba90')])

    return { props: { companyFetched, privacidad } }
}

export default PoliticaPrivacidadPage
