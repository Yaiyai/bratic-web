import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Mobile = ({ company, menuHeight }) => {
    const [showMenu, setShowMenu] = useState(false)
    const subMenu = useRef()

    const manageNav = () => {
        setShowMenu(!showMenu)
        const bodyContainer = document.querySelector('body')
        bodyContainer.classList.toggle('no-scroll')
        subMenu.current.setAttribute('style', `top: ${menuHeight}px`)
    }

    return (
        <div className="mobile-nav">
            <Link href='/#contacto'>
                <a className="contact-btn">Contacto</a>
            </Link>
            {!showMenu ? <HiMenuAlt3 className="menu-btn" onClick={ () => manageNav() } /> : <HiX className="menu-btn" onClick={ () => manageNav() } /> }
            <div ref={ subMenu } className={ showMenu ? `sub-menu show` : 'sub-menu' }>
                <ul>
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
                    <li>
                        <a href={ company.companyFetched.linkedin } className='rrss-icon' target='new'>
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Mobile
