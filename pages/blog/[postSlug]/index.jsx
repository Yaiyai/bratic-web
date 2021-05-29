import React, { useCallback, useEffect, useState } from 'react'
import { getCompany } from '../../../api/company'
import { getPostBySlug } from '../../../api/publications'

import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand
import { PhotoSwipeGallery } from 'react-photoswiper'
SwiperCore.use([Autoplay, Pagination])

dayjs.locale('es')


const SinglePost = ({ post }) => {
    const [items, setItems] = useState([])

    const cleanImages = useCallback(() => {
        if (post?.isGallery) {
            post?.content?.image.forEach((elm) => {
                setItems(items => [...items, {
                    src: elm.image,
                    thumbnail: getThumbnails(elm.image),
                    w: 1200,
                    h: 900,
                }])
            })
        }
    }, [post])

    useEffect(() => {
        cleanImages()
    }, [cleanImages])


    const getThumbnails = (str) => {
        let splitStr = str.split('upload/')
        let newStr = 'upload/w_200/'
        return `${splitStr[0]}${newStr}${splitStr[1]}`
    }

    const getThumbnailContent = (item) => {
        return (
            <img src={ item.thumbnail } alt='' />
        )
    }

    return (
        <section className="single-post">
            <div className="post-title bratic-container">
                <h1>{ post?.title }</h1>
                <div className="date-cat">
                    { post?.categories.length > 0 && (
                        <div className="categories">
                            {
                                post?.categories?.map(cat => (
                                    <small key={ cat }>{ cat }</small>
                                ))
                            }
                        </div>
                    ) }
                    { post?.categories.length > 0 && <span className="separator"> · </span> }
                    {
                        post?.postDate ? <small>{ dayjs(post?.postDate).format('DD/MM/YYYY') }</small> : <small>{ dayjs(post?.createdAt).format('DD/MM/YYYY') }</small>
                    }
                </div>
            </div>
            { post?.content?.image.length > 0 && (
                <figure className="main-image">
                    <img key={ post?.content.image[0]._id } src={ post?.content.image[0].image } alt='' />
                </figure>
            ) }
            { }
            <div className="app-container bratic-container">
                { post?.subtitle && <h2>{ post?.subtitle }</h2> }
                { post?.content?.text?.length > 0 && (
                    post?.content?.text?.map((txt, idx) => (
                        <div className='post-text' key={ txt._id } dangerouslySetInnerHTML={ txt.parsedText }></div>
                    ))
                ) }
                { post?.isSlider && (
                    <Swiper
                        spaceBetween={ 16 }
                        autoplay={ {
                            delay: 2500,
                        } }
                        slidesPerView={ 3 }
                    >
                        { post?.content?.image.map((picture, idx) => (
                            <SwiperSlide key={ idx }>
                                <img src={ picture.image } alt='' />
                            </SwiperSlide>
                        )) }
                    </Swiper>
                ) }
                {
                    post?.isGallery && (
                        items?.length > 0 && (
                            <PhotoSwipeGallery items={ items } thumbnailContent={ getThumbnailContent } />
                        )
                    )
                }


            </div>
        </section>
    )
}
export const getServerSideProps = async ({ query }) => {
    const [companyFetched, post] = await Promise.all([
        getCompany(),
        getPostBySlug(query.postSlug)
    ])

    if (post.redirect) {
        return {
            redirect: {
                destination: `/blog/${post.post[0].slug}`,
                statusCode: 301,
            }
        }
    }
    return { props: { companyFetched, post: post.post[0] } }
}

export default SinglePost
