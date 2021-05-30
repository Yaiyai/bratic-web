import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getCompany } from '../../api/company'
import { getMorePublications, getPublications } from '../../api/publications'
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaEye, FaSearch } from "react-icons/fa";

import BlogCard from '../../components/ui/BlogCard/BlogCard'
import Button from '../../components/ui/Button/Button'
import useForm from '../../hook/useForm'
import FirstPost from '../../components/ui/FirstPost/FirstPost'



const BlogPage = ({ publications, companyFetched }) => {
    const { categories } = companyFetched
    const [posts, setPosts] = useState({})
    const { values, handleInputChange, resetForm } = useForm()
    const searchInput = useRef()
    const [isSearching, setIsSearching] = useState(false)
    const [morePubs, setMorePubs] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.search) {
            searchPost(values.search)
            resetForm()
            searchInput.current.value = ''
            setIsSearching(true)
        }
    }
    const handleKeySubmit = (e) => {
        if (event.key === 'Enter') {
            handleSubmit(e)
        }
    }

    useEffect(() => {
        publications.length > 5 && setMorePubs(true)
        setInitialPosts()
    }, [])

    const morePosts = async () => {
        let publicationsAux = [...publications].splice(posts.rest.length + 1, 4)
        publicationsAux.length < 4 && setMorePubs(false)
        setPosts(posts => ({ ...posts, rest: [...posts.rest, ...publicationsAux] }))
        setIsSearching(false)
    }

    const setInitialPosts = () => {
        let publicationsAux = [...publications].splice(0, 5)
        let firstAux = publicationsAux.shift()
        setPosts(posts => ({ firstPost: firstAux, rest: publicationsAux }))
        setIsSearching(false)
        publications.length > 5 && setMorePubs(true)
    }

    const filterPosts = ({ target }) => {
        if (target.value !== 'todas') {
            let publicationsAux = publications.filter(pub => pub.categories.length > 0 && pub.categories.includes(target.value))
            let firstAux = publicationsAux.shift()
            setPosts(posts => ({ rest: publicationsAux }))
        } else {
            setInitialPosts()
        }
    }

    const searchPost = (search) => {
        let cleanSearch = search.toLowerCase().trim()
        let publicationsAux = publications.filter(pub => {
            if (pub.title.toLowerCase().includes(cleanSearch)) {
                return pub
            }
        })
        setPosts(posts => ({ rest: publicationsAux }))
    }

    return (
        <>
            <Head>
                <meta name='description' content='Blog bratic Consultoría Digital' />

                <meta name='robots' content='noindex, nofollow' />
                <meta name='googlebot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
                <meta name='bingbot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

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
                                <option hidden defaultValue>Filtrar por categoría</option>
                                { categories?.length > 0 && categories?.map(cat => (<option value={ cat } key={ cat } >{ cat }</option>)) }
                                <option value="todas">Ver todas</option>
                            </select>
                            <FaChevronDown />
                        </div>
                        <div className="input-search">
                            <input name="search" ref={ searchInput } onChange={ handleInputChange } onKeyDown={ handleKeySubmit } type="text" placeholder="Buscar..." />
                            <FaSearch onClick={ handleSubmit } />
                        </div>
                    </div>
                </header>


                {
                    posts?.rest?.length > 0 ? (
                        <section className="blog-grid">
                            { isSearching && <button className="my-btn-back" onClick={ setInitialPosts }> <FaChevronLeft /> Volver</button> }

                            { posts?.firstPost && <FirstPost firstPost={ posts?.firstPost } /> }

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

                            { morePubs && !isSearching && <button className="my-btn primary" onClick={ morePosts }>Ver más <FaChevronRight /></button> }
                        </section>

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
