import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-[#0f0c29] py-4 px-6 text-center">
            <p className="text-gray-400 text-sm pb-12">
                © {currentYear} <span className="text-white">Klodiana Mazrekaj</span>
            </p>
        </footer>
    )
}

export default Footer