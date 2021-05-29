import Head from 'next/head'
import React from 'react'
import { getCompany } from '../../api/company'

const BlogPage = () => {
    return (
        <>
            <Head>
                <meta name='description' content='Blog bratic Consultoría Digital' />

                <meta name='robots' content='index, follow' />
                <meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
                <meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

                <meta property="og:title" content="bratic || Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content=" http://www.bratic.es/blog" />
                <meta property="og:description" content="Blog bratic Consultoría Digital" />

                <title>bratic || Blog</title>
            </Head>




            soy el bloooooogr
        </>
    )
}
export const getServerSideProps = async () => {
    const [companyFetched] = await Promise.all([
        getCompany(),
    ])
    return { props: { companyFetched } }
}

export default BlogPage
