import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="bg-blue-700 text-white p-4 shadow">
            <div className="max-w-7x1 mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold"> MypeFreemium
                    <ul className="flex space-x-4">
                        <li><link to="/inicio" className="hover:underline">Inicio</link></li>
                        <li><link to="/productos" className="hover:underline">Productos</link></li>
                        <li><link to="/boletas" className="hover:underline">Boletas</link></li>
                        <li><link to="/reportes" className="hover:underline">Reportes</link></li>
                    </ul>
                </h1>
            </div>
        </nav>
    )
}