import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function Navbar() {
    const links = [
        { href: "#sobre", label: "Sobre" },
        { href: "#projecto", label: "Projecto" },
        { href: "#contacto", label: "Contacto" }
    ]

    const navLinks =[
        
    ]

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, ease: [.2, 0, 0, 1] }}
            className="top-0 left-0 right-0 z-50 px-4 sm:px-3 py-3 sm:py-4 fixed "
        >
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl  backdrop-blur-xl ring-1 ring-gray-900 text-white">
                <button className="text-sm font-semibold tracking-wide">
                    Dev<span className="text-blue-400">.</span>portifolio
                </button>

                <div className=" hidden sm:flex items-center gap-6 text-gray-400">

                    {links.map((link) => (
                        <a href={link.href} key={link.href} className="text-xs font-medium duration-200 uppercase tracking-wider">
                            {link.label}
                        </a>
                    ))}
                </div>

                <button type="button" onClick={(e) => setMenuOpen(!menuOpen)} className="sm:hidden p-1.5 rounded-lg text-white text-2xl cursor-pointer">
                    {menuOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    }
                </button>

                {menuOpen &&
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .2 }}
                        className="sm:hidden max-w-5xl rounded-2xl bg-slate-950 text-blue-400 backdrop-blur-xl ring-1 p-4 flex flex-col gap-3 absolute right-0 left-0 top-16"
                    >
                        {links.map((link) => (
                            <a href={link.href} key={link.href} onClick={(e) => { menuOpen && setMenuOpen(!menuOpen) }}>
                                {link.label}
                            </a>
                        ))}

                    </motion.div>

                }
            </nav>

        </motion.header>
    )

}