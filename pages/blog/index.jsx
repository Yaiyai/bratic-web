import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getCompany } from '../../api/company'
import { getPublications } from '../../api/publications'
import { FaChevronDown, FaEye, FaSearch } from "react-icons/fa";

import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand
import BlogCard from '../../components/ui/BlogCard/BlogCard'
import Button from '../../components/ui/Button/Button'

dayjs.locale('es')


const BlogPage = ({ publications, companyFetched }) => {
    const { categories } = companyFetched
    const [posts, setPosts] = useState({})

    useEffect(() => {
        setInitialPosts()
    }, [])

    const setInitialPosts = () => {
        let publicationsAux = [...publications]
        let firstAux = publicationsAux.shift()
        setPosts(posts => ({ firstPost: firstAux, rest: publicationsAux }))
    }

    const filterPosts = ({ target }) => {
        if (target.value !== 'todas') {
            let publicationsAux = publications.filter(pub => pub.categories.length > 0 && pub.categories.includes(target.value))
            let firstAux = publicationsAux.shift()
            setPosts(posts => ({ firstPost: firstAux, rest: publicationsAux }))
        } else {
            setInitialPosts()
        }
    }

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

            <div className="bratic-container">


                <header className="blog-header">
                    <h1>Publicaciones</h1>
                    <div>
                        <div className="select-input">
                            <select onChange={ filterPosts }>
                                <option hidden selected>Filtrar por categoría</option>
                                { categories?.length > 0 && categories?.map(cat => (<option value={ cat } key={ cat } >{ cat }</option>)) }
                                <option value="todas">Ver todas</option>
                            </select>
                            <FaChevronDown />
                        </div>
                        <div className="input-search">
                            <input type="text" placeholder="Buscar..." />
                            <FaSearch />
                        </div>
                    </div>
                </header>


                {
                    posts?.rest?.length > 0 ? (
                        <>
                            <Link href={ `/blog/${posts?.firstPost?.slug}` }>
                                <a className="first-post">
                                    <figure className="left">
                                        <img src={ posts?.firstPost?.content.image[0].image } alt="" />
                                        <span>Ver publicación <FaEye /></span>
                                    </figure>
                                    <div className="right">
                                        <div className="cat-date">
                                            { posts?.firstPost?.categories?.length > 0 && (
                                                <div className="categories">
                                                    {
                                                        posts?.firstPost?.categories?.map(cat => <p key={ cat }>{ cat }</p>)
                                                    }
                                                </div>
                                            ) }
                                            <p>{ posts?.firstPost?.postDate ? dayjs(posts?.firstPost?.postDate).format('DD/MM/YYYY') : dayjs(posts?.firstPost?.createdAt).format('DD/MM/YYYY') }</p>
                                        </div>
                                        <h2>{ posts?.firstPost?.title }</h2>
                                        <div className="excerpt" dangerouslySetInnerHTML={ posts?.firstPost?.content.text[0].parsedText }></div>
                                    </div>
                                </a>
                            </Link>
                            {
                                posts?.rest?.length > 0 && (
                                    <div className="all-posts">
                                        {
                                            posts.rest.map(post => (
                                                <BlogCard post={ post } key={ post._id } />
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </>

                    ) : (
                        <div className="error-blog">
                            <p className="error-text">No hay posts relacionados con tu búsqueda</p>
                            <button className="my-btn primary" onClick={ setInitialPosts }>Volver</button>
                        </div>
                    )
                }


            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const [companyFetched, publications] = await Promise.all([
        getCompany(),
        getPublications()
    ])

    return { props: { companyFetched, publications } }
}

export default BlogPage
