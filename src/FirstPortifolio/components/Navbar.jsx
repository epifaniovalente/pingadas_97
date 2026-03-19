import { FaAddressCard, FaCode, FaMailBulk, FaUserCircle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

export default function Navbar() {

    return (
        <nav className="max-w-3xl fixed top-6 m-auto sm:block hidden border border-blue-900 p-4 rounded-3xl shadow-md shadow-indigo-500/50" style={{ background: '#020024' }}>
            <ul className="flex justify-between gap-6 items-center ">
                <li className="flex gap-2 items-center group bg-linear-to-r from-indigo-500 to-indigo-500/50  rounded-2xl px-2">
                    <FaUserCircle className="text-indigo-300 transition duration-300 ease-in-out" />
                    <a href="#home" className="text-blue-200/80 text-white transition duration-300 ease-in-out">Home</a>
                </li>
                <li className="flex gap-2 items-center group hover:bg-linear-to-r hover:from-indigo-500 hover:to-indigo-500/50  rounded-2xl px-2">
                    <FaAddressCard className="text-indigo-600 group-hover:text-indigo-200 transition duration-300 ease-in-out" />
                    <a href="#about" className="text-blue-200/80 group-hover:text-white transition duration-300 ease-in-out">Sobre</a>
                </li>
                <li className="flex gap-2 items-center group hover:bg-linear-to-r hover:from-indigo-500 hover:to-indigo-500/50  rounded-2xl px-2">
                    <FaFolderOpen className="text-indigo-600 group-hover:text-indigo-200 transition duration-300 ease-in-out" />
                    <a href="#project" className="text-blue-200/80 group-hover:text-white transition duration-300 ease-in-out">Projectos</a>
                </li>
                <li className="flex gap-2 items-center group hover:bg-linear-to-r hover:from-indigo-500 hover:to-indigo-500/50  rounded-2xl px-2">
                    <FaCode className="text-indigo-600 group-hover:text-indigo-200 transition duration-300 ease-in-out" />
                    <a href="#service" className="text-blue-200/80 group-hover:text-white transition duration-300 ease-in-out">Serviços</a>
                </li>
                <li className="flex gap-2 items-center group hover:bg-linear-to-r hover:from-indigo-500 hover:to-indigo-500/50  rounded-2xl px-2">
                    <FaMailBulk className="text-indigo-600 group-hover:text-indigo-200 transition duration-300 ease-in-out" />
                    <a href="#contact" className="text-blue-200/80 group-hover:text-white transition duration-300 ease-in-out">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}