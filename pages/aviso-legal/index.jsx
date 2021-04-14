import Head from 'next/head'
import React from 'react'
import { getCompany } from '../../api/company'
import { getSection } from '../../api/sections'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import BraticLayout from '../../layout/BraticLayout'

const TermsConditionsPage = ({ terminos }) => {
    return (
        <BraticLayout>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Aviso Legal Bratic' />
                <meta name='robots' content='noindex, nofollow' />
                <meta name='googlebot' content='noindex, nofollow' />
                <meta name='bingbot' content='noindex, nofollow' />
                <title>bratic || Aviso Legal</title>
            </Head>

            <PageHeader title={ terminos.title } bkg={ terminos.uniqueImage } />
            <div className="bratic-container legal-page" dangerouslySetInnerHTML={ terminos.parsedText }></div>
        </BraticLayout>
    )
}



export const getServerSideProps = async () => {
    const [companyFetched, terminos] = await Promise.all([getCompany(), getSection('6072d1dc84e6fd0015c1ba8e')])

    return { props: { companyFetched, terminos } }
}
export default TermsConditionsPage