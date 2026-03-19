import { FaBars } from "react-icons/fa";
import Button from "./Button";
import Navbar from "./Navbar";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Header() {
    const [open, setOpen] = useState(false)

    const links = [
        { href: "#about", label: "Sobre" },
        { href: "#about", label: "Projecto" },
        { href: "#about", label: "Contacto" }
    ]

    return (
        <header className="relative flex items-center justify-between z-10 bg-transparent">
            <h1 className="text-indigo-400 text-lg fixed top-6 left-4 sm:hidden">
                Portifólio
            </h1>
            <motion.section
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .4 }}
                className="flex-1 flex items-center justify-center">
                <Navbar />
            </motion.section>

            {/* <Button onClick={()=>setOpen(!open)} 
            text={<FaBars />} 
            color="text-white text-lg fixed top-6 right-4 md:hidden" /> */}
            <button type="button" onClick={() => setOpen(!open)}>
                {!open ? <FaBars className="text-white text-lg fixed top-6 right-4 sm:hidden" /> : <span className="text-white text-lg fixed top-6 right-4 md:hidden">X</span>}
            </button>
            {open &&
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .4 }}
                    className="sm:hidden max-w-5xl rounded-2xl bg-transparent text-blue-300 backdrop-blur-xl ring-1  p-4 flex flex-col gap-3 right-0 left-0 top-16 fixed"
                >
                    {links.map((link) => (
                        <a href={link.href} key={link.href} className="text-sm font-medium py-2 px-3 rounded-xl hover:bg-card/50">
                            {link.label}
                        </a>
                    ))}


                </motion.nav>
            }
        </header>
    )
}