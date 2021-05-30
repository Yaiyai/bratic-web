import Link from 'next/link';
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";

const Desktop = ({ company }) => {
    const [active, setActive] = useState('home')
    return (
        <article className='desktop-nav'>

            <ul className='normal'>
                <li>
                    <Link href='/#quienes-somos'>
                        <a className={ active === 'home' ? 'active' : null } onClick={ () => setActive('home') }>Quiénes Somos</a>
                    </Link>
                </li>
                <li>
                    <Link href='/servicios'>
                        <a className={ active === 'servicios' ? 'active' : null } onClick={ () => setActive('servicios') }>Servicios</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        <a className={ active === 'blog' ? 'active' : null } onClick={ () => setActive('blog') }>Blog</a>
                    </Link>
                </li>
            </ul>
            <ul className='important'>
                <li>
                    <Link href='/#contacto'>
                        <a>Contacto</a>
                    </Link>
                </li>
                <a href={ company?.companyFetched?.linkedin } className='rrss-icon' target='new'>
                    <FaLinkedin />
                </a>
            </ul>
        </article>
    )
}

export default Desktop
