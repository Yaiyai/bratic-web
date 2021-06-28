import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaEye } from 'react-icons/fa'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand
import SocialShare from '../SocialShare/SocialShare'
import { cutContent } from '../../../helpers/cleanContent'
dayjs.locale('es')

const FirstPost = ({ firstPost }) => {
    const [builtUrl, setBuiltUrl] = useState()

    useEffect(() => setBuiltUrl(window.location.href), [])

    return (
        <>
            <article className="first-post">
                <figure className="left">
                    <img src={ firstPost?.content.image[0].image } alt="" />
                    <Link href={ `/blog/${firstPost?.slug}` }>
                        <span>Ver publicación <FaEye /></span>
                    </Link>
                </figure>
                <div className="right">
                    <div className="fix">
                        <div className="cat-date">
                            { firstPost?.categories?.length > 0 && (
                                <div className="categories">
                                    {
                                        firstPost?.categories?.map(cat => <p key={ cat }>{ cat }</p>)
                                    }
                                </div>
                            ) }
                            <p>{ firstPost?.postDate ? dayjs(firstPost?.postDate).format('DD/MM/YYYY') : dayjs(firstPost?.createdAt).format('DD/MM/YYYY') }</p>
                        </div>
                        <h2>{ firstPost?.title }</h2>
                    </div>
                    <div className="fix">
                        <p className="excerpt">{ cutContent(firstPost?.content.text[0].text) }</p>
                        <div className="social-and-btn">
                            <SocialShare type="horizontal" url={ `/${firstPost?.slug}` } />
                            <Link href={ `/blog/${firstPost?.slug}` }>
                                <span className="my-btn-more">Leer <FaChevronRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default FirstPost
