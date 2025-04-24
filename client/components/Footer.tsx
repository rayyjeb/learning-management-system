import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; 2024 LMS. All Rights reserved</p>
            <div className='footer__links'>
                {['About', 'Privacy Policy', 'Licensing', 'Contact'].map((item, index) => (
                    <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className='footer__link' >{item}</Link>
                ))}
            </div>
        </div>
    )
}

export default Footer
