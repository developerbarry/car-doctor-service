import { Link } from "react-router-dom";
import Logo from '../../../assets/logo.svg';


const Header = () => {
    return (


        <header className="bg-white fixed w-full z-20 top-0 start-0 border-b">
            <div className="container flex flex-wrap items-center justify-between mx-auto px-4 md:px-12 lg:px-24 py-4">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-16" alt="Logo"/>
                        
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-[#FF3811] border border-[#FF3811] focus:ring-1 focus:outline-none focus:ring-[#FF3811] font-medium rounded text-sm px-4 py-2.5 text-center font-inter">Appointment</button>
                    <button data-collapse-toggle="divbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#444444] hover:text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#444444] hover:bg-[#444444] focus:ring-[#444444]" aria-controls="navbar-sticky" aria-expanded="false">
                        {/* <span className="sr-only">Open main menu</span> */}
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:text-[#FF3811] md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Header;