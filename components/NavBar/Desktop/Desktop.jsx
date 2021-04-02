import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Desktop = ({ company }) => {
    return (
        <article className='desktop-nav'>

            <ul className='normal'>
                <li>
                    <Link href='/#quienes-somos'>
                        <a>Quiénes Somos</a>
                    </Link>
                </li>
                <li>
                    <Link href='/servicios'>
                        <a>Servicios</a>
                    </Link>
                </li>
            </ul>
            <ul className='important'>
                <li>
                    <Link href='/#contacto'>
                        <a>Contacto</a>
                    </Link>
                </li>
                <a href={ company.companyFetched.linkedin } className='rrss-icon' target='new'>
                    <FaLinkedin />
                </a>
            </ul>
        </article>
    )
}

export default Desktop
