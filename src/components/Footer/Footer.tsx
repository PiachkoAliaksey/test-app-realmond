import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <p>&copy; 2025 Media Search App. All rights reserved. </p>
            <p>Created by <Link className='hover:text-red-600 transition' href={'https://github.com/PiachkoAliaksey'} >Piachko Aliaxei</Link></p>
        </footer>
    )
}

export default Footer