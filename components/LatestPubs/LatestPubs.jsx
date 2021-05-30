import React from 'react'
import BlogCard from '../ui/BlogCard/BlogCard'
import Button from '../ui/Button/Button'

const LatestPubs = ({ pubs }) => {
    return (
        pubs.length > 0 && (
            <section className="latest-pubs bratic-container">
                <h2>Últimas publicaciones</h2>
                {
                    pubs?.length > 0 && (
                        <div className="pubs">
                            {
                                pubs.map(post => (
                                    <BlogCard post={ post } key={ post._id } />
                                ))
                            }
                        </div>
                    )
                }
                <Button type="primary" text="Ir al blog" link="/blog" />
            </section>
        )
    )
}

export default LatestPubs
