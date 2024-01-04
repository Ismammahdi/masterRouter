
import { NavLink } from 'react-router-dom';

const NavberOne = () => {
    return (
        <div className=' py-5 bg-[#3559E0]'>
            <div className=' container flex justify-between mx-auto'>
                <div className=' '><a className=' flex uppercase text-3xl font-bold text-[#5F0F40]' href="#">Logo</a></div>
                <div className=' flex' >
                    <ul className=' flex justify-end gap-5 items-center'>
                        <li><NavLink className={({ isActive}) => isActive ? "text-2xl text-red-600 font-bold  border-solid border-b-4 border-red-700 " : "text-2xl text-white"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "text-2xl text-red-600 font-bold border-solid border-b-4 border-red-700" : "text-2xl text-white"} to="/about">about</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "text-2xl text-red-600 font-bold border-solid border-b-4 border-red-700" : "text-2xl text-white"} to="/contact">Content</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive ? "text-2xl text-red-600 font-bold  border-solid border-b-4 border-red-700" :"text-2xl text-white"} to="/layoutTwo">LayoutTwo</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavberOne;

