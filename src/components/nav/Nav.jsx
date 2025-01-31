import { Link, NavLink } from 'react-router';
import logo from './../../assets/images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../context_provider/Contexts';

const Nav = () => {
    const links = <>
        <li><NavLink to={'/news'}>News</NavLink></li>
        <li><NavLink to={'/destination'}>Destination</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    const { user, logout, isLoading } = useContext(AuthContext)
    if (isLoading) {
        return
    }
    const handleLogOut = () => {
        logout()
            .then(() => {
                alert('Logout successfully')
            }).catch(error => alert('error happened ' + error.message))
    }
    return (
        <div>
            <div className="navbar  shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}><img className='max-w-36 invert-100' src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <label className="input w-full backdrop-invert-25 text-white input-ghost border border-white">
                        <svg className="h-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow w-[20vw] placeholder:text-white" placeholder="Search your Destination..." />
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">

                        {links}

                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <p className='mx-2'>{user?.displayName || user?.email}</p>
                                <button onClick={handleLogOut} className="btn btn-warning">Logout</button>
                            </>
                            :
                            <NavLink to={'/login'} className="btn btn-warning">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;