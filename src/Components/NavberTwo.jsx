
import { NavLink } from 'react-router-dom';

const NavberTwo = () => {
    return (
        <div className=' py-5 bg-[#3559E0]'>
            <div className=' container flex justify-between mx-auto'>
                <div className=' '><a className=' flex uppercase text-3xl font-bold text-[#5F0F40]' href="#">Logo</a></div>
                <div className=' flex' >
                    <ul className=' flex justify-end gap-5 items-center'>
                        <li><NavLink className={({ isActive}) => isActive ?  "text-2xl text-red-600 font-bold border-solid border-b-4 border-red-700" : "text-2xl text-white"} to="/layoutTwo/help">Help</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "text-2xl text-red-600 font-bold border-solid border-b-4 border-red-700" : "text-2xl text-white"} to="/layoutTwo/blog">Blog</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "text-2xl text-red-600 font-bold border-solid border-b-4 border-red-700" : "text-2xl text-white"} to="/layoutTwo/featurs">Featuirs</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive? "text-2xl text-red-600 font-bold border-solid border-b-4 border-red-700":"text-2xl text-white" } to="/">LayoutOne</NavLink></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavberTwo;