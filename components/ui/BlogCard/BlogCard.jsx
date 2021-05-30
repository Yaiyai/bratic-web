import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import SocialShare from '../SocialShare/SocialShare'

dayjs.locale('es')


const BlogCard = ({ post }) => {
    const [builtUrl, setBuiltUrl] = useState()

    useEffect(() => setBuiltUrl(window.location.href), [])


    return (
        <Link href={ `/blog/${post?.slug}` }>
            <article className="each-post">
                <figure className="top">
                    <img src={ post.content.image[0].image } alt={ post.title } />
                    <span>Ver publicación <FaEye /></span>
                </figure>
                <div className="bottom">
                    <div className="fix">
                        <div className="cat-date">
                            { post?.categories?.length > 0 && (
                                <div className="categories">
                                    {
                                        post?.categories?.map(cat => <p key={ cat }>{ cat }</p>)
                                    }
                                </div>
                            ) }
                            <p>{ post?.postDate ? dayjs(post?.postDate).format('DD/MM/YYYY') : dayjs(post?.createdAt).format('DD/MM/YYYY') }</p>
                        </div>
                        <h2>{ post?.title }</h2>
                    </div>
                    <div className="fix">
                        <div className="excerpt" dangerouslySetInnerHTML={ post?.content.text[0].parsedText }></div>
                        <SocialShare type="horizontal" url={ `/${post?.slug}` } />
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default BlogCard
