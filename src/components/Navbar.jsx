import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to='/' className="uppercase w-32 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">Samir Sadek</p>

            </NavLink>
            <nav className="flex text-lg gap-7 font-medium ">
                <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
                <NavLink to='/projects' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>Contact</NavLink>

            </nav>
        </header>
    );
};

export default Navbar;